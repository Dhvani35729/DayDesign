//
//  Onboarding2
//  Onboarding
//
//  Created by dhvani dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import { TouchableOpacity, Text, Image, Animated, Easing, View, StyleSheet } from "react-native"
import React from "react"


export default class Onboarding2 extends React.Component {
    
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
        smallRest1TwoView: new Animated.Value(0.01),
        bitmapImage: new Animated.Value(0.01),
        buttonButton: new Animated.Value(0.01),
        }
    }
    
    componentDidMount() {
        
        this.startAnimationOne()
        this.startAnimationTwo()
        this.startAnimationThree()
    }
    
    startAnimationOne() {
        
        // Set animation initial values to all animated properties
        this.state.bitmapImage.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.bitmapImage, {
                                                              duration: 1500,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    startAnimationTwo() {
        
        // Set animation initial values to all animated properties
        this.state.smallRest1TwoView.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.smallRest1TwoView, {
                                                              duration: 5000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
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
        style={styles.onboarding2View}>
        <Text
        style={styles.saveMoneyText}>Save Money</Text>
        <Text
        style={styles.asMorePurchasesArText}>As More Purchases are Made, Everyone Saves More Money</Text>
        <View
        style={styles.smallRest1View}>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        }}>
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
        source={require("assets/images/rectangle-3.png")}
        style={styles.rectangle3Image}/>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 102,
        right: 15,
        top: 0,
        bottom: 13,
        }}>
        <Text
        style={styles.shawarmaPlusText}>Shawarma Plus </Text>
        <View
        style={{
        flex: 1,
        }}/>
        <View
        pointerEvents="box-none"
        style={{
        height: 16,
        flexDirection: "row",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textFourText}>$90/100</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.textTwoText}>$95/100</Text>
        <Text
        style={styles.discountText}>discount</Text>
        </View>
        </View>
        </View>
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
        <View
        pointerEvents="box-none"
        style={{
        height: 29,
        marginLeft: 103,
        marginRight: 22,
        flexDirection: "row",
        alignItems: "center",
        }}>
        <Text
        style={styles.textFiveText}>15%</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.textText}>10%</Text>
        <Text
        style={styles.textThreeText}>5%</Text>
        </View>
        </View>
        </View>
        <Animated.View
        style={[{
                : this.state.bitmapImage,
                }, styles.bitmapImageAnimated]}>
        <Image
        source={require("assets/images/bitmap.png")}
        style={styles.bitmapImage}/>
        </Animated.View>
        <Animated.View
        style={[{
                : this.state.smallRest1TwoView,
                }, styles.smallRest1TwoViewAnimated]}>
        <View
        style={styles.smallRest1TwoView}>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        }}>
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
        source={require("assets/images/rectangle-3.png")}
        style={styles.rectangle3TwoImage}/>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        position: "absolute",
        left: 102,
        right: 15,
        top: 0,
        bottom: 13,
        }}>
        <Text
        style={styles.shawarmaPlusTwoText}>Shawarma Plus </Text>
        <View
        style={{
        flex: 1,
        }}/>
        <View
        pointerEvents="box-none"
        style={{
        height: 16,
        flexDirection: "row",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textNineText}>$90/100</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.textSevenText}>$95/100</Text>
        <Text
        style={styles.discountTwoText}>discount</Text>
        </View>
        </View>
        </View>
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
        <View
        pointerEvents="box-none"
        style={{
        height: 29,
        marginLeft: 103,
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        }}>
        <Text
        style={styles.textTenText}>20%</Text>
        <View
        style={{
        flex: 1,
        }}/>
        <Text
        style={styles.textSixText}>15%</Text>
        <Text
        style={styles.textEightText}>10%</Text>
        </View>
        </View>
        </View>
        </Animated.View>
        <Animated.View
        style={[{
                : this.state.buttonButton,
                }, styles.buttonButtonAnimated]}>
        <TouchableOpacity
        style={styles.buttonButton}>
        <Text
        style={styles.buttonButtonText}>Next</Text>
        </TouchableOpacity>
        </Animated.View>
        </View>
    }
}

const styles = StyleSheet.create({
                                 onboarding2View: {
                                 backgroundColor: "rgb(226, 175, 47)",
                                 flex: 1,
                                 alignItems: "center",
                                 },
                                 saveMoneyText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontFamily: "Impact",
                                 fontSize: 40,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 alignSelf: "stretch",
                                 marginLeft: 18,
                                 marginRight: 162,
                                 marginTop: 42,
                                 },
                                 asMorePurchasesArText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 alignSelf: "stretch",
                                 marginLeft: 18,
                                 marginRight: 18,
                                 marginTop: 8,
                                 },
                                 smallRest1View: {
                                 backgroundColor: "transparent",
                                 width: 312,
                                 height: 87,
                                 marginTop: 35,
                                 },
                                 rectangle3Image: {
                                 resizeMode: "cover",
                                 backgroundColor: "transparent",
                                 height: 87,
                                 },
                                 shawarmaPlusText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 alignSelf: "flex-end",
                                 marginRight: 14,
                                 },
                                 textFourText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginRight: 25,
                                 },
                                 discountText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textFiveText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 marginRight: 32,
                                 },
                                 textThreeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 bitmapImageAnimated: {
                                 width: 54,
                                 height: 54,
                                 marginTop: 53,
                                 },
                                 bitmapImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 smallRest1TwoViewAnimated: {
                                 width: 312,
                                 height: 87,
                                 marginTop: 53,
                                 },
                                 smallRest1TwoView: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 rectangle3TwoImage: {
                                 resizeMode: "cover",
                                 backgroundColor: "transparent",
                                 height: 87,
                                 },
                                 shawarmaPlusTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 alignSelf: "flex-end",
                                 marginRight: 14,
                                 },
                                 textNineText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textSevenText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginRight: 25,
                                 },
                                 discountTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textTenText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 textSixText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 marginRight: 25,
                                 },
                                 textEightText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 buttonButtonAnimated: {
                                 alignSelf: "flex-start",
                                 width: 100,
                                 height: 44,
                                 marginLeft: 261,
                                 marginTop: 84,
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
