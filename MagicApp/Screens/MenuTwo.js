//
//  MenuTwo
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import React from "react"
import ListRest1TwoTwo from "./ListRest1TwoTwo"


export default class MenuTwo extends React.Component {

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

	onPayWithCardPressed = () => {
	
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
	
		return <ListRest1TwoTwo/>
	}

	render() {
	
		return <View
				style={styles.menuView}>
				<View
					style={styles.backgroundView}>
					<View
						style={{
							flexDirection: "row",
						}}>
						<Image
							source={require("./../../assets/images/ic-close.png")}
							style={styles.icCloseImage}/>
						<View
							style={{
								width: "100%",
								height: "100%",
								position: "absolute",
								flexDirection: "row",
								justifyContent: "center",
							}}>
							<View
								style={styles.graybackgroundView}/>
						</View>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<Text
						style={styles.shawarmaPlusText}>Checkout</Text>
					<View
						style={styles.viewFlatListViewWrapper}>
						<FlatList
							renderItem={this.renderViewFlatListCell}
							data={this.viewFlatListMockData}
							style={styles.viewFlatList}/>
					</View>
					<View
						style={styles.group3View}>
						<Text
							style={styles.subtotal4400Text}>SubTotal: $44.00</Text>
						<View
							style={{
								flex: 1,
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.total5000Text}>Total: $50.00</Text>
						</View>
						<View
							style={{
								width: "100%",
								height: "100%",
								position: "absolute",
								justifyContent: "center",
							}}>
							<Text
								style={styles.tax600Text}>Tax: $6.00</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={this.onPayWithCardPressed}
						style={styles.payWithCardButton}>
						<Text
							style={styles.payWithCardButtonText}>Pay  With Card</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	menuView: {
		backgroundColor: "rgb(246, 246, 246)",
		flex: 1,
	},
	backgroundView: {
		backgroundColor: "rgba(55, 58, 61, 0.9)",
		height: 123,
	},
	icCloseImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.11)",
		shadowRadius: 3,
		shadowOpacity: 1,
		marginLeft: 18,
		marginTop: 25,
		width: 50,
		height: null,
	},
	graybackgroundView: {
		backgroundColor: "rgba(226, 175, 47, 0.99)",
		borderRadius: 35,
		borderWidth: 2,
		borderColor: "rgb(246, 246, 246)",
		borderStyle: "solid",
		marginTop: 15,
		width: 70,
		height: 70,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	shawarmaPlusText: {
		color: "rgb(246, 246, 246)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "rgb(114, 167, 228)",
		borderRadius: 20,
		marginTop: 105,
		width: 375,
		flex: 1,
	},
	viewFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	viewFlatListViewWrapper: {
		marginTop: 11,
		flex: 1,
	},
	group3View: {
		backgroundColor: "transparent",
		marginLeft: 8,
		marginRight: 8,
		marginTop: 16,
		flex: 1,
	},
	subtotal4400Text: {
		color: "rgb(55, 58, 61)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 358,
	},
	total5000Text: {
		color: "rgb(55, 58, 61)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 358,
	},
	tax600Text: {
		color: "rgb(55, 58, 61)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 358,
	},
	payWithCardButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginTop: 18,
		marginBottom: 30,
		width: 121,
		height: 25,
		alignSelf: "center",
	},
	payWithCardButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	payWithCardButtonText: {
		color: "rgb(91, 158, 236)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
