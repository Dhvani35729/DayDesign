import {db, user} from './config';
import {showUpdateMessage} from '../utils/index'
import AsyncStorage from '@react-native-community/async-storage';

function loadCurrentOrder(that){
  var unsubscribeList = []
  var firstLoad = true;

  var user_private_ref = db.collection("users").doc(global.publicId).collection("private").doc(user.uid);

  userListener = user_private_ref.onSnapshot(function(doc) {
      var user_private_data = doc.data()

      var currentOrder = user_private_data.active_orders[0];
      if(currentOrder){

        var orderRef = db.collection("orders").doc(currentOrder)

        orderListener = orderRef
          .onSnapshot(function(doc) {
              var orderData = doc.data();

              var order = {
                res_name: orderData.restaurant_name,
                order_number: orderData.order_id,
                status: orderData.status_ready,
                pickup_time: parseInt(orderData.hours_order.substring(3)),
                foods: orderData.foods,
              }

              that.setState({
                  currentOrder: order
              }, () => {
                if(!firstLoad){
                  showUpdateMessage("Order Updated!", "bottom");
                }
                firstLoad = false
            });

          });

          that.setState({
            all_listeners: [...that.state.all_listeners, orderListener]
          })

      }
      else{

        AsyncStorage.getItem('@trofi-current-order').then (currentOrder => {
          if(currentOrder != null){

            that.setState({
              currentOrder: JSON.parse(currentOrder)
          }, () => {
            if(!firstLoad){
              showUpdateMessage("Order Updated!", "bottom");
            }
            firstLoad = false
        });

          }
          else{
            that.setState({
              currentOrder: null
          }, () => {
            if(!firstLoad){
              showUpdateMessage("Order Updated!", "bottom");
            }
            firstLoad = false
        });
          }
        });
      }

  });

  that.setState({
    all_listeners: [...that.state.all_listeners, userListener]
  })

}

function loadRestaurants (that) {
  var unsubscribeList = []
  var firstLoad = true;

  db.collection ('restaurants').get ().then (function (querySnapshot) {
    querySnapshot.forEach (function (doc) {
      var restaurantId = doc.id;
      var restaurantData = doc.data ();

      var hoursRef = db
        .collection ('restaurants')
        .doc (restaurantId)
        .collection ('hours');
      var hourQuery = hoursRef.where ('hour_is_active', '==', true);
      var hourListener = hourQuery.onSnapshot(function(querySnapshot) {

        baseHours = [];
        for (var i = 0; i < 24; i++) {
          baseHours[i] = {key: i.toString (), data: []};
        }

        querySnapshot.forEach(function(doc) {
          var hourData = doc.data ();

          var currentDiscount = -1;
          for (var i = 0; i < hourData.discounts.length; i++) {
            if (hourData.discounts[i].is_active == true) {
              currentDiscount = hourData.discounts[i].percent_discount;
              break;
            }
          }

          var hourId = parseInt (hourData.start_id)
          var resCard = {
            hour_id: hourId,
            key: restaurantId,
            name: restaurantData.restaurant_name,
            tags: restaurantData.tags,
            percent_discount: currentDiscount,
          };

          baseHours[hourId].data.push (resCard);
        });

        that.setState ({
          allHours: baseHours,
        }, () => {
          if(!firstLoad){
            showUpdateMessage("Database Updated!", "top");
          }
          firstLoad = false
      });

      });

      that.setState({
        all_listeners: [...that.state.all_listeners, hourListener]
      })

    });
  });

}

function loadMenu (that, resId, hourId) {
  var unsubscribeList = []
  var firstLoad = true;
  var loadedNum = 0;
  var menuQuery = db.collection ('restaurants').doc(resId).collection('hours').doc(hourId)
  var hourListener = menuQuery.onSnapshot(function(doc) {

    var hourData = doc.data()
    var menu = [];
    var arrNum = hourData.foods_active.length
    if(arrNum == 0){
      that.setState ({
        menu: menu,
      });
      return unsubscribeList;
    }
    hourData.foods_active.forEach(function(foodId) {
      // console.log(foodId);
      var foodQuery = db.collection ('foods').doc(foodId)
      var foodListener = foodQuery.onSnapshot(function(doc) {
          // console.log("Current data: ", doc.data());

          var food_id = doc.id;
          var foodData = doc.data ();

          toppings_data = []
          for(var i = 0; i < foodData.toppings.length; i++){
            toppings_data.push({
              key: foodData.toppings[i]
            })
          }

          var food = {
            key: food_id,
            name: foodData.name,
            desc: foodData.desc,
            original_price: foodData.sales_price,
            toppings: toppings_data
          };

          var inMenuFood = menu.find(food => food.key === food_id)
          if(inMenuFood){
            var indexFood = menu.indexOf(inMenuFood)
            if (indexFood !== -1) {
              menu[indexFood] = food;
              that.setState ({
                refresh: !that.state.refresh,
              });
            }
          }
          else{
            menu.push (food);
          }

          that.setState ({
            menu: menu,
          }, () => {
            if(!firstLoad){
              showUpdateMessage("Database Updated!", "bottom");
            }
            if(loadedNum >= arrNum){
              firstLoad = false;
            }
            else{
              loadedNum += 1;
              if(loadedNum >= arrNum){
                firstLoad = false;
              }
            }
        });

      });


      that.setState({
        all_listeners: [...that.state.all_listeners, foodListener]
      })

    });



});

that.setState({
  all_listeners: [...that.state.all_listeners, hourListener]
})

}

export {loadRestaurants, loadMenu, loadCurrentOrder};
