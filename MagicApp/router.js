//
//  router.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import GroupScreen from './Screens/GroupScreen'
import firebase from 'react-native-firebase'
import {  Text, View, StyleSheet, ActivityIndicator} from 'react-native';

class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export const createRootNavigator = (signedIn = false) => {
  return  createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: GroupScreen
      },
      SignedOut: {
        screen: LoadingScreen
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
