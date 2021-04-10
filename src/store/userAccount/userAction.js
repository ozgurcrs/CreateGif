import axios from "axios";
import { userTypes } from "./userTypes";

export const getUserAsync = () => {
  return async (dispatch) => {
    const users = await axios.get(process.env.REACT_APP_APIURL+"users");
    dispatch(setUser(users.data));
  };
};
export const setUser = (payload) => {
    return{
        type:userTypes.SET_USER,
        payload
    }
}

export const getUser = () => {
  return{
    type:userTypes.GET_USER
  }
}






