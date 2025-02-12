//
//  App.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
  BackHandler,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import RNExitApp from 'react-native-exit-app';
import FlashMessage from 'react-native-flash-message';

import {createRootNavigator} from './router';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import LottieView from 'lottie-react-native';
import {showAPIErrorMessage} from './utils/index';
import {API_SERVER} from './api/config';

const reporter = error => {
  // Logic for reporting to devs
  // Example : Log issues to github issues using github apis.
  console.log (error); // sample
};

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    reporter (e);
    if (Platform.OS == 'android') {
      Alert.alert (
        'Unexpected error occurred',
        `
            Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
            We have reported this to our team ! Please close the app and start again!
            `[{text: 'Exit App', onPress: () => BackHandler.exitApp ()}],
        {cancelable: false}
      );
    } else if (Platform.OS == 'ios') {
      Alert.alert (
        'Unexpected error occurred',
        `
            Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
            We have reported this to our team ! Please close the app and start again!
            `[{text: 'Exit App', onPress: () => RNExitApp.exitApp ()}],
        {cancelable: false}
      );
    }
  } else {
    console.log (e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler (errorHandler, true);
setNativeExceptionHandler (errorString => {
  //You can do something like call an api to report to dev team here
  //example
  // fetch('http://<YOUR API TO REPORT TO DEV TEAM>?error='+errorString);
  //
  console.log ('gotcha');
});

export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      signedIn: false,
      checkedSignIn: false,
      ranAuthWork: false,
    };
  }

  componentDidMount () {
    let that = this;

    AsyncStorage.getItem ('alreadyLaunchedTrofi').then (value => {
      if (value == null) {
        if (Platform.OS == 'android') {
          Alert.alert (
            'Vibe | Terms and Conditions',
            'By using this app (Vibe), you agree to the following terms and conditions:\n\nVibe App End User License Agreement\nThis End User License Agreement ("Agreement") is between you and Vibe and governs use of this app made available through the Google App Store. By installing the Vibe App, you agree to be bound by this Agreement and understand that there is no tolerance for objectionable content. If you do not agree with the terms and conditions of this Agreement, you are not entitled to use the Vibe App.\nIn order to ensure Vibe provides the best experience possible for everyone, we strongly enforce a no tolerance policy for objectionable content. You may not use this App to create objectionable content or abuse users. If you view content that you feel is offensive, record the group creator\'s name and use the \'report\' button to send us an email describing the issue.\n1. Parties\nThis Agreement is between you and Vibe only, and not Google. ("Google"). Notwithstanding the foregoing, you acknowledge that Google and its subsidiaries are third party beneficiaries of this Agreement and Google has the right to enforce this Agreement against you. Vibe, not Google, is solely responsible for the Vibe App and its content.\n2. Privacy\nVibe may collect and use information about your usage of the Vibe App, including certain types of information from and about your device. Vibe may use this information, as long as it is in a form that does not personally identify you, to measure the use and performance of the Vibe App.\n3. Limited License\nVibe grants you a limited, non-exclusive, non-transferable, revocable license to use the Vibe App for your personal, non-commercial purposes. You may only use the Vibe App on Google devices that you own or control and as permitted by the App Store Terms of Service.\n4. Age Restrictions\nBy using the Vibe App, you represent and warrant that (a) you are 17 years of age or older and you agree to be bound by this Agreement; (b) if you are under 17 years of age, you have obtained verifiable consent from a parent or legal guardian; and (c) your use of the Vibe App does not violate any applicable law or regulation. Your access to the Vibe App may be terminated without warning if Vibe believes, in its sole discretion, that you are under the age of 17 years and have not obtained verifiable consent from a parent or legal guardian. If you are a parent or legal guardian and you provide your consent to your child’s use of the Vibe App, you agree to be bound by this Agreement in respect to your child’s use of the Vibe App.\n5. Objectionable Content Policy\nContent may not be submitted to Vibe, who will moderate all content and ultimately decide whether or not to post a submission to the extent such content includes, is in conjunction with, or alongside any, Objectionable Content. Objectionable Content includes, but is not limited to: (i) sexually explicit materials; (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity; (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent; (iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and (v) gambling, including without limitation, any online casino, sports books, bingo or poker.\n6. Warranty\nVibe disclaims all warranties about the Vibe App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, Vibe, not Google, shall be solely responsible for such warranty.\n7. Maintenance and Support\nVibe does provide minimal maintenance or support for it but not to the extent that any maintenance or support is required by applicable law, Vibe, not Google, shall be obligated to furnish any such maintenance or support.\n8. Product Claims\nVibe, not Google, is responsible for addressing any claims by you relating to the Vibe App or use of it, including, but not limited to: (i) any product liability claim; (ii) any claim that the Vibe App fails to conform to any applicable legal or regulatory requirement; and (iii) any claim arising under consumer protection or similar legislation. Nothing in this Agreement shall be deemed an admission that you may have such claims.\n9. Third Party Intellectual Property Claims\nVibe shall not be obligated to indemnify or defend you with respect to any third party claim arising out or relating to the Vibe App. To the extent Vibe is required to provide indemnification by applicable law, Vibe, not Google, shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the Vibe App or your use of it infringes any third party intellectual property right.',
            [
              {
                text: 'OK. I agree.',
                onPress: () => that.checkWork (that),
              },
            ],
            {cancelable: false}
          );
        } else if (Platform.OS == 'ios') {
          Alert.alert (
            'Vibe | Terms and Conditions',
            'By using this app (Vibe), you agree to the following terms and conditions:\n\nVibe App End User License Agreement\nThis End User License Agreement ("Agreement") is between you and Vibe and governs use of this app made available through the Apple App Store. By installing the Vibe App, you agree to be bound by this Agreement and understand that there is no tolerance for objectionable content. If you do not agree with the terms and conditions of this Agreement, you are not entitled to use the Vibe App.\nIn order to ensure Vibe provides the best experience possible for everyone, we strongly enforce a no tolerance policy for objectionable content. You may not use this App to create objectionable content or abuse users. If you view content that you feel is offensive, record the group creator\'s name and use the \'report\' button to send us an email describing the issue.\n1. Parties\nThis Agreement is between you and Vibe only, and not Apple, Inc. ("Apple"). Notwithstanding the foregoing, you acknowledge that Apple and its subsidiaries are third party beneficiaries of this Agreement and Apple has the right to enforce this Agreement against you. Vibe, not Apple, is solely responsible for the Vibe App and its content.\n2. Privacy\nVibe may collect and use information about your usage of the Vibe App, including certain types of information from and about your device. Vibe may use this information, as long as it is in a form that does not personally identify you, to measure the use and performance of the Vibe App.\n3. Limited License\nVibe grants you a limited, non-exclusive, non-transferable, revocable license to use the Vibe App for your personal, non-commercial purposes. You may only use the Vibe App on Apple devices that you own or control and as permitted by the App Store Terms of Service.\n4. Age Restrictions\nBy using the Vibe App, you represent and warrant that (a) you are 17 years of age or older and you agree to be bound by this Agreement; (b) if you are under 17 years of age, you have obtained verifiable consent from a parent or legal guardian; and (c) your use of the Vibe App does not violate any applicable law or regulation. Your access to the Vibe App may be terminated without warning if Vibe believes, in its sole discretion, that you are under the age of 17 years and have not obtained verifiable consent from a parent or legal guardian. If you are a parent or legal guardian and you provide your consent to your child’s use of the Vibe App, you agree to be bound by this Agreement in respect to your child’s use of the Vibe App.\n5. Objectionable Content Policy\nContent may not be submitted to Vibe, who will moderate all content and ultimately decide whether or not to post a submission to the extent such content includes, is in conjunction with, or alongside any, Objectionable Content. Objectionable Content includes, but is not limited to: (i) sexually explicit materials; (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity; (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent; (iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and (v) gambling, including without limitation, any online casino, sports books, bingo or poker.\n6. Warranty\nVibe disclaims all warranties about the Vibe App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, Vibe, not Apple, shall be solely responsible for such warranty.\n7. Maintenance and Support\nVibe does provide minimal maintenance or support for it but not to the extent that any maintenance or support is required by applicable law, Vibe, not Apple, shall be obligated to furnish any such maintenance or support.\n8. Product Claims\nVibe, not Apple, is responsible for addressing any claims by you relating to the Vibe App or use of it, including, but not limited to: (i) any product liability claim; (ii) any claim that the Vibe App fails to conform to any applicable legal or regulatory requirement; and (iii) any claim arising under consumer protection or similar legislation. Nothing in this Agreement shall be deemed an admission that you may have such claims.\n9. Third Party Intellectual Property Claims\nVibe shall not be obligated to indemnify or defend you with respect to any third party claim arising out or relating to the Vibe App. To the extent Vibe is required to provide indemnification by applicable law, Vibe, not Apple, shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the Vibe App or your use of it infringes any third party intellectual property right.',
            [
              {
                text: 'OK. I agree.',
                onPress: () => that.checkWork (that),
              },
            ],
            {cancelable: false}
          );
        }
        AsyncStorage.setItem ('alreadyLaunchedTrofi', 'I like to save it.');
        that.setState ({firstLaunch: true});
      } else {
        that.checkWork (that);
      }
    }); // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})'
  }

  checkWork (that) {
    fetch (API_SERVER + '/api/maint/app', {
      method: 'GET',
    })
      .then (response => response.json ())
      .then (responseData => {
        //set your data here
        console.log (responseData);
        if (
          responseData['build_version'].localeCompare (
            DeviceInfo.getVersion ()
          ) <= 0
        ) {
          if (responseData['status'] == true) {
            if (Platform.OS == 'android') {
              Alert.alert (
                'App Under Maintenance',
                responseData['message'],
                [{text: 'Exit App', onPress: () => BackHandler.exitApp ()}],
                {cancelable: false}
              );
            } else if (Platform.OS == 'ios') {
              Alert.alert (
                'App Under Maintenance',
                responseData['message'],
                [
                  {
                    text: 'Exit App',
                    onPress: () => {
                      RNExitApp.exitApp ();
                    },
                  },
                ],
                {cancelable: false}
              );
            }
          } else {
            totalUsers = responseData['total_users'];
            that.launchWork (that, totalUsers);
          }
        } else {
          if (Platform.OS == 'android') {
            Alert.alert (
              'Old Version of App',
              'App is not up to date!\nPlease update the app.\nYour version: ' +
                DeviceInfo.getVersion (),
              [{text: 'Exit App', onPress: () => BackHandler.exitApp ()}],
              {cancelable: false}
            );
          } else if (Platform.OS == 'ios') {
            Alert.alert (
              'Old Version of App',
              'App is not up to date!\nPlease update the app.\nYour version: ' +
                DeviceInfo.getVersion (),
              [
                {
                  text: 'Exit App',
                  onPress: () => {
                    RNExitApp.exitApp ();
                  },
                },
              ],
              {cancelable: false}
            );
          }
        }
      })
      .catch (error => {
        console.error (error);
        showAPIErrorMessage ('bottom');
        that.setState ({
          loading: false,
        });
        return;
      });
  }

  launchWork (that, totalUsers) {
    firebase.auth ().onAuthStateChanged (user => {
      if (user) {
        // firebase.auth ().signOut ();
        that.initUser (user, that, totalUsers);
      } else {
        that.setState ({
          firstLaunch: false,
          signedIn: false,
          checkedSignIn: true,
        });
      }
    });
  }

  initUser (user, that, totalUsers) {
    fetch (API_SERVER + '/api/users/' + user.uid.toString () + '/auth', {
      method: 'GET',
    })
      .then (response => response.json ())
      .then (responseData => {
        //set your data here
        if (responseData['success']) {
          // global.csrfToken = responseData['success']['csrf_token'];
          that.setState ({
            firstLaunch: false,
            signedIn: true,
            checkedSignIn: true,
          });
        } else {
          that.setState ({
            errorMessage: responseData['error']['message'],
            loading: false,
          });
        }
      })
      .catch (error => {
        console.error (error);
        showAPIErrorMessage ('bottom');
        that.setState ({
          loading: false,
        });
      });
  }

  //Remove listeners if any there
  componentWillUnmount () {}

  render () {
    const {checkedSignIn, signedIn, firstLaunch} = this.state;
    if (firstLaunch === null) {
      return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
    } else if (firstLaunch == true) {
      return <View style={{flex: 1}} />;
    } else {
      if (!checkedSignIn) {
        return (
          <View style={styles.container}>
            <LottieView
              source={require ('./assets/animations/pizza.json')}
              autoPlay
              loop
            />
            <FlashMessage position="top" />
          </View>
        );
      }
      const Layout = createRootNavigator (signedIn);
      return (
        <View style={{flex: 1}}>
          <Layout />
          <FlashMessage position="top" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
