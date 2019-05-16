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
  TouchableOpacity
} from "react-native";
import MenuItem from "./MenuItem";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class PickMenu extends React.Component {
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
    return <MenuItem navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.menuView}>
        <View style={styles.backgroundView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.icCloseButton}
          >
            <Image
              source={require("./../assets/images/ic-close.png")}
              style={styles.buttonButtonImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icCartButton}
            onPress={() => {
              this.props.navigation.navigate("Checkout");
            }}
          >
            <Image
              source={require("./../assets/images/ic-cart-2.png")}
              style={styles.buttonButtonImageTwo}
            />
          </TouchableOpacity>

          <View
            style={{
              //position: "absolute",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <View style={styles.graybackgroundView}>
              <Text style={styles.nextmoneyText}>10%</Text>
              <View
                style={{
                  // width: "100%",
                  // height: "100%",
                  flex: 1,
                  // position: "absolute",
                  justifyContent: "flex-end"
                }}
              >
                <Text style={styles.buyersneededText}>$95/100</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            // width: "100%",
            // height: "100%",
            // position: "absolute",
            flex: 1
          }}
        >
          <Text style={styles.shawarmaPlusText}>Shawarma Plus</Text>
            
            <View
            style={styles.restHeaderTwoView}>
            <Text
            style={styles.unlockFreeText}>unlock free</Text>
            <View
            pointerEvents="box-none"
            style={{
            flex: 1,
            justifyContent: "flex-end",
            }}>
            <Text
            style={styles.textText}>7/10</Text>
            </View>
            <View
            pointerEvents="box-none"
            style={{
            width: "100%",
            height: "100%",
            flex: 1,
            position: "absolute",
            justifyContent: "flex-end",
            }}>
            <Text
            style={styles.textTwoText}>Jawaes fdg drgy trdtdf trr fytfty</Text>
            </View>
            </View>
            
            
          <View style={styles.viewFlatListViewWrapper}>
            <FlatList
              renderItem={this.renderViewFlatListCell}
              data={this.viewFlatListMockData}
              style={styles.viewFlatList}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuView: {
    backgroundColor: "rgb(246, 246, 246)",
    flex: 1
  },
  backgroundView: {
    backgroundColor: "rgba(55, 58, 61, 0.9)",
    height: hp("16.5%"),
    flexDirection: "row"
  },
  icCloseButton: {
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginLeft: wp("5%"),
    marginTop: hp("5%"),
    width: 50,
    height: 50
  },
  icCloseButtonText: {
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  icCloseButtonImage: {
    resizeMode: "contain"
  },
  icCartButton: {
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: wp("61%"),
    marginTop: hp("5%"),
    width: 50,
    height: 50
  },
  icCartButtonText: {
    color: "black",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  icCartButtonImage: {
    resizeMode: "contain"
  },
                                 
                                 buttonButtonImage: {
                                 resizeMode: "contain",
                                 width: 60,
                                 height: 60
                                 },
                                 buttonButtonImageTwo: {
                                 resizeMode: "contain",
                                 width: 60,
                                 height: 60
                                 },
                                 
                                 
                                 
  graybackgroundView: {
    backgroundColor: "rgba(226, 175, 47, 0.99)",
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "rgb(246, 246, 246)",
    borderStyle: "solid",
    marginTop: hp("3%"),
    marginRight: wp("95%"),
    position: "relative",
    width: 70,
    height: 70
  },
  nextmoneyText: {
    color: "white",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: hp("1.5%"),
    width: 70
    //height: 29.92,
  },
  buyersneededText: {
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginBottom: hp("1.5%"),
    width: 70
  },
  shawarmaPlusText: {
    color: "rgb(246, 246, 246)",
    fontSize: hp("4%"),
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "rgb(114, 167, 228)",
    overflow: "hidden",
    // marginTop: hp('14%'),
    width: wp("100%"),
    height: hp("5%")
    //flex: 1,
  },
                                 restHeaderTwoView: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 19,
                                 borderWidth: 2,
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 marginLeft: 7,
                                 marginRight: 7,
                                 marginTop: 5,
                                 height: 59,
                                 },
                                 unlockFreeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginTop:     1,
                                 width: 352,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 1,
                                 width: 352,
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 17,
                                 width: 352,
                                 },
  viewFlatList: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  viewFlatListViewWrapper: {
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
    flex: 1
  }
});
