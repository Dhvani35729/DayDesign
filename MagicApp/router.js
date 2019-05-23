//
//  Router.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';

// General
import Loading from './screens/Loading';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

// Vibe
import GroupScreen from './screens/groups/GroupScreen';

// Trofi
import DynamicScreen from './screens/dynamic/DynamicScreen';
import VendorListScreen from './screens/dynamic/VendorListScreen';
import MenuScreen from './screens/dynamic/MenuScreen';
import AddItemScreen from './screens/dynamic/AddItemScreen';
import CheckoutScreen from './screens/dynamic/CheckoutScreen';
import PaymentScreen from './screens/dynamic/PaymentScreen';
import CurrentOrderScreen from './screens/dynamic/CurrentOrderScreen';

// Friends
import SendGift from './screens/friends/SendGift';
import AddFriend from './screens/friends/AddFriend';
import ProfileScreen from './screens/friends/Profile';


const DynamicNavigator = createStackNavigator (
  {
    DynamicScreen: {
      screen: DynamicScreen,
    },
    VendorListScreen: {
      screen: VendorListScreen,
    },
    MenuScreen: {
      screen: MenuScreen,
    },
    AddItemScreen: {
      screen: AddItemScreen,
    },
    PaymentScreen: {
      screen: PaymentScreen,
    },
    CurrentOrderScreen: {
      screen: CurrentOrderScreen,
    },
    CheckoutScreen: {
      screen: CheckoutScreen,
    },
  },
  {
    initialRouteName: 'DynamicScreen',
  }
);

const ProfileNavigator = createStackNavigator (
  {
    ProfileScreen: {
      screen: ProfileScreen,
    },
    AddFriend: {
      screen: AddFriend,
    },
  },
  {
    initialRouteName: 'ProfileScreen',
  }
);

const SignUpNavigator = createSwitchNavigator (
  {
    Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const AppNavigator = createMaterialBottomTabNavigator( {
  ProfileScreen: {
    screen: ProfileNavigator,
    navigationOptions: ({ navigation }) => (
      { title: "Profile", tabBarIcon: <Icon name="user-circle-o" color="#FFFF" size={20} /> }) },

    DynamicScreen: {
      screen: DynamicNavigator,
      navigationOptions: ({ navigation }) => (
        { title: "Restaurants", tabBarIcon: <Icon name="cutlery" color="#FFFF" size={20} /> }) },

    GroupScreen: {
      screen: GroupScreen,
      navigationOptions: ({ navigation }) => (
        { title: "Groups", tabBarIcon: <Icon name="group" color="#FFFF" size={20} /> }) }, },
        {
          initialRouteName: "DynamicScreen",
          activeColor: "#f0edf6",
          inactiveColor: "#3e2465",
          barStyle: { backgroundColor: "#72A7E4" },
          shifting: true
        }
  );

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer (
    createSwitchNavigator (
      {
        SignedIn: DynamicNavigator,
        SignedOut: SignUpNavigator,
      },
      {
        initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      }
    )
  );
};