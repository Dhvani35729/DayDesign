//
//  VendorList
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { Text, StyleSheet, Image, View } from "react-native"
import React from "react"


export default class VendorList extends React.Component {

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

	render() {
	
		return <View
				style={styles.vendorlistView}>
				<View
					style={styles.groupView}>
					<Image
						source={require("./../assets/images/group-2.png")}
						style={styles.group2Image}/>
					<Text
						style={styles.searchRestaurantsOText}>Search restaurants or dishes</Text>
				</View>
				<View
					style={styles.smallRest1View}>
					<Image
						source={require("./../assets/images/group-3.png")}
						style={styles.group3Image}/>
					<View
						style={{
							width: "100%",
							height: "100%",
							position: "absolute",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.shawarmaPlusText}>Shawarma Plus </Text>
						<View
							style={styles.group8View}>
							<View
								style={styles.group7View}>
								<Text
									style={styles.textFourText}>$4</Text>
								<View
									style={{
										width: "100%",
										height: "100%",
										flex: 1,
										position: "absolute",
										justifyContent: "flex-end",
									}}>
									<Text
										style={styles.textFiveText}>10/16</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<View
									style={styles.group6View}>
									<Text
										style={styles.textText}>$2</Text>
									<View
										style={{
											width: "100%",
											height: "100%",
											flex: 1,
											position: "absolute",
											justifyContent: "flex-end",
										}}>
										<Text
											style={styles.textTwoText}>15/16</Text>
									</View>
								</View>
							</View>
							<View
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
									flexDirection: "row",
								}}>
								<View
									style={styles.group5View}>
									<Text
										style={styles.textSixText}>12/16</Text>
									<View
										style={{
											width: "100%",
											height: "100%",
											position: "absolute",
										}}>
										<Text
											style={styles.textSevenText}>$3</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "center",
									}}>
									<View
										style={styles.group4View}>
										<Text
											style={styles.activeText}>active</Text>
										<View
											style={{
												width: "100%",
												height: "100%",
												position: "absolute",
											}}>
											<Text
												style={styles.textThreeText}>$1</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	vendorlistView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	groupView: {
		backgroundColor: "white",
		borderRadius: 17,
		borderWidth: 1,
		borderColor: "rgb(196, 201, 223)",
		borderStyle: "solid",
		marginTop: 36,
		width: 315,
		height: 34,
		flexDirection: "row",
		alignItems: "center",
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 15,
		width: 10,
		height: 10,
	},
	searchRestaurantsOText: {
		color: "rgb(134, 142, 150)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
	},
	smallRest1View: {
		backgroundColor: "white",
		borderRadius: 8.2,
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		marginTop: 21,
		width: 312,
		height: 87,
		justifyContent: "center",
	},
	group3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 87,
	},
	shawarmaPlusText: {
		color: "rgb(55, 58, 61)",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 19,
	},
	group8View: {
		backgroundColor: "transparent",
		marginRight: 2,
		marginTop: 3,
		width: 200,
		height: 46,
		flexDirection: "row",
	},
	group7View: {
		backgroundColor: "transparent",
		width: 50,
		height: 37,
		alignSelf: "center",
	},
	textFourText: {
		color: "rgba(155, 155, 155, 0.2)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 11,
		marginRight: 11,
	},
	textFiveText: {
		color: "rgba(146, 146, 146, 0.2)",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 13,
		marginRight: 13,
	},
	group6View: {
		backgroundColor: "transparent",
		marginRight: 50,
		width: 51,
		height: 46,
	},
	textText: {
		color: "rgba(155, 155, 155, 0.8)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
		marginTop: 5,
	},
	textTwoText: {
		color: "rgba(155, 155, 155, 0.8)",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 14,
		marginRight: 13,
		marginBottom: 4,
	},
	group5View: {
		backgroundColor: "transparent",
		marginLeft: 49,
		width: 51,
		height: 46,
		alignSelf: "center",
		flex: 1,
		justifyContent: "flex-end",
	},
	textSixText: {
		color: "rgba(155, 155, 155, 0.4)",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 14,
		marginRight: 13,
		marginBottom: 4,
	},
	textSevenText: {
		color: "rgba(155, 155, 155, 0.4)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
		marginTop: 5,
	},
	group4View: {
		backgroundColor: "transparent",
		width: 51,
		height: 46,
		flex: 1,
		justifyContent: "flex-end",
	},
	activeText: {
		color: "rgb(114, 167, 228)",
		fontSize: 8,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 15,
		marginRight: 14,
		marginBottom: 4,
	},
	textThreeText: {
		color: "rgb(114, 167, 228)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 12,
		marginRight: 11,
		marginTop: 5,
	},
})
