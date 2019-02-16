//
//  DynamicScreen.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from "react"
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, Alert, ScrollView, AppState, StatusBar, BackHandler, Platform, ActivityIndicator, WebView, Linking, NetInfo } from "react-native"
import DeviceInfo from 'react-native-device-info';
import RNExitApp from 'react-native-exit-app';
import PushNotification from 'react-native-push-notification'
import firebase from 'react-native-firebase'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class DynamicScreen extends React.Component {

    state = {};

    _isMounted = false

    static navigationOptions = ({ navigation }) => {

        const { params = {} } = navigation.state
        return {
        header: null,
        headerLeft: null,
        headerRight: null,
        }
    }

    constructor(props) {
        super(props)

      }


    componentDidMount() {
        // console.log('In main group screen');


    }

    // Remove all listeners
    componentWillUnmount() {
        console.log('leaving...');

    }

    // called when prop updates
    componentDidUpdate(prevProps) {

    }

    render() {

        return (
          <View style={styles.container}>
            <Text>Dynamic</Text>
          </View>
        )

}

}

const styles = StyleSheet.create({
                                 container: {
                                 backgroundColor: 'rgb(255, 255, 255)',
                                 flex: 1,
                                 },
                    });
