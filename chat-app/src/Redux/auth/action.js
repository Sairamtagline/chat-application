import * as actions from "../actions";

export const setAuthData = (payload) => {
  return async (dispatch) => {
    dispatch(actions.setAuthDataAction(payload))
  };
};
