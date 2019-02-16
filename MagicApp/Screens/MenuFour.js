//
//  MenuFour
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { FlatList, Text, View, StyleSheet, Image } from "react-native"
import ListRest1 from "./ListRest1"
import React from "react"


export default class MenuFour extends React.Component {

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
	
		return <ListRest1/>
	}

	render() {
	
		return <View
				style={styles.menuView}>
				<View
					style={styles.backgroundView}>
					<Image
						source={require("./../assets/images/ic-close.png")}
						style={styles.icCloseImage}/>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						<Image
							source={require("./../assets/images/ic-cart-2.png")}
							style={styles.icCartImage}/>
					</View>
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
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<Text
						style={styles.shawarmaPlusText}>Shawarma Plus</Text>
					<View
						style={styles.viewFlatListViewWrapper}>
						<FlatList
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
		backgroundColor: "rgb(246, 246, 246)",
		flex: 1,
	},
	backgroundView: {
		backgroundColor: "rgba(55, 58, 61, 0.9)",
		height: 123,
		flexDirection: "row",
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
	icCartImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.11)",
		shadowRadius: 3,
		shadowOpacity: 1,
		marginRight: 19,
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
		marginBottom: 8,
		flex: 1,
	},
})
