/**
 * Created by peter on 10/27/16.
 */
'use strict';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducer/index.reducer';

export const history = createBrowserHistory();
const defaultState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);

export default store;