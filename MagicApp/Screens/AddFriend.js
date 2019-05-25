//
//  Addfriends
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList, TextInput, Linking  } from "react-native"
import React from "react"
import FriendCell from "./FriendCell"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class Addfriends extends React.Component {
    
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
        
        return <FriendCell
        navigation={this.props.navigation}/>
    }
    
    render() {
        
        return <View
        style={styles.artboardView}>
        
        <TouchableOpacity
        style={styles.buttonButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text
        style={styles.buttonButtonText}>Cancel </Text>
        </TouchableOpacity>
        
        <TextInput
        placeholder="Search Usernames"
        onChangeText={text => this.searchFilterFunction(text)}
        style={styles.groupSearchBar}
        />
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
        style={styles.friendNotOnVibeButtonText}>Friend Not on Vibe? Click to Invite using Messenger.</Text>
        </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
                                 artboardView: {
                                 backgroundColor: "white",
                                 flex: 1,
                                 },
                                 buttonButton: {
                                 //    position: "absolute",
                                 marginLeft: wp('2%'),
                                 marginTop: hp('3%'),
                                 },
                                 buttonButtonText: {
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 },
                                 buttonButtonImage: {
                                 resizeMode: "contain",
                                 },
                                 groupSearchBar: {
                                 borderRadius: 17,
                                 borderWidth: 1,
                                 borderColor: "rgb(196, 201, 223)",
                                 borderStyle: "solid",
                                 color: "rgb(134, 142, 150)",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 letterSpacing: 0,
                                 marginTop: hp('2%'),
                                 marginHorizontal: wp('8%'),
                                 height: 35,
                                 alignSelf: "stretch"
                                 },
                                 viewFlatListViewWrapper: {
                                 marginTop: 16,
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
                                 marginTop: 9,
                                 marginBottom: 16,
                                 width: 285,
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
