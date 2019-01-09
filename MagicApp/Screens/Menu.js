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

		return <Friend/>
	}

	render() {

		return <View
				style={styles.menuView}>
				<View
					style={styles.backgroundView}>
					<TouchableOpacity
						onPress={this.onIcCloseTwoPressed}
						style={styles.icCloseButton}/>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.viewView}>
							<TouchableOpacity
								onPress={this.onIcCartPressed}
								style={styles.icCartButton}/>
							<View
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
								}}>
								<Image
									source={require("./../assets/images/bitmap-3.png")}
									style={styles.bitmapImage}/>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<View
						style={styles.restHeaderView}>
						<Text
							style={styles.theTandoorText}>The Tandoor</Text>
						<Text
							style={styles.pmText}>8:00PM       </Text>
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
			</View>
	}
}

const styles = StyleSheet.create({
	menuView: {
		backgroundColor: 'rgb(246, 246, 246)',
		flex: 1,
	},
	backgroundView: {
		backgroundColor: 'rgb(55, 58, 61)',
		marginTop: -15,
		alignSelf: "stretch",
		height: 178.45,
		flexDirection: "row",
	},
	icCloseButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		shadowColor: 'rgba(0, 0, 0, 0.10594995)',
		shadowRadius: 3,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 16,
		marginTop: 53,
		width: 60,
		height: 61,
	},
	icCloseButtonImage: {
		resizeMode: "contain",
	},
	icCloseButtonText: {
		color: 'rgb(0, 0, 0)',
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	viewView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 19,
		marginTop: 39,
		width: 60,
		height: 74.71,
	},
	icCartButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-end",
		width: 60,
		height: 74.71,
	},
	icCartButtonImage: {
		resizeMode: "contain",
	},
	icCartButtonText: {
		color: 'rgb(0, 0, 0)',
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
	},
	bitmapImage: {
		resizeMode: "center",
		backgroundColor: 'rgba(255, 255, 255, 0.0)',
		marginRight: 16,
		marginTop: 32,
		alignSelf: "flex-end",
		width: 27,
		height: 27,
	},
	restHeaderView: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 38,
		marginTop: 126,
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
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: "100%",
		height: "100%",
	},
	viewFlatListViewWrapper: {
		marginTop: 9,
		marginBottom: 14,
		flex: 1,
	},
})
