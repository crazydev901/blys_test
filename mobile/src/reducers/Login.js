export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
export const LOGIN_FETCH_FAILURE = 'LOGIN_FETCH_FAILURE';

const initialState = {
    loading: false,
    login: '',
    fetchError: false,
    fetchErrorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FETCH:
            return {
                ...state,
                loading: true,
                fetchError: false,
                fetchErrorMessage: ''
            }
        case LOGIN_FETCH_SUCCESS:
            return {
                loading: false,
                fetchError: false,
                fetchErrorMessage: '',
                login: action.login
            }
        case LOGIN_FETCH_FAILURE:
            return {
                loading: false,
                fetchError: true,
                fetchErrorMessage: action.error.message,
                login: ''
            }

        default:
            return state;
    }
}
