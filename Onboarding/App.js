//
//  App.js
//  Onboarding
//
//  Created by dhvani dhrumil.
//  Copyright © 2018 magic. All rights reserved.
//

import Onboarding2 from "./App/Onboarding2/Onboarding2"
import Onboarding3 from "./App/Onboarding3/Onboarding3"
import { createStackNavigator, createAppContainer } from "react-navigation"
import React from "react"
import Onboarding1 from "./App/Onboarding1/Onboarding1"

const PushRouteOne = createStackNavigator({
	Onboarding2: {
		screen: Onboarding2,
	},
	Onboarding3: {
		screen: Onboarding3,
	},
	Onboarding1: {
		screen: Onboarding1,
	},
}, {
	initialRouteName: "Onboarding2",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	render() {
	
		return <AppContainer/>
	}
}
