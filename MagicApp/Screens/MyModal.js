import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Modal, TouchableHighlight, Alert } from "react-native"
import React from "react"

export class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isModalVisible: props.modalVisible
    };
    console.log(props.modalVisible);
    console.log("close bro");
  };

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.isModalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text>Item Detail</Text>
                        <TouchableHighlight
                            style={styles.buttonContainer}
                            onPress={() => { this._setModalVisible(false) }}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#34495e',
 },
 buttonContainer: {
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: '#2c3e50',
    borderRadius: 15
 },
 buttonText: {
    textAlign: 'center',
    color: '#ecf0f1',
    fontWeight: '700'
 },
});
