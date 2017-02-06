/**
 * Created by Drapegnik on 06.02.17.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const initData = {
    user: {
        name: 'anonymous',
        login: false
    },
    profile: {
        username: '',
        repositories: []
    }
};

const logger = createLogger();
const enhancer = compose(
    applyMiddleware(thunk, logger),
    DevTools.instrument()
);

export default function configureStore(initialState = initData) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store
}