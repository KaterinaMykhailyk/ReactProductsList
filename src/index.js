import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import store from './store/index.js';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root'));
