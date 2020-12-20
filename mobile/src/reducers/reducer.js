import { combineReducers } from "redux";
import Login from './Login';
import Journal from './Journal'

const Reducers = combineReducers({
    Login:Login,
    Journal:Journal
})

export default Reducers;