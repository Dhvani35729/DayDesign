//
//  ViewTwo
//  dynamic
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { Text, StyleSheet, Image, View } from "react-native"
import React from "react"


export default class ViewTwo extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.view}>
				<Image
					source={require("./../../assets/images/cells-editing-reveal.png")}
					style={styles.cellsEditingRevealImage}/>
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "flex-end",
					}}>
					<Text
						style={styles.lettuceText}>Lettuce</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "transparent",
		height: 18,
		flexDirection: "row",
	},
	cellsEditingRevealImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginLeft: 23,
		width: 18,
		height: null,
	},
	lettuceText: {
		color: "rgb(57, 60, 63)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 21,
		width: 307,
	},
})
