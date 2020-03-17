const initialState = {
  isFetching: false,
  error: '',
  count: 0,
  pageNum: 1,
  articleList: [],
}

const actionTypes = {
  HOME_REQUEST_START: 'HOME_REQUEST_START',
  HOME_REQUEST_SUCCESS: 'HOME_REQUEST_SUCCESS',
  HOME_REQUEST_FAILURE: 'HOME_REQUEST_SUCCESS',
}

export default function reducer( state = initialState, action ) {
  console.log('action', action)
  switch (action.type) {
    case actionTypes.HOME_REQUEST_START:
      return { ...state, isFetching: true, error: '' }
    case actionTypes.HOME_REQUEST_SUCCESS:
      return { ...state, isFetching: false, articleList: action.data.rows, count: action.data.count }
    case actionTypes.HOME_REQUEST_FAILURE:
      return { ...state, isFetching: false, error: action.error }
    default:
      return state
  }
}