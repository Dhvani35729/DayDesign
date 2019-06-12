//
//  ViewTwo.js
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Vendor extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount () {}

  componentWillUnmount () {}

  render () {
    var resData = this.props.resData;
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate ('MenuScreen', {
              resData: resData,
            });
          }}
        >
          <View style={styles.smallRest1View}>
            <View
              pointerEvents="box-none"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <View
                pointerEvents="box-none"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require ('./../assets/images/vendorpic.jpg')}
                  style={styles.rectangle3Image}
                />
              </View>
              <View
                pointerEvents="box-none"
                style={{
                  position: 'absolute',
                  left: 102,
                  right: 15,
                  top: 0,
                  bottom: 13,
                }}
              >
                <Text style={styles.shawarmaPlusText}>{resData.name}</Text>
                <View
                  style={{
                    flex: 1,
                  }}
                />
                <View
                  pointerEvents="box-none"
                  style={{
                    height: 16,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}
                >
                  <Text style={styles.textFourText}>REMOVE</Text>
                  <View
                    style={{
                      flex: 1,
                    }}
                  />
                  <Text style={styles.textTwoText}>
                    $
                    {resData.current_contribution}
                    /
                    {resData.needed_contribution}
                  </Text>
                  <Text style={styles.discountText}>discount</Text>
                </View>
              </View>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
              }}
            >
              <View
                pointerEvents="box-none"
                style={{
                  height: 29,
                  marginLeft: 103,
                  marginRight: 22,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.textFiveText}>-0%</Text>
                <View
                  style={{
                    flex: 1,
                  }}
                />
                <Text style={styles.textText}>
                  {(resData.next_discount * 100).toFixed (0)}%
                </Text>
                <Text style={styles.textThreeText}>
                  {(resData.current_discount * 100).toFixed (0)}%
                </Text>
              </View>
            </View>
          </View>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  view: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: 87,
    alignItems: 'center',
    marginBottom: 10,
  },
  smallRest1View: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 8.2,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
    borderStyle: 'solid',
    width: wp ('84%'),
    height: 87,
    marginBottom: 10,
    justifyContent: 'center',
  },
  rectangle3Image: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    resizeMode: 'contain',
    marginLeft: 6,
    width: 85,
    height: 85,
  },
  shawarmaPlusText: {
    backgroundColor: 'transparent',
    color: 'rgb(55, 58, 61)',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    alignSelf: 'flex-end',
    width: 210,
  },
  textFourText: {
    backgroundColor: 'transparent',
    color: 'rgba(155, 155, 155, 0.4)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  textTwoText: {
    backgroundColor: 'transparent',
    color: 'rgba(155, 155, 155, 0.8)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginRight: 25,
  },
  discountText: {
    backgroundColor: 'transparent',
    color: 'rgb(226, 175, 47)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  textFiveText: {
    backgroundColor: 'transparent',
    color: 'rgba(155, 155, 155, 0.4)',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textText: {
    backgroundColor: 'transparent',
    color: 'rgba(155, 155, 155, 0.8)',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 32,
  },
  textThreeText: {
    backgroundColor: 'transparent',
    color: 'rgb(226, 175, 47)',
    fontSize: 21,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
