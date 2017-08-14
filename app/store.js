/**
 * Created by peter on 10/27/16.
 */
'use strict';
import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducer/index.reducer';
import rootEpic from './epic/index.epic';

export const history = createBrowserHistory();
const defaultState = {};
const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), epicMiddleware)
));

export default store;