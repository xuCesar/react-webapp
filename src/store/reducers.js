import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import home from './reducers/home'
import detail from './reducers/detail'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  home,
  detail
})
export default createRootReducer