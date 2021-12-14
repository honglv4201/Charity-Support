import React from "react";

/**
 * @author
 * @function ItemHomePage
 **/

export const ItemHomePage = ({ ...props }) => {
  return (
    <div className="donate-item">
      <div className="image">
        <div className="time-remaining">{props.time}</div>
        <img src={props.image} alt="" />
      </div>
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
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

        <div className="btn-donate">
          <button className="zoom-anim">Ủng hộ</button>
        </div>
      </div>
    </div>
  );
};
