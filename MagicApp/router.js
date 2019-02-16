//
//  router.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import firebase from 'react-native-firebase'
import {  Text, View, StyleSheet, ActivityIndicator} from 'react-native';

import GroupScreen from './Screens/GroupScreen'
import DynamicScreen from './Screens/DynamicScreen'
import VendorList from './Screens/VendorList'

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

const DynamicNavigator = createStackNavigator({
  DynamicScreen: {
    screen: DynamicScreen,
  },
  VendorListScreen: {
      screen: VendorList,
  }
},
{
  initialRouteName: "DynamicScreen"
}
);

const AppNavigator = createMaterialBottomTabNavigator({
  GroupScreen: {
    screen: GroupScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Groups",
      tabBarIcon: ( <Icon
                 name="heart"
                 color="#FFFF"
                 size={24}
             />)
   }),
   },
  DynamicScreen: {
    screen: DynamicNavigator,
    navigationOptions: ({ navigation }) => ({
     title: "Groups",
     tabBarIcon: ( <Icon
                name="rocket"
                color="#FFFF"
                size={24}
            />)
   }),
  }
}, {
  initialRouteName: 'GroupScreen',
  activeColor: '#f0edf6',
 inactiveColor: '#3e2465',
 barStyle: { backgroundColor: '#694fad' },
 shifting: true
});


export const createRootNavigator = (signedIn = false) => {
  return  createAppContainer(createSwitchNavigator(
    {
      SignedIn: AppNavigator,
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
