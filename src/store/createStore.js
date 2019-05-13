/* global config */
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory(); // eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  connectRouter(history)(rootReducer),
  config.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export { store, history };
