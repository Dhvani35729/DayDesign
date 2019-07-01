//
//  ListRest1TwoTwo
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {showMoney} from '../utils';

export default class CheckoutItem extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    var food = this.props.food;
    return (
      <View style={styles.listRest1}>

        <View style={styles.group3View}>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text style={styles.jawadSStyleChickText}>
              {food.name}
            </Text>
            <Text style={styles.textText}>
              ${showMoney (food.sales_price)}
            </Text>
          </View>

          <Text style={styles.toppings}>
            {food.toppings}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <Text style={styles.servingsText}>{food.quantity} Servings</Text>
              <View style={styles.groupView}>
                <Text style={styles.textTwoText}>
                  +{showMoney (food.initial_contribution * food.quantity)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  listRest1: {
    backgroundColor: 'white',
    width: '100%',
    height: 76,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
  },

  group3View: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'flex-start',
    height: 76,
    alignItems: 'flex-start',
  },
  jawadSStyleChickText: {
    backgroundColor: 'transparent',
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    width: wp ('80%'),
    marginTop: 5,
    marginLeft: wp ('2%'),
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },

  textText: {
    backgroundColor: 'transparent',
    color: 'rgb(55, 58, 61)',
    fontStyle: 'normal',
    fontSize: 16,
    marginRight: wp ('3%'),
    marginTop: 5,
    fontWeight: 'normal',
    textAlign: 'right',
    flex: 1,
    width: wp ('15%'),
  },
  servingsText: {
    backgroundColor: 'transparent',
    color: 'rgb(55, 58, 61)',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    marginBottom: 5,
    marginLeft: wp ('2%'),
  },
  toppings: {
    backgroundColor: 'transparent',
    color: 'rgb(55, 58, 61)',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 1,
    width: wp ('80%'),
    height: 35,
    marginLeft: wp ('2%'),
  },
  groupView: {
    backgroundColor: 'transparent',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: 'rgb(226, 175, 47)',
    borderStyle: 'solid',
    marginLeft: 15,
    marginBottom: 1,
    width: 45,
    height: 22,
    justifyContent: 'center',
  },
  textTwoText: {
    color: 'rgb(226, 175, 47)',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 45,
  },
});
