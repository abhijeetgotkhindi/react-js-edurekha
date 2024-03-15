import { SAVE_ENQUIRY } from '../actions/types';

export default function enquiriesReducer(state = [], action){

    switch(action.type){
        case SAVE_ENQUIRY:
            return [ ...state, action.payload];
    }
    return state;
}