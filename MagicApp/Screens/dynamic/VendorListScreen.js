//
//  VendorList
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Vendor from '../../models/Vendor';

export default class VendorListScreen extends React.Component {
  constructor (props) {
    super (props);
    const {navigation} = this.props;
    var hourData = navigation.getParam ('hourData', []);
    this.arrayholder = [];
    this.state = {
      hourData: hourData,
      search: '',
    };
  }

  componentDidMount () {
    this.arrayholder = this.state.hourData;
  }

  search = text => {
    console.log (text);
  };
  clear = () => {
    this.search.clear ();
  };
  SearchFilterFunction (text) {
    const newData = this.arrayholder.filter (function (item) {
      const itemData = item.name ? item.name.toUpperCase () : ''.toUpperCase ();
      const textData = text.toUpperCase ();
      return itemData.indexOf (textData) > -1;
    });
    this.setState ({
      hourData: newData,
      search: text,
    });
  }

  ListEmpty = () => {
    return (
      //View to show when list is empty
      (
        <View style={styles.MainContainer}>
          <Text style={{textAlign: 'center'}}>No Restaurants Found</Text>
        </View>
      )
    );
  };

  componentWillUnmount () {}

  renderViewFlatListCell = ({item}) => {
    return <Vendor navigation={this.props.navigation} resData={item} />;
  };

  render () {
    return (
      <View style={styles.vendorlistView}>

        <TextInput
          placeholder="Search Restaurants"
          onChangeText={text => this.SearchFilterFunction (text)}
          onClear={text => this.SearchFilterFunction ('')}
          value={this.state.search}
          style={styles.group5TwoTextInput}
        />
        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={false}
            renderItem={this.renderViewFlatListCell}
            data={this.state.hourData}
            style={styles.viewFlatList}
            ListEmptyComponent={this.ListEmpty}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  vendorlistView: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 1,
  },
  group5TwoTextInput: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgb(196, 201, 223)',
    borderStyle: 'solid',
    color: 'rgb(134, 142, 150)',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0,
    marginTop: hp ('1%'),
    marginHorizontal: wp ('8%'),
    height: 35,
    alignSelf: 'stretch',
  },
  viewFlatList: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    width: '100%',
    height: '100%',
  },
  buttonButton: {
    //    position: "absolute",
    marginLeft: wp ('2%'),
    marginTop: hp ('3%'),
  },
  buttonButtonText: {
    color: 'rgba(155, 155, 155, 0.8)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    marginLeft: 3,
  },
  buttonButtonImage: {
    resizeMode: 'contain',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('2%'),
    marginBottom: hp ('2%'),
    flex: 1,
  },
});
