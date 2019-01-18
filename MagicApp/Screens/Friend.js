//
//  Friend.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { View, Image, Text, StyleSheet } from "react-native"
import React from "react"

// Credit for Goose Icon:
// <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
export default class Friend extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
        console.log("in friend props");
    }

    componentDidMount() {

    }

    render() {

        return <View
        style={styles.friend}>
        <View
        style={{
        flexDirection: "row",
        }}>
        <Image
        source={require("./../assets/images/avatar.png")}
        style={styles.avatarImage}/>
        <View>
        <Text
        style={styles.jeremyHarrisonText}>{this.props.item.name}</Text>
        <View
        style={{
        flex: 1,
       justifyContent: "center",
        }}>
        <Text
        style={styles.iLikeBasketballAnText}>{this.props.item.prompt}</Text>
        </View>
        </View>
        </View>
        <View
        style={{
        }}/>
        </View>
    }
}

const styles = StyleSheet.create({
                                 friend: {
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 height: 89,
                                 },

                                 avatarImage: {
                                 resizeMode: "center",
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 //marginLeft: 16,
                                 width: 74,
                                 height: 74,
                                 marginLeft: 10,
                                 marginRight: 10,
                                 },

                                 jeremyHarrisonText: {
                                 color: 'rgb(68, 68, 68)',
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                               //  letterSpacing: -0.8,
                                 //backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                  // marginLeft: 0,
                                //  marginRight: 0,
                               //   alignSelf: "flex-start",
                                 height: 27,
                                 },

                                 iLikeBasketballAnText: {
                                 color: 'rgb(68, 68, 68)',
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 //letterSpacing: -0.56,
                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 paddingRight: 130,
                                 flex: 1,
                                 // justifyContent: "flex-end",
                                //flexGrow: 1,
                                // flex: 0.8,
                                 //alignSelf: "flex-end",
                                 height: 38,
                                 },

                                 })
