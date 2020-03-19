import * as types from '../constans'

const initialState = {
  isFetching: false,
  error: '',
  count: 0,
  pageNum: 1,
  articleList: [],
}

export default function reducer( state = initialState, action ) {
  switch (action.type) {
    case types.HOME_REQUEST_START:
      return { ...state, isFetching: true, error: '' }
    case types.HOME_REQUEST_SUCCESS:
      return { ...state, isFetching: false, articleList: action.data.rows, count: action.data.count }
    case types.HOME_REQUEST_FAILURE:
      return { ...state, isFetching: false, error: action.error }
    default:
      return state
  }
}