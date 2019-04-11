import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './containers/App';
import store from './store/index.js';

Enzyme.configure ({adapter: new EnzymeAdapter()});

test('renders with redux store and react router without crashing', () => {
    shallow(<Provider store={store}>
        <Router><Route path="/" component={App}/></Router></Provider>)
});

