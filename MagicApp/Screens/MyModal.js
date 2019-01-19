import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight, Alert, Keyboard } from "react-native"
import React from "react"
import firebase from 'react-native-firebase'
import DateTimePicker from 'react-native-modal-datetime-picker';

const height = 220;

export default class MyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newGroupName: "",
      newGroupTime: "",
      newGroupLocation: "",
      errorMessage: null,
      successMessage: null,
      newName: "",
      height: 220,
        isModalVisible: props.modalVisible,
         isDateTimePickerVisible: false,
         hasName: false,
    };
    console.log(props.modalVisible);
    console.log("close bro");
    // var dt = new Date();
    // ar utcDate = dt.toUTCString();


   // console.log(utcDate);

  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

 _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

 _handleDatePicked = (time) => {
   console.log('A time has been picked: ', time.getHours() + ':' + time.getMinutes());
   this.setState({newGroupTime: ("0" + time.getHours()).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2)});
   this._hideDateTimePicker();
 };
 componentDidMount(){
   console.log(this.props);
   console.log('wtf');
   if(this.props.hasName != null){
     console.log("here");
         this.setState({hasName: this.props.hasName});
         if(this.props.hasName == false){
           console.log('here-height');
          this.setState({height: 280});
         }
         else{
              this.setState({height: 220});
         }
   }
 }

  componentDidUpdate(prevProps) {
    if(this.props.modalVisible != prevProps.modalVisible) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
           console.log("RE RENDER ME!");
              this.setState({isModalVisible: true});
              console.log(this.props.hasName);
              this.setState({hasName: this.props.hasName});
    }
    if(this.props.hasName != prevProps.hasName) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
        console.log(this.props.hasName)
        console.log("name bro");
              this.setState({hasName: this.props.hasName});
              if(this.props.hasName == false){
                   console.log('here-height');
                this.setState({height: 280});
              }
              else{
                  this.setState({height: 220});
              }
    }
}

  _setModalVisible(visible) {
    this.setState({isModalVisible: visible});
  }

  createNewGroup(){
			console.log(this.state.newGroupLocation);
      console.log(this.props)
      console.log("creating..");
			   const { newGroupName, newGroupLocation, newGroupTime, modalCreateVisible, newName} = this.state
				  var that = this;
			if (newGroupLocation.trim() == "" || newGroupName.trim() == "" || newGroupTime.trim() == "") {
	       this.setState({errorMessage: "Please fill in all fields!"});
	     }
			 else{
         if(this.state.hasName == false){
           if (newName.trim() == "") {
     	       this.setState({errorMessage: "Please fill in your name!"});
     	     }
           else{
             this.setState({errorMessage: null});
             var updates_1 = {};
             updates_1['/name/'] = newName;
            firebase.database().ref(that.props.uniqueId).update(updates_1);


            			var groupCount = 0;
             firebase.database().ref('groups_count').once('value').then(function(snapshot) {
              	console.log(snapshot.val());
            		groupCount = snapshot.val();

            		var updates = {};
            		updates['/key/'] = groupCount;
                updates['/creator/'] = that.props.uniqueId;
            		updates['/free_food/'] = false;
            		updates['/group_name/'] = newGroupName;
            		updates['/location_name/'] = newGroupLocation;
            		updates['/time/'] = newGroupTime;
            		updates['/number_going/'] = 1;
            	   updates['/people/' + that.props.uniqueId + '/prompt'] = "Group Creator";

                 var date = new Date().getDate(); //Current Date
                 var month = new Date().getMonth() + 1; //Current Month
                 var year = new Date().getFullYear(); //Current Year
                 // var hours = new Date().getHours(); //Current Hours
                 // var min = new Date().getMinutes(); //Current Minutes
                 // var sec = new Date().getSeconds(); //Current Seconds
                 // console.log(date+'-'+month+'-'+year+' '+hours+':'+min+':'+sec);
                //Print results
                // var formattedNumber = ("0" + myNumber).slice(-2);
                 updates['/date_stamp/'] = year+'-'+("0" + date).slice(-2)+'-'+("0" + month).slice(-2);
            		// updates['/creator/'] = 1;

            		 firebase.database().ref('groups/' + groupCount).update(updates);

            		 var update_count = {};
            		 update_count['/groups_count/'] = ++groupCount;
            		 firebase.database().ref().update(update_count);

            		 // this.setCreateModalVisible(!modalCreateVisible);
            		 that.setState({newGroupName: "", newGroupTime: "", newGroupLocation: ""});
            		 // that.setState({modalCreateVisible: !modalCreateVisible});
                 that._setModalVisible(!that.state.isModalVisible)
            		 that.setState({successMessage: "Group Added!"})

            });

           }
         }
         else{
           this.setState({errorMessage: null});
			var groupCount = 0;
 firebase.database().ref('groups_count').once('value').then(function(snapshot) {
  	console.log(snapshot.val());
		groupCount = snapshot.val();

		var updates = {};
		updates['/key/'] = groupCount;
    updates['/creator/'] = that.props.uniqueId;
		updates['/free_food/'] = false;
		updates['/group_name/'] = newGroupName;
		updates['/location_name/'] = newGroupLocation;
		updates['/time/'] = newGroupTime;
		updates['/number_going/'] = 1;
	   updates['/people/' + that.props.uniqueId + '/prompt'] = "Group Creator";

     var date = new Date().getDate(); //Current Date
     var month = new Date().getMonth() + 1; //Current Month
     var year = new Date().getFullYear(); //Current Year
     // var hours = new Date().getHours(); //Current Hours
     // var min = new Date().getMinutes(); //Current Minutes
     // var sec = new Date().getSeconds(); //Current Seconds
     // console.log(date+'-'+month+'-'+year+' '+hours+':'+min+':'+sec);
    //Print results
    // var formattedNumber = ("0" + myNumber).slice(-2);
     updates['/date_stamp/'] = year+'-'+("0" + date).slice(-2)+'-'+("0" + month).slice(-2);
		// updates['/creator/'] = 1;

		 firebase.database().ref('groups/' + groupCount).update(updates);

		 var update_count = {};
		 update_count['/groups_count/'] = ++groupCount;
		 firebase.database().ref().update(update_count);

		 // this.setCreateModalVisible(!modalCreateVisible);
		 that.setState({newGroupName: "", newGroupTime: "", newGroupLocation: ""});
		 // that.setState({modalCreateVisible: !modalCreateVisible});
     that._setModalVisible(!that.state.isModalVisible)
		 that.setState({successMessage: "Group Added!"})

});
}
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
          onPress={() => { 	 this.setState({errorMessage: null}); this._setModalVisible(!this.state.isModalVisible); }}
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
        style={[styles.contentView, {height: this.state.height}]}>
        <View
          style={styles.formView}>
          {!this.state.hasName &&
            <View
            style={styles.edittextTextonlyPlaceholderViewName}>
            <Text
              style={styles.paymentText}>Your Name</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}>
              <TextInput
              placeholder="Kobe Patel"
              onChangeText={newName => this.setState({newName}) }
              value={this.state.newName}
              style={styles.TextTextInput}/>
            </View>
          </View>
        }

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
                // flex: 1,
                // justifyContent: "flex-end",
              }}>

              <TextInput
              type="time"
              placeholder="7:00 PM"
              onChangeText={newGroupTime => this.setState({newGroupTime}) }
              value={this.state.newGroupTime}
              onFocus={() => {this._showDateTimePicker(); Keyboard.dismiss();}}
            />

            <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          titleIOS="Pick a time"
          mode="time"
        />
            </View>
          </View>


          {this.state.errorMessage &&
         <Text style={{ color: 'red', marginTop: 7}}>
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
  edittextTextonlyPlaceholderViewName: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    alignSelf: "stretch",
    height: 48,
    marginBottom: 7,
  },
  paymentText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    letterSpacing: 0.34,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    // marginRight: 236,
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
    // marginRight: 274,
    width: 37,
    height: 16,
  },
  TextTwoTextInput: {
    color: 'rgb(74, 74, 74)',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    // lineHeight: 0,
    letterSpacing: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    // marginRight: 4,
    // marginBottom: 1,
    alignSelf: "stretch",
    padding: 0,
                            margin: 0,
                            borderWidth: 0,

  },
  TextTextInput: {
    color: 'rgb(74, 74, 74)',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    // lineHeight: 0,
    // letterSpacing: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    alignSelf: "stretch",
    padding: 0,
                                margin: 0,
                                borderWidth: 0,
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
    // marginRight: 282,
    width: 29,
    height: 16,
  },
  TextThreeTextInput: {
    color: 'rgb(74, 74, 74)',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    // lineHeight: 0,
    letterSpacing: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    marginRight: 6,
    alignSelf: "stretch",
    padding: 0,
                               margin: 0,
                               borderWidth: 0,

  },
});
