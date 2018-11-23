import types from "./types";

const initialState = {
    user: {},
    isLoggingIn: false,
    error: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        /* USER LOGIN */
        case types.DO_LOGIN: 
            return {
                ...state,
                isLoggingIn: true,
            };

        case types.DO_LOGIN_SUCCESS: 
            return {
                ...state,
                user: action.user,
                isLoggingIn: false,
            };

        case types.DO_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoggingIn: false
            };

        default: 
            return state;
    }
}

export default loginReducer;
