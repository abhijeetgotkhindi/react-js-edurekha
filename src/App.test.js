import React from 'react';
import App from './App';
import { mount } from 'enzyme';

// otherwise we receive this error message:

import {configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});
const createStoreWithMiddleware = applyMiddleware()(createStore);

// Use 'describe' to group together similar tests
describe('App', () => {

    let component;

    beforeEach(() => {
        component = mount(<BrowserRouter>
            <Provider store={createStoreWithMiddleware(reducers)}>
                <App />
            </Provider>
        </BrowserRouter>);
    });

    // Use 'test' or 'it' (both possible) to test a single attribute of a target
    test('shows form', () => {
        expect(component.find('.enquiry-box').length);
    });

    test('shows list', () => {
        expect(component.find('.enquiry-list').length);
    });
});

