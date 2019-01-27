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

// const understandingReducer = () => {

// }

// const supportReducer = () => {

// }

// const commentsReducer = () => {

// }

const storeInstance = createStore(
    combineReducers({
        feeling,
        //     understandingReducer,
        //     supportReducer,
        //     commentsReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
