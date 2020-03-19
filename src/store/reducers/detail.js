import * as types from '../constans'

const initialState = {
  isFetching: false,
  error: '',
  article: null,
}

export default function reducer( state = initialState, action ) {
  console.log(action)
  switch (action.type) {
    case types.DETAIL_REQUEST_START:
      return { ...state, isFetching: true, error: '' }
    case types.DETAIL_REQUEST_SUCCESS:
      return { ...state, isFetching: false, article: action.data.data }
    case types.DETAIL_REQUEST_FAILURE:
      return { ...state, isFetching: false, error: action.error }
    default:
      return state
  }
}