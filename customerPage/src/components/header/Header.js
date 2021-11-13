import React from "react";
import logoImg from "../../assets/img/logo/charity icon.png";
import "./header.css";
import avatarImg from "../../assets/img/avatar.png";
/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  return (
    <div>
      <div className="header__wrapper ">
        <div className="header__logo">
          <img src={logoImg} alt="" />
          <span>Charity Support</span>
        </div>

        <div className="header__navbar">
          <ul>
            <li className="active ">Trang chủ</li>
            <li className="">Ủng Hộ</li>
            <li>Tình nguyện viên</li>
            <li>Trợ giúp</li>
            <li>Về chúng tôi</li>
          </ul>
        </div>

        <div className="header__account flex-align">
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
      </div>
    </div>
  );
};
