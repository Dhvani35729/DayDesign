//
//  GroupsTwo.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight, Alert, ScrollView, AppState, StatusBar, BackHandler, Platform, ActivityIndicator } from "react-native"
import React from "react"
import Group7Five from "./Group7Five"
import Group7Six from "./Group7Six"
import firebase from 'react-native-firebase'
import MyModal from './MyModal'
import Menu from './Menu'
import Friend from "./Friend"
import DeviceInfo from 'react-native-device-info';
import RNExitApp from 'react-native-exit-app';


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
   newName: "",
   hasName: false,
   newIntro: "",
	 errorMessage: null,
	 successMessage: null,
	 modalDetailVisible: false,
	 item: {location_name: "loading", group_name: "", time:"loading"},
   friendData: [],
   key: -1,
   modalJoinVisible: false,
   notInEvent: true,
   data: [],
   scrollEnabled: true,
    appState: AppState.currentState,
    wentIn: false,
    loading: true,
    refresh: false,
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

  setJoinModalVisible(visible){
    this.setState({modalJoinVisible: visible});
  }

	updateCreateState(){
		  this.setState({modalCreateVisible: false});
	}


	constructor(props) {
		super(props)

		// this.updateText1 = this.updateText1
		this.updateModal = this.updateModal;




	}

  exitIOS(){
    console.log("exit ios");
  }

  loadEverything(my){
    console.log("constructing...");
    //console.log(firebase.database().ref("build_version"));
    console.log('firebase ^^');
    let root = firebase.database();
    let solid = root.ref('build_version');
    console.log( solid.once('value'));
    // solid.once('value').done(function(snapshot){
    //   console.log("here");
    // });
    solid.once('value').then(function(snapshot) {
    if(snapshot.val() != null){

    console.log(snapshot.val())
    console.log(DeviceInfo.getBuildNumber());
    console.log(DeviceInfo.getVersion());
    console.log('load now');
    my.setState({wentIn: true});

    if(snapshot.val() <= DeviceInfo.getBuildNumber()){
        // console.log(uniqueId);
       // console.log(firebase.database().ref(uniqueId));
        console.log("----");
        let fireID = root.ref(my.props.uniqueId).child('num_opened');
        console.log(fireID);
        console.log('firee!');
        fireID.once('value').then(function(snapshot) {
        if(snapshot.val() == null){

         var updates = {};
         updates['/num_opened'] = 1;
         root.ref(my.props.uniqueId).update(updates).then(function(){
 //alert("Data saved successfully.");
   my.loadGroups(my, root);
}).catch(function(error) {
 alert("Data could not be loaded. Try reopening app." + error);
});

         //my.loadGroups(my);
        }
        else{

         var updates = {};
         updates['/num_opened'] = snapshot.val()+1;
         root.ref(my.props.uniqueId).update(updates).then(function(){
 // alert("Data saved successfully.");
 my.loadGroups(my, root);
}).catch(function(error) {
 alert("Data could not be loaded. Try reopening app." + error);
});
             //my.loadGroups(my);

        }

        });

    }
    else{
   //   AppState.addEventListener('change', this.handleNoChange);
          if (Platform.OS == 'android') {
     Alert.alert(
    'Old Version of App',
    'App is not up to date!\nPlease update the app.',
    [
    {text: 'Exit App', onPress: () => BackHandler.exitApp()},
    ],
    { cancelable: false });
  }
        else if (Platform.OS == 'ios') {
          Alert.alert(
         'Old Version of App',
         'App is not up to date!\nPlease update the app.',
         [
         {text: 'Exit App', onPress: () => {RNExitApp.exitApp();}},
         ],
         { cancelable: false });


        }



    }

    }
    else{
    console.log('failed?')



    }

    }



  ).catch(function(error) {
    alert("Data could not be loaded. Try reopening app." + error);
  });


  }


	componentDidMount() {
		console.log(this.props);
		console.log('nav-groups-two');
    // check here
//this.interval = setInterval(() => {console.log('update')}, 1000);
		//

  // method to be executed;
    AppState.addEventListener('change', this._handleAppStateChange);

    let my = this;

    this.loadEverything(my);

          console.log('done firebase ^^');




	}


  searchFilterFunction = text => {
    console.log(this.arrayholder);
    if(this.arrayholder != null){
      const newData = this.arrayholder.filter(item => {
        const itemData = `${item.location_name.toUpperCase()} ${item.group_name.toUpperCase()}}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData,
      });
    }
  };

  loadGroups(my, root){
    console.log('loading groups...')
  // console.log(firebase.database());
  // console.log('firebase ^^');
        var getKey = my.state.key;
    root.ref('groups').on('value', function(snapshot) {

    console.log(snapshot.val());
    console.log(my.state)
    console.log("hi")

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    //var curr_date =
    var now = new Date(year, date, month);
    // console.log(date+'-'+month+'-'+year+' '+hours+':'+min+':'+sec);

    var todayGroups = []

    for(var i = 0; i < snapshot.val().length; i++){
        var full_date = snapshot.val()[i].date_stamp;
        console.log(full_date)
        var check_date = new Date(full_date.substring(0, 4), full_date.substring(5, 7), full_date.substring(8, 10));
        console.log(check_date);
        //console.log(now);
        if(check_date < now){
        console.log("Selected date is in the past");
        }
        else{
           console.log("Selected date is NOT in the past");
            todayGroups.push(snapshot.val()[i]);
        }
    }
    console.log(todayGroups);

//		console.log(eventHour);

    todayGroups.sort(function (a, b) {

      var aHours = a.time.substr(0, 2);
      var aMin = a.time.substr(3, 5);

      var bHours = b.time.substr(0, 2);
      var bMin = b.time.substr(3, 5);


      if(aHours < bHours){
        console.log("less than");
        return 1;
      }
      else if(aHours == bHours){
        if(aMin < bMin){
          console.log("less than");
              return 1;
        }
        else if(aMin == bMin){
          return 0;
        }
        else{
          console.log("more than");
            return -1;
        }
      }
      else{
            console.log("more than");
            return -1;
      }
    });

    // my.setState({groupData: todayGroups});


    console.log("RE RENDER ME!");
    // my.setState({loading: false});

      my.setState({data: todayGroups, loading: false},  function() {
    //   console.log(my);
    // console.log('next')
      // my.arrayholder = todayGroups;
    //   console.log("come inside");
    //my.setState({ refresh: true});
    if(my.state.modalDetailVisible == true){
      console.log(my.state.key);
      getKey = my.state.key;
      if(getKey != -1){

        // modal is open
        var item;
        for(var i = 0; i < todayGroups.length; i++){
          if(todayGroups[i].key == getKey){
             item = todayGroups[i];
          }
        }
       // var item = this.props.groupData[this.state.key-1];
        console.log(todayGroups);
        console.log(getKey);
        console.log("RENDER THIS ITEM");
        console.log(item);
        my.loadFriends(my, item.key, item.number_going, item.people, true);

      }

     }



        root.ref(my.props.uniqueId).once('value').then(function(snapshot) {
          console.log(snapshot.val());
          console.log("moi name ^^");
          if(snapshot.val()){
            if(snapshot.val().name){
              my.setState({newName: snapshot.val().name});
                my.setState({hasName: true});
            }
            else{
              my.setState({hasName: false});
            }
          }
    });

    my.arrayholder = todayGroups;
    console.log("finished setting data")});



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


  componentWillUnmount() {
	 AppState.removeEventListener('change', this._handleAppStateChange);
    //clearInterval(this.interval);

 }

 _handleAppStateChange = (nextAppState) => {
   if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
     console.log('App has come to the foreground!');
     let root = firebase.database();
    this.loadGroups(this, root);
   }
   else{
       console.log('leaving');
       firebase.database().ref('groups').off();
   }
   this.setState({appState: nextAppState});
 }


  componentDidUpdate(prevProps) {
  	console.log('updating...');
    console.log(this.state);
    console.log("still here ^^");
    var getKey = this.state.key;


    // if(this.props.groupData != prevProps.groupData) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    // {
    //        console.log("RE RENDER ME!");
    //          this.arrayholder = this.props.groupData;
    //          this.setState({data: this.props.groupData});
    //        if(this.state.modalDetailVisible == true){
    //          if(getKey != -1){
    //
    //            // modal is open
    //            var item;
    //            for(var i = 0; i < this.props.groupData.length; i++){
    //              if(this.props.groupData[i].key == getKey){
    //                 item = this.props.groupData[i];
    //              }
    //            }
    //           // var item = this.props.groupData[this.state.key-1];
    //            console.log(this.props.groupData);
    //            console.log(getKey);
    //            console.log("RENDER THIS ITEM");
    //            console.log(item);
    //            this.loadFriends(this, item.key, item.number_going, item.people, true);
    //
    //          }
    //
    //
    //        }
    // }
    if(this.props.uniqueId != prevProps.uniqueId){
      console.log(this.props.uniqueId);
      console.log("ID");
      var that = this;
  //     firebase.database().ref(this.props.uniqueId).once('value').then(function(snapshot) {
  //       console.log(snapshot.val());
  //       console.log("moi name ^^");
  //       if(snapshot.val()){
  //         if(snapshot.val().name){
  //           that.setState({newName: snapshot.val().name});
  //             that.setState({hasName: true});
  //         }
  //         else{
  //           that.setState({hasName: false});
  //         }
  //       }
  // });


    }

}

  loadFriends(my, key, numPeople, people, joined){

    if(!my.state.friendData || my.state.friendData.length != numPeople || key != my.state.key){

      if(numPeople == 1){
        my.setState({friendData: [{key: "0", name: "Loading Patel", prompt: "Loading"}]});
        console.log(my.state.friendData);
        console.log("should be reset ^^");
            var counter = 1;
      }
      else{
            my.setState({friendData: [{key: "0", name: "Loading Patel", prompt: "Loading"}]});
                var counter = 1;
      }


      if(my.state.friendData){
        console.log(my.state.friendData.length);
      }
      console.log(key);
      console.log("key ^");
      var found = false;
      var sliced = false;
      for(var i = 0; i < numPeople; i++){

            firebase.database().ref(Object.keys(people)[i]).on('value', function(snapshot) {

              // my.setState({friendData: []});
              if(snapshot.key){
                var friend = {};
                var friendID = snapshot.key;
                if(friendID == my.props.uniqueId){
                  found = true;
                  my.setState({notInEvent: false});
                }


                console.log(friendID);
                console.log(counter);
                console.log(snapshot.key);
                console.log('y u break');

                  friend["prompt"] = people[friendID].prompt;
                  friend["key"] = counter.toString();
                  console.log(snapshot.val());
                  friend["id"] = friendID;
                  friend["name"] = snapshot.val().name;

                  console.log("dets ^^");
                  console.log(friend["id"])
                  console.log(friend["key"])
                  my.state.friendData.push(friend);
                  counter++;

                  if(numPeople == 1){
                       my.setState({friendData: my.state.friendData.slice(1)});
                  }
                  else{
                    if(sliced == false){
                       my.setState({friendData: my.state.friendData.slice(1)});
                       sliced = true;
                    }
                  }

              }



                // my.setState({ friendData: [...my.state.friendData, ...friend] }) //simple value

            }, function(error){

            }
          );



        console.log("ID GET NOW");



      }
      if(found == false){
          my.setState({notInEvent: true});
      }

      console.log(my.state.friendData);
       console.log("got all users");
       if(joined == false){
               my.setState({modalDetailVisible: !my.state.modalDetailVisible});
       }

      my.setState({key: key});

  //     firebase.database().ref('groups').child(key).child('people').on('value', function(snapshot) {
  //
  //     console.log(snapshot.val());
  //     // console.log(my.state)
  //     console.log("inside loading friends");
  //     // my.setState({friendData: snapshot.val()});
  //     console.log(numPeople);
  //
  //
  //     for(var i = 0; i < numPeople; i++){
  //       var friend = {};
  //       var friendID = Object.keys(snapshot.val())[i];
  //       console.log(friendID);
  //       console.log(i);
  //
  //       console.log('y u break');
  //         console.log(snapshot.val())
  //           friend["prompt"] = snapshot.val()[friendID].prompt;
  //
  //
  //           firebase.database().ref(friendID).on('value', function(snapshot) {
  //               friend["key"] = i.toString();
  //               console.log(snapshot.val());
  //               friend["id"] = friendID;
  //               friend["name"] = snapshot.val().name;
  //
  //               console.log("dets ^^");
  //               console.log(friend["id"])
  //               console.log(friend["key"])
  //               my.state.friendData.push(friend);
  //               // my.setState({ friendData: [...my.state.friendData, ...friend] }) //simple value
  //
  //           });
  //
  //
  //
  //       console.log("ID GET NOW");
  //
  //     }
  //     console.log(my.state.friendData);
  //     console.log("got all users");
  //       my.setState({modalDetailVisible: !my.state.modalDetailVisible});
  //       my.setState({key: key});
  //     // 		console.log(i);
  //     // 		console.log(snapshot.val()[i].group_name);
  //     // 		var group = [];
  //     // 		group.push(snapshot.val()[i].group_name);
  //     // 		group.push(snapshot.val()[i].number_going);
  //     // 		group.push(snapshot.val()[i].location_name);
  //     // 		group.push(snapshot.val()[i].free_food);
  //     // 		group.push(snapshot.val()[i].people);
  //     // 		group.push(snapshot.val()[i].time);
  //     // 		// console.log(group);
  //     // 		var joined = my.state.groupData.concat(group);
  //     // 		my.setState({ groupData: joined })
  //     // }
  //
  //   // console.log(my.state);
  //     console.log("friend data ^");
  // });
    }
    else{
      if(joined == false){
              my.setState({modalDetailVisible: !my.state.modalDetailVisible});
      }
    }





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

		return (<Group7Five item={item} nav={this.props.nav} see={this.canYouSee} updateModalCB={this.updateModal} setScroll={this.setScroll}/> )
	}

  showEmptyListView = () => {
    <View>
      <Text>Loading</Text>
    </View>
}

joinEvent(){

  userID = this.props.uniqueId;

  const { newName, newIntro, friendData} = this.state
  var numPeople = friendData.length;
  console.log(friendData.length)
   var that = this;

if (newName.trim() == "") {
  this.setState({errorMessage: "Please fill in your name!"});
}
else{
this.setState({errorMessage: null});
  var updates_1 = {};
  updates_1['/name/'] = newName;
 firebase.database().ref(userID).update(updates_1);
 this.setState({hasName: true});

 var updates = {};
 updates['/people/' + userID + '/prompt'] = newIntro;

 console.log(numPeople);
 console.log("BBPL");
  updates['/number_going'] = numPeople + 1;
firebase.database().ref('groups/' + this.state.key).update(updates);

  this.setJoinModalVisible(!this.state.modalJoinVisible);
}




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
			return(<Friend item={item} />)
		}

	canYouSee(){
		console.log("You found me <3");
		console.log(this);
		this.setState({ modalDetailVisible: !this.state.modalDetailVisible });
	}

  setScroll = (item) => {
    console.log("enabled");
      this.setState({scrollEnabled: item});
  }

  setHasName = (item) => {
    console.log("has name");
      this.setState({hasName: item});
  }

	 updateModal = (item) => {
		 console.log(item);
		 console.log("what u give me");
		 this.setState({item: item});
     this.setState({scrollEnabled: true});
     if(item.number_going == 1){
         this.loadFriends(this, item.key, item.number_going, item.people, false);
       //   this.setState({friendData: [{key: "0", name: "Loading Patel", prompt: "Loading"}]},
       //   this.loadFriends(this, item.key, item.number_going, item.people)
       // );


     }
     else{
          this.loadFriends(this, item.key, item.number_going, item.people, false);
     }

     // if(item.number_going == 1){
     //        this.setState({friendData: this.state.friendData.slice(1)});
     // }

		 // console.log(this.state.item);
		 console.log('here');


	 }

	 setModalVisible(visible) {
	this.setState({modalDetailVisible: visible});
}



	render() {

		return <View
				style={styles.groupsView}>
        <StatusBar
        animated={true}
        hidden={true}
        backgroundColor="#F6F6F6"
       barStyle="dark-content" // Here is where you change the font-color
     />
      <MyModal modalVisible={this.state.modalCreateVisible} uniqueId={this.props.uniqueId} hasName={this.state.hasName} setHasName={this.setHasName}/>
				<Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalDetailVisible}
          onRequestClose={() => {
            this.setDetailModalVisible(!this.state.modalDetailVisible); this.setState({friendData: []})
          }}>

					<View
						 style={styles.menuView}>
						 <View
						 style={{
						 flexDirection: "row",
						 }}>
						 <TouchableOpacity
						 style={styles.buttonButton}
						   onPress={() => {this.setState({scrollEnabled: true}); this.setDetailModalVisible(!this.state.modalDetailVisible); this.setState({friendData: []})}}>
						 <Image
						 source={require("./../assets/images/ic-close.png")}
						 style={styles.buttonButtonImage}/>
						 </TouchableOpacity>
{		this.state.notInEvent &&	 <TouchableOpacity
						 style={styles.buttonTwoButton}
              onPress={() => { this.setJoinModalVisible(!this.state.modalJoinVisible); }}>
						 <Image
						 source={require("./../assets/images/bob-2.png")}
						 style={styles.buttonButtonImage}/>
						 </TouchableOpacity> }

						 </View>
						 <View
						 style={styles.restHeaderView}>
             <View style={{	height: 50}}>
             <ScrollView horizontal={true}>
						 <Text
						 style={styles.theTandoorText}>{this.state.item.location_name + ' | ' + this.state.item.group_name}</Text>
             </ScrollView>
             </View>
          	 <Text
						 style={styles.pmText}>{tConvert(this.state.item.time)}</Text>
						 </View>
						 <View
						 style={styles.viewFlatListViewWrapper}>
						 <FlatList
						 horizontal={false}
						 renderItem={this.renderViewFlatListCell}
             data={this.state.friendData}
             extraData={this.state}
             ListEmptyComponent={this.showEmptyListView()}
						 style={styles.viewFlatList}/>
						 </View>
						 </View>

             <Modal
              animationType="slide"
               transparent={true}
               visible={this.state.modalJoinVisible}
               onRequestClose={() => {
                 this.setJoinModalVisible(!this.state.modalJoinVisible);
               }}>
               <View
                   style={styles.artboard2View}>
                   <View
                     style={{
                       flexDirection: "row",
                     }}>
                     <TouchableOpacity
                       onPress={() => {  this.setState({errorMessage: null}); this.setJoinModalVisible(!this.state.modalJoinVisible); }}
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
                           onPress={() => { this.joinEvent();}}
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
                       <View
                         style={styles.edittextTextonlyPlaceholderTwoView}>
                         <Text
                           style={styles.paymentTwoText}>Intro</Text>
                         <View
                           style={{
                             flex: 1,
                             justifyContent: "flex-end",
                           }}>
                           <TextInput
                           placeholder="Bring your laptop!"
                           onChangeText={newIntro => this.setState({newIntro}) }
                           value={this.state.newIntro}
                           style={styles.TextTwoTextInput}/>
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

        </Modal>

				<TextInput
					placeholder="Search groups or restaurants"
          onChangeText={text => this.searchFilterFunction(text)}
					style={styles.group5TwoTextInput}/>

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
              flexDirection: "row-reverse",
         marginLeft: 30,
         marginTop: 35,
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
          {this.state.loading &&<ActivityIndicator size="large" />}
					<FlatList
					 keyboardShouldPersistTaps='always'
           scrollEnabled={this.state.scrollEnabled}
						horizontal={false}
						numColumns={2}
						renderItem={this.renderGroupFlatListCell}
						data={this.state.data}
						 extraData={this.state}
						style={styles.groupFlatList}/>
				</View>
			</View>
	}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
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
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                  color: 'rgb(33, 34, 36)',
                                  fontSize: 18,
                                  fontStyle: "normal",
                                  fontWeight: "bold",
                                  //textAlign: "right",
                                  //lineHeight: 0,
                                  //letterSpacing: 0,
                                marginLeft: 30,
                                  marginTop: 35,
                                 // width: 251.38,

	},
	miscBigButtonButton: {
    backgroundColor: 'rgb(98, 179, 255)',
                                  borderRadius: 10,
                                //  position: 'absolute',
                                // alignItems: "center",
                                // justifyContent: "center",
                         //    marginLeft: 140,
                           //       marginTop: 35,
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
                                   justifyContent: "center",
                                   alignSelf: "center",
                                   //flex: 1,
                                 //  flexDirection: "row",

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
  group5TwoTextInput: {
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
                              marginTop: 53,
                              marginLeft: 30,
                              marginRight: 30,
                              height: 40,
                              alignSelf: "stretch",
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
    height: 40,
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
    height: 160,
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

	menuView: {
	backgroundColor: 'rgba(55, 58, 61, 0.95)',
	flex: 1,
	},
	buttonButton: {
	backgroundColor: 'rgba(0, 0, 0, 0.0)',
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	marginLeft:19,
	marginTop: 36,
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
 marginRight: 19,
	marginTop: 35,
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
	// marginLeft: -3,
	// marginRight: 3,
	flex: 1,
},
})
