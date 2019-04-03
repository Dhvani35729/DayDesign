//
//  SignUp.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from "react-native";
import firebase from "react-native-firebase";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class SignUp extends React.Component {
    state = { email: "", password: "", Username: "", errorMessage: null, loading: false };

  handleSignUp = () => {
    const { email, password, Username } = this.state;
     this.setState({errorMessage: null});
    if(email.trim() == "" || password.trim() == "" || Username.trim() == "") {
       this.setState({errorMessage: "Please fill in all fields!"});
     }
    else{
      this.setState({loading: true})
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password, Username)
      .then(user => this.props.navigation.navigate("DynamicScreen"))
      .catch(error => this.setState({ errorMessage: error.message, loading: false }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
           source={require("./../assets/images/sm-sq.jpg")}
          style={styles.profileImg}
        />
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        {this.state.loading && <ActivityIndicator size="large" color="#0000ff" />}
            <TextInput
            placeholder="Username"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={Username => this.setState({ Username })}
            value={this.state.Username}
            />
            <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          onPress={() => this.handleSignUp()}
          style={styles.loginbutton}
        >
          <Text style={styles.logintext}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.SignUptext}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1398FD"
  },
  profileImg: {
    marginTop: hp("10%"),
    marginBottom: hp("10%"),
    height: 150,
    width: 150,
    borderRadius: 80
  },
  loginbutton: {
    marginTop: 25,
    width: 90,
    height: 30,
    backgroundColor: "#E0A918",
    borderRadius: 50
  },
  logintext: {
    fontSize: 20,
    textAlign: "center"
  },
  SignUptext: {
    marginTop: 25,
    color: "#F5F5F5",
    fontSize: 12,
    textAlign: "center"
  },
  textInput: {
    height: 40,
    width: "80%",
    marginTop: 10,
    backgroundColor: "#EFF0F1",
    borderRadius: 40,
    textAlign: "center"
  }
});
