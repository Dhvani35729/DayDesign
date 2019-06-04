//
//  DynamicScreen.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React, {useContext} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TimeCell, TIME_CELL_HEIGHT} from '../../models/TimeCell';
import {loadRestaurants, loadCurrentOrder} from '../../api/load';
import {user} from '../../api/config';
import {tConvert} from '../../utils';

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

  constructor (props) {
    super (props);

    this.state = {
      user: user,
      allHours: [],
      refresh: false,
      currentOrder: null,
      all_listeners: [],
    };
  }

  componentDidMount () {
    this.props.navigation.addListener ('willBlur', playload => {
      this.detachListeners ();
    });

    this.props.navigation.addListener ('willFocus', playload => {
      loadRestaurants (this);
      loadCurrentOrder (this);
    });
  }

  detachListeners () {
    this.state.all_listeners.forEach (function (listener) {
      listener ();
    });
  }

  componentWillUnmount () {
    // remove listeners
    this.detachListeners ();
  }

  renderViewFlatListCell = ({item}) => {
    return (
      <TimeCell
        navigation={this.props.navigation}
        hourId={item.key}
        hourData={item.data}
      />
    );
  };

  formatPickupTime (pickup_time) {
    if (pickup_time - 1 < 10) {
      return tConvert ('0' + (pickup_time - 1).toString () + ':59');
    } else {
      return tConvert ((pickup_time - 1).toString () + ':59');
    }
  }

  render () {
    const allHours = this.state.allHours;
    const currentOrder = this.state.currentOrder;
    const currentHour = new Date ().getHours ();
    return (
      <View style={styles.restauranthomeView}>
        <TouchableOpacity
          onPress={() => {
            currentOrder ?
            this.props.navigation.navigate ('CurrentOrderScreen', {
              currentOrder: currentOrder,
            }) : this.props.navigation.navigate ('History');
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
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                }}
              >

                <Text style={styles.labelText}>
                {currentOrder ? currentOrder.res_name : 'No Current Orders'}
              </Text>


            {!currentOrder
              &&
                <Text style={styles.labelTexthistory}>
                  {!currentOrder ? 'Click for Purchase History' : ''}
                </Text>
            }


                <View style={styles.viewFourView}>
                  <Text style={styles.labelSixText}>{currentOrder ? currentOrder.order_number : ''}</Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Text style={styles.labelFiveText}>
                      {currentOrder
                        ? this.formatPickupTime (currentOrder.pickup_time)
                        : ''}
                    </Text>
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
                    <Text style={styles.labelSevenText}>
                      {currentOrder
                        ? currentOrder.state == 'building' ? 'Building' :
                        currentOrder.status ? 'Ready' : 'Not Ready'
                        : ''}
                    </Text>
                  </View>
                </View>


                <View style={styles.viewThreeView}>

                  <Text style={styles.labelThreeText}>
                    {currentOrder ? 'Order Number' : ''}
                  </Text>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >

                    <Text style={styles.labelTwoText}>
                      {currentOrder ? 'Pick Up By' : ''}
                    </Text>

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

                    <Text style={styles.labelFourText}>
                      {currentOrder ? 'Status' : ''}
                    </Text>

                  </View>
                </View>

              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={false}
            ref={ref => {
              this.flatListRef = ref;
            }}
            renderItem={this.renderViewFlatListCell}
            data={allHours}
            extraData={this.state.refresh}
            style={styles.viewFlatList}
            initialScrollIndex={allHours.length > 0 ? currentHour : 0}
            getItemLayout={(data, index) => ({
              length: TIME_CELL_HEIGHT,
              offset: TIME_CELL_HEIGHT * index,
              index,
            })}
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
    marginTop: hp ('6%'),
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
  },
  labelTexthistory: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 15,
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
