//
//  MenuTwo
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {Overlay} from 'react-native-elements';
import {ActivityIndicator} from 'react-native-paper';
import LottieView from 'lottie-react-native';

import CheckoutItem from '../../models/CheckoutItem';
import {fetchCurrentOrder, syncDB, getDefaultCard} from '../../api/load';
import {doPayment, addCard} from '../../api/post';
import {
  showPercentage,
  showMoney,
  showErrorMessage,
  tConvert,
} from '../../utils';
import stripe from 'tipsi-stripe';
import {user} from '../../api/config';

stripe.setOptions ({
  publishableKey: 'pk_test_ihRia1aLHxyCBjEMl0p7oqNk',
});

export default class CheckoutScreen extends React.Component {
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
    var resData = navigation.getParam ('resData', null);
    this.state = {
      resData: resData,
      user: user,
      currentOrder: null,
      defaultCard: null,
      sub_total: 0,
      tax: 0,
      total: 0,
      initial_total: 0,
      total_saved: 0,
      refreshing: false,
      pendingCurrentOrder: false,
      loading: true,
      isPaymentPending: false,
      tryingPayment: false,
      donePayment: false,
    };
  }

  requestPayment = order => {
    var that = this;
    if (this.state.pendingCurrentOrder) {
      showErrorMessage (
        'You already have a pending order! You must wait for that to finish.',
        'top'
      );
    } else {
      if (this.state.defaultCard != null) {
        this.setState ({isPaymentPending: true, tryingPayment: true});
        return doPayment (that, order, 'default');
      } else {
        return stripe
          .paymentRequestWithCardForm ()
          .then (stripeTokenInfo => {
            return addCard (that, stripeTokenInfo.tokenId, 'CheckoutScreen');
          })
          .then (() => {
            console.log ('Payment succeeded!');
            // this.props.navigation.navigate ('CurrentOrderScreen');
          })
          .catch (error => {
            console.log ('Payment failed', {error});
          })
          .finally (() => {
            // this.setState ({isPaymentPending: false});
          });
      }
    }
  };

  handleRefresh = () => {
    var that = this;
    this.setState (
      {
        refreshing: true,
      },
      () => {
        getDefaultCard (that);
        fetchCurrentOrder (that, 'CheckoutScreen');

        AsyncStorage.getItem ('@trofi-current-order').then (currentOrder => {
          if (currentOrder != null) {
            var resId = this.state.resData.key;
            var hourId = this.state.resData.hour_id.toString ();
            currentOrder = JSON.parse (currentOrder);
            syncDB (that, resId, currentOrder.hour_id, currentOrder);
            // update cart to reflect current item contribution
            // this.setState ({
            //   currentOrder: JSON.parse (currentOrder),
            // });
          } else {
            this.setState ({
              refreshing: false,
            });
          }
        });
      }
    );
  };

  getCurrentOrder = () => {
    AsyncStorage.getItem ('@trofi-current-order').then (currentOrder => {
      if (currentOrder != null) {
        var resId = this.state.resData.key;
        var hourId = this.state.resData.hour_id.toString ();
        currentOrder = JSON.parse (currentOrder);
        console.log (currentOrder);
        syncDB (this, resId, currentOrder.hour_id, currentOrder);
        // update cart to reflect current item contribution
        // this.setState ({
        //   currentOrder: JSON.parse (currentOrder),
        // });
      } else {
        this.setState ({
          currentOrder: null,
          sub_total: 0,
          tax: 0,
          total: 0,
          total_saved: 0,
          loading: false,
        });
      }
    });
  };

  componentDidMount () {
    var that = this;

    this.props.navigation.addListener ('willFocus', playload => {
      getDefaultCard (that);
      this.getCurrentOrder ();
      fetchCurrentOrder (that, 'CheckoutScreen');
    });
  }

  componentWillUnmount () {}

  _keyExtractor = (item, index) => item.key.toString ();

  renderViewFlatListCell = ({item}) => {
    return (
      <CheckoutItem
        navigation={this.props.navigation}
        food={item}
        resData={this.state.resData}
        getCurrentOrder={this.getCurrentOrder}
      />
    );
  };

  ListEmpty = () => {
    return (
      //View to show when list is empty
      (
        <View style={styles.MainContainer}>
          <Text style={{textAlign: 'center'}}>No foods found!</Text>
        </View>
      )
    );
  };

  formatTime (time) {
    if (time < 10) {
      return tConvert ('0' + time.toString () + ':59');
    } else {
      return tConvert (time.toString () + ':59');
    }
  }

  render () {
    const {
      resData,
      currentOrder,
      sub_total,
      tax,
      total,
      total_saved,
      defaultCard,
    } = this.state;
    const amount = {
      sub_total: sub_total,
      tax: tax,
      total_saved: total_saved,
      initial_total: parseInt (total * 100),
      final_total: null,
    };
    const order = {
      ...currentOrder,
      ...amount,
    };
    const isCartEmpty = currentOrder ? currentOrder.foods.length == 0 : true;
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

          <View
            style={{
              //position: "absolute",
              //flex: 1,
              // flexDirection: "row",
            }}
          >
            <View style={styles.graybackgroundView}>
              <Text style={styles.nextmoneyText}>
                {showPercentage (resData.current_discount)}%
              </Text>
              <View
                style={{
                  flex: 1,
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
          {currentOrder
            ? <Text style={styles.shawarmaPlusText}>
                Checkout
              </Text>
            : <Text style={styles.shawarmaPlusText}>
                No Orders Found
              </Text>}

          <View style={styles.viewFlatListViewWrapper}>
            {this.state.loading
              ? <ActivityIndicator size="small" />
              : <FlatList
                  renderItem={this.renderViewFlatListCell}
                  data={currentOrder ? currentOrder.foods : []}
                  style={styles.viewFlatList}
                  keyExtractor={this._keyExtractor}
                  refreshing={this.state.refreshing}
                  onRefresh={this.handleRefresh}
                  ListEmptyComponent={this.ListEmpty}
                />}
            {isCartEmpty &&
              <LottieView
                source={require ('../../assets/animations/food.json')}
                autoPlay
                loop
              />}
          </View>
          <View style={styles.group3View}>
            <Text style={styles.sub_total4400Text}>
              Sub Total: ${showMoney (sub_total)}
            </Text>
            <View>
              <Text style={styles.tax600Text}>Tax: ${showMoney (tax)}</Text>
            </View>
            <View>
              <Text style={styles.total5000Text}>
                Total: ${showMoney (total)}
              </Text>
            </View>
            {currentOrder &&
              <View>
                <Text style={styles.total5000Text}>
                  Pickup by: {this.formatTime (currentOrder.hour_start)}
                </Text>
              </View>}
          </View>

          <Text style={styles.reimbursedText}>
            $
            {showMoney (total_saved)}
            {' '}
            will be reimbursed. Save more by inviting friends and unlocking discounts.
          </Text>

          <Overlay
            isVisible={this.state.isPaymentPending}
            width="70%"
            height="70%"
          >
            {this.state.tryingPayment &&
              <LottieView
                source={require ('../../assets/animations/machine.json')}
                autoPlay
                loop
              />}
            {this.state.donePayment &&
              <LottieView
                source={require ('../../assets/animations/checkmark.json')}
                autoPlay
              />}
          </Overlay>

          {currentOrder &&
            <TouchableOpacity
              onPress={() => {
                this.requestPayment (order);
              }}
              style={styles.payWithCardButton}
            >
              {defaultCard == null
                ? <Text style={styles.payWithCardButtonText}>
                    Add a Card{' '}
                  </Text>
                : <Text style={styles.payWithCardButtonText}>
                    Pay With Card ending in {defaultCard}
                  </Text>}

            </TouchableOpacity>}

          {currentOrder &&
            defaultCard != null &&
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate ('CardScreen', {
                  orderData: order,
                });
              }}
              style={styles.changeCardButton}
            >
              <Text style={styles.changeCardButtonText}>Change Card</Text>
            </TouchableOpacity>}

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
  graybackgroundView: {
    backgroundColor: 'rgba(226, 175, 47, 0.99)',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'rgb(246, 246, 246)',
    borderStyle: 'solid',
    marginTop: hp ('5%'),
    width: 70,
    height: 70,
    marginLeft: wp ('25%'),
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

  viewFlatList: {
    backgroundColor: 'transparent',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('1%'),
    height: hp ('40%'),
  },
  group3View: {
    backgroundColor: 'transparent',
    marginLeft: 8,
    marginRight: 8,
    marginTop: hp ('0%'),
  },
  reimbursedText: {
    color: 'rgb(190, 190, 190)',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginLeft: wp ('2%'),
    marginTop: hp ('2%'),
    width: wp ('96%'),
  },
  sub_total4400Text: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 358,
  },
  total5000Text: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 358,
    marginTop: hp ('2%'),
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
  tax600Text: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginTop: hp ('2%'),
  },
  payWithCardButton: {
    backgroundColor: 'rgb(91, 158, 236)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
    marginTop: hp ('5%'),
    //    width: 121,
    //    height: 25,
    alignSelf: 'center',
  },
  payWithCardButtonImage: {
    resizeMode: 'contain',
  },
  payWithCardButtonText: {
    color: 'white',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },

  changeCardButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //    padding: 0,
    marginTop: hp ('3%'),
    //    width: 121,
    //    height: 25,
    alignSelf: 'center',
  },
  changeCardButtonImage: {
    resizeMode: 'contain',
  },
  changeCardButtonText: {
    color: 'rgb(91, 158, 236)',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  processingText: {
    padding: 10,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
