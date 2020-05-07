/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
import { render } from 'react-dom';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';
import App from './components/routing/app';

// Redux reducers
import homeReducers from './reducers/homeReducer';

// takes all reducer files and combines into one centralized store
const reducer = combineReducers({
  homeReducers,
});

// middle-ware that enables us to use chrome extension
// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating our store (global state)
export const store = createStore(
  reducer, composeEnhancer(applyMiddleware(thunk)),
);

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


render(<Application />, document.getElementById('root'));
