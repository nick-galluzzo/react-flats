import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxPromise from 'redux-promise';

const middlewares = applyMiddleware(logger, reduxPromise);

const store = createStore(rootReducer, {}, middlewares);

export default store;
