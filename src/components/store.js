import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { logger } from 'redux-logger';

const middlewares = applyMiddleware(logger);

const store = createStore(rootReducer, {}, middlewares);

export default store;
