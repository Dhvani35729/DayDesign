//
//  ViewTwo.js
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import PickMenu from "./PickMenu";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class Vendor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("PickMenu");
          }}
        >
          <View style={styles.smallRest1View}>
            <Image
              source={require("./../assets/images/group-3.png")}
              style={styles.group3Image}
            />
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "flex-end",
                position: "absolute"
              }}
            >
              <Text style={styles.shawarmaPlusText}>Shawarma Plus</Text>
              <View style={styles.group8View}>
                <View style={styles.group7View}>
                  <Text style={styles.textFourText}>15%</Text>
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "stretch",
                      position: "absolute"
                    }}
                  >
                    <Text style={styles.textFiveText}>100/160</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center"
                  }}
                >
                  <View style={styles.group6View}>
                    <Text style={styles.textText}>20%</Text>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        flex: 1,
                        justifyContent: "flex-end",
                        alignItems: "stretch",
                        position: "absolute"
                      }}
                    >
                      <Text style={styles.textTwoText}>152/216</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "row",
                    position: "absolute"
                  }}
                >
                  <View style={styles.group5View}>
                    <Text style={styles.textSixText}>124/146</Text>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "flex-end",
                        position: "absolute"
                      }}
                    >
                      <Text style={styles.textSevenText}>20%</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}
                  >
                    <View style={styles.group4View}>
                      <Text style={styles.activeText}>active</Text>
                      <View
                        style={{
                          width: "100%",
                          height: "100%",
                          alignItems: "flex-end",
                          position: "absolute"
                        }}
                      >
                        <Text style={styles.textThreeText}>10%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    height: 87,
    alignItems: "center",
    marginBottom: 10
  },
  smallRest1View: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 8.2,
    borderWidth: 1,
    borderColor: "rgb(151, 151, 151)",
    borderStyle: "solid",
    width: wp('84%'),
    height: 87,
    marginBottom: 10,
    justifyContent: "center"
  },
  group3Image: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    resizeMode: "contain",
    width: wp('33%'),
    height: 87
  },
  shawarmaPlusText: {
    color: "rgb(55, 58, 61)",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    letterSpacing: 0,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginRight: wp('1%'),
    marginTop: hp('1%'),
  width: wp('51%'),
  },
  group8View: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginRight: wp('1%'),
    marginTop: wp('3%'),
    width: wp('51%'),
    flexDirection: "row",
    alignItems: "center",
  },
  group7View: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: wp('12.5%'),
    height: 30,
    alignItems: "stretch"
  },
  textFourText: {
    color: "rgba(155, 155, 155, 0.2)",
    width: wp('12%'),
                                 fontSize: 15,

    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    //letterSpacing: -0,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginLeft: wp('0.5%'),
    marginRight: wp('0.5%'),
  },
  textFiveText: {
    color: "rgba(155, 155, 155, 0.2)",
   fontSize: 8,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  //  letterSpacing: -0,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: wp('12%'),
    marginLeft: wp('0.5%'),
    marginRight: wp('0.5%'),
  },
  group6View: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginRight: 50,
                                 width: wp('12.5%'),
                                 height: 30,
    alignItems: "stretch"
  },
  textText: {
    color: "rgba(155, 155, 155, 0.8)",
                                 width: wp('12%'),
                                 fontSize: 15,

                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 //letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  },
  textTwoText: {
    color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 8,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 //  letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 width: wp('12%'),
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  },
  group5View: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    alignSelf: "center",
                                 width: wp('12.5%'),
                                 height: 30,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  textSixText: {
    color: "rgba(155, 155, 155, 0.4)",
                                 fontSize: 8,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 //  letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 width: wp('12%'),
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  },
  textSevenText: {
    color: "rgba(155, 155, 155, 0.4)",
                                 width: wp('12%'),
                                 fontSize: 15,

                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 //letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  },
  group4View: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    alignSelf: "center",
                                 width: wp('12.5%'),
                                 height: 30,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  activeText: {
                                 color: "#E2AF2F",
                                 fontSize: 8,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 //  letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 width: wp('12%'),
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  },
  textThreeText: {
                                 color: "#E2AF2F",
                                 width: wp('12%'),
                                 fontSize: 15,
                                 
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 //letterSpacing: -0,
                                 backgroundColor: "rgba(0, 0, 0, 0.0)",
                                 marginLeft: wp('0.5%'),
                                 marginRight: wp('0.5%'),
  }
});
