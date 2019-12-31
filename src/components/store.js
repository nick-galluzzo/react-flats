import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from '../reducers/rootReducer';

const middlewares = applyMiddleware(logger, reduxPromise);

const store = createStore(rootReducer, {}, middlewares);

export default store;
