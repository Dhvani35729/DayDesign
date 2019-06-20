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

import stripe from 'tipsi-stripe';
import {user} from '../../api/config';
import Card from '../../models/Card';
import {getCards} from '../../api/load';
import {addCard} from '../../api/post';

stripe.setOptions ({
  publishableKey: 'pk_test_ihRia1aLHxyCBjEMl0p7oqNk',
});

export default class CardScreen extends React.Component {
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
    var orderData = navigation.getParam ('orderData', null);
    this.state = {
      user: user,
      cards: null,
      orderData: orderData,
    };
  }

  requestPayment = order => {
    this.setState ({isPaymentPending: true});
    return stripe
      .paymentRequestWithCardForm ()
      .then (stripeTokenInfo => {
        return addCard (this, stripeTokenInfo.tokenId);
      })
      .then (() => {
        console.log ('Payment succeeded!');
        // this.props.navigation.navigate ('CurrentOrderScreen');
      })
      .catch (error => {
        console.log ('Payment failed', {error});
      })
      .finally (() => {
        this.setState ({isPaymentPending: false});
      });
  };

  componentDidMount () {
    var that = this;

    this.props.navigation.addListener ('willFocus', playload => {
      getCards (that);
    });
  }

  componentWillUnmount () {}

  renderViewFlatListCell = ({item}) => {
    return <Card navigation={this.props.navigation} card={item} />;
  };

  _keyExtractor = (item, index) => item.key.toString ();

  render () {
    const order = this.state.orderData;
    const cardsData = this.state.cards;
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

        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.shawarmaPlusText}>Your Cards</Text>
          <View style={styles.viewFlatListViewWrapper}>
            <FlatList
              renderItem={this.renderViewFlatListCell}
              data={cardsData}
              style={styles.viewFlatList}
              keyExtractor={this._keyExtractor}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.requestPayment (order);
            }}
            style={styles.changeCardButton}
          >
            <Text style={styles.changeCardButtonText}>Use a new card</Text>
          </TouchableOpacity>

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
  subtotal4400Text: {
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
});
