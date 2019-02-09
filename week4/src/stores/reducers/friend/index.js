import { actionType } from "../../actions";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  age: 0,
  friends: []
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_FRIEND: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default friendReducer;
