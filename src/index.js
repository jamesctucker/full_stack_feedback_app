import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
    if (action.type === 'UPDATE_FEELING') {
        return action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'UPDATE_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'UPDATE_SUPPORT') {
        return action.payload;
    }
    return state;
}

const comments = (state = 'None', action) => {
    if (action.type === 'UPDATE_COMMENTS') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
