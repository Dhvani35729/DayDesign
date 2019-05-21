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
  TouchableOpacity
} from "react-native";
import React from "react";
import RestaurantCell from "./RestaurantCell";

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}


export default class TimeCell extends React.Component {

  constructor(props) {
    super(props);

    var displayHour = ""

    var hourId = parseInt(this.props.hourId)
    if(hourId < 10){
      displayHour = tConvert("0" + hourId.toString() + ":00")
    }
    else{
      displayHour = tConvert(hourId.toString() + ":00")
    }

    this.state = {
      displayHour: displayHour
    }

  }

  componentDidMount() {}

  viewFlatListMockData = [
    {
      key: "1"
    },
  ];

  renderViewFlatListCell = ({ item }) => {
    return <RestaurantCell navigation={this.props.navigation} resData={item} />;
  };

  openVendorList() {
    this.props.navigation.navigate("VendorListScreen", {
      hourData: this.props.hourData,
    });
  }

  render() {
    var displayHour = this.state.displayHour;
    return (
      <View style={styles.timecell}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Text style={styles.timeText}>{ displayHour }</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.openVendorList();
              }}
              style={styles.seeallButton}
            >
              <Text style={styles.seeallButtonText}>See All</Text>
              <Image
                source={require("./../assets/images/seeallsymbol.png")}
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

const styles = StyleSheet.create({
  timecell: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    height: 152,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  timeText: {
    color: "rgb(3, 3, 3)",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing: 0.38,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    marginLeft: 17,
    marginTop: 7
  },
  seeallButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    //  marginRight: 16,
    marginTop: 9,
    width: 68,
    height: 23
  },
  seeallButtonText: {
    color: "rgb(191, 191, 191)",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  seeallButtonImage: {
    resizeMode: "contain",
    marginLeft: 3
  },
  viewFlatList: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    width: "100%",
    height: "100%"
  },
  viewFlatListViewWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    alignSelf: "stretch",
    height: 106
  }
});
