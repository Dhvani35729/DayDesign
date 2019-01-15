//
//  Menu.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { TouchableOpacity, Image, View, StyleSheet, FlatList, Text } from "react-native"
import React from "react"
import Friend from "./Friend"


export function    tConvert (time) {

    // Check correct time format and split into components

    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];



    if (time.length > 1) { // If time format correct

        time = time.slice (1);  // Remove full string match value

        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours

    }

    return time.join (''); // return adjusted time or original string

}

export default class Menu extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
			console.log("in menu");
			console.log(this.props.item);
	}

	componentDidMount() {



	}

	onIcCartPressed = () => {

	}

	onIcCloseTwoPressed = () => {

	}

	viewFlatListMockData = [{
		key: "1",
	}, {
		key: "2",
	}, {
		key: "3",
	}, {
		key: "4",
	}, {
		key: "5",
	}, {
		key: "6",
	}, {
		key: "7",
	}, {
		key: "8",
	}, {
		key: "9",
	}, {
		key: "10",
	}]

	renderViewFlatListCell = ({ item }) => {
    console.log("open friends");
    // console.log(this.state.friendData);
		return(<Friend item={item}/>)
	}

	render() {

		return <View
        style={styles.menuView}>
        <View
        style={{
        flexDirection: "row",
        }}>
        <TouchableOpacity
        style={styles.buttonButton}>
        <Image
        source={require("./../assets/images/ic-close.png")}
        style={styles.buttonButtonImage}/>
        <Text
        style={styles.buttonButtonText}></Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonTwoButton}>
        <Image
        source={require("./../assets/images/bob-2.png")}
        style={styles.buttonButtonImage}/>
        </TouchableOpacity>
        </View>
        <View
        style={styles.restHeaderView}>
        <Text
        style={styles.theTandoorText}>{this.props.item.location_name + ' | ' + this.props.item.group_name}</Text>
        <Text
        style={styles.pmText}>{tConvert(this.props.item.time)}</Text>
        </View>
        <View
        style={styles.viewFlatListViewWrapper}>
        <FlatList
        horizontal={false}
        renderItem={this.renderViewFlatListCell}
        data={this.viewFlatListMockData}
        style={styles.viewFlatList}/>
        </View>
        </View>
    }
}

const styles = StyleSheet.create({
                                 menuView: {
                                 backgroundColor: 'rgb(55, 58, 61)',
                                 flex: 1,
                                 },
                                 buttonButton: {
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 marginLeft: 30,
                                 marginTop: 42,
                                 width: 60,
                                 height: 60,
                                 },
                                 buttonButtonText: {
                                 color: 'rgb(255, 255, 255)',
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 letterSpacing: 0,
                                 },
                                 buttonButtonImage: {
                                 resizeMode: "contain",
                                 },
                                 buttonTwoButton: {
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                marginLeft: 200,
                                 marginTop: 40,
                                 width: 60,
                                 height: 60,
                                 },
                                 buttonTwoButtonText: {
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 letterSpacing: 0,
                                 },
                                 buttonTwoButtonImage: {
                                 resizeMode: "contain",
                                // marginRight: 10,
                            },
                                 restHeaderView: {
                                 backgroundColor: 'rgb(255, 255, 255)',
                                 marginTop: 36,
                                 alignSelf: "stretch",
                                 height: 93,
                                 },
                                 theTandoorText: {
                                 color: 'rgb(55, 58, 61)',
                                 fontSize: 24,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 letterSpacing: 0,
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 marginLeft: 20,
                                 marginTop: 20,
                                 width: 318,
                                 height: 33,
                                 },
                                 pmText: {
                                 color: 'rgb(113, 118, 122)',
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 letterSpacing: 0,
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 marginLeft: 20,
                                 width: 74,
                                 height: 19,
                                 },
                                 viewFlatList: {
                                 backgroundColor: 'rgb(246, 246, 246)',
                                 width: "100%",
                                 height: "100%",

                                 },
                                 viewFlatListViewWrapper: {
                                 marginLeft: -3,
                                 marginRight: 3,
                                 flex: 1,
                                 },
                                 })
