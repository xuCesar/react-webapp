import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
// import { AppContainer } from 'react-hot-loader';

import {Provider} from 'react-redux';
import { Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './state/configureStore'

import App from './App'

const WithHotReload = process.env.NODE_ENV === 'production' ? App : hot(App);

const store = configureStore()

// Wrap the rendering in a function:
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
              <>
                <Switch>
                  <Component />
                </Switch>
              </>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root'));
};


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    console.log(`env in development mode`)
    // Do this once
    // Webpack Hot Module Replacement API
    if (module.hot) {
        module.hot.accept('./App', () => {
            render(WithHotReload);
        });
    }
} else {
    // production code
    console.log(`env in non-dev mode`)
    console.log('public url: ', process.env.PUBLIC_URL)
}


// Render once
render(WithHotReload);
