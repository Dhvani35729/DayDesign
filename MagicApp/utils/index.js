import {showMessage, hideMessage} from 'react-native-flash-message';

function getTaxPercentage (amount) {
  tax = 0.05;
  if (amount > 4.0) {
    tax = 0.13;
  }
  return tax;
}

function showPercentage (decimal) {
  return (decimal * 100).toFixed (0);
}

function showMoney (decimal) {
  return decimal.toFixed (2);
}

function showUpdateMessage (msg, pos) {
  showMessage ({
    position: pos,
    message: msg,
    type: 'info',
  });
}

function showErrorMessage (msg, pos) {
  showMessage ({
    position: pos,
    message: msg,
    type: 'warning',
  });
}

function showAPIErrorMessage (pos) {
  showMessage ({
    position: pos,
    message: 'BiteClub server error! Restart app...if problem persists, contact software.wbc@gmail.com',
    type: 'danger',
    autoHide: false,
  });
}

function tConvert (time) {
  // Check correct time format and split into components
  time = time
    .toString ()
    .match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    // If time format correct
    time = time.slice (1); // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

export {
  tConvert,
  showUpdateMessage,
  showErrorMessage,
  showPercentage,
  showMoney,
  getTaxPercentage,
  showAPIErrorMessage,
};
