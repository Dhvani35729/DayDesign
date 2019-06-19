import {db, user} from './config';

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

export {doPayment};
