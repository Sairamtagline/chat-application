import * as actions from "../actions";

export const setAuthData = (payload: any) => {
  return async (dispatch: any) => {
    dispatch(actions.setAuthDataAction(payload));
  };
};
