//
//  DynamicScreen.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Alert,
  ScrollView,
  AppState,
  StatusBar,
  BackHandler,
  Platform,
  ActivityIndicator,
  WebView,
  Linking,
  NetInfo
} from "react-native";
import DeviceInfo from "react-native-device-info";
import RNExitApp from "react-native-exit-app";
import PushNotification from "react-native-push-notification";
import firebase from "react-native-firebase";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import TimeCell from "./TimeCell";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class DynamicScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
      currentUser: null
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

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
    return <TimeCell navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.restauranthomeView}>
            
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate("CurrentOrder")}}>
            <View
            style={styles.viewView}>
            <View
            style={styles.viewTwoView}/>
            <View
            style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            }}>
            <Text
            style={styles.labelText}>Shawerma Plus</Text>
            <View
            style={{
            flex: 1,
            justifyContent: "flex-end",
            }}>
            <View
            style={styles.viewFourView}>
            <Text
            style={styles.labelSixText}>368b3</Text>
            <View
            style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            }}>
            <Text
            style={styles.labelFiveText}>11:30AM</Text>
            </View>
            <View
            style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            flexDirection: "row",
            justifyContent: "center",
            }}>
            <Text
            style={styles.labelSevenText}>Ready</Text>
            </View>
            </View>
            <View
            style={styles.viewThreeView}>
            <Text
            style={styles.labelThreeText}>Order Number</Text>
            <View
            style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            }}>
            <Text
            style={styles.labelTwoText}>Pick Up By</Text>
            </View>
            <View
            style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            flexDirection: "row",
            justifyContent: "center",
            }}>
            <Text
            style={styles.labelFourText}>Status</Text>
            </View>
            </View>
            </View>
            </View>
            </View>
            </TouchableOpacity>

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
  restauranthomeView: {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1
  },
  viewFlatList: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: "100%",
    height: "100%"
  },
  viewFlatListViewWrapper: {
                                 marginTop: hp('1%'),
                                 marginBottom: 6,
                                 flex: 1,
  },
                                 viewView: {
                                 backgroundColor: "transparent",
                                 marginLeft: wp('4%'),
                                 marginRight: wp('4%'),
                                 marginTop: hp('4%'),
                                 height: 75,
                                 },
                                 viewTwoView: {
                                 backgroundColor: "rgb(227, 176, 22)",
                                 borderRadius: 8,
                                 width: 346,
                                 height: 75,
                                 alignItems: "flex-start",
                                 },
                                 labelText: {
                                 color: "black",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "600",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 marginTop: 3,
                                 },
                                 viewFourView: {
                                 backgroundColor: "transparent",
                                 marginLeft: 9,
                                 marginRight: 9,
                                 marginBottom: hp('1%'),
                                 flexDirection: "row",
                                 },
                                 labelSixText: {
                                 color: "black",
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "500",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 },
                                 labelFiveText: {
                                 color: "black",
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "500",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 marginRight: 1,
                                 },
                                 labelSevenText: {
                                 color: "black",
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "500",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 },
                                 viewThreeView: {
                                 backgroundColor: "transparent",
                                 marginLeft: 9,
                                 marginRight: 9,
                                 marginBottom: 7,
                                 flexDirection: "row",
                                 },
                                 labelThreeText: {
                                 color: "black",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "300",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 },
                                 labelTwoText: {
                                 color: "black",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "300",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 },
                                 labelFourText: {
                                 color: "black",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "300",
                                 textAlign: "center",
                                 backgroundColor: "transparent",
                                 },
});
