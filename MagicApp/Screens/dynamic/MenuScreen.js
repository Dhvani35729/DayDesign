//
//  MenuFour
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
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MenuItem from '../../models/MenuItem';
import {fetchMenu} from '../../api/load';
import {showPercentage} from '../../utils';
import {FETCH_INTERVAL} from '../../constants';

export default class MenuScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
      currentUser: null,
    };
  };

  constructor (props) {
    super (props);
    const {navigation} = this.props;
    var hourId = navigation.getParam ('hourId', null);
    var resData = navigation.getParam ('resData', []);
    this.state = {
      hourId: hourId,
      resData: resData,
      menu: [],
      all_listeners: [],
      refresh: false,
      refreshing: false,
    };
  }

  componentDidMount () {
    var menu_listener = null;
    this.props.navigation.addListener ('willBlur', playload => {
      clearInterval (menu_listener);
    });
    this.props.navigation.addListener ('willFocus', playload => {
      var resId = this.state.resData.key;
      var hourId = this.state.resData.hour_id.toString ();
      fetchMenu (this, resId, hourId);

      menu_listener = setInterval (
        () => fetchMenu (this, resId, hourId),
        FETCH_INTERVAL
      );
    });
  }

  componentWillUnmount () {
    // remove listeners
  }

  renderViewFlatListCell = ({item}) => {
    return (
      <MenuItem
        navigation={this.props.navigation}
        foodData={item}
        hourId={this.state.hourId}
        resData={this.state.resData}
      />
    );
  };

  handleRefresh = () => {
    this.setState (
      {
        refreshing: true,
      },
      () => {
        var resId = this.state.resData.key;
        var hourId = this.state.resData.hour_id.toString ();
        fetchMenu (this, resId, hourId);
      }
    );
  };

  render () {
    var resData = this.state.resData;
    var menu = this.state.menu;
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
            style={styles.icCartButton}
            onPress={() => {
              this.props.navigation.navigate ('CheckoutScreen', {
                resData: resData,
              });
            }}
          >
            <Image
              source={require ('../../assets/images/ic-cart-2.png')}
              style={styles.buttonButtonImageTwo}
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
                  ${resData.current_contribution}/{resData.needed_contribution}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            // width: "100%",
            // height: "100%",
            // position: "absolute",
            flex: 1,
          }}
        >
          <Text style={styles.shawarmaPlusText}>{resData.name}</Text>

          <View style={styles.viewFlatListViewWrapper}>
            <FlatList
              renderItem={this.renderViewFlatListCell}
              data={menu}
              extraData={this.state.refresh}
              style={styles.viewFlatList}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          </View>
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
  restHeaderTwoView: {
    backgroundColor: 'rgb(214, 112, 125)',
    borderRadius: 19,
    borderWidth: 2,
    borderColor: 'white',
    borderStyle: 'solid',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
    height: 59,
  },
  unlockFreeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 1,
    width: 352,
  },
  textText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 1,
    width: 352,
  },
  textTwoText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 17,
    width: 352,
  },
  viewFlatList: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('1%'),
    marginBottom: hp ('1%'),
    flex: 1,
  },
});
