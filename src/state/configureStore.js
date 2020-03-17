import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'
export const history = createBrowserHistory()

const middlewares = [
  thunk,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares))

export default function configureStore(preloadedState) {
  console.log('preloadedState', preloadedState)
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    enhancer
  )

  return store
}