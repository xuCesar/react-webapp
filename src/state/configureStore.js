import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'
export const history = createBrowserHistory()

const middlewares = [
  thunk,
];

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ...middlewares
      ),
    ),
  )

  return store
}