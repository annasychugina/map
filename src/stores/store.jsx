import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
import promise from 'redux-promise-middleware';
import { baloonsReducer } from '../reducers/baloons';

import randomId from '../middlewares/index';

const dumbMiddleware = store => next => action => next({...action, addition: 'hello world'});

// const middleWare = applyMiddleware(promise(), thunk, logger());
const enhancer = compose(
	applyMiddleware(dumbMiddleware, randomId, logger),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const reducer = combineReducers({
// 	baloons: baloonsReducer
// });
const store = createStore(reducer, {}, enhancer);
window.store = store;


export default store;