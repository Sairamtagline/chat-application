import { combineReducers } from 'redux';
import auth from './auth/reducer';
import chat from './chat/reducer';

export default combineReducers({
    auth,
    chat
});