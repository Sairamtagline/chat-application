import constants from "../constants";
const initialState = {
    username: ""
};
const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case constants.SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default auth;
