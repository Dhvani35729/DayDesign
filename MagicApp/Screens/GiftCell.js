//
//  ListRest1Four
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableWithoutFeedback, StyleSheet, View, Text } from "react-native"
import React from "react"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";


export default class ListRest1Four extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        
    }
    
    onListRest1FourPress = () => {
        
    }
    
    render() {
        
        return <TouchableWithoutFeedback
        onPress={this.onListRest1FourPress}>
        <View
        navigation={this.props.navigation}
        style={styles.listRest1}>
        <Text
        style={styles.bobDrakeGiftedYouText}>Bob Drake Gifted You +3 at Shawerma Plus</Text>
        </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
                                 listRest1: {
                                 backgroundColor: "rgb(246, 246, 246)",
                                 height: 46,
                                 marginBottom: 5,
                                 },
                                 bobDrakeGiftedYouText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginLeft: 6,
                                 marginRight: 6,
                                 width: wp('90%'),
                                 height: 45,
                                 },
                                 })
