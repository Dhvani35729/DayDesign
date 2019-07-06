import {db, user} from './config';
import {getDefaultCard, fetchCurrentOrder} from './load';
import {showAPIErrorMessage} from '../utils/index';
async function changeDefaultCard (navigation, cardId, last4) {
  body = {cardId: cardId, last4: last4};
  console.log (body);
  fetch (
    'http://localhost:8000/api/users/' + user.uid.toString () + '/card/default',
    {
      method: 'POST',
      body: JSON.stringify (body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      console.log (responseData);
      navigation.goBack ();
    })
    .catch (error => {
      console.error (error);
    });
}

async function addCard (that, tokenId, screen) {
  body = {tokenId: tokenId};
  console.log (body);
  fetch (
    'http://localhost:8000/api/users/' + user.uid.toString () + '/card/new',
    {
      method: 'POST',
      body: JSON.stringify (body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      console.log (responseData);
      if (screen == 'CheckoutScreen') {
        getDefaultCard (that);
      } else if (screen == 'CardScreen') {
        getCards (that);
      }
    })
    .catch (error => {
      console.error (error);
    });
}

async function doPayment (that, order, card) {
  body = {order: order, card: card};
  fetch (
    'http://localhost:8000/api/users/' + user.uid.toString () + '/order/new',
    {
      method: 'POST',
      body: JSON.stringify (body),
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': 'hi',
        'X-CSRFTOKEN': 'hi',
      },
    }
  )
    .then (response => response.json ())
    .then (responseData => {
      //set your data here
      // console.log (responseData);
      // if success
      that.setState (
        {
          tryingPayment: false,
          donePayment: true,
        },
        () => {
          setTimeout (function () {
            that.setState ({
              isPaymentPending: false,
            });
            fetchCurrentOrder (that, 'post');
          }, 1500);
        }
      );
    })
    .catch (error => {
      console.error (error);
      that.setState ({
        isPaymentPending: false,
        tryingPayment: false,
        donePayment: false,
      });
      showAPIErrorMessage ('bottom');
    });
}

export {doPayment, addCard, changeDefaultCard};
