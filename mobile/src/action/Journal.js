import { JORNALDATA_FETCH, JORNALDATA_FETCH_SUCCESS, JORNALDATA_FETCH_FAILURE } from '../reducers/Journal';
import { getWithParams } from "../ApiHelper/Api";

function jornalDataFetch() {
    return {
        type: JORNALDATA_FETCH
    }
}

function jornalDataFetchSuccess(journalData) {
    return {
        type: JORNALDATA_FETCH_SUCCESS,
        journalData
    }
}

function jornalDataFetchFailure(err) {
    return {
        type: JORNALDATA_FETCH_FAILURE,
        error: err
    }
}

export function getJournalData(page, callback) {
    return (dispatch) => {
        dispatch(jornalDataFetch());
        const params = {
            page: page
        }

        getWithParams('https://zsenie.systems/api/v2/posts', params, response => {
            if (response === undefined) {
                dispatch(jornalDataFetchFailure('Error'));
            } else {
                if (response.data.status == 200) {
                    dispatch(jornalDataFetchSuccess(response.data));
                    callback(response.data)
                } else {
                    if (response.data.status === 401) {
                        // removeDataForLogoutScreen()
                    } else {
                            dispatch(jornalDataFetchFailure(response.data));
                    }
                }
            }
        })
    }
}
