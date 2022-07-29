import constants from "../constants";
const initialState = {
  messages: [],
  userMessage: "",
};
const chat = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.SET_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    case constants.SET_MESSAGE_DATA_LIST:
      return {
        ...state,
        messages: action.payload,
      };
    case constants.MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
export default chat;
