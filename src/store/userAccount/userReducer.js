import { userTypes } from "./userTypes";

const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    case userTypes.ADD_USER:
      const data = state.user;
      return {
        ...state,
        user: [...data, action.payload],
      };

    case userTypes.GET_USER:
    return state.user

    default:
      return state;
  }
};
