//
//  Onboarding3
//  Onboarding
//
//  Created by dhvani dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { TouchableOpacity, Text, Image, Animated, Easing, View, StyleSheet } from "react-native"
import React from "react"


export default class Onboarding3 extends React.Component {
    
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
        restHeaderTwoView: new Animated.Value(0.01),
        viewThreeView: new Animated.Value(0.01),
        buttonButton: new Animated.Value(0.01),
        }
    }
    
    componentDidMount() {
        
        this.startAnimationOne()
        this.startAnimationTwo()
        this.startAnimationThree()
    }
    
    onButtonPressed = () => {
        
        const { navigate } = this.props.navigation
        
        navigate("Onboarding1")
    }
    
    startAnimationOne() {
        
        // Set animation initial values to all animated properties
        this.state.viewThreeView.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.viewThreeView, {
                                                              duration: 2000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    startAnimationTwo() {
        
        // Set animation initial values to all animated properties
        this.state.restHeaderTwoView.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.restHeaderTwoView, {
                                                              duration: 8000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })], {
                                             delay: 2000,
                                             })]).start()
    }
    
    startAnimationThree() {
        
        // Set animation initial values to all animated properties
        this.state.buttonButton.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.buttonButton, {
                                                              duration: 6000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    render() {
        
        return <View
        style={styles.onboarding3View}>
        <View
        style={styles.viewView}>
        <Text
        style={styles.shareGiftsText}>Share Gifts </Text>
        <Text
        style={styles.afterEachPurchaseText}>After Each Purchase, Keep a Gift and Share a Gift. Use Them to Unlock Free Rewards.</Text>
        </View>
        <View
        style={styles.viewTwoView}>
        <Image
        source={require("assets/images/bitmap-2.png")}
        style={styles.bitmapImage}/>
        <Animated.View
        style={[{
                : this.state.viewThreeView,
                }, styles.viewThreeViewAnimated]}>
        <View
        style={styles.viewThreeView}>
        <Image
        source={require("assets/images/line-2.png")}
        style={styles.line2Image}/>
        <View
        style={styles.groupView}>
        <Text
        style={styles.textTwoText}>+5</Text>
        </View>
        </View>
        </Animated.View>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        height: 59,
        marginLeft: 12,
        marginRight: 11,
        marginTop: 10,
        }}>
        <View
        style={styles.restHeaderView}>
        <Text
        style={styles.freeText}>FREE</Text>
        <Text
        style={styles.jawadStyleShawarmaText}>{"\n"} jawad style shawarma{"\n"}</Text>
        </View>
        <Animated.View
        style={[{
                : this.state.restHeaderTwoView,
                }, styles.restHeaderTwoViewAnimated]}>
        <View
        style={styles.restHeaderTwoView}>
        <Text
        style={styles.unlockFreeText}>unlock free</Text>
        <Text
        style={styles.jawadStyleShawarmaTwoText}>{"\n"} jawad style shawarma{"\n"}</Text>
        <Text
        style={styles.textText}>45/50</Text>
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
        style={styles.buttonButtonText}>Next</Text>
        </TouchableOpacity>
        </Animated.View>
        </View>
    }
}

const styles = StyleSheet.create({
                                 onboarding3View: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 flex: 1,
                                 },
                                 viewView: {
                                 backgroundColor: "transparent",
                                 height: 147,
                                 marginLeft: 18,
                                 marginRight: 18,
                                 marginTop: 42,
                                 },
                                 shareGiftsText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontFamily: "Impact",
                                 fontSize: 40,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginRight: 152,
                                 },
                                 afterEachPurchaseText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginTop: 8,
                                 },
                                 viewTwoView: {
                                 backgroundColor: "transparent",
                                 alignSelf: "flex-start",
                                 width: 155,
                                 height: 143,
                                 marginLeft: 18,
                                 marginTop: 27,
                                 flexDirection: "row",
                                 alignItems: "flex-start",
                                 },
                                 bitmapImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 width: 47,
                                 height: 46,
                                 },
                                 viewThreeViewAnimated: {
                                 width: 100,
                                 height: 120,
                                 marginLeft: 9,
                                 marginTop: 22,
                                 },
                                 viewThreeView: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 line2Image: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 position: "absolute",
                                 left: 0,
                                 width: 100,
                                 top: 0,
                                 height: 120,
                                 },
                                 groupView: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 11,
                                 borderWidth: 1,
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 position: "absolute",
                                 left: 55,
                                 width: 39,
                                 top: 38,
                                 height: 22,
                                 justifyContent: "center",
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 10,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginLeft: 13,
                                 marginRight: 13,
                                 },
                                 restHeaderView: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 19,
                                 borderWidth: 2,
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 position: "absolute",
                                 left: 0,
                                 right: 0,
                                 top: 0,
                                 height: 59,
                                 },
                                 freeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 160,
                                 right: 160,
                                 bottom: 1,
                                 },
                                 jawadStyleShawarmaText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 77,
                                 right: 77,
                                 bottom: 0,
                                 },
                                 restHeaderTwoViewAnimated: {
                                 position: "absolute",
                                 left: 0,
                                 right: 0,
                                 top: 0,
                                 height: 59,
                                 },
                                 restHeaderTwoView: {
                                 backgroundColor: "rgb(214, 112, 125)",
                                 borderRadius: 19,
                                 borderWidth: 2,
                                 borderColor: "white",
                                 borderStyle: "solid",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 unlockFreeText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 143,
                                 right: 143,
                                 top: 0,
                                 },
                                 jawadStyleShawarmaTwoText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 77,
                                 right: 77,
                                 bottom: 0,
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "white",
                                 fontSize: 13,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 position: "absolute",
                                 left: 158,
                                 right: 158,
                                 bottom: 1,
                                 },
                                 buttonButtonAnimated: {
                                 alignSelf: "flex-start",
                                 width: 100,
                                 height: 44,
                                 marginLeft: 261,
                                 marginTop: 180,
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
