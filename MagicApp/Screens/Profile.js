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
import FriendCell from "./FriendCell"


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
    
    onOverridesNavigationBarSegmentedControlThirdValueChanged = () => {
        
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
        
        return <FriendCell
        navigation={this.props.navigation}/>
    }
    
    render() {
        
        return <View
        style={styles.artboardView}>
        <Text
        style={styles.dhrumilwbcText}>dhrumilwbc</Text>
        <View
        style={styles.viewFlatListViewWrapper}>
        <FlatList
        horizontal = {true}
        renderItem={this.renderViewFlatListCell}
        data={this.viewFlatListMockData}
        style={styles.viewFlatList}/>
        </View>
        <SegmentedControlTab
        values={["Friends", "Gifts"]}
        tabStyle={styles.overridesNavigationBarSegmentedControlThirdSegmentedControlTab}
        tabTextStyle={styles.overridesNavigationBarSegmentedControlThirdSegmentedControlTabText}
        activeTabStyle={styles.overridesNavigationBarSegmentedControlThirdSegmentedControlActiveTab}
        activeTabTextStyle={styles.overridesNavigationBarSegmentedControlThirdSegmentedControlActiveTabText}
        style={styles.overridesNavigationBarSegmentedControlThirdSegmentedControl}/>
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
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginLeft: 12,
                                 marginRight: 9,
                                 marginTop: 20,
                                 width: 354,
                                // flex: 1,
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
                                 overridesNavigationBarSegmentedControlThirdSegmentedControl: {
                                 backgroundColor: "transparent",
                                 borderRadius: 4,
                                 borderWidth: 1,
                                 borderColor: "rgb(114, 167, 228)",
                                 borderStyle: "solid",
                                 color: "black",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 marginLeft: 9,
                                 marginTop: 21,
                                 width: 239,
                                 flex: 1,
                                 },
                                 overridesNavigationBarSegmentedControlThirdSegmentedControlTab: {
                                 borderColor: "rgb(114, 167, 228)",
                                 },
                                 overridesNavigationBarSegmentedControlThirdSegmentedControlTabText: {
                                 fontSize: 12,
                                 fontWeight: "400",
                                 color: "rgb(114, 167, 228)",
                                 },
                                 overridesNavigationBarSegmentedControlThirdSegmentedControlActiveTab: {
                                 backgroundColor: "rgb(114, 167, 228)",
                                 },
                                 overridesNavigationBarSegmentedControlThirdSegmentedControlActiveTabText: {
                                 color: "white",
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
