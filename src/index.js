import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import { Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './state/configureStore'

import App from './App'
import { AppContainer } from 'react-hot-loader';

const store = configureStore()

// Wrap the rendering in a function:
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                  <>
                    <Switch>
                      <Component />
                    </Switch>
                  </>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root'));
};


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    console.log(`env in development mode`)
    // Do this once
    // Webpack Hot Module Replacement API
    if (module.hot) {
        module.hot.accept('./App', () => {
            render(App);
        });
    }
} else {
    // production code
    console.log(`env in non-dev mode`)
    console.log('public url: ', process.env.PUBLIC_URL)
}


// Render once
render(App);
