import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logoutSuccess,
  logoutFailed,
  logoutStart,
} from "./authSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8080/api/login", user);
    dispatch(loginSuccess(res.data));
    res.data.user.roles=="T3"?(navigate("../")):(navigate("/dashboard"))
    
  } catch (err) {
    dispatch(loginFailed());
  }
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://localhost:8080/api/register", user);
    dispatch(registerSuccess(res.data));
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
  }
};
export const logoutUser = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    const res = await axios.post("http://localhost:8080/api/logout");
    dispatch(logoutSuccess(res.data));
    navigate("../");
  } catch (err) {
    dispatch(logoutFailed());
  }
};
