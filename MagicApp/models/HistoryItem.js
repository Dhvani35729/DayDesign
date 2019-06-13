//
//  ListRest1
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

export default class HistoryItem extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    const order = this.props.order;
    // console.log (order);
    return (
      <View style={styles.listRest1}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate ('CurrentOrderScreen', {
              currentOrder: order,
            })}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <View style={styles.group3View}>
              <Text style={styles.jawadSStyleChickText}>
                {order.res_name}
              </Text>
              <Text style={styles.pitaBreadStuffedWText}>
                {order.order_number}
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
                  $13.30
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}
                >
                  <Text style={styles.textText}>$10.30</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  listRest1: {
    backgroundColor: 'white',
    height: 75,
    marginBottom: 4,
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
    borderColor: '#E2AF2F',
    borderStyle: 'solid',
    marginLeft: wp ('1%'),
    marginTop: hp ('1%'),
    width: 39,
    height: 22,
    justifyContent: 'center',
  },
  textThreeText: {
    color: '#E2AF2F',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 39,
    height: 14,
  },
});
