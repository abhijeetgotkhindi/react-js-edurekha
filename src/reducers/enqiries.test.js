import enquiryReducer from './enqiries';
import { SAVE_ENQUIRY } from '../actions/types';

describe('Enquiry Reducer', () => {

    // in case there is a weird input, we react with the default state
    test('handles action with unknown type', () => {

        expect(enquiryReducer(undefined, {})).toEqual([]);
    });

    test('SAVE_ENQUIRY', () => {

        const action = { type: SAVE_ENQUIRY, payload: 'new enquiry'};
        expect(enquiryReducer([], action)).toEqual(['new enquiry']);

    });

});