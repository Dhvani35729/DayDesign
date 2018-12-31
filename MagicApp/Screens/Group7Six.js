//
//  Group7Six.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { StyleSheet, View, Text } from "react-native"
import React from "react"


export default class Group7Six extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.group7}>
				<View
					style={styles.group6View}>
					<View
						style={styles.bitmapView}/>
					<View
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							style={{
								flexDirection: "row",
							}}>
							<Text
								style={styles.lazeezText}>Lazeez</Text>
							<View
								style={{
									width: "100%",
									height: "100%",
									flexDirection: "row",
									position: "absolute",
								}}>
								<Text
									style={styles.pmText}>8:00PM  </Text>
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
							style={styles.projectIdeaThrowarText}>Project Idea Throwaround</Text>
						<Text
							style={styles.newText}>2 New</Text>
					</View>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<View
						style={styles.viewView}/>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						justifyContent: "center",
						position: "absolute",
					}}>
					<Text
						style={styles.textText}>{"\
"}</Text>
				</View>
				<View
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<Text
						style={styles.goingText}> </Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	group7: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: 150,
		height: 182,
		justifyContent: "center",
	},
	group6View: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "stretch",
		height: 182,
	},
	bitmapView: {
		backgroundColor: 'rgba(155, 155, 155, 0.15)',
		borderRadius: 8.2,
		alignSelf: "stretch",
		height: 150,
	},
	lazeezText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginBottom: 14,
		alignSelf: "flex-end",
	},
	pmText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginBottom: 1,
		alignSelf: "flex-end",
	},
	projectIdeaThrowarText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginLeft: 10,
		marginRight: 14,
		marginTop: 3,
		alignSelf: "stretch",
	},
	newText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginLeft: 10,
		marginTop: 112,
	},
	viewView: {
		backgroundColor: 'rgb(74, 78, 82)',
		borderRadius: 43,
		marginLeft: 31,
		marginRight: 31,
		marginTop: 35,
		marginBottom: 60,
		flex: 1,
	},
	textText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(127, 177, 233)',
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0,
		alignSelf: "center",
	},
	goingText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(240, 240, 240)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0,
		marginTop: 99,
		alignSelf: "center",
	},
})
