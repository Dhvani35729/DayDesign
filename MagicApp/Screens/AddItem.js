//checking something

//  MenuThree

//  dynamic

//

//  Created by dhvani&dhrumil.

//  Copyright © 2018 magic. All rights reserved.

//



import {
    
    FlatList,
    
    Text,
    
    View,
    
    StyleSheet,
    
    TextInput,
    
    Image,
    
    TouchableOpacity
    
} from "react-native";

import React from "react";

import Toppings from "./Toppings";

import {
    
    widthPercentageToDP as wp,
    
    heightPercentageToDP as hp
    
} from "react-native-responsive-screen";



export default class AddItem extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        
        const { params = {} } = navigation.state;
        
        return {
            
        header: null,
            
        headerLeft: null,
            
        headerRight: null
            
        };
        
    };
    
    
    
    constructor(props) {
        
        super(props);
        
    }
    
    
    
    componentDidMount() {}
    
    
    
    viewFlatListMockData = [
                            
                            {
                            
                            key: "1"
                            
                            },
                            
                            {
                            
                            key: "2"
                            
                            },
                            
                            {
                            
                            key: "3"
                            
                            },
                            
                            {
                            
                            key: "4"
                            
                            },
                            
                            {
                            
                            key: "5"
                            
                            },
                            
                            {
                            
                            key: "6"
                            
                            },
                            
                            {
                            
                            key: "7"
                            
                            },
                            
                            {
                            
                            key: "8"
                            
                            },
                            
                            {
                            
                            key: "9"
                            
                            },
                            
                            {
                            
                            key: "10"
                            
                            }
                            
                            ];
    
    
    
    renderViewFlatListCell = ({ item }) => {
        
        return <Toppings />;
        
    };
    
    
    
    render() {
        
        return (
                
                <View style={styles.menuView}>
                
                <View style={styles.backgroundView}>
                
                <TouchableOpacity
                
                onPress={() => this.props.navigation.goBack()}
                
                style={styles.icCloseButton}
                
                >
                
                <Image
                
                source={require("./../assets/images/ic-close.png")}
                
                style={styles.buttonButtonImage}
                
                />
                
                </TouchableOpacity>
                
                
                
                <TouchableOpacity
                
                onPress={() => this.props.navigation.goBack()}
                
                style={styles.icCartButton}
                
                >
                
                <Image
                
                source={require("./../assets/images/bob-2.png")}
                
                style={styles.buttonButtonImage}
                
                />
                
                </TouchableOpacity>
                
                
                
                <View
                
                style={{
                
                //position: "absolute",
                
                flex: 1,
                
                flexDirection: "row",
                
                justifyContent: "center"
                
                }}
                
                >
                
                <View style={styles.graybackgroundView}>
                
                <Text style={styles.nextmoneyText}>10%</Text>
                
                <View
                
                style={{
                
                // width: "100%",
                
                // height: "100%",
                
                flex: 1,
                
                // position: "absolute",
                
                justifyContent: "flex-end"
                
                }}
                
                >
                
                <Text style={styles.buyersneededText}>$95/100</Text>
                
                </View>
                
                </View>
                
                </View>
                
                </View>
                
                
                
                <View
                
                style={{
                
                flex: 1
                
                }}
                
                >
                
                <Text style={styles.shawarmaPlusText}>Shawarma Plus</Text>
                
                <View style={styles.rectangle4View}>
                
                <View
                
                style={{
                
                flexDirection: "row"
                
                }}
                
                >
                
                <View style={styles.group3View}>
                
                <Text style={styles.jawadSStyleChickText}>
                
                Jawad's Style: Chicken Shawarma Wrap
                
                </Text>
                
                <Text style={styles.pitaBreadStuffedWText}>
                
                pita bread stuffed with chicken & fries, pickles, garlic mayo
                
                & hot sauce
                
                </Text>
                
                </View>
                
                <View
                
                style={{
                
                flex: 1,
                
                flexDirection: "row",
                
                justifyContent: "flex-end"
                
                }}
                
                >
                
                <View style={styles.group2View}>
                
                <Text style={styles.textTwoText}>$12.00</Text>
                
                <View
                
                style={{
                
                flex: 1,
                
                justifyContent: "flex-end"
                
                }}
                
                >
                
                <Text style={styles.textText}>$11.00</Text>
                
                </View>
                
                </View>
                
                </View>
                
                </View>
                
                <View
                
                style={{
                
                flex: 1,
                
                justifyContent: "flex-end"
                
                }}
                
                >
                
                <View style={styles.groupView}>
                
                <Text style={styles.textThreeText}>+23</Text>
                
                </View>
                
                </View>
                
                </View>
                
                <TextInput
                
                multiline={true}
                
                autoCorrect={false}
                
                placeholder="Extra instructions or special requests. "
                
                style={styles.extraInstructionsOTextInput}
                
                />
                
                <View style={styles.viewView}>
                
                <Text style={styles.toppingsText}>Toppings</Text>
                
                <View style={styles.viewFlatListViewWrapper}>
                
                <FlatList
                
                renderItem={this.renderViewFlatListCell}
                
                data={this.viewFlatListMockData}
                
                style={styles.viewFlatList}
                
                />
                
                </View>
                
                </View>
                
                </View>
                
                <View
                
                style={{
                
                justifyContent: "flex-end"
                
                }}
                
                >
                
                <View style={styles.viewTwoView}>
                
                <Image
                
                source={require("./../assets/images/stepper.png")}
                
                style={styles.stepperImage}
                
                />
                
                <View
                
                style={{
                
                flex: 1,
                
                flexDirection: "row",
                
                justifyContent: "flex-end",
                
                alignItems: "flex-end"
                
                }}
                
                >
                
                <Text style={styles.servingsText}>3 Servings</Text>
                
                </View>
                
                </View>
                
                </View>
                
                </View>
                
                );
        
    }
    
}



const styles = StyleSheet.create({
                                 
                                 menuView: {
                                 
                                 backgroundColor: "rgb(246, 246, 246)",
                                 
                                 flex: 1
                                 
                                 },
                                 
                                 backgroundView: {
                                 
                                 backgroundColor: "rgba(55, 58, 61, 0.9)",
                                 
                                 height: 100,
                                 
                                 flexDirection: "row"
                                 
                                 },
                                 
                                 icCloseButton: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 shadowColor: "rgba(0, 0, 0, 0.11)",
                                 
                                 shadowRadius: 3,
                                 
                                 shadowOpacity: 1,
                                 
                                 flexDirection: "row",
                                 
                                 alignItems: "center",
                                 
                                 justifyContent: "center",
                                 
                                 marginLeft: wp("5%"),
                                 
                                 marginTop: hp("4%"),
                                 
                                 width: 50,
                                 
                                 height: 50,
                                 
                                 },
                                 
                                 icCloseButtonText: {
                                 
                                 color: "black",
                                 
                                 fontSize: 12,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left"
                                 
                                 },
                                 
                                 icCloseButtonImage: {
                                 
                                 resizeMode: "contain"
                                 
                                 },
                                 
                                 icCartButton: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 shadowColor: "rgba(0, 0, 0, 0.11)",
                                 
                                 shadowRadius: 3,
                                 
                                 shadowOpacity: 1,
                                 
                                 flexDirection: "row",
                                 
                                 alignItems: "center",
                                 
                                 justifyContent: "flex-start",
                                 
                                 marginLeft: wp("60%"),
                                 
                                 marginTop: hp("4%"),
                                 
                                 width: 50,
                                 
                                 height: 50,
                                 
                                 },
                                 
                                 icCartButtonText: {
                                 
                                 color: "black",
                                 
                                 fontSize: 12,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left"
                                 
                                 },
                                 
                                 icCartButtonImage: {
                                 
                                 resizeMode: "contain"
                                 
                                 },
                                 
                                 graybackgroundView: {
                                 
                                 backgroundColor: "rgba(226, 175, 47, 0.99)",
                                 
                                 borderRadius: 35,
                                 
                                 borderWidth: 2,
                                 
                                 borderColor: "rgb(246, 246, 246)",
                                 
                                 borderStyle: "solid",
                                 
                                 marginTop: hp("2%"),
                                 
                                 marginRight: wp("95%"),
                                 
                                 position: "relative",
                                 
                                 width: 70,
                                 
                                 height: 70
                                 
                                 },
                                 
                                 nextmoneyText: {
                                 
                                 color: "white",
                                 
                                 fontSize: 25,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "bold",
                                 
                                 textAlign: "center",
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginTop: hp("1.5%"),
                                 
                                 width: 70
                                 
                                 //height: 29.92,
                                 
                                 },
                                 
                                 buyersneededText: {
                                 
                                 color: "white",
                                 
                                 fontSize: 12,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "center",
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginBottom: hp("1.5%"),
                                 
                                 width: 70
                                 
                                 },
                                 
                                 viewTwoView: {
                                 
                                 backgroundColor: "white",
                                 
                                 marginBottom: hp('1%'),
                                 
                                 height: 46,
                                 
                                 flexDirection: "row"
                                 
                                 },
                                 
                                 stepperImage: {
                                 
                                 resizeMode: "center",
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginLeft: wp('2%'),
                                 
                                 marginBottom: hp('1.3%'),
                                 
                                 width: 94,
                                 
                                 height: 29,
                                 
                                 alignSelf: "flex-end"
                                 
                                 },
                                 
                                 servingsText: {
                                 
                                 color: "rgb(114, 167, 228)",
                                 
                                 fontSize: 21,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "bold",
                                 
                                 textAlign: "right",
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginRight: wp('2%'),
                                 
                                 marginBottom: hp('1.3%'),
                                 
                                 },
                                 
                                 shawarmaPlusText: {
                                 
                                 color: "rgb(246, 246, 246)",
                                 
                                 fontSize: 24,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "center",
                                 
                                 backgroundColor: "rgb(114, 167, 228)",
                                 
                                 marginTop: 0,
                                 
                                 width: wp('100%'),
                                 
                                 },
                                 
                                 rectangle4View: {
                                 
                                 backgroundColor: "white",
                                 
                                 marginTop: hp('1%'),
                                 
                                 height: 101
                                 
                                 },
                                 
                                 group3View: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginLeft: wp('1%'),
                                 
                                 marginTop: hp('1%'),
                                 
                                 width: wp('79%'),
                                 
                                 height: 57
                                 
                                 },
                                 
                                 jawadSStyleChickText: {
                                 
                                 color: "rgb(55, 58, 61)",
                                 
                                 fontSize: 16,
                                 
                                 height: 19,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left",
                                 
                                 width: wp('79%'),
                                 
                                 },
                                 
                                 pitaBreadStuffedWText: {
                                 
                                 color: "rgb(97, 102, 106)",
                                 
                                 fontSize: 12,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left",
                                 
                                 lineHeight: 17,
                                 
                                 height: 34,
                                 
                                 marginTop: hp('0.5%'),
                                 
                                 width: wp('79%'),
                                 
                                 },
                                 
                                 group2View: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginRight: wp('1%'),
                                 
                                 marginTop: hp('1%'),
                                 
                                 width: wp('19%'),
                                 
                                 height: 49
                                 
                                 },
                                 
                                 textTwoText: {
                                 
                                 color: "rgba(55, 58, 61, 0.26)",
                                 
                                 fontSize: 16,
                                 
                                 textDecorationLine: 'line-through',
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "right",
                                 
                                 backgroundColor: "transparent"
                                 
                                 },
                                 
                                 textText: {
                                 
                                 color: "rgb(55, 58, 61)",
                                 
                                 fontSize: 16,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "right",
                                 
                                 backgroundColor: "transparent"
                                 
                                 },
                                 
                                 groupView: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 borderRadius: 11,
                                 
                                 borderWidth: 1,
                                 
                                 borderColor: "rgb(226, 175, 47)",
                                 
                                 borderStyle: "solid",
                                 
                                 marginLeft: wp('1%'),
                                 
                                 marginBottom: hp('1%'),
                                 
                                 width: 39,
                                 
                                 height: 22,
                                 
                                 justifyContent: "center"
                                 
                                 },
                                 
                                 textThreeText: {
                                 
                                 color: "rgb(226, 175, 47)",
                                 
                                 fontSize: 10,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "center",
                                 
                                 backgroundColor: "transparent",
                                 
                                 width: 39,
                                 
                                 height: 14
                                 
                                 },
                                 
                                 extraInstructionsOTextInput: {
                                 
                                 color: "rgb(97, 102, 106)",
                                 
                                 fontSize: 12,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left",
                                 
                                 backgroundColor: "white",
                                 
                                 borderWidth: 1,
                                 
                                 borderColor: "black",
                                 
                                 borderStyle: "solid",
                                 
                                 padding: 5,
                                 
                                 marginLeft: wp('5%'),
                                 
                                 marginRight: wp('5%'),
                                 
                                 marginTop: hp('2%'),
                                 
                                 },
                                 
                                 viewView: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginTop: hp('2%'),
                                 
                                 },
                                 
                                 toppingsText: {
                                 
                                 color: "rgb(55, 58, 61)",
                                 
                                 fontSize: 16,
                                 
                                 fontStyle: "normal",
                                 
                                 fontWeight: "normal",
                                 
                                 textAlign: "left",
                                 
                                 backgroundColor: "transparent",
                                 
                                 marginLeft: wp('5%'),
                                 
                                 marginRight: wp('5%'),
                                 
                                 },
                                 
                                 viewFlatList: {
                                 
                                 backgroundColor: "transparent",
                                 
                                 width: "100%",
                                 
                                 height: "100%"
                                 
                                 },
                                 
                                 viewFlatListViewWrapper: {
                                 
                                 marginTop: hp('1%'),
                                 
                                 height: hp('35%')
                                 
                                 }
                                 
                                 });
