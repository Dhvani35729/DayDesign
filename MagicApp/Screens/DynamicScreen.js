//
//  DynamicScreen.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TimeCell from './TimeCell';


export default class DynamicScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
      currentUser: null,
    };
  };

  _isMounted = false;

  constructor (props) {
    super (props);

    const {currentUser} = firebase.auth();

    this.state = {
      user: currentUser,
      allHours: []
    }

    var db = firebase.firestore();
    console.log("constructing...")
    this.loadRestaurants(this, db);

  }

  loadRestaurants(that, db){

    baseHours = []
    for(var i = 0; i < 24; i++){
      baseHours[i] = {key: i.toString(), data: []}
    }

    db.collection("restaurants").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          var restaurantId = doc.id;
          var restaurantData = doc.data();
          console.log("working with: " + restaurantId)

          var hoursRef = db.collection("restaurants").doc(restaurantId).collection("hours");
          var hourQuery = hoursRef.where("hour_is_active", "==", true);
          hourQuery.get().then(function (querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // console.log(doc.id, ' => ', doc.data());
                    var hourData = doc.data();

                    var currentDiscount = -1;
                    for(var i = 0; i < hourData.discounts.length; i++){
                        if(hourData.discounts[i].is_active == true){
                          currentDiscount = hourData.discounts[i].percent_discount;
                          break;
                        }
                    }

                    var resCard = {
                        key: restaurantId,
                        name: restaurantData.restaurant_name,
                        percent_discount: currentDiscount
                    }
                    console.log(hourData.start_id)
                    baseHours[parseInt(hourData.start_id)].data.push(resCard)

                });
                  console.log(baseHours)
                  if(that._isMounted){
                    that.setState({
                      allHours: baseHours
                    })
                  }


            });
      });
    });

  }

  componentDidMount () {
    this._isMounted = true;
    console.log("mounted")
  }

  componentWillUnmount () {
    console.log("leaving...");
    this._isMounted = false;
  }

  viewFlatListMockData = [
    {
      key: '1',
    },
  ];

  renderViewFlatListCell = ({item}) => {
    return <TimeCell navigation={this.props.navigation} hourId={item.key} hourData={item.data} />;
  };

  render () {
    const allHours = this.state.allHours
    return (
      <View style={styles.restauranthomeView}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate ('CurrentOrder');
          }}
        >
          <View style={styles.viewView}>
            <View style={styles.viewTwoView} />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            >
              <Text style={styles.labelText}>Shawerma Plus</Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}
              >
                <View style={styles.viewFourView}>
                  <Text style={styles.labelSixText}>368b3</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Text style={styles.labelFiveText}>11:59AM</Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.labelSevenText}>Ready</Text>
                  </View>
                </View>
                <View style={styles.viewThreeView}>
                  <Text style={styles.labelThreeText}>Order Number</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Text style={styles.labelTwoText}>Pick Up By</Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.labelFourText}>Status</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={false}
            renderItem={this.renderViewFlatListCell}
            data={allHours}
            style={styles.viewFlatList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  restauranthomeView: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 1,
  },
  viewFlatList: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('1%'),
    marginBottom: 6,
    flex: 1,
  },
  viewView: {
    backgroundColor: 'transparent',
    marginLeft: wp ('4%'),
    marginRight: wp ('4%'),
    marginTop: hp ('4%'),
    height: 75,
  },
  viewTwoView: {
    backgroundColor: '#72A7E4',
    borderRadius: 8,
    height: 75,
    alignItems: 'flex-start',
  },
  labelText: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: 3,
  },
  viewFourView: {
    backgroundColor: 'transparent',
    marginLeft: 9,
    marginRight: 9,
    marginBottom: hp ('1%'),
    flexDirection: 'row',
  },
  labelSixText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelFiveText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginRight: 1,
  },
  labelSevenText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  viewThreeView: {
    backgroundColor: 'transparent',
    marginLeft: 9,
    marginRight: 9,
    marginBottom: 7,
    flexDirection: 'row',
  },
  labelThreeText: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelTwoText: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  labelFourText: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
