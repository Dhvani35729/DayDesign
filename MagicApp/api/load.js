import {db, user} from './config';
import {
  getTaxPercentage,
  showUpdateMessage,
  showErrorMessage,
} from '../utils/index';
import AsyncStorage from '@react-native-community/async-storage';

async function fetchAllOrders (that) {
  uid = user.uid;
  fetch ('http://localhost:8000/api/users/' + uid.toString () + '/orders/', {
    method: 'GET',
  })
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      if (that.state.allOrders != null) {
        showUpdateMessage ('Orders Updated!', 'bottom');
      }
      console.log (responseData['list']);
      responseData['list'].forEach (order => {
        order.key = order.order_number;
      });
      that.setState ({
        allOrders: responseData['list'],
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
      if (
        responseData['error'] &&
        responseData['error'].code == 'CurrentOrderNotFound'
      ) {
        that.setState ({
          currentOrder: null,
        });
      } else {
        counter = 0;
        responseData.foods.forEach (food => {
          food.key = counter;
          counter += 1;
        });
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

async function getDefaultCard (that) {
  uid = that.state.user.uid;
  fetch (
    'http://localhost:8000/api/users/' + uid.toString () + '/cards/default',
    {
      method: 'GET',
    }
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      if (
        responseData['error'] &&
        responseData['error'].code == 'DefaultCardNotFound'
      ) {
        that.setState ({
          defaultCard: null,
        });
      } else {
        that.setState ({
          defaultCard: responseData.last4,
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

async function getCards (that) {
  uid = that.state.user.uid;
  fetch ('http://localhost:8000/api/users/' + uid.toString () + '/cards/', {
    method: 'GET',
  })
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      if (
        responseData['error'] &&
        responseData['error'].code == 'CardsNotFound'
      ) {
        that.setState ({
          cards: [],
        });
      } else {
        counter = 0;
        responseData['list'].forEach (order => {
          order.key = counter;
          counter += 1;
        });
        console.log (responseData['list']);
        that.setState ({
          cards: responseData['list'],
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
          //   console.log (responseDataMenu['list']);
          responseDataMenu['list'].forEach (food => {
            contribution_map[food.key] = {
              initial_price: food.original_price,
              contribution: food.contribution,
            };
          });

          subTotal = 0.0;
          currentOrder.foods.forEach (food => {
            food.contribution = contribution_map[food.id].contribution;
            food.initial_price = contribution_map[food.id].initial_price;
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
            refreshing: false,
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

export {
  fetchRestaurants,
  fetchMenu,
  fetchCurrentOrder,
  fetchAllOrders,
  syncDB,
  getDefaultCard,
  getCards,
};
