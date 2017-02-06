/**
 * Created by Drapegnik on 06.02.17.
 */

import { createStore } from 'redux'
import rootReducer from '../reducers'

const initData = {
    user: {
        name: 'anonymous',
        login: false
    },
    profile: {
        username: 'test',
        repositories: [
            {
                id: 1,
                name: 'First',
                starred: true
            },
            {
                id: 2,
                name: 'Second',
                starred: false
            }
        ]
    }
};

export default function configureStore(initialState = initData) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store
}