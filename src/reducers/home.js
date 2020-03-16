const initialState = {
  isFetching: false,
  error: '',
  total: 0,
  pageNum: 1,
  articleList: [],
}

const actionTypes = {
  HOME_REQUEST_START: 'HOME_REQUEST_START',
  HOME_REQUEST_SUCCESS: 'HOME_REQUEST_SUCCESS',
  HOME_REQUEST_FAILURE: 'HOME_REQUEST_SUCCESS',
}

export default function reducer( state = initialState, action ) {
  switch (action.type) {
    case actionTypes.HOME_REQUEST_START:
      return state
    default:
      return state
  }
}