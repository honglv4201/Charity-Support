import React, { useContext, useEffect, useRef, useState } from "react";
import "./auth.css";
import loginGif from "../../assets/img/component/loginbackground.gif";
import { Link, Navigate } from "react-router-dom";
import appleImg from "../../assets/img/auth/apple.png";
import facebookImg from "../../assets/img/auth/facebook.png";
import googleImg from "../../assets/img/auth/google.png";
import { AuthContext } from "../../contexts/AuthContext";
/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  const {
    loginUser,
    authState: { isAuthenticated, user },
  } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState();
  const errRef = useRef();

  const handleOnChangeLogin = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  // handle Login
  const handleLogin = () => {
    localStorage.setItem("mykey", "2");
  };

  const handleLogin_NODE = async (e) => {
    e.preventDefault();
    const data = await loginUser(loginForm);
    setErr(null);
    errRef.current?.classList.toggle("border");
    console.log("data", data);
    if (data.error) {
      setErr(data.data.message);
    }
    setTimeout(() => {
      setErr(null);
      errRef.current?.classList.toggle("border");
    }, 3000);
  };

  // return components

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <div className="login__above">
        <div className="login__gif">
          <img src={loginGif} alt="" />
        </div>
      </div>
      <div className="login__bottom">
        <div className="content__wrapper">
          <div className="content__body">
            <h3>Chào mừng trở lại</h3>
            <form className="auth-form">
              {err && (
                <div className="err-message text-red-400" ref={errRef}>
                  <i class="fa-solid fa-xmark"></i> {err}
                </div>
              )}
              <input
                type="text"
                placeholder="Nhập email"
                className="large-custom-input"
                name="email"
                onChange={handleOnChangeLogin}
              />

              <input
                type="password"
                placeholder="Mật khẩu"
                className="large-custom-input"
                name="password"
                onChange={handleOnChangeLogin}
              />
              <div className="option-login">
                <div className="remember-me__wrapper">
                  <span>
                    {" "}
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="custom-checkbox-ciclex"
                    />
                  </span>
                  <span>Ghi nhớ tôi</span>
                </div>
                <Link to="/forgetpassword">Quên mật khẩu?</Link>
              </div>

              <button
                type="submit"
                className="btn-login"
                onClick={handleLogin_NODE}
              >
                Đăng nhập
              </button>
              <div className="social-login">
                <Link
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  className="session-method"
                >
                  <img src={googleImg} alt="" />
                  <span>Google</span>
                </Link>
                <Link
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  className="session-method"
                >
                  <img className="fb" src={facebookImg} alt="" />
                  <span>Facebook</span>
                </Link>
                {/* <Link to="/auth" className="session-method">
                  <img src={appleImg} alt="" />
                </Link> */}
              </div>

              <div className="change-auth">
                <span>Chưa có tài khoản? </span>
                <Link to="/signup">Đăng ký</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
