import { combineReducers } from 'redux';
import DemoReducer from './DemoReducer';
export default combineReducers({
    //  coool: () =>[]
    auth: DemoReducer
});