import { SAVE_ENQUIRY } from './types';

// action creator:
export function saveEnquiry(enquiry){
    return {
        type: SAVE_ENQUIRY,
        payload: enquiry
    }

}