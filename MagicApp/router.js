import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import GroupScreen from './Screens/GroupScreen'
import MyModal from './Screens/MyModal'
import firebase from 'react-native-firebase'

export const createRootNavigator = (signedIn = false) => {
  return  createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: MyModal
      },
      SignedOut: {
        screen: GroupScreen
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};
