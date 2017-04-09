import thunk from 'redux-thunk'; //middleware, позволяет нам, возвращать не новое состояние, а функцию, которая принимает dispatcher
import logger from 'redux-logger'; //middleware, позволяет логировать action и его payload
import promise from 'redux-promise-middleware'; //middleware, позволяет возвращать промисы

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { baloonsReducer } from '../reducers/baloons';

const middleWare = applyMiddleware(promise(), thunk, logger());
const reducer = combineReducers({
	baloons: baloonsReducer
});
const store = createStore(reducer, middleWare);

export default store;