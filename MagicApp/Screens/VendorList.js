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
  Image,
  View,
  TextInput,
  FlatList
} from "react-native";
import React from "react";
import Vendor from "./Vendor";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class VendorList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  viewFlatListMockData = [
    {
      key: "1"
    },
    {
      key: "2"
    },
    {
      key: "3"
    },
    {
      key: "4"
    },
    {
      key: "5"
    },
    {
      key: "6"
    },
    {
      key: "7"
    },
    {
      key: "8"
    },
    {
      key: "9"
    },
    {
      key: "10"
    }
  ];

  renderViewFlatListCell = ({ item }) => {
    return <Vendor navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.vendorlistView}>
        <TextInput
          placeholder="Search Restaurants"
          onChangeText={text => this.searchFilterFunction(text)}
          style={styles.group5TwoTextInput}
        />
        <View style={styles.viewFlatListViewWrapper}>
          <FlatList
            horizontal={false}
            renderItem={this.renderViewFlatListCell}
            data={this.viewFlatListMockData}
            style={styles.viewFlatList}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vendorlistView: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1
  },
  group5TwoTextInput: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "rgb(196, 201, 223)",
    borderStyle: "solid",
    color: "rgb(134, 142, 150)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0,
    marginTop: hp('4%'),
    marginHorizontal: wp('8%'),
    height: 35,
    alignSelf: "stretch"
  },
  viewFlatList: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: "100%",
    height: "100%"
  },
  viewFlatListViewWrapper: {
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    flex: 1
  }
});
