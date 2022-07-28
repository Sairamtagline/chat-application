import constants from "../constants";

const initialState = {
    messages: [
        { message: 'Test1', userName: 'Alex', userId: 123 },
        { message: 'Test2', userName: 'Milan', userId: 125 },
        { message: 'Test3', userName: 'Alex', userId: 126 },
        { message: 'Test4', userName: 'Alex', userId: 127 },
        { message: 'Test5', userName: 'Milan', userId: 125 },
        { message: 'Test6', userName: 'Alex', userId: 129 },
    ],
    userMessage: ""
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_MESSAGE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export default chat;