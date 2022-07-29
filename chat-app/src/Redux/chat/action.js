import * as actions from "../actions";

export const setMessage = (payload) => {
  return async (dispatch) => {
    dispatch(actions.setMessageAction(payload))
  };
};

export const setMessageDataList = (payload) => {
  return async (dispatch) => {
    dispatch(actions.setMessageDataListAction(payload))
  };
};

export const messageReceived = (payload) => {
  return async (dispatch) => {
    dispatch(actions.messageReceivedAction(payload))
  };
};