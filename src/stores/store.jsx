import thunk from 'redux-thunk'; //middleware, позволяет нам, возвращать не новое состояние, а функцию, которая принимает dispatcher
import logger from 'redux-logger'; //middleware, позволяет логировать action и его payload
import promise from 'redux-promise-middleware'; //middleware, позволяет возвращать промисы

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { baloonsReducer } from '../reducers/baloons';
import comments from '../reducers/comments';

const middleWare = applyMiddleware(promise(), thunk, logger());
const reducer = combineReducers({
	baloons: baloonsReducer,
	comments,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducer, composeEnhancers(middleWare));

export default store;