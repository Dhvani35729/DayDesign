//
//  TimeCell.js
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {
  Text,
  Image,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import RestaurantCell from './RestaurantCell';
import {tConvert} from '../utils/index';

var TIME_CELL_HEIGHT = 152;

class TimeCell extends React.Component {
  constructor (props) {
    super (props);

    var displayHour = '';

    var hourId = parseInt (this.props.hourId);
    if (hourId < 10) {
      displayHour = tConvert ('0' + hourId.toString () + ':00');
    } else {
      displayHour = tConvert (hourId.toString () + ':00');
    }



    const currentHour = (new Date()).getHours();
    if(hourId < currentHour){
      this.state = {
        displayHour: displayHour,
        enabled: false
      };
    }
    else{
      this.state = {
        displayHour: displayHour,
        enabled: true
      };
    }

  }

  componentDidMount () {}

  componentWillUnmount () {}

  renderViewFlatListCell = ({item}) => {
    return <RestaurantCell navigation={this.props.navigation} resData={item} enabled={this.state.enabled} />;
  };

  openVendorList () {
    this.props.navigation.navigate ('VendorListScreen', {
      hourData: this.props.hourData,
    });
  }

  render () {
    var displayHour = this.state.displayHour;
    return (
      <View style={[styles.timecell, {opacity: this.state.enabled ? 1 : 0.3}]}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text style={styles.timeText}>{displayHour}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.openVendorList ();
              }}
              disabled={!this.state.enabled}
              style={styles.seeallButton}
            >
              <Text style={styles.seeallButtonText}>See All</Text>
              <Image
                source={require ('./../assets/images/seeallsymbol.png')}
                style={styles.seeallButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={true}
            renderItem={this.renderViewFlatListCell}
            data={this.props.hourData}
            style={styles.viewFlatList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  timecell: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    height: TIME_CELL_HEIGHT,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  timeText: {
    color: 'rgb(3, 3, 3)',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    letterSpacing: 0.38,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    marginLeft: 17,
    marginTop: 7,
  },
  seeallButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    //  marginRight: 16,
    marginTop: 9,
    width: 68,
    height: 23,
  },
  seeallButtonText: {
    color: 'rgb(191, 191, 191)',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  seeallButtonImage: {
    resizeMode: 'contain',
    marginLeft: 3,
  },
  viewFlatList: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
  },
  viewFlatListViewWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    alignSelf: 'stretch',
    height: 106,
  },
});

export {TimeCell, TIME_CELL_HEIGHT};