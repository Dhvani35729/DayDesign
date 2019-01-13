import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight, Alert } from "react-native"
import React from "react"

export default class MyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newGroupName: "",
      newGroupTime: "",
      newGroupLocation: "",
      errorMessage: null,
      successMessage: null,
        isModalVisible: props.modalVisible
    };
    console.log(props.modalVisible);
    console.log("close bro");

  };

  _setModalVisible(visible) {
    this.setState({isModalVisible: visible});
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

  render() {
    return (
        <View>
        <Modal
     animationType="fade"
     transparent={true}
     visible={this.state.isModalVisible}
      onRequestClose={() => {this._setModalVisible(false)}}
  >
  <View
      style={styles.artboard2View}>
      <View
        style={{
          flexDirection: "row",
        }}>
        <TouchableOpacity
          onPress={() => { this._setModalVisible(!this.state.isModalVisible);}}
          style={styles.icCloseButton}>
          <Image
            source={require("./../assets/images/ic-close-2.png")}
            style={styles.icCloseButtonImage}/>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          <View
            style={styles.viewView}>
            <TouchableOpacity
              onPress={() => {this.createNewGroup()}}
              style={styles.icCartButton}>
              <Image
                source={require("./../assets/images/ic-cart.png")}
                style={styles.icCartButtonImage}/>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}>
                  <Image
                    source={require("./../assets/images/bitmap-3.png")}
                    style={styles.bitmapImage}/>
                </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
      <View
        style={styles.contentView}>
        <View
          style={styles.formView}>
          <View
            style={styles.edittextTextonlyPlaceholderView}>
            <Text
              style={styles.paymentText}>Group Name</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}>
              <TextInput
              placeholder="NBA Finals"
              onChangeText={newGroupName => this.setState({newGroupName}) }
              value={this.state.newGroupName}
              style={styles.TextTextInput}/>

            </View>
          </View>
          <View
            style={styles.edittextTextonlyPlaceholderTwoView}>
            <Text
              style={styles.paymentTwoText}>Venue</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}>
              <TextInput
              placeholder="William's Cafe"
              onChangeText={newGroupLocation => this.setState({newGroupLocation}) }
              value={this.state.newGroupLocation}
              style={styles.TextTwoTextInput}/>
            </View>
          </View>
          <View
            style={styles.edittextTextonlyPlaceholderThreeView}>
            <Text
              style={styles.paymentThreeText}>Time</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}>
              <TextInput
              type="time"
              placeholder="7:00 PM"
              onChangeText={newGroupTime => this.setState({newGroupTime}) }
              value={this.state.newGroupTime}
            />


            </View>
          </View>
          {this.state.errorMessage &&
         <Text style={{ color: 'red', marginTop: 5}}>
           {this.state.errorMessage}
         </Text>}
        </View>
      </View>
    </View>


   </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
