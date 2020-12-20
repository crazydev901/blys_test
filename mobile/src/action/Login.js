import { LOGIN_FETCH, LOGIN_FETCH_FAILURE, LOGIN_FETCH_SUCCESS } from "../reducers/Login";
import { post } from "../ApiHelper/Api";

function login_fetch() {
    return {
        type: LOGIN_FETCH
    }
}

function loginFetchSuccess(login) {
    return {
        type: LOGIN_FETCH_SUCCESS,
        login
    }
}

function loginFetchFailure(err) {
    return {
        type: LOGIN_FETCH_FAILURE,
        error: err
    }
}

export function getLoginData(email, password, callback) {
    return (dispatch) => {
        dispatch(login_fetch());
        let formdata = new FormData;
        formdata.append('sign_in[login]', email);
        formdata.append('sign_in[password]', password);

        post("https://zsenie.systems/api/v2/users/login", formdata, (response) => {
            if (response === undefined) {
                dispatch(loginFetchFailure('Error'));
            } else {
                if (response.data.status == 200) {
                    dispatch(loginFetchSuccess(response.data));
                    callback(response.data)
                } else {
                    dispatch(loginFetchFailure(response.data));
                }
            }
        })
    }
}
