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
import CreateGroupModal from './Screens/CreateGroupModal'
import firebase from 'react-native-firebase'

export const createRootNavigator = (signedIn = false) => {
  return  createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: CreateGroupModal
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
