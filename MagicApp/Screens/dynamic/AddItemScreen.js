//
//  MenuThree.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';
import {ListItem} from 'native-base';

import {RNNumberStepper} from 'react-native-number-stepper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

import {user} from '../../api/config';
import {
  showMoney,
  showPercentage,
  showErrorMessage,
  tConvert,
} from '../../utils';


export default class AddItemScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor (props) {
    super (props);

    const {navigation} = this.props;
    var hourId = navigation.getParam ('hourId', null);
    var foodData = navigation.getParam ('foodData', []);
    var resData = navigation.getParam ('resData', []);
    this.state = {
      hourId: hourId,
      resData: resData,
      foodData: foodData,
      selectedToppings: [],
      extraInstructions: '',
      quantity: 1,
    };
  }

  componentDidMount () {}

  componentWillUnmount () {
    // remove listeners
  }

  renderViewFlatListCell = ({item}) => {
    return <Topping toppingData={item} />;
  };

  addItem (foodData) {
    var resData = this.state.resData;
    var hourId = this.state.hourId;

    // AsyncStorage.clear ();

    var item = {
      key: 0,
      id: foodData.key,
      name: foodData.name,
      sales_price: foodData.original_price,
      toppings: this.state.selectedToppings.join (),
      comments: this.state.extraInstructions,
      quantity: this.state.quantity,
      time_stamp: +new Date (),
      initial_contribution: foodData.contribution,
    };
    AsyncStorage.getItem ('@trofi-current-order').then (currentOrder => {
      if (currentOrder !== null) {
        // value previously stored

        updatedCurrentOrder = JSON.parse (currentOrder);
        if (hourId != updatedCurrentOrder.hour_id) {
          // notify can only place order for one hour
          showErrorMessage (
            'Cannot place orders from multiple hours!' +
              ' Current order: ' +
              tConvert (updatedCurrentOrder.hour_id + ':00'),
            'bottom'
          );
          return;
        } else {
          item['key'] = updatedCurrentOrder.foods.length;
          updatedCurrentOrder.foods.push (item);
          console.log (updatedCurrentOrder);
          AsyncStorage.setItem (
            '@trofi-current-order',
            JSON.stringify (updatedCurrentOrder)
          );
          this.props.navigation.goBack ();
        }
      } else {
        // create new

        initCurrentOrder = {
          hour_id: parseInt (hourId),
          hour_start: parseInt (hourId),
          hour_end: parseInt (hourId) + 1,
          initial_discount: null,
          final_discount: null,
          restaurant_id: resData.key,
          restaurant_name: resData.name,
          status_ready: false,
          state: 'building',
          current_order: true,
          charge_id: '',
          card_id: '',
          last4: '',
          user: user.uid,
          order_number: null,
          placed_at: null,
          foods: [item],
        };

        console.log (initCurrentOrder);
        AsyncStorage.setItem (
          '@trofi-current-order',
          JSON.stringify (initCurrentOrder)
        );
        this.props.navigation.goBack ();
      }
    });
  }

  ListEmpty = () => {
    return (
      //View to show when list is empty
      (
        <View style={styles.MainContainer}>
          <Text style={{textAlign: 'center'}}>No Toppings Found</Text>
        </View>
      )
    );
  };

  onCheckBoxPress (id) {
    let tmp = this.state.selectedToppings;

    if (tmp.includes (id)) {
      tmp.splice (tmp.indexOf (id), 1);
    } else {
      tmp.push (id);
    }

    this.setState ({
      selectedToppings: tmp,
    });
  }

  render () {
    const resData = this.state.resData;
    const foodData = this.state.foodData;
    return (
      <View style={styles.menuView}>

        <View style={styles.backgroundView}>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack ()}
            style={styles.icCloseButton}
          >

            <Image
              source={require ('../../assets/images/ic-close.png')}
              style={styles.buttonButtonImage}
            />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.addItem (foodData)}
            style={styles.icCartButton}
          >

            <Image
              source={require ('../../assets/images/bob-2.png')}
              style={styles.buttonButtonImage}
            />

          </TouchableOpacity>

          <View
            style={{
              //position: "absolute",

              flex: 1,

              flexDirection: 'row',

              justifyContent: 'center',
            }}
          >

            <View style={styles.graybackgroundView}>

              <Text style={styles.nextmoneyText}>
                {showPercentage (resData.current_discount)}%
              </Text>

              <View
                style={{
                  // width: "100%",

                  // height: "100%",

                  flex: 1,

                  // position: "absolute",

                  justifyContent: 'flex-end',
                }}
              >

                <Text style={styles.buyersneededText}>
                  $
                  {parseInt (resData.current_contribution)}
                  /
                  {parseInt (resData.needed_contribution)}
                </Text>

              </View>

            </View>

          </View>

        </View>

        <View
          style={{
            flex: 1,
          }}
        >

          <Text style={styles.shawarmaPlusText}>{resData.name}</Text>

          <View style={styles.rectangle4View}>

            <View
              style={{
                flexDirection: 'row',
              }}
            >

              <View style={styles.group3View}>

                <Text style={styles.jawadSStyleChickText}>

                  {foodData.name}

                </Text>

                <Text style={styles.pitaBreadStuffedWText}>
                  {foodData.desc}
                </Text>

              </View>

              <View
                style={{
                  flex: 1,

                  flexDirection: 'row',

                  justifyContent: 'flex-end',
                }}
              >

                <View style={styles.group2View}>

                  <Text style={styles.textTwoText}>
                    ${showMoney (foodData.original_price)}
                  </Text>

                  <View
                    style={{
                      flex: 1,

                      justifyContent: 'flex-end',
                    }}
                  >

                    <Text style={styles.textText}>
                      $
                      {showMoney (
                        foodData.original_price * (1 - resData.current_discount)
                      )}
                    </Text>

                  </View>

                </View>

              </View>

            </View>

            <View
              style={{
                flex: 1,

                justifyContent: 'flex-end',
              }}
            >

              <View style={styles.groupView}>

                <Text style={styles.textThreeText}>
                  +{showMoney (foodData.contribution)}
                </Text>

              </View>

            </View>

          </View>

          <TextInput
            multiline={true}
            autoCorrect={false}
            maxLength={255}
            onChangeText={text => this.setState ({extraInstructions: text})}
            placeholder="Extra instructions or special requests. "
            style={styles.extraInstructionsOTextInput}
          />

          <View style={styles.viewView}>

            <Text style={styles.toppingsText}>Toppings</Text>

            <View style={styles.viewFlatListViewWrapper}>
              <FlatList
                renderItem={({item}) => {
                  return (
                    <ListItem>
                      <CheckBox
                        title={item.key}
                        checked={
                          this.state.selectedToppings.includes (item.key)
                            ? true
                            : false
                        }
                        onPress={() => this.onCheckBoxPress (item.key)}
                      />
                    </ListItem>
                  );
                }}
                data={foodData.toppings}
                extraData={this.state}
                style={styles.viewFlatList}
                ListEmptyComponent={this.ListEmpty}
              />

            </View>

          </View>

        </View>

        <View style={styles.viewTwoView}>

          <RNNumberStepper
            style={styles.stepper}
            value={1}
            size={1}
            minValue={1}
            autoRepeat={false}
            stepValue={1}
            onChange={(nValue, oValue) => {
              // console.log ('New Value: ' + nValue + ', Old Value: ' + oValue);
              this.setState ({quantity: nValue});
            }}
            width={wp ('70%')}
            height={40}
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  menuView: {
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
  },
  backgroundView: {
    backgroundColor: 'rgba(55, 58, 61, 0.9)',
    height: hp ('16.5%'),
    flexDirection: 'row',
  },
  icCloseButton: {
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginLeft: wp ('5%'),
    marginTop: hp ('7%'),
    width: 50,
    height: 50,
  },
  icCloseButtonText: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  icCloseButtonImage: {
    resizeMode: 'contain',
  },
  icCartButton: {
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: wp ('61%'),
    marginTop: hp ('7%'),
    width: 50,
    height: 50,
  },
  icCartButtonText: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  icCartButtonImage: {
    resizeMode: 'contain',
  },

  buttonButtonImage: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  buttonButtonImageTwo: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },

  graybackgroundView: {
    backgroundColor: 'rgba(226, 175, 47, 0.99)',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'rgb(246, 246, 246)',
    borderStyle: 'solid',
    marginTop: hp ('5%'),
    marginRight: wp ('95%'),
    position: 'relative',
    width: 70,
    height: 70,
  },
  nextmoneyText: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: hp ('1.5%'),
    width: 70,
    //height: 29.92,
  },
  buyersneededText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: hp ('1.5%'),
    width: 70,
  },
  viewTwoView: {
    marginBottom: hp ('3%'),
    height: 40,
    alignItems: 'center',
  },
  shawarmaPlusText: {
    color: 'rgb(246, 246, 246)',
    fontSize: hp ('4%'),
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'rgb(114, 167, 228)',
    overflow: 'hidden',
    // marginTop: hp('14%'),
    width: wp ('100%'),
    height: hp ('5%'),
    //flex: 1,
  },
  rectangle4View: {
    backgroundColor: 'white',
    marginTop: hp ('1%'),
    height: 101,
  },
  group3View: {
    backgroundColor: 'transparent',
    marginLeft: wp ('1%'),
    marginTop: hp ('1%'),
    width: wp ('79%'),
    height: 57,
  },
  jawadSStyleChickText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    height: 19,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    width: wp ('79%'),
  },
  pitaBreadStuffedWText: {
    color: 'rgb(97, 102, 106)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 17,
    height: 34,
    marginTop: hp ('0.5%'),
    width: wp ('79%'),
  },
  group2View: {
    backgroundColor: 'transparent',
    marginRight: wp ('1%'),
    marginTop: hp ('1%'),
    width: wp ('19%'),
    height: 49,
  },
  textTwoText: {
    color: 'rgba(55, 58, 61, 0.26)',
    fontSize: 16,
    textDecorationLine: 'line-through',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'transparent',
  },
  textText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'transparent',
  },
  groupView: {
    backgroundColor: 'transparent',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: 'rgb(226, 175, 47)',
    borderStyle: 'solid',
    marginLeft: wp ('1%'),
    marginBottom: hp ('1%'),
    width: 39,
    height: 22,
    justifyContent: 'center',
  },
  textThreeText: {
    color: 'rgb(226, 175, 47)',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 39,
    height: 14,
  },
  extraInstructionsOTextInput: {
    color: 'rgb(97, 102, 106)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 5,
    marginLeft: wp ('5%'),
    marginRight: wp ('5%'),
    marginTop: hp ('2%'),
  },
  viewView: {
    backgroundColor: 'transparent',
    marginTop: hp ('2%'),
  },
  toppingsText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginLeft: wp ('5%'),
    marginRight: wp ('5%'),
  },
  viewFlatList: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('1%'),
    height: hp ('35%'),
  },
});
