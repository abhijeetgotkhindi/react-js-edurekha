import { combineReducers } from 'redux';
import enquiriesReducer from './enqiries';

const rootReducer = combineReducers({
    enqiries: enquiriesReducer
});

export default rootReducer;
