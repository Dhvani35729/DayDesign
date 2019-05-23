import {db} from './config';
import {showDatabaseUpdateMessage} from '../utils/index'

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
      unsubscribeList.push(hourQuery.onSnapshot(function(querySnapshot) {

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
            showDatabaseUpdateMessage();
          }
          firstLoad = false
      });

      }));
    });
  });
  return unsubscribeList;
}

function loadMenu (that, resId, hourId) {
  var unsubscribeList = []
  var firstLoad = true;
  var menuQuery = db.collection ('restaurants').doc(resId).collection('hours').doc(hourId)
  unsubscribeList.push(menuQuery.onSnapshot(function(doc) {

    var hourData = doc.data()
    var menu = [];
    if(hourData.foods_active.length == 0){
      that.setState ({
        menu: menu,
      });
      return unsubscribeList;
    }
    hourData.foods_active.forEach(function(foodId) {
      // console.log(foodId);
      var foodQuery = db.collection ('foods').doc(foodId)
      unsubscribeList.push(foodQuery.onSnapshot(function(doc) {
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
              showDatabaseUpdateMessage();
            }
            firstLoad = false
        });

      }));

    });

}));

  return unsubscribeList;
}

export {loadRestaurants, loadMenu};
