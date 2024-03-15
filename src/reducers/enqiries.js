import { SAVE_ENQUIRY } from '../actions/types';

function enquiriesReducer(state = [], action){

    switch(action.type){
        case SAVE_ENQUIRY:
            return [ ...state, action.payload];
    }
    return state;
}

export default enquiriesReducer;
