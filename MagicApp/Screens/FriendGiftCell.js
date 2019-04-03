//
//  ListRest1
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableOpacity, StyleSheet, View, Text } from "react-native"
import React from "react"


export default class ListRest1 extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
    }
    
    onListRest1Press = () => {
        
    }
    
    render() {
        
        return <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate("CurrentOrder");
        }}
        >
        
        
        <View
        navigation={this.props.navigation}
        style={styles.listRest1}>
        <View
        style={styles.group3View}>
        <Text
        style={styles.bobDrakeText}>Bob Drake</Text>
        <View
        pointerEvents="box-none"
        style={{
        alignSelf: "stretch",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        }}>
        <Text
        style={styles.textText}>7/10</Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
                                 listRest1: {
                                 backgroundColor: "white",
                                 height: 50,
                                 justifyContent: "center",
                                 },
                                 group3View: {
                                 backgroundColor: "transparent",
                                 marginLeft: 6,
                                 width: 349,
                                 height: 22,
                                 flexDirection: "row",
                                 alignItems: "center",
                                 },
                                 bobDrakeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 16,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 width: 287,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(214, 112, 125)",
                                 fontSize: 16,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "right",
                                 width: 54,
                                 },
                                 })
