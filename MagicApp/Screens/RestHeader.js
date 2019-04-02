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
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 height: 59,
                                 },
                                 unlockFreeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginLeft: 152,
                                 marginRight: 156,
                                 marginTop: 2,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginLeft: 170,
                                 marginRight: 175,
                                 marginBottom: 1,
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 17,
                                 width: 352,
                                 },
                                 })
