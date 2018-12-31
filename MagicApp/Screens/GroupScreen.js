//
//  GroupsTwo.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { TextInput, FlatList, View, Text, StyleSheet } from "react-native"
import React from "react"
import GroupsTwo from './GroupsTwo'

export default class GroupScreen extends React.Component {

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

	groupFlatListMockData = [{
		key: "1",
		name: "Artifical Intelligence Updates",
	}, {
		key: "2",
		name: "NBA Finals",
	}, {
		key: "3",
			name: "NBA Finals",
	}, {
		key: "4",
			name: "NBA Finals",
	}, {
		key: "5",
			name: "NBA Finals",
	}, {
		key: "6",
			name: "NBA Finals",
	}, {
		key: "7",
			name: "NBA Finals",
	}, {
		key: "8",
			name: "NBA Finals",
	}, {
		key: "9",
			name: "NBA Finals",
	}, {
		key: "10",
			name: "NBA Finals",
	}]

	renderGroupFlatListCell = ({ item }) => {

		return <GroupsTwo/>
	}



// 	<View style={styles.MainContainer}>
//
//
//  <CardView
// 	 cardElevation={5}
// 	 cardMaxElevation={5}
// 	 cornerRadius={5}
// 	 style={styles.cardViewStyle}>
//
// 				 <Text style={styles.cardView_InsideText}> Simple CardView </Text>
//
//  </CardView>
//
// </View>

	render() {

		return(



						<GroupsTwo />



					)


	}
}

const styles = StyleSheet.create({
	groupsView: {
		backgroundColor: 'rgb(255, 255, 255)',
		flex: 1,
	},
	group5TextInput: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 17,
		borderWidth: 1,
		borderColor: 'rgb(196, 201, 223)',
		borderStyle: "solid",
		color: 'rgb(134, 142, 150)',
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 53,
		alignSelf: "stretch",
	},
	MainContainer: {

	 flex: 1,
	 backgroundColor: '#F5FCFF',
	 justifyContent: 'center',
	 alignItems: 'center',

 },

 cardViewStyle:{

	 width: 250,
	 height: 150,
	 backgroundColor: '#DCDCDC',

 },

 cardView_InsideText:{

	 fontSize: 20,
	 color: '#000',
	 textAlign: 'center',
	 marginTop: 50

 },
	group5Text: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		color: 'rgb(33, 34, 36)',
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 0,
		letterSpacing: 0,
		marginLeft: 30,
		marginTop: 40,
		alignSelf: "stretch",
	},
})
