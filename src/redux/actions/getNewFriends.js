import * as types from '../actionTypes';

const getNewFriends = () => dispatch => {
  dispatch({
    type: types.GET_NEW_FRIENDS,
    friends: ['david', 'eunice', 'franz']
  })
}

export default getNewFriends;