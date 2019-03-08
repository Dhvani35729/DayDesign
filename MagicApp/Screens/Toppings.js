//
//  Toppings
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { View, Text, Image, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class Toppings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.item };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.view}>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <CheckBox
            textStyle={{
              fontFamily: "CircularStd-Bold",
              fontWeight: "normal"
            }}
            checkedColor="#00798c"
            containerStyle={{
              backgroundColor: "#fff",
              height: 3,
              width: 3,
              borderColor: "#fff",
              borderRadius: 30
            }}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />

          <Text style={styles.lettuceText}>Lettuce</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "transparent",
    height: 20,
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: wp("5%")
  },
  lettuceText: {
    color: "rgb(57, 60, 63)",
    fontSize: 13,
    height: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: wp("80%"),
    marginLeft: wp("5%"),
    marginTop: hp("1%")
  }
});
