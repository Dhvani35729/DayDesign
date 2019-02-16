//
//  Menu
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { Text, StyleSheet, FlatList, View } from "react-native"
import React from "react"
import ListRest1Two from "./ListRest1Two"


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
	
		return <ListRest1Two/>
	}

	render() {
	
		return <View
				style={styles.menuView}>
				<View
					style={styles.backgroundView}>
					<View
						style={styles.graybackgroundView}/>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<Text
						style={styles.shawarmaPlusText}>Current Order</Text>
					<View
						style={styles.viewFlatListViewWrapper}>
						<FlatList
							renderItem={this.renderViewFlatListCell}
							data={this.viewFlatListMockData}
							style={styles.viewFlatList}/>
					</View>
					<View
						style={styles.viewTwoView}>
						<View
							style={styles.viewThreeView}>
							<Text
								style={styles.statusText}>Status:</Text>
							<Text
								style={styles.readyText}>Ready</Text>
						</View>
						<View
							style={{
								flex: 1,
								justifyContent: "flex-end",
							}}>
							<View
								style={styles.viewFourView}>
								<Text
									style={styles.pickUpBeforeText}>Pick-Up Before:</Text>
								<Text
									style={styles.amText}>11:30 AM</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.viewView}>
						<View
							style={styles.backgroundTwoView}/>
						<View
							style={{
								width: "100%",
								height: "100%",
								flex: 1,
								position: "absolute",
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.orderNumberText}>Order Number:</Text>
							<Text
								style={styles.mb2Text}>36MB2</Text>
						</View>
					</View>
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
		alignItems: "center",
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
	viewTwoView: {
		backgroundColor: "transparent",
		marginTop: 10,
		width: 361,
		alignSelf: "center",
		flex: 1,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 46,
	},
	statusText: {
		color: "rgb(74, 74, 74)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		width: 360,
	},
	readyText: {
		color: "rgb(74, 74, 74)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 361,
	},
	viewFourView: {
		backgroundColor: "transparent",
		marginLeft: 1,
		height: 46,
		flex: 1,
		justifyContent: "flex-end",
	},
	pickUpBeforeText: {
		color: "rgb(74, 74, 74)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 360,
	},
	amText: {
		color: "rgb(74, 74, 74)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 1,
		width: 359,
	},
	viewView: {
		backgroundColor: "transparent",
		marginLeft: 6,
		marginRight: 6,
		marginTop: 15,
		marginBottom: 27,
		height: 56,
		flex: 1,
		justifyContent: "flex-end",
	},
	backgroundTwoView: {
		backgroundColor: "rgb(73, 76, 79)",
		borderRadius: 22,
		height: 56,
		alignItems: "flex-start",
	},
	orderNumberText: {
		color: "rgb(246, 246, 246)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 1,
		width: 362,
	},
	mb2Text: {
		color: "rgb(246, 246, 246)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 1,
		marginBottom: 6,
		width: 362,
	},
})
