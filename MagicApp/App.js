import React from "react";
import {  Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import { createRootNavigator } from "./router";
import firebase from 'react-native-firebase'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
  // set props
  firebase.auth().onAuthStateChanged(user => {
    if(user){
        this.setState({ signedIn: true, checkedSignIn: true})
    }
    else{
      console.log('finished');
        this.setState({ signedIn: false, checkedSignIn: true})
    }
  })



  }

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
