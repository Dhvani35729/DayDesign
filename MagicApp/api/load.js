import {db, user} from './config';
import {showUpdateMessage} from '../utils/index';
import AsyncStorage from '@react-native-community/async-storage';

function loadCurrentOrder (that) {}

function loadRestaurants (that) {}

function loadMenu (that, resId, hourId) {}

export {loadRestaurants, loadMenu, loadCurrentOrder};
