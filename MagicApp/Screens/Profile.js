//
//  Friendsfriends
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList } from "react-native"
import React from "react"
import LoyaltyCells from "./LoyaltyCells"

import SegmentedControlTab from "react-native-segmented-control-tab"
import GiftCell from "./GiftCell"


export default class Friendsfriends extends React.Component {
    
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
    
   
    
    onCellsButtonCellPressed = () => {
        
    }
    
    viewFlatListMockData = [{
                            key: "1",
                            }, {
                            key: "2",
                            }, {
                            key: "3",
                            }]
    
    renderViewFlatListCell = ({ item }) => {
        
        return <LoyaltyCells
        navigation={this.props.navigation}/>
    }
    
    viewTwoFlatListMockData = [{
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
    
    renderViewTwoFlatListCell = ({ item }) => {
        
        return <GiftCell
        navigation={this.props.navigation}/>
    }
    
    render() {
        
        return <View
        style={styles.artboardView}>
        <Text
        style={styles.dhrumilwbcText}>username</Text>
        <Text
        style={styles.yourgiftstext}>Your Reward Cards</Text>
        <View
        style={styles.viewFlatListViewWrapper}>
        <FlatList
        horizontal = {true}
        renderItem={this.renderViewFlatListCell}
        data={this.viewFlatListMockData}
        style={styles.viewFlatList}/>
        </View>
        <Text
        style={styles.yourgiftstext}>Gifts From Friends</Text>
        <View
        style={styles.viewTwoFlatListViewWrapper}>
        <FlatList
        renderItem={this.renderViewTwoFlatListCell}
        data={this.viewTwoFlatListMockData}
        style={styles.viewTwoFlatList}/>
        </View>
    
        
        <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate("AddFriend");
        }}
        style={styles.cellsButtonCellButton}>

        
        <Text
        style={styles.cellsButtonCellButtonText}>Add Friends</Text>
        </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
                                 artboardView: {
                                 backgroundColor: "white",
                                 flex: 1,
                                 },
                                 dhrumilwbcText: {
                                 backgroundColor: "transparent",
                                 color: "black",
                                 fontSize: 30,
                                 fontStyle: "normal",
                                 fontWeight: "600",
                                 textAlign: "left",
                                 marginLeft: 12,
                                 marginRight: 9,
                                 marginTop: 20,
                                 marginBottom: 20,
                                 width: 354,
                                 },
                                 yourgiftstext: {
                                 backgroundColor: "transparent",
                                 color: "black",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "200",
                                 textAlign: "left",
                                 marginLeft: 12,
                                 marginRight: 9,
                                 width: 354,
                                 },
                                 viewFlatListViewWrapper: {
                                 marginTop: 10,
                                 marginBottom: 10,
                                 height: 59,
                                 },
                                 viewFlatList: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                
                                 viewTwoFlatListViewWrapper: {
                                 marginLeft: 4,
                                 marginRight: 9,
                                 marginTop: 10,
                                 flex: 1,
                                 },
                                 viewTwoFlatList: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 cellsButtonCellButton: {
                                 backgroundColor: "rgb(114, 167, 228)",
                                 borderRadius: 11.5,
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 padding: 0,
                                 marginTop: 22,
                                 marginBottom: 14,
                                 width: 111,
                                 height: 27,
                                 alignSelf: "center",
                                 },
                                 cellsButtonCellButtonText: {
                                 color: "white",
                                 fontSize: 17,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 cellsButtonCellButtonImage: {
                                 resizeMode: "contain",
                                 marginRight: 10,
                                 },
                                 })
