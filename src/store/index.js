/**
 * Created by Drapegnik on 06.02.17.
 */

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

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

export default function configureStore(initialState = initData) {
    const logger = createLogger();
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store
}