import * as actions from "../actions";
export const setMessage = (payload: any) => {
  return async (dispatch: any) => {
    dispatch(actions.setMessageAction(payload));
  };
};
export const setMessageDataList = (payload: any) => {
  return async (dispatch: any) => {
    dispatch(actions.setMessageDataListAction(payload));
  };
};
export const messageReceived = (payload: any) => {
  return async (dispatch: any) => {
    dispatch(actions.messageReceivedAction(payload));
  };
};
