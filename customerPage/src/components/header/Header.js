import React, { useRef } from "react";
import logoImg from "../../assets/img/logo/charity icon.png";
import { Link } from "react-router-dom";
import "./header.css";
import avatarImg from "../../assets/img/avatar.png";
/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const ref = useRef(null);
  var lastScrollTop = 0;
  // window.addEventListener("scroll", function () {
  //   if (ref.current != null) {
  //     var scrollTop =
  //       window.pageXOffset || this.document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       ref.current.style.top = "-100px";
  //     } else {
  //       ref.current.style.top = "0";
  //     }
  //     lastScrollTop = scrollTop;
  //   }
  // });
  return (
    <div>
      <div ref={ref} className="header__wrapper ">
        <Link
          to="/"
          className={
            props.type === "analysic" ? "header__logo hide" : "header__logo"
          }
        >
          <img src={logoImg} alt="" />
          <span>Charity Support</span>
        </Link>

        <div
          className={
            props.type === "analysic" ? "header__navbar hide" : "header__navbar"
          }
        >
          <ul>
            <li className={props.link === "home" ? "active" : ""}>
              <Link to="/">Ủng Hộ</Link>
            </li>
            <li className={props.link === "volunteer" ? "active" : ""}>
              <Link to="/volunteer"> Tình nguyện viên</Link>
            </li>
            <li className={props.link === "faq" ? "active" : ""}>
              <Link to="/faq">Trợ giúp</Link>
            </li>
            <li className={props.link === "aboutus" ? "active" : ""}>
              Về chúng tôi
            </li>
          </ul>
        </div>
        <div
          className={
            props.type === "analysic" ? "header__navbar" : "header__navbar hide"
          }
        >
          <h1 className="title">báo cáo thông tin</h1>
        </div>

        <div className="header__account hide flex-align">
          <div className="header__question">
            <i class="far fa-question-circle"></i>
          </div>
          <div className="header__notify">
            <i class="fas fa-bell"></i>
            <div className="notify-badge"></div>
          </div>

          <div className="header__user flex-align">
            <div className="avatar">
              <img src={avatarImg} alt="avatar" />
            </div>
            <div className="username">Lam Hong</div>
            <div className="toggle-down">
              <i class="fas fa-sort-down"></i>
            </div>
          </div>
        </div>

        <div className="header__account-login  flex-align">
          <div className="header__question">
            <i class="far fa-question-circle"></i>
          </div>

          <div className="header__user-login flex-align">
            <Link to="/login" className="btn-auth login">
              Đăng nhập
            </Link>
            <Link to="signup" className="btn-auth signup">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
