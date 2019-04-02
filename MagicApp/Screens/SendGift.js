//
//  SendGift
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList } from "react-native"
import React from "react"
import ListRest1 from "./ListRest1"


export default class SendGift extends React.Component {
    
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
        
    }
    
    onSkipPressed = () => {
        
    }
    
    onFriendNotOnVibePressed = () => {
        
    }
    
    viewFlatListMockData = [{
                            key: "1",
                            }, {
                            key: "2",
                            }, {
                            key: "3",
                            }, {
                            key: "4",
                            }, {
                            key: "5",
                            }, {
                            key: "6",
                            }, {
                            key: "7",
                            }, {
                            key: "8",
                            }, {
                            key: "9",
                            }, {
                            key: "10",
                            }]
    
    renderViewFlatListCell = ({ item }) => {
        
        return <ListRest1
        navigation={this.props.navigation}/>
    }
    
    render() {
        
        return <View
        style={styles.sendgiftView}>
        <View
        style={styles.viewView}>
        <View
        style={styles.backgroundView}/>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        }}>
        <View
        style={styles.restHeaderView}>
        <Text
        style={styles.unlockFreeText}>unlock free</Text>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        justifyContent: "flex-end",
        }}>
        <Text
        style={styles.textTwoText}>Jawads Chicken Wrap</Text>
        <Text
        style={styles.textText}>+3/10</Text>
        </View>
        </View>
        </View>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        }}>
        <View
        style={styles.viewTwoView}>
        <View
        style={styles.restHeaderTwoView}>
        <Text
        style={styles.sendAFreeGiftText}>Send a Free Gift</Text>
        </View>
        <TouchableOpacity
        onPress={() => {this.props.navigation.navigate("CurrentOrder");}}
        style={styles.skipButton}>
        <Text
        style={styles.skipButtonText}>skip</Text>
        </TouchableOpacity>
        <View
        style={styles.viewFlatListViewWrapper}>
        <FlatList
        renderItem={this.renderViewFlatListCell}
        data={this.viewFlatListMockData}
        style={styles.viewFlatList}/>
        </View>
        <TouchableOpacity
        onPress={this.onFriendNotOnVibePressed}
        style={styles.friendNotOnVibeButton}>
        <Text
        style={styles.friendNotOnVibeButtonText}>Friend Not on Vibe? Click to Send Gift using Messenger.</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    }
}

const styles = StyleSheet.create({
                                 sendgiftView: {
                                 backgroundColor: "rgb(246, 246, 246)",
                                 flex: 1,
                                 },
                                 viewView: {
                                 backgroundColor: "transparent",
                                 height: 123,
                                 },
                                 backgroundView: {
                                 backgroundColor: "rgba(55, 58, 61, 0.9)",
                                 height: 123,
                                 alignItems: "flex-start",
                                 },
                                 restHeaderView: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 19,
                                 borderWidth: 2,
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 marginLeft: 12,
                                 marginRight: 11,
                                 marginTop: 22,
                                 height: 59,
                                 },
                                 unlockFreeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginTop: 2,
                                 width: 352,
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 2,
                                 width: 352,
                                 height: 22,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginBottom: 1,
                                 width: 352,
                                 },
                                 viewTwoView: {
                                 backgroundColor: "transparent",
                                 marginRight: -3,
                                 marginTop: 106,
                                 height: 545,
                                 },
                                 restHeaderTwoView: {
                                 backgroundColor: "rgb(114, 167, 228)",
                                 borderRadius: 17.5,
                                 marginRight: 3,
                                 height: 35,
                                 justifyContent: "center",
                                 },
                                 sendAFreeGiftText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 24,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginLeft: 100,
                                 marginRight: 100,
                                 },
                                 skipButton: {
                                 backgroundColor: "transparent",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 padding: 0,
                                 marginRight: 14,
                                 marginTop: 12,
                                 width: 26,
                                 height: 19,
                                 alignSelf: "flex-end",
                                 },
                                 skipButtonText: {
                                 color: "rgb(73, 76, 79)",
                                 fontSize: 14,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "right",
                                 },
                                 skipButtonImage: {
                                 resizeMode: "contain",
                                 marginRight: 10,
                                 },
                                 viewFlatListViewWrapper: {
                                 marginRight: 3,
                                 marginTop: 18,
                                 flex: 1,
                                 },
                                 viewFlatList: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 friendNotOnVibeButton: {
                                 backgroundColor: "transparent",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 padding: 0,
                                 marginTop: 14,
                                 width: 309,
                                 height: 19,
                                 alignSelf: "center",
                                 },
                                 friendNotOnVibeButtonText: {
                                 color: "rgb(74, 144, 226)",
                                 fontSize: 11,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 friendNotOnVibeButtonImage: {
                                 resizeMode: "contain",
                                 marginRight: 10,
                                 },
                                 })
