import constants from "../constants";

const initialState = {
    username: ""
};

const auth = (state = initialState, action) => {
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