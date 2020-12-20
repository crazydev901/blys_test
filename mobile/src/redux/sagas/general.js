import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "../action/actionType";
import {
    loginSuccess,
    loginFail,
} from '../action/general';
import { login } from "../Api/general";
import { NavigationActions } from '@react-navigation/native';

export function* watchGeneralRequest() {
    yield takeEvery(types.REQUEST_LOGIN, requestLogin);
}

function* requestLogin(action) {
    try {
        const res = yield call(
            login,
            action.payload.otp,
        );
        if (res.status === 200) {
            action.payload.callback(res.data)
            yield put(loginSuccess(res.data));
            // yield put(NavigationActions.navigate({routeName: 'HomeScreen'}))
        }else {
            action.payload.callback(res.data)
            yield put(loginFail(res.data));
        }
    } catch (e) {
        console.log("ERROR :-->",e);
        const errorResponse = {
            "message": "Please enter correct code",
            "status": 400
        }
        action.payload.callback(e)
        yield put(loginFail(e));
    }
}