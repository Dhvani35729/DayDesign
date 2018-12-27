//
//  Group7.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { StyleSheet, View, Image, Text } from "react-native"
import React from "react"


export default class Group7 extends React.Component {

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
								style={styles.williamSCafeText}>William’s Cafe</Text>
							<View
								style={{
									width: "100%",
									height: "100%",
									flexDirection: "row",
									position: "absolute",
								}}>
								<Text
									style={styles.pmText}>7:00PM </Text>
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
							style={styles.artificalIntelligenText}>Artifical Intelligence {"\
"}Updates</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	group7: {
		backgroundColor: 'rgb(255, 254, 253)',
		width: 150,
		height: 182,
		justifyContent: "center",
	},
	group6View: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "stretch",
		height: 307,
	},
	bitmapView: {
		backgroundColor: 'rgba(155, 155, 155, 0.15)',
		borderRadius: 8.2,
		width: 150,
		height: 150,
	},
	williamSCafeText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginBottom: 139,
		alignSelf: "flex-end",
		width: 69,
		height: 14,
	},
	pmText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginBottom: 126,
		alignSelf: "flex-end",
		width: 42,
		height: 14,
	},
	artificalIntelligenText: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(74, 78, 82)',
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0,
		marginLeft: 10,
		marginRight: 39,
		marginTop: 3,
		width: 101,
		height: 28,
	},
})
