import React from "react";
import {  Text, View, StyleSheet, ActivityIndicator, AsyncStorage, Alert} from 'react-native';
import { createRootNavigator } from "./router";
import firebase from 'react-native-firebase'
import PushNotification from 'react-native-push-notification'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };

    
  }

  componentDidMount() {


this.setState({ signedIn: false, checkedSignIn: true})


  // // set props
  // firebase.auth().onAuthStateChanged(user => {
  //   if(user){
  //       this.setState({ signedIn: true, checkedSignIn: true})
  //   }
  //   else{
  //     console.log('finished');
  //       this.setState({ signedIn: false, checkedSignIn: true})
  //   }
  // })

  }



  //Remove listeners allocated in createNotificationListeners()
componentWillUnmount() {
  // console.log('add listeners');
// this.notificationListener();
// this.notificationOpenedListener();
}

//   async checkPermission() {
//   const enabled = await firebase.messaging().hasPermission();
//   console.log('perms?');
//   console.log(enabled);
//   if (enabled) {
//       this.getToken();
//   } else {
//       this.requestPermission();
//   }
// }

// async getToken() {
//   console.log('trying');
//   try{
//   let fcmToken = await AsyncStorage.getItem('fcmToken', value);
//   console.log('got token!');
//   // //
//   // if (!fcmToken) {
//   //
//   // }
//   this.setState({ signedIn: false, checkedSignIn: true})
// }
//   catch (error) {
//       // User has rejected permissions
//       console.log('error token');
//       fcmToken = await firebase.messaging().getToken();
//       if (fcmToken) {
//           // user has a device token
//           await AsyncStorage.setItem('fcmToken', fcmToken);
//         // this.setState({ signedIn: false, checkedSignIn: true})
//       }
//       console.log(fcmToken);

//   }
// }

// async requestPermission() {
// try {
//   console.log('requesting...');
//   var that = this;
//   firebase.messaging().requestPermission().then(function() {
//   console.log('Notification permission granted.');
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
//   that.getToken();
// }).catch(function(err) {
//   console.log('Unable to get permission to notify.', err);
// });


//   //   await firebase.messaging().requestPermission();
//   //   // User has authorised
//   //
//   // //   this.setState({ signedIn: false, checkedSignIn: true})
// } catch (error) {
//     // User has rejected permissions
//     console.log('permission rejected');
// }
// }

  render() {
    const {checkedSignIn,  signedIn } = this.state;
    if(!checkedSignIn){
      return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
    }
    const Layout =  createRootNavigator(signedIn);
    return <Layout />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
