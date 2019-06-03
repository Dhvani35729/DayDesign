//
//  MenuThree.js
//  magic version 1
//
//  Created by dhvani&dhrumil.
//  Copyright © 2019 magic. All rights reserved.
//

import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import firebase from "react-native-firebase";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MenuItem from '../../models/HistoryOrders';



export default class AddItemScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor (props) {
    super (props);

    const {navigation} = this.props;
      
    this.state = {
    
    };

  }

    componentDidMount () {
    }
    
    componentWillUnmount () {
       
    }
    


    viewFlatListMockData = [
                            {
                            key: '1',
                            },
                            {
                            key: '2',
                            },
                            {
                            key: '3',
                            },
                            ];
    
    renderViewFlatListCell = ({item}) => {
        return <MenuItem/>;
    };
    
    
  render () {
    return (
      <View style={styles.menuView}>
        <View style={styles.backgroundView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack ()}
            style={styles.icCloseButton}>
            <Image
              source={require ('../../assets/images/ic-close.png')}
              style={styles.buttonButtonImage}
            />
          </TouchableOpacity>
            
            <TouchableOpacity
            style={styles.icCartButton}
            onPress={() => {
            firebase
            .auth()
            .signOut()
            .then(
                  () => {
                  navigation.navigate("Login");
                  },
                  function(error) {
                  // An error happened.
                  }
                  );
            }}            >
            <Text style={styles.buttonButtonText}>Logout</Text>
            </TouchableOpacity>
            
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={styles.shawarmaPlusText}>History</Text>
          <View style={styles.viewView}>
            <View style={styles.viewFlatListViewWrapper}>
            
            <FlatList
            data={this.viewFlatListMockData}
            renderItem={this.renderViewFlatListCell}
            style={styles.viewFlatList}
            />
            
            </View>
          </View>
        </View>
        <View style={styles.viewTwoView}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  menuView: {
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
  },
  backgroundView: {
    backgroundColor: 'rgba(55, 58, 61, 0.9)',
    height: hp ('16.5%'),
    flexDirection: 'row',
  },
  icCloseButton: {
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp ('5%'),
    marginTop: hp ('7%'),
    width: 50,
    height: 50,
  },
  icCloseButtonText: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  icCloseButtonImage: {
    resizeMode: 'contain',
  },
  icCartButton: {
    backgroundColor: 'transparent',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: wp ('60%'),
    marginTop: hp ('7%'),
    width: 50,
    height: 50,
  },
  icCartButtonText: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  icCartButtonImage: {
    resizeMode: 'contain',
  },
  graybackgroundView: {
    backgroundColor: 'rgba(226, 175, 47, 0.99)',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'rgb(246, 246, 246)',
    borderStyle: 'solid',
    marginTop: hp ('5%'),
    marginRight: wp ('95%'),
    position: 'relative',
    width: 70,
    height: 70,
  },
  nextmoneyText: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginTop: hp ('1.5%'),
    width: 70,
    //height: 29.92,
  },
  buyersneededText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: hp ('1.5%'),
    width: 70,
  },
  viewTwoView: {
    marginBottom: hp ('3%'),
    height: 40,
    alignItems: 'center',
  },
                                  shawarmaPlusText: {
                                  color: 'rgb(246, 246, 246)',
                                  fontSize: hp ('4%'),
                                  fontStyle: 'normal',
                                  fontWeight: 'normal',
                                  textAlign: 'center',
                                  backgroundColor: 'rgb(114, 167, 228)',
                                  overflow: 'hidden',
                                  // marginTop: hp('14%'),
                                  width: wp ('100%'),
                                  height: hp ('5%'),
                                  //flex: 1,
                                  },
  rectangle4View: {
    backgroundColor: 'white',
    marginTop: hp ('1%'),
    height: 101,
  },
  group3View: {
    backgroundColor: 'transparent',
    marginLeft: wp ('1%'),
    marginTop: hp ('1%'),
    width: wp ('79%'),
    height: 57,
  },
  jawadSStyleChickText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    height: 19,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    width: wp ('79%'),
  },
  pitaBreadStuffedWText: {
    color: 'rgb(97, 102, 106)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 17,
    height: 34,
    marginTop: hp ('0.5%'),
    width: wp ('79%'),
  },
  group2View: {
    backgroundColor: 'transparent',
    marginRight: wp ('1%'),
    marginTop: hp ('1%'),
    width: wp ('19%'),
    height: 49,
  },
  textTwoText: {
    color: 'rgba(55, 58, 61, 0.26)',
    fontSize: 16,
    textDecorationLine: 'line-through',
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'transparent',
  },
  textText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'transparent',
  },
  groupView: {
    backgroundColor: 'transparent',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: 'rgb(226, 175, 47)',
    borderStyle: 'solid',
    marginLeft: wp ('1%'),
    marginBottom: hp ('1%'),
    width: 39,
    height: 22,
    justifyContent: 'center',
  },
  textThreeText: {
    color: 'rgb(226, 175, 47)',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 39,
    height: 14,
  },
  extraInstructionsOTextInput: {
    color: 'rgb(97, 102, 106)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 5,
    marginLeft: wp ('5%'),
    marginRight: wp ('5%'),
    marginTop: hp ('2%'),
  },
  viewView: {
    backgroundColor: 'transparent',
    marginTop: hp ('2%'),
  },
  toppingsText: {
    color: 'rgb(55, 58, 61)',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginLeft: wp ('5%'),
    marginRight: wp ('5%'),
  },
  viewFlatList: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  viewFlatListViewWrapper: {
    marginTop: hp ('1%'),
    height: hp ('35%'),
  },
                                  buttonButtonText: {
                                  color: 'white',
                                  fontSize: 12,
                                  fontStyle: 'normal',
                                  fontWeight: 'normal',
                                  textAlign: 'center',
                                  },
});
