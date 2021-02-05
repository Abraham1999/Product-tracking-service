import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,

} from "./types";
import setAuthToken from "../../utils/setAuthToken";

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await  axios.get('/user/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const register = ({ name, password, email }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("/user/signup", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
   alert('Email is already in use, please try again');
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
} 
 
// Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/user/signin", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {    
    if (err.response.data.errors[0].msg === "Invalid Credentials") {
      alert("Wrong Email or Password");
    }
    else if (err.response.data.errors[0].msg === "Error with email") {
      alert("Problem with your email. Try Google Login");
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
 
//LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

