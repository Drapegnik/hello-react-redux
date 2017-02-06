/**
 * Created by Drapegnik on 03.02.17.
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store'

const store = configureStore();

render(
    <div>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>,
    document.getElementById('root')
);