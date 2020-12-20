import { types } from "./actionType";

export function requestLogin(otp , callback) {
    return {
		type: types.REQUEST_LOGIN,
		payload: {
            loading: true,
            otp,
            callback
		}
	};
}

export function loginSuccess(userData) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: {
            loading: false,
            userData
        }
    }
}

export function loginFail(userData ){
    return {
        type: types.LOGIN_FAIL,
        payload: {
            loading: false,
            userData
        }
    }
}