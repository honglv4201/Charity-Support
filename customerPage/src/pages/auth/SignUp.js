import React, { useContext, useState } from "react";
import "./auth.css";
import loginGif from "../../assets/img/component/loginbackground.gif";
import { Link } from "react-router-dom";
import appleImg from "../../assets/img/auth/apple.png";
import facebookImg from "../../assets/img/auth/facebook.png";
import googleImg from "../../assets/img/auth/google.png";
import { AuthContext } from "../../contexts/AuthContext";
/**
 * @author
 * @function SignUp
 **/

export const SignUp = (props) => {
  const handleLogin = () => {
    localStorage.setItem("mykey", "2");
  };

  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [err, setErr] = useState();

  const handleOnChangeForm = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
    console.log(signUpForm);
  };
  const { signUp } = useContext(AuthContext);
  const handleSignUp = async () => {
    const responseData = await signUp(signUpForm);
    setErr(null);
    if (!responseData.success) {
      console.log(responseData);
      setErr(responseData.message);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="login__above">
          <div className="login__gif">
            <img src={loginGif} alt="" />
          </div>
        </div>
        <div className="login__bottom">
          <div className="content__wrapper">
            <div className="content__body signup">
              <h3>Đăng kí thành viên</h3>
              <div className="auth-form signup">
                {err && (
                  <div className="err-message for-signup text-red-400">
                    <i class="fa-solid fa-xmark"></i> {err}
                  </div>
                )}
                <div className="signup">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Họ Tên"
                      className="large-custom-input"
                      name="fullname"
                      onChange={handleOnChangeForm}
                    />
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      className="large-custom-input"
                      name="phoneNumber"
                      onChange={handleOnChangeForm}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Nhập email"
                      className="large-custom-input"
                      name="email"
                      onChange={handleOnChangeForm}
                    />
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="large-custom-input"
                      name="password"
                      onChange={handleOnChangeForm}
                    />
                  </div>
                </div>
                <button
                  className="btn-login"
                  to={
                    localStorage.getItem("loginto") === "dashboard"
                      ? "/dashboard"
                      : "/"
                  }
                  onClick={handleSignUp}
                >
                  Đăng kí
                </button>
                <div className="social-login">
                  <Link
                    to={
                      localStorage.getItem("loginto") === "dashboard"
                        ? "/dashboard"
                        : "/"
                    }
                    onClick={handleLogin}
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
                    onClick={handleLogin}
                    className="session-method"
                  >
                    <img className="fb" src={facebookImg} alt="" />
                    <span>Facebook</span>
                  </Link>
                  {/* <Link to="/au th" className="session-method">
                    <img src={appleImg} alt="" />
                  </Link> */}
                </div>

                <div className="change-auth">
                  <span>Đã có tài khoản? </span>
                  <Link to="/login">Đăng nhập</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
