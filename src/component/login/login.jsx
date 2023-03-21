import React from 'react'
import "./login.scss"

const login = () => {
  return (
    <div className="login-form-user">
      <div className="login-form">
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
            // onChange={(event) => this.handleOnchangeUsername(event)}
          />
        </div>
        <label>Password</label>
        <div className="flex-row">
          <input
            name="password"
            className="lf--input"
            placeholder="Password"
            // type={this.state.isShowPassword?'text':'password'}
            // onChange={(event) => this.handleOnchangePassword(event)}
          />
          <span>
          {/* onClick={() => this.handleShowHidenPassword()} */}
            {/* <i class={this.state.isShowPassword ? "fas fa-eye-slash" : "far fa-eye"}></i> */}
          </span>
        </div>
        <button
          className="lf--submit"
          type="submit"
        //   onClick={() => {this.handleLogin()}}
        >
          LOGIN
        </button>
        <div className="col-12" style={{ backgroundColor: "red" }}>
          {/* {this.state.errMessage} */}
        </div>
        <a className="lf--forgot" href="#">
          Forgot password?
        </a>
      </div>
    </div>
  )
}

export default login