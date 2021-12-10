import * as types from '../actionTypes';

const addNewFriend = friend => dispatch => {
  dispatch({
    type: types.ADD_NEW_FRIEND,
    friend
  })
}

export default addNewFriend;