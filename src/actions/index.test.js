import { SAVE_ENQUIRY } from './types';
import { saveEnquiry } from './';

describe('actions', () => {
    describe('saveEnqiry', () => {
        test('has the correct type', () => {

            // action creator returns an action
            const action = saveEnquiry();
            expect(action.type).toEqual(SAVE_ENQUIRY);
        });

        test('has the correct payload', () => {

            const action = saveEnquiry('new enquiry');
            expect(action.payload).toEqual('new enquiry');
        });

    });

});