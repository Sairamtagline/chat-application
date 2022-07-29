import * as actions from "../actions";

export const setMessage = (payload) => {
  return async (dispatch) => {
    dispatch(actions.setMessageAction(payload))
  };
};
