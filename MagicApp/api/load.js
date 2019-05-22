import {db} from './config';

function loadRestaurants (that) {
  baseHours = [];
  for (var i = 0; i < 24; i++) {
    baseHours[i] = {key: i.toString (), data: []};
  }

  db.collection ('restaurants').get ().then (function (querySnapshot) {
    querySnapshot.forEach (function (doc) {
      var restaurantId = doc.id;
      var restaurantData = doc.data ();

      var hoursRef = db
        .collection ('restaurants')
        .doc (restaurantId)
        .collection ('hours');
      var hourQuery = hoursRef.where ('hour_is_active', '==', true);
      hourQuery.get ().then (function (querySnapshot) {
        querySnapshot.forEach (function (doc) {
          var hourData = doc.data ();

          var currentDiscount = -1;
          for (var i = 0; i < hourData.discounts.length; i++) {
            if (hourData.discounts[i].is_active == true) {
              currentDiscount = hourData.discounts[i].percent_discount;
              break;
            }
          }

          var resCard = {
            key: restaurantId,
            name: restaurantData.restaurant_name,
            percent_discount: currentDiscount,
          };

          baseHours[parseInt (hourData.start_id)].data.push (resCard);
        });

        that.setState ({
          allHours: baseHours,
        });
      });
    });
  });
}

function loadMenu (that, resId) {
  var menu = [];
  var menuQuery = db.collection ('foods').where ('restaurant_id', '==', resId);

  menuQuery.get ().then (function (querySnapshot) {
    querySnapshot.forEach (function (doc) {
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

      menu.push (food);
    });

    that.setState ({
      menu: menu,
    });
  });
}

export {loadRestaurants, loadMenu};
