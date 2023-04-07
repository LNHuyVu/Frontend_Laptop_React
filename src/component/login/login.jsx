import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const user={
        email,
        password
    }
    loginUser(user, dispatch, navigate);
  };
  return (
    <div className="login-form-user">
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h1 className="title-login" style={{ textAlign: "center" }}>
            Login
            {/* <img src="../image/background/backgroundDN6.jpg" alt="" /> */}
          </h1>
          <label>Username</label>
          <div className="flex-row">
            <input
              name="username"
              className="lf--input"
              placeholder="Username"
              type="text"
              // value={this.state.username}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label>Password</label>
          <div className="flex-row">
            <input
              name="password"
              className="lf--input"
              placeholder="Password"
              // type={this.state.isShowPassword?'text':'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>
              {/* onClick={() => this.handleShowHidenPassword()} */}
              {/* <i class={this.state.isShowPassword ? "fas fa-eye-slash" : "far fa-eye"}></i> */}
            </span>
          </div>
          <button className="lf--submit" type="submit">
            LOGIN
          </button>
        </form>
        <div className="col-12" style={{ backgroundColor: "red" }}>
          {/* {this.state.errMessage} */}
        </div>
        <a className="lf--forgot" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;
