import { combineReducers } from 'redux';
import enquiriesReducer from './enqiries';

const rootReducer = combineReducers({
    enquiriesReducer: enquiriesReducer
});

export default rootReducer;
