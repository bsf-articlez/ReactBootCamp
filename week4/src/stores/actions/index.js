const actionType = {
  ADD_FRIEND: "ADD_FRIEND"
};

const addFriend = dispatch => (friendId, targetFriendId) => {
  dispatch({
    type: actionType.ADD_FRIEND,
    payload: { friendId, targetFriendId }
  });
};

export { actionType, addFriend };
