import { types } from "../action/actionType";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // case types.REQUEST_LOGIN:
    //     return { ...state, ...(action.payload || {}) };
    // case types.REQUEST_JOURNAL_DATA:
    //     return { ...state, ...(action.payload || {}) };
    default:
      return { ...state, ...(action.payload || {}) };
  }
};
