import React, { Component } from "react";

import { View, ScrollView, Dimensions } from "react-native";

import stripe from "tipsi-stripe";





stripe.setOptions({
                  
                  publishableKey: "pk_test_ihRia1aLHxyCBjEMl0p7oqNk"
                  
                  });



const theme = {
    
primaryBackgroundColor: "##FFFFFF",
    
secondaryBackgroundColor: "#f0f0f0",
    
primaryForegroundColor: "#3e8be1",
    
secondaryForegroundColor: "#76a9e3",
    
accentColor: "#4286f4",
    
errorColor: "#e12020"
    
};



export default class NewCardPage extends Component {
    
    componentDidMount() {
        
        
        
        const FIREBASE_FUNCTION = 'https://us-central1-payment-test-1d907.cloudfunctions.net/charge/';
        
        const charge_amount = 1000;
        
        const charge_currency = 'cad';
        
        
        const options = {
            
        smsAutofillDisabled: true,
            
        theme
            
        };
        
        
        
        stripe
        
        .paymentRequestWithCardForm(options)
        
        .then(response => {

              
              let res = charge(response.tokenId, charge_amount, charge_currency);
              

              
              
              this.props.navigation.navigate("CurrentOrder");
              console.log(response);
              
              
              })
        
        .catch(error => {
               
               
               });
        
        
        
        
        async function charge(token, amount, currency) {
            
            const res = await fetch(FIREBASE_FUNCTION, {
                                    
                                    method: 'POST',
                                    
                                    body: JSON.stringify({
                                                         
                                                         token,
                                                         
                                                         charge: {
                                                         
                                                         amount,
                                                         
                                                         currency,
                                                         
                                                         },
                                                         
                                                         }),
                                    
                                    });
            
            const data = await res.json();
            
            data.body = JSON.parse(data.body);
            
            return data;
            
        }
        
        
   
        
        
        
        
        
        
    }
    
    
    
    render() {
        
        return <View />;
        
    }
    
    
}




