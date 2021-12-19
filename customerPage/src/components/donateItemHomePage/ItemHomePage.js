import React from "react";
import { Link } from "react-router-dom";
import "./itemhomepage.css";
import { EnumData } from "../../assets/JsonData/enumData";

/**
 * @author
 * @function ItemHomePage
 **/

export const ItemHomePage = ({ ...props }) => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="donate-item">
      <Link to="/post" onClick={handleToTop}>
        <div className="image">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <div className="donate-item__body">
        <div className="pop-info time-remaining">
          {"còn " + props.time + " ngày"}
        </div>
        <div className="pop-info project">{props.type}</div>
        <div className="pop-info owner">{EnumData[props.owner - 1]}</div>
        <div className="title">{props.title}</div>
        <div className="desc" style={{ display: "none" }}>
          {props.desc}
        </div>
        <div className="below-desc">
          <div className="status-bar item2">
            <span></span>
          </div>
          {/* <div className="status">{props.time}</div> */}
        </div>
        <div className="donate-info">
          <div className="target">
            <div className="target__txt">Mục tiêu</div>
            <div className="target__detail">
              <span> {props.raised} </span>/ {props.goal}
            </div>
          </div>

          <Link to="/post" onClick={handleToTop}>
            <div className="btn-donate">
              <button className="zoom-anim">Ủng hộ</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
