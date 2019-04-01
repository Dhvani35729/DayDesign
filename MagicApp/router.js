//
//  Router.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createMaterialTopTabNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import firebase from "react-native-firebase";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

import Loading from "./Screens/Loading";

import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

import GroupScreen from "./Screens/GroupScreen";
import DynamicScreen from "./Screens/DynamicScreen";
import ProfileScreen from "./Screens/GroupScreen";

import VendorList from "./Screens/VendorList";
import PickMenu from "./Screens/PickMenu";
import AddItem from "./Screens/AddItem";
import Checkout from "./Screens/Checkout";
import Payment from "./Screens/payment";
import CurrentOrder from "./Screens/CurrentOrder";

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

const DynamicNavigator = createStackNavigator(
                                              {
                                              DynamicScreen: {
                                              screen: DynamicScreen
                                              },
                                              VendorListScreen: {
                                              screen: VendorList
                                              },
                                              PickMenu: {
                                              screen: PickMenu
                                              },
                                              AddItem: {
                                              screen: AddItem
                                              },
                                              Payment: {
                                              screen: Payment
                                              },
                                              CurrentOrder: {
                                              screen: CurrentOrder
                                              },
                                              Checkout: {
                                              screen: Checkout
                                              }
                                              },
                                              
                                              {
                                              initialRouteName: "DynamicScreen"
                                              }
                                              );

const SignUpNavigator = createSwitchNavigator(
                                              {
                                              Login: {
                                              screen: Login
                                              },
                                              SignUp: {
                                              screen: SignUp
                                              }
                                              },
                                              
                                              {
                                              initialRouteName: "Login"
                                              }
                                              );

const AppNavigator = createMaterialBottomTabNavigator(
                                                      {
                                                      
                                                      ProfileScreen: {
                                                      screen: ProfileScreen,
                                                      navigationOptions: ({ navigation }) => ({
                                                                                              title: "Profile",
                                                                                              tabBarIcon: <Icon name="user-circle-o" color="#FFFF" size={20} />
                                                                                              })
                                                      },
                                                      DynamicScreen: {
                                                      screen: DynamicNavigator,
                                                      navigationOptions: ({ navigation }) => ({
                                                                                              title: "Restaurants",
                                                                                              tabBarIcon: <Icon name="cutlery" color="#FFFF" size={20} />
                                                                                              })
                                                      },
                                                      
                                                      GroupScreen: {
                                                      screen: GroupScreen,
                                                      navigationOptions: ({ navigation }) => ({
                                                                                              title: "Groups",
                                                                                              tabBarIcon: <Icon name="group" color="#FFFF" size={20} />
                                                                                              })
                                                      },
                                                      
                                                      },
                                                      {
                                                      initialRouteName: "DynamicScreen",
                                                      activeColor: "#f0edf6",
                                                      inactiveColor: "#3e2465",
                                                      barStyle: { backgroundColor: "#72A7E4" },
                                                      shifting: true
                                                      }
                                                      );

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(
                              createSwitchNavigator(
                                                    {
                                                    SignedIn: AppNavigator,
                                                    SignedOut: SignUpNavigator
                                                    },
                                                    {
                                                    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
                                                    }
                                                    )
                              );
};

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: "center",
                                 alignItems: "center"
                                 }
                                 });
