//
//  DynamicScreen.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React, {useContext} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {TimeCell, TIME_CELL_HEIGHT} from '../../models/TimeCell';
import {user} from '../../api/config';
import {fetchCurrentOrder, fetchRestaurants} from '../../api/load';
import {tConvert} from '../../utils';
import LottieView from 'lottie-react-native';

import {FETCH_INTERVAL} from '../../constants';

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
      currentHours: [],
      showHours: [],
      refresh: false,
      currentOrder: null,
      all_listeners: [],
      loading: true,
      fetching_from_server: false,
      showingPastHours: false,
      refreshing: false,
      loadingOrder: true,
    };
  }

  attached = true;

  componentDidMount () {
    // console.log (FETCH_INTERVAL);
    var restaurant_listener = null;
    var current_order_listener = null;

    this.props.navigation.addListener ('willBlur', playload => {
      clearInterval (restaurant_listener);
      clearInterval (current_order_listener);
    });
    this.props.navigation.addListener ('willFocus', playload => {
      fetchRestaurants (this).catch (error => {
        console.error (error);
      });
      fetchCurrentOrder (this, 'DynamicScreen').catch (error => {
        console.error (error);
      });
      // restaurant_listener = setInterval (
      //   () => fetchRestaurants (this),
      //   FETCH_INTERVAL
      // );
      // current_order_listener = setInterval (
      //   () => fetchCurrentOrder (this, 'DynamicScreen'),
      //   FETCH_INTERVAL + 60000
      // );
    });
  }

  componentWillUnmount () {
    // remove listeners
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

  handleRefresh = () => {
    this.setState (
      {
        refreshing: true,
      },
      () => {
        fetchRestaurants (this);
        fetchCurrentOrder (this, 'DynamicScreen');
      }
    );
  };

  loadMoreData = () => {
    this.setState ({fetching_from_server: true}, () => {
      if (this.state.showingPastHours) {
        this.setState (
          {
            showHours: this.state.currentHours,
          },
          () => {
            this.setState ({
              fetching_from_server: false,
              showingPastHours: false,
            });
          }
        );
      } else {
        this.setState (
          {
            showHours: this.state.allHours,
          },
          () => {
            this.setState ({
              fetching_from_server: false,
              showingPastHours: true,
            });
          }
        );
      }
    });
  };

  renderFooter () {
    const showingPastHours = this.state.showingPastHours;
    return (
      //Footer View with Load More button
      (
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.loadMoreData}
            //On Click of button calling loadMoreData function to load more data
            style={styles.loadMoreBtn}
          >
            <Text style={styles.btnText}>
              {showingPastHours ? 'Hide Past Hours' : 'Load Past Hours'}
            </Text>
            {this.state.fetching_from_server
              ? <ActivityIndicator color="white" style={{marginLeft: 8}} />
              : null}
          </TouchableOpacity>
        </View>
      )
    );
  }

  formatTime (time) {
    if (time < 10) {
      return tConvert ('0' + time.toString () + ':59');
    } else {
      return tConvert (time.toString () + ':59');
    }
  }

  render () {
    const allHours = this.state.allHours;
    const showHours = this.state.showHours;
    const currentOrder = this.state.currentOrder
      ? this.state.currentOrder['order_info']
      : null;
    const currentHour = new Date ().getHours ();
    const showingPastHours = this.state.showingPastHours;
    return (
      <View style={styles.restauranthomeView}>
        <TouchableOpacity
          onPress={() => {
            currentOrder
              ? this.props.navigation.navigate ('CurrentOrderScreen')
              : this.props.navigation.navigate ('HistoryScreen');
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
              <View>

                {this.state.loadingOrder &&
                  <ActivityIndicator
                    style={styles.orderLoadingSpinner}
                    color="white"
                    size="large"
                  />}

                {!this.state.loadingOrder &&
                  <Text style={styles.labelText}>
                    {currentOrder ? currentOrder.res_name : 'No Current Orders'}
                  </Text>}

                {!this.state.loadingOrder &&
                  !currentOrder &&
                  <Text style={styles.labelTexthistory}>
                    {!currentOrder ? 'Click for Purchase History' : ''}
                  </Text>}

                <View style={styles.viewFourView}>
                  <Text style={styles.labelSixText}>
                    {currentOrder ? currentOrder.order_number : ''}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Text style={styles.labelFiveText}>
                      {currentOrder
                        ? this.formatTime (currentOrder.hour_start)
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
                        ? currentOrder.status_ready ? 'Ready' : 'Not Ready'
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
          {this.state.loading
            ? <LottieView
                source={require ('../../assets/animations/pizza.json')}
                autoPlay
                loop
              />
            : <FlatList
                horizontal={false}
                ref={ref => {
                  this.flatListRef = ref;
                }}
                renderItem={this.renderViewFlatListCell}
                data={showHours}
                extraData={this.state.refresh}
                style={styles.viewFlatList}
                initialScrollIndex={
                  showingPastHours ? (allHours.length > 0 ? currentHour : 0) : 0
                }
                getItemLayout={(data, index) => ({
                  length: TIME_CELL_HEIGHT,
                  offset: TIME_CELL_HEIGHT * index,
                  index,
                })}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                ListFooterComponent={this.renderFooter.bind (this)}
              />}
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
    marginTop: 3,
  },
  labelTexthistory: {
    height: 40,
    width: wp ('90%'),
    color: 'white',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: 8,
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
  loadMoreBtn: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'rgb(200, 200, 200)',
    fontSize: 13,
    textAlign: 'center',
  },
  orderLoadingSpinner: {
    marginTop: 20,
  },
});
