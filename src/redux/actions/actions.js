import * as types from '../actionTypes';

export const executeSearch = (author, title) => dispatch => {
  fetch(`http://openlibrary.org/search.json?author=${author}&limit=10`)
  .then(result => result.json())
  .then(data => dispatch(fetchSuccess(true, data.docs)))
  .catch(err => dispatch(fetchSuccess(false, err.message)))
}

const fetchSuccess = (isSuccess, data) => {
  if (isSuccess) {
    return {
      type: types.EXECUTE_SEARCH,
      searchQueryResults: data
    }
  } else {
    return {
      type: types.SET_MODAL_MESSAGE,
      message: data
    }
  }
}

export const setModalMessage = message => dispatch => {
  dispatch ({
    type: types.SET_MODAL_MESSAGE,
    message
  })
}

