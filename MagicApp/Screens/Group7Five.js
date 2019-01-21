import { Text, StyleSheet, View,  Dimensions, Platform, PixelRatio, TouchableHighlight, Modal, ScrollView } from "react-native"
import React from "react"
import Menu from './Menu'


const {

width: SCREEN_WIDTH,

height: SCREEN_HEIGHT,

} = Dimensions.get('window');



// based on iphone 5s's scale

const scale = SCREEN_WIDTH / 320;



export function normalize(size) {

    const newSize = size * scale

    if (Platform.OS === 'ios') {

        return Math.round(PixelRatio.roundToNearestPixel(newSize))

    } else {

        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2

    }

}



export function    tConvert (time) {

    // Check correct time format and split into components

    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];



    if (time.length > 1) { // If time format correct

        time = time.slice (1);  // Remove full string match value

        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours

    }

    return time.join (''); // return adjusted time or original string

}





export default class Group7Five extends React.Component {




  	state = {
  	 modalInfoVisible: false,
     disabled: false,
   };



    constructor(props) {

        super(props)

        console.log(tConvert(this.props.item.time))

        console.log("Su che")
//console.log();

        // this.see = this.props.see.bind(this);
         // updateState = updateState.bind(this)


    }

    see(){
      console.log(this.state);
      console.log("worked?");


    }



    componentDidMount() {
      // const { nav } = this.props
      console.log(this.props);
      console.log('nav');

      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      //var sec = new Date().getSeconds(); //Current Seconds
      var eventHour = this.props.item.time.substr(0, 2);
      var eventMin = this.props.item.time.substr(3, 5);
      console.log(eventHour);
      if(eventHour < hours){
        this.setState({disabled: true});
      }
      else if(eventHour == hours){
        if(eventMin < min){
              this.setState({disabled: true});
        }
        else{
            this.setState({disabled: false});
        }
      }
      else{
          this.setState({disabled: false});
      }

    }



    setInfoModalVisible(visible){
        this.setState({modalInfoVisible: visible});
    }

    openInfo(){
      console.log("pressed :>");
      console.log(this.props.item.group_name);
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      //var sec = new Date().getSeconds(); //Current Seconds
      var eventHour = this.props.item.time.substr(0, 2);
      var eventMin = this.props.item.time.substr(3, 5);
      console.log(eventHour);
      if(eventHour < hours){
        this.setState({disabled: true});
      }
      else if(eventHour == hours){
        if(eventMin < min){
              this.setState({disabled: true});
        }
        else{
            this.setState({disabled: false});
          this.props.updateModalCB(this.props.item);
        }
      }
      else{
          this.setState({disabled: false});
                this.props.updateModalCB(this.props.item);
      }



      // this.updateState({modalInfoVisible: true});
      // console.log(this.props.see);
      // this.see();
      // this.props.nav.navigate('MyModal');

    }


    render() {


      if (Platform.OS == 'android') {
        return (<View

        opacity={this.state.disabled ? 0.5 : 1}style={styles.group7}>


        <TouchableHighlight onPress={() => {this.openInfo()}}  disabled={this.state.disabled} underlayColor="white" >
        <View

        style={styles.group6View}>

        <View

        style={styles.bitmapView}/>

        <View

        style={{

        flex: 1,

        justifyContent: "flex-end",

        }}>

        <View

        style={{

        flexDirection: "row",

        }}>

        <Text

        style={styles.federationHallText}>{this.props.item.location_name}</Text>

        <View

        style={{

        width: "100%",

        height: "100%",

        flexDirection: "row",

        position: "absolute",

        }}>

        <Text

        style={styles.pmText}>{tConvert(this.props.item.time)}</Text>

        </View>

        </View>

        </View>

        <View

        style={{

        width: "100%",

        height: "100%",

        position: "absolute",

        }}>


        <View style={{height: 27}} onStartShouldSetResponder={() => {console.log("scroll bro"); this.props.setScroll(false); return true;}} onResponderRelease={() => {console.log("done leave me"); this.props.setScroll(true);}} >
        <ScrollView onMomentumScrollBegin={() => {console.log("started!"); }} onMomentumScrollEnd={() => {console.log("activate now");  this.props.setScroll(true);}}>
        <Text
        adjustsFontSizeToFit={true}

        style={styles.tdInformationSessiText}>{this.props.item.group_name}</Text>
        </ScrollView>
        </View>

        <View

        style={{

        flexDirection: "row",

        justifyContent: "center",

        }}>

        <View

        style={styles.viewView}/>

        <View

        style={{

          width: 87,
          height: 87,
          alignSelf: 'flex-end',
          justifyContent: "center",
          position: "absolute",
          flexDirection: "row",

          // width: "80%",
          // height: "80%",
          // flexDirection: "column",
          // justifyContent: "space-between",
          // alignItems: "center",
          // display: "flex",
          // position: "absolute",

       // width: 80,
       //   height: 87,
       //
       // justifyContent: "center",
       // // margin: 0 auto,
       // // alignSelf: "stretch",
       // alignItems: "center",
       // // flexDirection: "column-reverse",
       //
       // position: "absolute",

        }}>

        <Text

        style={styles.textText}>{"\n"}{this.props.item.number_going} {"\n"}</Text>

        </View>



        <View

        style={{
          width: 87,
          height: 87,
          alignSelf: 'flex-start',
          justifyContent: "center",
          position: "absolute",
        }}>

        <Text

        style={styles.goingText}>Going</Text>

        </View>

        </View>

        <View

        style={{

        flexDirection: "column",

        }}>



        <View

        style={{

        flex: 1,

        flexDirection: "row",

        justifyContent: "flex-end",

        }}>

        {this.props.item.free_food &&

            <Text

            style={styles.freeText}>Free Food</Text>

        }

        </View>



        <View

        style={{

        width: "100%",

        height: "100%",

        flexDirection: "row",

        justifyContent: "center",

        position: "absolute",

        }}/>

        </View>

        </View>

        </View>
            </TouchableHighlight>
        </View>);
      }
      else if (Platform.OS == 'ios') {
        return(
        <View

        opacity={this.state.disabled ? 0.5 : 1}style={styles.group7}>


        <TouchableHighlight onPress={() => {this.props.setScroll(true); this.openInfo();}}  disabled={this.state.disabled} underlayColor="white" >
        <View

        style={styles.group6View}>

        <View

        style={styles.bitmapView}/>

        <View

        style={{

        flex: 1,

        justifyContent: "flex-end",

        }}>

        <View

        style={{

        flexDirection: "row",

        }}>

        <Text

        style={styles.federationHallText}>{this.props.item.location_name}</Text>

        <View

        style={{

        width: "100%",

        height: "100%",

        flexDirection: "row",

        position: "absolute",

        }}>

        <Text

        style={styles.pmText}>{tConvert(this.props.item.time)}</Text>

        </View>

        </View>

        </View>

        <View

        style={{

        width: "100%",

        height: "100%",

        position: "absolute",

        }}>



        <Text numberOfLines={2}
        adjustsFontSizeToFit={true}
        style={styles.tdInformationSessiTextIos}>{this.props.item.group_name}</Text>


        <View

        style={{

        flexDirection: "row",

        justifyContent: "center",

        }}>

        <View

        style={styles.viewView}/>

        <View

        style={{

          width: 87,
          height: 87,
          alignSelf: 'flex-end',
          justifyContent: "center",
          position: "absolute",
          flexDirection: "row",

          // width: "80%",
          // height: "80%",
          // flexDirection: "column",
          // justifyContent: "space-between",
          // alignItems: "center",
          // display: "flex",
          // position: "absolute",

       // width: 80,
       //   height: 87,
       //
       // justifyContent: "center",
       // // margin: 0 auto,
       // // alignSelf: "stretch",
       // alignItems: "center",
       // // flexDirection: "column-reverse",
       //
       // position: "absolute",

        }}>

        <Text

        style={styles.textText}>{"\n"}{this.props.item.number_going} {"\n"}</Text>

        </View>



        <View

        style={{
          width: 87,
          height: 87,
          alignSelf: 'flex-start',
          justifyContent: "center",
          position: "absolute",
        }}>

        <Text

        style={styles.goingText}>Going</Text>

        </View>

        </View>

        <View

        style={{

        flexDirection: "column",

        }}>



        <View

        style={{

        flex: 1,

        flexDirection: "row",

        justifyContent: "flex-end",

        }}>

        {this.props.item.free_food &&

            <Text

            style={styles.freeText}>Free Food</Text>

        }

        </View>



        <View

        style={{

        width: "100%",

        height: "100%",

        flexDirection: "row",

        justifyContent: "center",

        position: "absolute",

        }}/>

        </View>

        </View>

        </View>
            </TouchableHighlight>
        </View>);

      }

    }

}



const styles = StyleSheet.create({

                                 group7: {

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',
                                 //opacity: {this.state.disabled ? 0.5 : 1},
                                 width: 150,

                                 height: 190,

                                 padding: 7,

                                 marginBottom: 10,

                                 justifyContent: "center",

                                 },

                                 group6View: {

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 alignSelf: "stretch",

                                 height: 180,

                                 },

                                 bitmapView: {

                                 backgroundColor: 'rgba(155, 155, 155, 0.15)',

                                 borderRadius: 8.2,

                                 alignSelf: "stretch",

                                 height: 150,

                                 },

                                 federationHallText: {

                                 color: 'rgb(74, 78, 82)',

                                 fontSize: 10,

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "left",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginBottom: 14,

                                 alignSelf: "flex-end",

                                 },

                                 pmText: {

                                 color: 'rgb(74, 78, 82)',

                                 fontSize: 10,

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "left",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginBottom: 1,

                                 alignSelf: "flex-end",

                                 },

                                 tdInformationSessiText: {

                                 color: 'rgb(74, 78, 82)',

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "left",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginLeft: 10,

                                 marginRight: 10,

                                 marginTop: 3,

                                  alignSelf: "stretch",





                                 },
                                 tdInformationSessiTextIos: {

                                 color: 'rgb(74, 78, 82)',

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "left",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginLeft: 10,

                                 marginRight: 10,

                                 marginTop: 3,

                                  alignSelf: "stretch",

                                  height: 27,




                                 },

                                 viewView: {

                                 backgroundColor: 'rgb(74, 78, 82)',

                                 borderRadius: 43,

                                 marginTop: 10,

                                 width: 87,

                                 height: 87,

                                 },

                                 textText: {

                                 color: 'rgb(127, 177, 233)',

                                 fontSize: 24,

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 // textAlign: "center",
                                 //
                                 // lineHeight: 0,
                                 //
                                 // letterSpacing: 0,



                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',



                                 },

                                 goingText: {

                                 color: 'rgb(240, 240, 240)',

                                 fontSize: 10,

                                 fontStyle: "normal",

                                 fontWeight: "normal",

                                 textAlign: "center",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginTop: 70,

                                 },

                                 newText: {

                                 color: 'rgb(74, 78, 82)',

                                 fontSize: 10,

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "left",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginLeft: 10,

                                 marginTop: 7,

                                 },

                                 freeText: {

                                 color: 'rgb(127, 177, 233)',

                                 fontSize: 10,

                                 fontStyle: "normal",

                                 fontWeight: "bold",

                                 textAlign: "center",

                                 letterSpacing: 0,

                                 backgroundColor: 'rgba(0, 0, 0, 0.0)',

                                 marginRight: 10,

                                 marginTop: 6,

                                 },


                                 })
