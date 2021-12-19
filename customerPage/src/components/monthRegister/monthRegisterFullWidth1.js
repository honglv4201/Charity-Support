import React from "react";
import "./monthregister.css";

import month1Img from "../../assets/img/month1.png";
import month2Img from "../../assets/img/month2.png";
/**
 * @author
 * @function MonthRegisterFullWidth1
 **/

export const MonthRegisterFullWidth1 = (props) => {
  return (
    <div>
      <div className="month-register--full-width">
        <div className="left">
          <div className="top">
            <div className="image">
              <img src={month2Img} alt="" />
            </div>
            <div className="info">
              <h4>Ủng hộ hằng tháng</h4>
              <p>Đóng góp hàng tháng vào quỹ chung của Charity Support</p>
            </div>
          </div>
          <div className="btn">Ủng hộ</div>
        </div>
        <div className="right">
          <div className="top">
            <div className="image">
              <img src={month1Img} alt="" />
            </div>
            <div className="info">
              <h4>Tạo tổ chức từ thiện</h4>
              <p>Đăng kí với chúng tôi để được trở thành tổ chức từ thiện</p>
            </div>
          </div>
          <div className="btn register">Đăng kí</div>
        </div>
      </div>
    </div>
  );
};
