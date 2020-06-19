import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './components/Router';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router/>
    </Provider>, 
    document.querySelector('#root')
);
