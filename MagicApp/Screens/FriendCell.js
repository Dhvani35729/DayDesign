//
//  ListRest1Three
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableWithoutFeedback, StyleSheet, View, Text } from "react-native"
import React from "react"


export default class ListRest1Three extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
    }
    
    onListRest1ThreePress = () => {
        
    }
    
    render() {
        
        return <TouchableWithoutFeedback
        onPress={this.onListRest1ThreePress}>
        <View
        navigation={this.props.navigation}
        style={styles.listRest1}>
        <Text
        style={styles.bobDrakeText}>Bob Drake</Text>
        </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
                                 listRest1: {
                                 backgroundColor: "rgb(246, 246, 246)",
                                 height: 50,
                                 justifyContent: "center",
                                 },
                                 bobDrakeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontSize: 16,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 marginLeft: 3,
                                 marginRight: 280,
                                 },
                                 })
