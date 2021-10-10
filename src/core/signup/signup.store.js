import { SIGNUP_ACTION_TYPE } from './signup.type'

const initialState = {
    signupForm: {
        
    }
};

export function signupStore(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_ACTION_TYPE.SIGNUP_FORM_LOADING:
            return {
                ...state,
            };

        case SIGNUP_ACTION_TYPE.SIGNUP_FORM_LOADED:
            return {
                ...state,
            };

        case SIGNUP_ACTION_TYPE.SIGNUP_FORM_ERROR:
            return {
                ...state,
            };

        case SIGNUP_ACTION_TYPE.SIGNUP_FORM_RESET:
            return {
                ...state,
            };

        default:
            return state;
    }
}
