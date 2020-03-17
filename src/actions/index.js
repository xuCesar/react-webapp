import * as types from '../constans'
import axios from 'axios'

export const getArticleList = (params) => dispatch => {
  dispatch({
    type: types.HOME_REQUEST_START
  })
  return axios.get('http://127.0.0.1:7002/api/frontend/article/list')
    .then(res => {
      dispatch({
        type: types.HOME_REQUEST_SUCCESS,
        data: res.data
      })
    })
    .catch(error => {
      dispatch({
        type: types.HOME_REQUEST_FAILURE,
        error: error.response.data.message
      })
    })
}