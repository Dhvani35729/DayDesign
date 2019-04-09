//
//  Onboarding1
//  Onboarding
//
//  Created by dhvani dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { TouchableOpacity, Text, Image, Animated, Easing, View, StyleSheet } from "react-native"
import React from "react"


export default class Onboarding1 extends React.Component {
    
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
        this.state = {
        viewView: new Animated.Value(0.01),
        buttonButton: new Animated.Value(0.01),
        }
    }
    
    componentDidMount() {
        
        this.startAnimationOne()
        this.startAnimationTwo()
    }
    
    onButtonPressed = () => {
        
    }
    
    startAnimationOne() {
        
        // Set animation initial values to all animated properties
        this.state.viewView.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.viewView, {
                                                              duration: 2000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    startAnimationTwo() {
        
        // Set animation initial values to all animated properties
        this.state.buttonButton.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.buttonButton, {
                                                              duration: 3000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    render() {
        
        return <View
        style={styles.onboarding1View}>
        <View
        style={styles.groupView}>
        <Text
        style={styles.skipLinesText}>Skip Lines</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.purchaseFoodForAnText}>Purchase Food for Any Hour and Pick it Up Before the Hour Ends</Text>
            </View>
            <View
            pointerEvents="box-none"
            style={{
            height: 311,
            marginLeft: 10,
            marginRight: 4,
            marginTop: 32,
            }}>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 3,
        right: 13,
        top: 3,
        height: 308,
        }}>
        <View
        style={styles.timecellView}>
        <View
        style={styles.dividerTwoView}/>
        <View
        pointerEvents="box-none"
        style={{
        height: 27,
        marginLeft: 4,
        marginRight: 16,
        marginTop: 6,
        flexDirection: "row",
        alignItems: "flex-start",
        }}>
        <Text
        style={styles.timeText}>11:00 AM</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <View
        style={styles.seeallView}>
        <Text
        style={styles.seeAllText}>See All</Text>
        <Image
        source={require("assets/images/seeallsymbol.png")}
        style={styles.seeallsymbolImage}/>
        </View>
        </View>
        <View
        style={styles.restaurantcellView}>
        <View
        style={styles.graybackgroundView}>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        }}>
        <Image
        source={require("assets/images/cellbackground.png")}
        style={styles.cellbackgroundImage}/>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 5,
        right: 5,
        bottom: 5,
        height: 14,
        flexDirection: "row",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.discountText}>discount</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.buyersneededText}>$95/100</Text>
        </View>
        <Text
        style={styles.nextmoneyText}>10%</Text>
        <Text
        style={styles.currentmoneyText}>5%</Text>
        </View>
        <View
        style={styles.nameofstoreView}>
        <Text
        style={styles.storenameText}>Shawerma Plus</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.storetypeText}>Middle Eastern</Text>
        </View>
        </View>
        <View
        style={{
        flex: 1,
        }}/>
        <View
        style={styles.dividerView}/>
        </View>
        <Image
        source={require("assets/images/screen-shot-2019-04-08-at-81614-pm.png")}
        style={styles.screenShot20190408At81614PmImage}/>
        </View>
        <Animated.View
        style={[{
                : this.state.viewView,
                }, styles.viewViewAnimated]}>
        <View
        style={styles.viewView}>
        <Image
        source={require("assets/images/oval.png")}
        style={styles.ovalImage}/>
        <Image
        source={require("assets/images/oval.png")}
        style={styles.ovalTwoImage}/>
        </View>
        </Animated.View>
        </View>
        <Animated.View
        style={[{
                : this.state.buttonButton,
                }, styles.buttonButtonAnimated]}>
        <TouchableOpacity
        onPress={this.onButtonPressed}
        style={styles.buttonButton}>
        <Text
        style={styles.buttonButtonText}>Done</Text>
        </TouchableOpacity>
        </Animated.View>
        </View>
    }
}

const styles = StyleSheet.create({
                                 onboarding1View: {
                                 backgroundColor: "rgb(114, 167, 228)",
                                 flex: 1,
                                 },
                                 groupView: {
                                 backgroundColor: "transparent",
                                 height: 121,
                                 marginLeft: 18,
                                 marginRight: 18,
                                 marginTop: 42,
                                 },
                                 skipLinesText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontFamily: "Impact",
                                 fontSize: 40,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginRight: 174,
                                 },
                                 purchaseFoodForAnText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 },
                                 timecellView: {
                                 backgroundColor: "white",
                                 height: 152,
                                 },
                                 dividerTwoView: {
                                 backgroundColor: "rgb(239, 239, 244)",
                                 height: 1,
                                 marginLeft: 6,
                                 },
                                 timeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(3, 3, 3)",
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 letterSpacing: 0.38,
                                 },
                                 seeallView: {
                                 backgroundColor: "transparent",
                                 width: 68,
                                 height: 23,
                                 marginTop: 2,
                                 flexDirection: "row",
                                 alignItems: "center",
                                 },
                                 seeAllText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(191, 191, 191)",
                                 fontSize: 17,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 letterSpacing: 0.32,
                                 flex: 1,
                                 marginRight: 3,
                                 },
                                 seeallsymbolImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 width: 8,
                                 height: 13,
                                 },
                                 restaurantcellView: {
                                 backgroundColor: "transparent",
                                 alignSelf: "flex-start",
                                 width: 100,
                                 height: 106,
                                 marginLeft: 4,
                                 marginTop: 6,
                                 },
                                 graybackgroundView: {
                                 backgroundColor: "transparent",
                                 height: 50,
                                 },
                                 cellbackgroundImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 height: 50,
                                 },
                                 discountText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 buyersneededText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(146, 146, 146)",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 nextmoneyText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(155, 155, 155)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 position: "absolute",
                                 right: 1,
                                 top: 7,
                                 },
                                 currentmoneyText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 8,
                                 top: 7,
                                 },
                                 nameofstoreView: {
                                 backgroundColor: "transparent",
                                 height: 56,
                                 },
                                 storenameText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(3, 3, 3)",
                                 fontSize: 15,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 },
                                 storetypeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(146, 146, 146)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginRight: 11,
                                 },
                                 dividerView: {
                                 backgroundColor: "rgb(239, 239, 244)",
                                 height: 1,
                                 marginLeft: 4,
                                 marginRight: 2,
                                 },
                                 screenShot20190408At81614PmImage: {
                                 resizeMode: "cover",
                                 backgroundColor: "transparent",
                                 height: 76,
                                 marginLeft: 5,
                                 marginRight: 1,
                                 marginTop: 80,
                                 },
                                 viewViewAnimated: {
                                 position: "absolute",
                                 left: 0,
                                 right: 0,
                                 top: 0,
                                 height: 307,
                                 },
                                 viewView: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 alignItems: "flex-end",
                                 },
                                 ovalImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 alignSelf: "flex-start",
                                 width: 119,
                                 height: 44,
                                 },
                                 ovalTwoImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 width: 119,
                                 height: 44,
                                 marginTop: 219,
                                 },
                                 buttonButtonAnimated: {
                                 alignSelf: "flex-start",
                                 width: 100,
                                 height: 44,
                                 marginLeft: 262,
                                 marginTop: 106,
                                 },
                                 buttonButtonText: {
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 24,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "left",
                                 },
                                 buttonButton: {
                                 backgroundColor: "transparent",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 padding: 0,
                                 width: "100%",
                                 height: "100%",
                                 },
                                 buttonButtonImage: {
                                 resizeMode: "contain",
                                 marginRight: 10,
                                 },
                                 })
