//
//  GroupsTwo.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight, Alert } from "react-native"
import React from "react"
import Group7Five from "./Group7Five"
import Group7Six from "./Group7Six"
import firebase from 'react-native-firebase'
import MyModal from './MyModal'
import Menu from './Menu'
import Friend from "./Friend"


export function    tConvert (time) {

    // Check correct time format and split into components

    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];



    if (time.length > 1) { // If time format correct

        time = time.slice (1);  // Remove full string match value

        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours

    }

    return time.join (''); // return adjusted time or original string

}


export default class GroupsTwo extends React.Component {

	state = {
	 modalCreateVisible: false,
	 newGroupName: "",
	 newGroupTime: "",
	 newGroupLocation: "",
	 errorMessage: null,
	 successMessage: null,
	 modalDetailVisible: false,
	 item: {location_name: "loading", group_name: "", time:"loading"},
 };

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}

	}
	setCreateModalVisible(visible) {
    this.setState({modalCreateVisible: visible});
  }

	setDetailModalVisible(visible){
		this.setState({modalDetailVisible: visible});
	}

	updateCreateState(){
		  this.setState({modalCreateVisible: false});
	}


	constructor(props) {
		super(props)

		// this.updateText1 = this.updateText1
		this.updateModal = this.updateModal;
	}

	componentDidMount() {
		console.log(this.props);
		console.log('nav-groups-two');

	}

	componentDidUpdate(){
		console.log("im new");

	}


	onMiscBigButtonPressed = () => {

		console.log("create");
		console.log(this.state.modalCreateVisible);

		this.setCreateModalVisible(!this.state.modalCreateVisible);

		// this.setState({ modalDetailVisible: !this.state.modalDetailVisible });



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

		return (<Group7Five item={item} nav={this.props.nav} see={this.canYouSee} updateModalCB={this.updateModal}/> )
	}

	createNewGroup(){
			console.log(this.state.newGroupLocation);
			   const { newGroupName, newGroupLocation, newGroupTime, modalCreateVisible} = this.state
				  var that = this;
			if (newGroupLocation.trim() == "" || newGroupName.trim() == "" || newGroupTime.trim() == "") {
	       this.setState({errorMessage: "Please fill in all fields!"});
	     }
			 else{




			var groupCount = 0;
 firebase.database().ref('groups_count').once('value').then(function(snapshot) {
  	console.log(snapshot.val());
		groupCount = snapshot.val();

		var updates = {};
		updates['/key/'] = groupCount;
		updates['/free_food/'] = false;
		updates['/group_name/'] = newGroupName;
		updates['/location_name/'] = newGroupLocation;
		updates['/time/'] = newGroupTime;
		updates['/number_going/'] = 1;
		// updates['/people/'] = 1;
		// updates['/creator/'] = 1;

		 firebase.database().ref('groups/' + groupCount).update(updates);

		 var update_count = {};
		 update_count['/groups_count/'] = ++groupCount;
		 firebase.database().ref().update(update_count);

		 // this.setCreateModalVisible(!modalCreateVisible);
		 that.setState({newGroupName: "", newGroupTime: "", newGroupLocation: ""});
		 that.setState({modalCreateVisible: !modalCreateVisible});
		 that.setState({successMessage: "Group Added!"})

});
	 }
			// Write the new post's data simultaneously in the posts list and the user's post list.



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
	    console.log("open friends");
			return(<Friend />)
		}

	canYouSee(){
		console.log("You found me <3");
		console.log(this);
		this.setState({ modalDetailVisible: !this.state.modalDetailVisible });
	}

	 updateModal = (item) => {
		 console.log(item);
		 console.log("what u give me");
		 this.setState({modalDetailVisible: !this.state.modalDetailVisible});
		 this.setState({item: item});
		 // console.log(this.state.item);
		 console.log('here');


	 }

	 setModalVisible(visible) {
	this.setState({modalDetailVisible: visible});
}

	render() {

		return <View
				style={styles.groupsView}>
				<MyModal modalVisible={this.state.modalCreateVisible}/>
				<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalDetailVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

					<View
						 style={styles.menuView}>
						 <View
						 style={{
						 flexDirection: "row",
						 }}>
						 <TouchableOpacity
						 style={styles.buttonButton}
						   onPress={() => { this.setDetailModalVisible(!this.state.modalDetailVisible);}}>
						 <Image
						 source={require("./../assets/images/ic-close.png")}
						 style={styles.buttonButtonImage}/>
						 <Text
						 style={styles.buttonButtonText}></Text>
						 </TouchableOpacity>
						 <TouchableOpacity
						 style={styles.buttonTwoButton}>
						 <Image
						 source={require("./../assets/images/bob-2.png")}
						 style={styles.buttonButtonImage}/>
						 </TouchableOpacity>
						 </View>
						 <View
						 style={styles.restHeaderView}>
						 <Text
						 style={styles.theTandoorText}>{this.state.item.location_name + ' | ' + this.state.item.group_name}</Text>
						 <Text
						 style={styles.pmText}>{tConvert(this.state.item.time)}</Text>
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

        </Modal>

				<TextInput
					placeholder="Search groups or restaurants"
					style={styles.group5TextInput}/>
				<View
					style={{
						flexDirection: "row",
					}}>
					{this.state.successMessage &&
				 <Text style={{ color: 'green'}}>
					 {this.state.successMessage}
				 </Text>}
					<Text
						style={styles.group5Text}>Today's Groups</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						<TouchableOpacity
							onPress={this.onMiscBigButtonPressed}
							style={styles.miscBigButtonButton}>
							<Text
								style={styles.miscBigButtonButtonText}>Create</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.groupFlatListViewWrapper}>
					<FlatList
					 keyboardShouldPersistTaps='always'
						horizontal={false}
						numColumns={2}
						renderItem={this.renderGroupFlatListCell}
						data={this.props.groupData}
						style={styles.groupFlatList}/>
				</View>
			</View>
	}

}


const styles = StyleSheet.create({
	groupsView: {
		backgroundColor: 'rgb(255, 255, 255)',
		flex: 1,
	},
	group5SearchBar: {
		color: 'rgb(0, 0, 0)',
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		borderRadius: 17,
		borderWidth: 1,
		borderColor: 'rgb(196, 201, 223)',
		borderStyle: "solid",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 48,
		alignSelf: "stretch",
		height: 44,
	},
	group5Text: {
		color: 'rgb(33, 34, 36)',
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		lineHeight: 0,
		letterSpacing: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginLeft: 30,
		marginTop: 35,
	},
	miscBigButtonButton: {
		backgroundColor: 'rgb(98, 179, 255)',
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginRight: 30,
		marginTop: 35,
		width: 58,
		height: 25,
	},
	miscBigButtonButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	miscBigButtonButtonText: {
		color: 'rgb(255, 255, 255)',
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 0,
		letterSpacing: 0,
	},
	groupFlatList: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: "100%",
		height: "100%",
	},
	groupFlatListViewWrapper: {
		marginTop: 27,
		marginBottom: 28,
		alignSelf: "center",
		width: 315,
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
	groupFlatList: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		width: "100%",
		height: "100%",
	},
	artboard2View: {
		backgroundColor: 'rgba(55, 58, 61,  0.95)',
		flex: 1,
	},
	icCloseButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		shadowColor: 'rgba(0, 0, 0, 0.10594995)',
		shadowRadius: 3,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 19,
		marginTop: 36,
		width: 60,
		height: 60,
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
		marginRight: 16,
		marginTop: 6,
		width: 63.92,
		height: 90,
	},
	icCartButton: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "flex-end",
		width: 63.92,
		height: 90,
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
		marginRight: 18,
		marginTop: 48,
		alignSelf: "flex-end",
		width: 27,
		height: 27,
	},
	contentView: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: 22,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 45,
		alignSelf: "stretch",
		height: 200,
	},
	formView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginLeft: 13,
		marginRight: 19,
		marginTop: 21,
		alignSelf: "stretch",
		height: 158,
	},
	edittextTextonlyPlaceholderView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		alignSelf: "stretch",
		height: 48,
	},
	paymentText: {
		color: 'rgb(0, 0, 0)',
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.34,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 236,
		width: 75,
		height: 16,
	},
	edittextTextonlyPlaceholderTwoView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginTop: 7,
		alignSelf: "stretch",
		height: 48,
	},
	paymentTwoText: {
		color: 'rgb(0, 0, 0)',
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.34,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 274,
		width: 37,
		height: 16,
	},
	TextTwoTextInput: {
		color: 'rgb(74, 74, 74)',
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 0,
		letterSpacing: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 4,
		marginBottom: 1,
		alignSelf: "stretch",
	},
	TextTextInput: {
		color: 'rgb(74, 74, 74)',
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 0,
		letterSpacing: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 5,
		marginBottom: 1,
		alignSelf: "stretch",
	},
	edittextTextonlyPlaceholderThreeView: {
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginTop: 7,
		alignSelf: "stretch",
		height: 48,
	},
	paymentThreeText: {
		color: 'rgb(0, 0, 0)',
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.34,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 282,
		width: 29,
		height: 16,
	},
	TextThreeTextInput: {
		color: 'rgb(74, 74, 74)',
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 0,
		letterSpacing: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.0)',
		marginRight: 6,
		marginBottom: 1,
		alignSelf: "stretch",
	},

	menuView: {
	backgroundColor: 'rgb(55, 58, 61)',
	flex: 1,
	},
	buttonButton: {
	backgroundColor: 'rgba(0, 0, 0, 0.0)',
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	marginLeft: 30,
	marginTop: 42,
	width: 60,
	height: 60,
	},
	buttonButtonText: {
	color: 'rgb(255, 255, 255)',
	fontSize: 12,
	fontStyle: "normal",
	fontWeight: "normal",
	textAlign: "left",
	letterSpacing: 0,
	},
	buttonButtonImage: {
	resizeMode: "contain",
	},
	buttonTwoButton: {
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
 marginLeft: 200,
	marginTop: 40,
	width: 60,
	height: 60,
	},
	buttonTwoButtonText: {
	fontSize: 12,
	fontStyle: "normal",
	fontWeight: "normal",
	textAlign: "left",
	letterSpacing: 0,
	},
	buttonTwoButtonImage: {
	resizeMode: "contain",
 // marginRight: 10,
},
	restHeaderView: {
	backgroundColor: 'rgb(255, 255, 255)',
	marginTop: 36,
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
	backgroundColor: 'rgb(246, 246, 246)',
	width: "100%",
	height: "100%",

	},
	viewFlatListViewWrapper: {
	marginLeft: -3,
	marginRight: 3,
	flex: 1,
},
})
