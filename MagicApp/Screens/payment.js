import React, { Component } from "react";
import { View } from "react-native";
import stripe from "tipsi-stripe";

stripe.setOptions({
                  publishableKey: "pk_test_ihRia1aLHxyCBjEMl0p7oqNk"
                  });

const FIREBASE_FUNCTION = 'https://us-central1-payment-test-1d907.cloudfunctions.net/charge/'; // TODO: PUT YOUR FIREBASE FUNCTIONS URL HERE

const charge_amount = 500;
const charge_currency = 'cad';

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
        
        const items = [{
                       label: 'Whisky',
                       amount: '50.00',
                       }]
        
        const options = {
            smsAutofillDisabled: true,
            theme
        };
        
        const token = stripe.paymentRequestWithCardForm(options)

        console.log(token);
        
        this.props.navigation.navigate("CurrentOrder");
        
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
