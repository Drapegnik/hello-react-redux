/**
 * Created by Drapegnik on 06.02.17.
 */

import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState = {
    user: {
        login: false
    },
    profile: {
        username: 'anonymous',
        repositories: []
    }
}) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        })
    }

    return store
}