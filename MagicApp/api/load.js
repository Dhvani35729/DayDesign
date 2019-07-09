import {user} from './config';
import {getTaxPercentage, showAPIErrorMessage} from '../utils/index';
import AsyncStorage from '@react-native-community/async-storage';

async function fetchAllOrders (that) {
  uid = user.uid;
  fetch ('http://localhost:8000/api/users/' + uid.toString () + '/orders/', {
    method: 'GET',
  })
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      if (that.state.allOrders != null) {
        // showUpdateMessage ('Orders Updated!', 'bottom');
      }
      // console.log (responseData['list']);
      responseData['list'].forEach (order => {
        order.key = order.order_number;
      });
      that.setState ({
        allOrders: responseData['list'],
      });
    })
    .catch (error => {
      console.error (error);
      showAPIErrorMessage ('bottom');
      return;
    });
}

async function fetchCurrentOrder (that, screen) {
  uid = that.state.user.uid;
  fetch (
    'http://localhost:8000/api/users/' + uid.toString () + '/orders/current',
    {method: 'GET'}
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      if (that.state.currentOrder != null) {
        // showUpdateMessage ('Order Updated!', 'bottom');
      }
      if (
        responseData['error'] &&
        responseData['error'].code == 'CurrentOrderNotFound'
      ) {
        if (screen == 'DynamicScreen' || screen == 'CurrentOrderScreen') {
          that.setState ({
            currentOrder: null,
            loading: false,
            loadingOrder: false,
          });
        } else if (screen == 'CheckoutScreen') {
          that.setState ({
            pendingCurrentOrder: false,
          });
        }
      } else {
        counter = 0;
        responseData['order_info'].foods.forEach (food => {
          food.key = counter;
          counter += 1;
        });
        if (screen == 'DynamicScreen') {
          that.setState ({
            currentOrder: responseData,
            loadingOrder: false,
          });
        } else if (screen == 'CurrentOrderScreen') {
          that.setState ({
            currentOrder: responseData,
            refreshing: false,
            loading: false,
          });
        } else if (screen == 'CheckoutScreen') {
          if (responseData['order_info']['status_ready']) {
            that.setState ({
              pendingCurrentOrder: false,
            });
          } else {
            that.setState ({
              pendingCurrentOrder: true,
            });
          }
        } else if (screen == 'post') {
          AsyncStorage.removeItem ('@trofi-current-order');
          that.props.navigation.navigate ('CurrentOrderScreen');
        }
      }
    })
    .catch (error => {
      console.error (error);
      showAPIErrorMessage ('bottom');
    });
}

async function fetchRestaurants (that) {
  fetch ('http://localhost:8000/api/restaurants/hours/', {method: 'GET'})
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      if (that.state.allHours.length != 0) {
        // showUpdateMessage ('Database Updated!', 'top');
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
      that.setState ({
        loading: false,
        refreshing: false,
      });
      showAPIErrorMessage ('bottom');
      return;
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
      if (that.state.menu.length != 0) {
        // showUpdateMessage ('Database Updated!', 'bottom');
      }
      that.setState ({
        menu: responseData['list'],
        refreshing: false,
        loading: false,
      });
    })
    .catch (error => {
      console.error (error);
      that.setState ({
        loading: false,
        refreshing: false,
      });
      showAPIErrorMessage ('bottom');
      return;
    });
}

async function getDefaultCard (that) {
  uid = that.state.user.uid;
  fetch (
    'http://localhost:8000/api/users/' + uid.toString () + '/card/default',
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
      showAPIErrorMessage ('bottom');
      return;
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
      if (
        responseData['error'] &&
        responseData['error'].code == 'CardsNotFound'
      ) {
        that.setState ({
          cards: [],
          loading: false,
          refreshing: false,
        });
      } else {
        counter = 0;
        responseData['list'].forEach (order => {
          order.key = counter;
          counter += 1;
        });
        // console.log (responseData['list']);
        that.setState ({
          cards: responseData['list'],
          loading: false,
          refreshing: false,
        });
      }
    })
    .catch (error => {
      console.error (error);
      that.setState ({
        loading: false,
        refreshing: false,
      });
      showAPIErrorMessage ('bottom');
      return;
    });
}

async function syncDB (that, resId, hourId, currentOrder) {
  fetch ('http://localhost:8000/api/restaurant/' + resId + '/hours/' + hourId, {
    method: 'GET',
  })
    .then (response => response.json ())
    .then (responseData => {
      //set your data here

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
            food.initial_contribution = contribution_map[food.id].contribution;
            food.sales_price = contribution_map[food.id].initial_price;
            subTotal += food.sales_price * food.quantity;
          });

          tax = subTotal * getTaxPercentage (subTotal);
          total = subTotal + tax;

          totalSaved = responseData['data'][0].current_discount * subTotal;
          that.setState ({
            resData: responseData['data'][0],
            currentOrder: currentOrder,
            sub_total: subTotal,
            tax: tax,
            total: total,
            total_saved: totalSaved,
            refreshing: false,
            loading: false,
          });
        })
        .catch (error => {
          that.setState ({
            loading: false,
            refreshing: false,
          });
          showAPIErrorMessage ('bottom');
          return;
        });
    })
    .catch (error => {
      that.setState ({
        loading: false,
        refreshing: false,
      });
      showAPIErrorMessage ('bottom');
      return;
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
