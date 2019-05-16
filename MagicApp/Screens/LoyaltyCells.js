//
//  RestHeader
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableWithoutFeedback, StyleSheet, View, Text } from "react-native"
import React from "react"


export default class RestHeader extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
    }
    
    onRestHeaderPress = () => {
        
    }
    
    render() {
        
        return <TouchableWithoutFeedback
        onPress={this.onRestHeaderPress}>
        <View
        navigation={this.props.navigation}
        style={styles.restHeader}>
        <Text
        style={styles.unlockFreeText}>unlock free</Text>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        justifyContent: "flex-end",
        }}>
        <Text
        style={styles.textText}>7/10</Text>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        flex: 1,
        position: "absolute",
        justifyContent: "flex-end",
        }}>
        <Text
        style={styles.textTwoText}>Jawaes fdg drgy trdtdf trr fytfty</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
                                 restHeader: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 19,
                                 borderWidth: 2,
                                 borderColor: "rgb(246, 246, 246)",
                                 borderStyle: "solid",
                                 height: 59,
                                 width: 340,
                                 },
                                 unlockFreeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginTop: 1,
                                 width: 340,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 1,
                                 width: 340,

                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 19,
                                 width: 340,
                                 },
                                 })
