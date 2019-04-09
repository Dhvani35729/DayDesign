//
//  Onboarding2
//
//
//  Created by dhrumil.
//  Copyright © 2018 hackathon. All rights reserved.
//

import { View, Animated, Easing, StyleSheet, Text, Image } from "react-native"
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
        smallRest1View: new Animated.Value(0.01),
        smallRest1TwoView: new Animated.Value(0.01),
        bitmapImage: new Animated.Value(0.01),
        }
    }
    
    componentDidMount() {
        
        this.startAnimationOne()
        this.startAnimationTwo()
        this.startAnimationThree()
    }
    
    startAnimationOne() {
        
        // Set animation initial values to all animated properties
        this.state.smallRest1View.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.smallRest1View, {
                                                              duration: 7000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })], {
                                             delay: 3000,
                                             })]).start()
    }
    
    startAnimationTwo() {
        
        // Set animation initial values to all animated properties
        this.state.bitmapImage.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.bitmapImage, {
                                                              duration: 1500,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    startAnimationThree() {
        
        // Set animation initial values to all animated properties
        this.state.smallRest1TwoView.setValue(true)
        
        // Configure animation and trigger
        Animated.parallel([Animated.parallel([Animated.timing(this.state.smallRest1TwoView, {
                                                              duration: 4000,
                                                              easing: Easing.bezier(0.42, 0, 0.58, 1),
                                                              toValue: 0.01,
                                                              })])]).start()
    }
    
    render() {
        
        return <View
        style={styles.onboarding2View}>
        <View
        style={styles.viewView}>
        <Text
        style={styles.saveMoneyText}>Save Money</Text>
        <Text
        style={styles.asMorePurchasesArText}>As More Purchases are Made, Everyone Saves More Money</Text>
        </View>
        <Animated.View
        style={[{
                : this.state.smallRest1View,
                }, styles.smallRest1ViewAnimated]}>
        <View
        style={styles.smallRest1View}>
        <Image
        source={require("./../../assets/images/rectangle-3.png")}
        style={styles.rectangle3Image}/>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        position: "absolute",
        flexDirection: "row",
        }}>
        <View
        style={styles.viewFourView}>
        <Text
        style={styles.textFourText}>$90/100</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        }}>
        <Text
        style={styles.textFiveText}>15%</Text>
        </View>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        }}>
        <View
        pointerEvents="box-none"
        style={{
        alignItems: "flex-start",
        }}>
        <Text
        style={styles.shawarmaPlusText}>Shawarma Plus </Text>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        }}>
        <View
        style={styles.viewTwoView}>
        <Text
        style={styles.textText}>10%</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        flex: 1,
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textTwoText}>$95/100</Text>
        </View>
        </View>
        <View
        style={styles.viewThreeView}>
        <Text
        style={styles.discountText}>discount</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        position: "absolute",
        justifyContent: "center",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textThreeText}>5%</Text>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </Animated.View>
        <Animated.View
        style={[{
                : this.state.bitmapImage,
                }, styles.bitmapImageAnimated]}>
        <Image
        source={require("./../../assets/images/bitmap.png")}
        style={styles.bitmapImage}/>
        </Animated.View>
        <Animated.View
        style={[{
                : this.state.smallRest1TwoView,
                }, styles.smallRest1TwoViewAnimated]}>
        <View
        style={styles.smallRest1TwoView}>
        <Image
        source={require("./../../assets/images/rectangle-3.png")}
        style={styles.rectangle3TwoImage}/>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        position: "absolute",
        flexDirection: "row",
        }}>
        <View
        style={styles.viewSevenView}>
        <Text
        style={styles.textNineText}>$90/100</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        justifyContent: "center",
        }}>
        <Text
        style={styles.textTenText}>20%</Text>
        </View>
        </View>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        }}>
        <View
        pointerEvents="box-none"
        style={{
        alignItems: "flex-start",
        }}>
        <Text
        style={styles.shawarmaPlusTwoText}>Shawarma Plus </Text>
        <View
        pointerEvents="box-none"
        style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        }}>
        <View
        style={styles.viewFiveView}>
        <Text
        style={styles.textSixText}>15%</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        flex: 1,
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textSevenText}>$95/100</Text>
        </View>
        </View>
        <View
        style={styles.viewSixView}>
        <Text
        style={styles.discountTwoText}>discount</Text>
        <View
        pointerEvents="box-none"
        style={{
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        position: "absolute",
        justifyContent: "center",
        alignItems: "flex-end",
        }}>
        <Text
        style={styles.textEightText}>10%</Text>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
        </View>
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
                                 viewView: {
                                 backgroundColor: "transparent",
                                 marginLeft: 18,
                                 marginRight: 18,
                                 marginTop: 42,
                                 height: 117,
                                 alignSelf: "stretch",
                                 },
                                 saveMoneyText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontFamily: "Impact",
                                 fontSize: 40,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginRight: 144,
                                 },
                                 asMorePurchasesArText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(74, 74, 74)",
                                 fontSize: 20,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "left",
                                 marginTop: 8,
                                 width: 339,
                                 },
                                 smallRest1ViewAnimated: {
                                 marginTop: 35,
                                 width: 312,
                                 height: 87,
                                 },
                                 smallRest1View: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 },
                                 rectangle3Image: {
                                 resizeMode: "cover",
                                 backgroundColor: "transparent",
                                 height: 87,
                                 flex: 1,
                                 },
                                 viewFourView: {
                                 backgroundColor: "transparent",
                                 marginLeft: 102,
                                 marginTop: 1,
                                 width: 49,
                                 height: 45,
                                 flex: 1,
                                 justifyContent: "flex-end",
                                 },
                                 textFourText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
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
                                 marginLeft: 1,
                                 },
                                 shawarmaPlusText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginRight: 29,
                                 alignSelf: "flex-end",
                                 },
                                 viewTwoView: {
                                 backgroundColor: "transparent",
                                 marginRight: 25,
                                 marginTop: 1,
                                 width: 48,
                                 height: 45,
                                 justifyContent: "center",
                                 alignItems: "flex-end",
                                 },
                                 textText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 textTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 viewThreeView: {
                                 backgroundColor: "transparent",
                                 marginRight: 15,
                                 marginTop: 1,
                                 width: 48,
                                 height: 45,
                                 flex: 1,
                                 justifyContent: "flex-end",
                                 alignItems: "flex-end",
                                 },
                                 discountText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textThreeText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 marginRight: 7,
                                 },
                                 bitmapImageAnimated: {
                                 marginTop: 53,
                                 width: 54,
                                 height: 54,
                                 },
                                 bitmapImage: {
                                 resizeMode: "center",
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 },
                                 smallRest1TwoViewAnimated: {
                                 marginTop: 53,
                                 width: 312,
                                 height: 87,
                                 },
                                 smallRest1TwoView: {
                                 backgroundColor: "transparent",
                                 width: "100%",
                                 height: "100%",
                                 flexDirection: "row",
                                 alignItems: "center",
                                 },
                                 rectangle3TwoImage: {
                                 resizeMode: "cover",
                                 backgroundColor: "transparent",
                                 height: 87,
                                 flex: 1,
                                 },
                                 viewSevenView: {
                                 backgroundColor: "transparent",
                                 marginLeft: 102,
                                 marginTop: 1,
                                 width: 49,
                                 height: 45,
                                 flex: 1,
                                 justifyContent: "flex-end",
                                 },
                                 textNineText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.4)",
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
                                 marginLeft: 1,
                                 },
                                 shawarmaPlusTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(55, 58, 61)",
                                 fontSize: 18,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 marginRight: 29,
                                 alignSelf: "flex-end",
                                 },
                                 viewFiveView: {
                                 backgroundColor: "transparent",
                                 marginRight: 25,
                                 marginTop: 1,
                                 width: 48,
                                 height: 45,
                                 justifyContent: "center",
                                 alignItems: "flex-end",
                                 },
                                 textSixText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 textSevenText: {
                                 backgroundColor: "transparent",
                                 color: "rgba(155, 155, 155, 0.8)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 viewSixView: {
                                 backgroundColor: "transparent",
                                 marginRight: 15,
                                 marginTop: 1,
                                 width: 48,
                                 height: 45,
                                 flex: 1,
                                 justifyContent: "flex-end",
                                 alignItems: "flex-end",
                                 },
                                 discountTwoText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 12,
                                 fontStyle: "normal",
                                 fontWeight: "normal",
                                 textAlign: "center",
                                 },
                                 textEightText: {
                                 backgroundColor: "transparent",
                                 color: "rgb(226, 175, 47)",
                                 fontSize: 21,
                                 fontStyle: "normal",
                                 fontWeight: "bold",
                                 textAlign: "center",
                                 },
                                 })
