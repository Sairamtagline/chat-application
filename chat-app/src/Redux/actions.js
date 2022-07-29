import { createAction } from 'redux-actions';
import constants from './constants';

// export const loginModelFlag = createAction(constants.LOGIN_MODEL_FLAG);
export const setAuthDataAction = createAction(constants.SET_AUTH_DATA);
export const setMessageAction = createAction(constants.SET_MESSAGE);
