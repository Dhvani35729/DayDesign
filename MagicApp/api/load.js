import {db, user} from './config';
import {
  getTaxPercentage,
  showUpdateMessage,
  showErrorMessage,
} from '../utils/index';
import AsyncStorage from '@react-native-community/async-storage';

async function fetchCurrentOrder (that) {
  uid = that.state.user.uid;
  fetch (
    'http://localhost:8000/api/users/' + uid.toString () + '/orders/current',
    {method: 'GET'}
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      if (that.state.currentOrder != null) {
        showUpdateMessage ('Order Updated!', 'bottom');
      }
      if (responseData['error'].code == 'CurrentOrderNotFound') {
        that.setState ({
          currentOrder: null,
        });
      } else {
        that.setState ({
          currentOrder: responseData,
        });
      }
    })
    .catch (error => {
      console.error (error);
      showErrorMessage (
        'Database error! Restart app...if problem persists, contact software.duomo@gmail.com',
        'top'
      );
    });
}

async function fetchRestaurants (that) {
  fetch ('http://localhost:8000/api/restaurants/hours/', {method: 'GET'})
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      if (that.state.allHours.length != 0) {
        showUpdateMessage ('Database Updated!', 'top');
      }

      const currentHour = new Date ().getHours ();
      currentHours = [];

      responseData['list'].forEach (hour => {
        if (parseInt (hour.key) >= currentHour) {
          currentHours.push (hour);
        }
      });

      that.setState ({
        allHours: responseData['list'],
        currentHours: currentHours,
        showHours: currentHours,
        loading: false,
        refreshing: false,
        showingPastHours: false,
      });
    })
    .catch (error => {
      console.error (error);
      showErrorMessage (
        'Database error! Restart app...if problem persists, contact software.duomo@gmail.com',
        'top'
      );
    });
}

async function fetchMenu (that, resId, hourId) {
  fetch (
    'http://localhost:8000/api/restaurant/' +
      resId +
      '/hours/' +
      hourId +
      '/menu/',
    {method: 'GET'}
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      if (that.state.menu.length != 0) {
        showUpdateMessage ('Database Updated!', 'bottom');
      }
      that.setState ({
        menu: responseData['list'],
        refreshing: false,
      });
    })
    .catch (error => {
      console.error (error);
    });
}

async function syncDB (that, resId, hourId, currentOrder) {
  fetch ('http://localhost:8000/api/restaurant/' + resId + '/hours/' + hourId, {
    method: 'GET',
  })
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      //   console.log (currentOrder);
      //   console.log (responseData['data'][0]);

      fetch (
        'http://localhost:8000/api/restaurant/' +
          resId +
          '/hours/' +
          hourId +
          '/menu/',
        {method: 'GET'}
      )
        .then (response => response.json ())
        .then (responseDataMenu => {
          //set your data here
          //   console.log (currentOrder.foods);

          currentOrder.initial_discount =
            responseData['data'][0].current_discount;

          contribution_map = {};
          responseDataMenu['list'].forEach (food => {
            contribution_map[food.key] = {
              price: food.original_price,
              contribution: food.contribution,
            };
          });

          subTotal = 0.0;
          currentOrder.foods.forEach (food => {
            food.contribution = contribution_map[food.id].contribution;
            food.price = contribution_map[food.id].price;
            subTotal += food.price * food.quantity;
          });

          tax = subTotal * getTaxPercentage (subTotal);
          total = subTotal + tax;

          totalSaved = responseData['data'][0].current_discount * subTotal;
          that.setState ({
            resData: responseData['data'][0],
            currentOrder: currentOrder,
            subTotal: subTotal,
            tax: tax,
            total: total,
            totalSaved: totalSaved,
          });
        })
        .catch (error => {
          console.error (error);
        });
    })
    .catch (error => {
      console.error (error);
    });
}

export {fetchRestaurants, fetchMenu, fetchCurrentOrder, syncDB};
