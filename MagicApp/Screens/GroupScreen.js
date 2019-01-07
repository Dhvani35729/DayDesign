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
import DeviceInfo from 'react-native-device-info';
import firebase from 'react-native-firebase'
// import ArtBoard from './ArtBoard'


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
			 this.state = { groupData: [] };
			 console.log('sotp')
			 console.log(this.state)
	}

	loadGroups(my){

		firebase.database().ref('groups').on('value', function(snapshot) {

  	console.log(snapshot.val());
		console.log(my.state)
		console.log("hi")
		my.setState({groupData: snapshot.val()});

		// for(var i = 1; i < snapshot.val().length; i++){
		// 		console.log(i);
		// 		console.log(snapshot.val()[i].group_name);
		// 		var group = [];
		// 		group.push(snapshot.val()[i].group_name);
		// 		group.push(snapshot.val()[i].number_going);
		// 		group.push(snapshot.val()[i].location_name);
		// 		group.push(snapshot.val()[i].free_food);
		// 		group.push(snapshot.val()[i].people);
		// 		group.push(snapshot.val()[i].time);
		// 		// console.log(group);
		// 		var joined = my.state.groupData.concat(group);
		// 		my.setState({ groupData: joined })
		// }

	console.log(my.state);
		console.log("data ^");
});




	}

	componentDidMount() {
		let my = this;
		this.loadGroups(my);

		console.log(DeviceInfo.getUniqueID());
	 const uniqueId = DeviceInfo.getUniqueID();
		//
		// console.log(uniqueId);
		console.log(firebase.database().ref(uniqueId));
		console.log("----");

		firebase.database().ref(uniqueId).child('num_opened').once('value').then(function(snapshot) {
		if(snapshot.val() == null){

			var updates = {};
			updates['/num_opened'] = 1;
			firebase.database().ref(uniqueId).update(updates);

		}
		else{

			var updates = {};
			updates['/num_opened'] = snapshot.val()+1;
			firebase.database().ref(uniqueId).update(updates);

		}

		});


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

	// renderGroupFlatListCell = ({ item }) => {
	//
	// 	return <GroupsTwo/>
	// }



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


 <GroupsTwo groupData={this.state.groupData}/>



					)


	}
}

	// <GroupsTwo groupData={this.state.groupData}/>
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
