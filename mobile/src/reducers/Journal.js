export const JORNALDATA_FETCH = 'JORNALDATA_FETCH';
export const JORNALDATA_FETCH_SUCCESS = 'JORNALDATA_FETCH_SUCCESS';
export const JORNALDATA_FETCH_FAILURE = 'JORNALDATA_FETCH_FAILURE';

const initialState = {
    loading: false,
    journalData: '',
    fetchError: false,
    fetchErrorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case JORNALDATA_FETCH:
            return {
                ...state,
                loading: true,
                fetchError: false,
                fetchErrorMessage: ''
            }
        case JORNALDATA_FETCH_SUCCESS:
            return {
                loading: false,
                fetchError: false,
                fetchErrorMessage: '',
                journalData: action.journalData
            }
        case JORNALDATA_FETCH_FAILURE:
            return {
                loading: false,
                fetchError: true,
                fetchErrorMessage: action.error.message,
                journalData: ''
            }

        default:
            return state;
    }
}
