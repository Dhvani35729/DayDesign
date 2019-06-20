import {db, user} from './config';

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

async function addCard (that, tokenId) {
  body = {tokenId: tokenId};
  console.log (body);
  fetch (
    'http://localhost:8000/api/users/' + user.uid.toString () + '/card/add',
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
      getCards (that);
    })
    .catch (error => {
      console.error (error);
    });
}

async function doPayment (amount, tokenId, card) {
  order = {amount: amount, tokenId: tokenId, card: card};
  fetch (
    'http://localhost:8000/api/users/' + user.uid.toString () + '/order/',
    {
      method: 'POST',
      body: JSON.stringify (order),
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
    })
    .catch (error => {
      console.error (error);
    });
}

export {doPayment, addCard, changeDefaultCard};
