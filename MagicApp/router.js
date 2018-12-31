import React from 'react';
import { Button, Text, View, Image, StyleSheet, ActivityIndicator, Platform, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// import FeedScreen from './Screens/Feed'
// import Metrics from './Screens/Metrics'
// import ProfileScreen from './Screens/Profile'
// import CalendarScreen from './Screens/Calendar'
// import CreateAccountScreen from './Screens/CreateAccountScreen'
// import LoginScreen from './Screens/LoginScreen'
// import TodoScreen from './scenes/todo/TodoScene'
import GroupScreen from './Screens/GroupScreen'
import MyCarousel from './Screens/MyCarousel'
import GroupsTwo from './Screens/GroupsTwo'

import firebase from 'react-native-firebase'
//
// export const SignInScreen = createStackNavigator({
//   SignIn: {
//     screen: LoginScreen,
//     navigationOptions: {
//       title: "Sign Up",
//        header: null
//     }
//   },
//   SignUp: {
//     screen: CreateAccountScreen,
//     navigationOptions: {
//       title: "Sign Up",
//       header: null
//     }
//   },
// });
//
// export const HomeStack = createStackNavigator({
//   Home: { screen: CalendarScreen, navigationOptions: { header: null } }
// });
//
// export const MetricStack =   createStackNavigator({
//       Metrics: { screen: Metrics, navigationOptions: { header: null }  },
//         Profile: { screen: ProfileScreen },
//   });
//
//
// export const FeedStack = createMaterialTopTabNavigator({
//     Feed: {
//       screen: FeedScreen,
//     },
//       Todo: {
//         screen: TodoScreen ,
//         },
//   },
//   {
//  tabBarOptions: {
//    scrollEnabled: true,
//    labelStyle: {
//      fontSize: 15,
//    },
//    tabStyle: {
//     marginTop: 15,
//      width: Dimensions.get('window').width / 2,
//    },
//    style: {
//      backgroundColor: 'tomato',
//    },
//    indicatorStyle: {
//      backgroundColor: '#fff'
//    }
//  },
// }
// );
//
// export const MainScreen =  createMaterialBottomTabNavigator(
//   {
//     Feed: {
//       screen: FeedStack,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor, focused }) => (
//           <Icon name="search" size={25} color={tintColor} />
//         )
//       }
//     },
//     Home: {
//       screen: HomeStack,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor, focused }) => (
//           <Icon name="home" size={25} color={tintColor} />
//         )
//       }
//      },
//     Metrics: {
//       screen: MetricStack,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor, focused }) => (
//           <Icon name="gear" size={25} color={tintColor} />
//         )
//       }
//      },
//   },
//   {
//   shifting: true,
//   initialRouteName: 'Home',
//   activeTintColor: 'tomato',
//   inactiveTintColor: 'gray',
//   barStyle: { backgroundColor: '#FEF5EF' },
// }
// );

export const createRootNavigator = (signedIn = false) => {
  return  createAppContainer(createSwitchNavigator(
    {
      SignedIn: {
        screen: GroupsTwo
      },
      SignedOut: {
        screen: GroupsTwo
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  ));
};
