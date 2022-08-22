import React, { useEffect, useRef } from "react";
import { Header } from "../../components/header/Header";

import "./faqpage.css";
import "./nosupport.scss";

/**
 * @author
 * @function FaqPage
 **/

export const NoSupport = (props) => {
  return (
    <React.Fragment>
      <Header link="dashboard" />

      <div className="nosupport__body">
        <div className="nosupport__img">
          <img src="../../assets/img/month2.png" alt="canload" />
        </div>
        <div className="nosupport__title">
          Page này không hỗ trợ cho điện thoại
        </div>
        <div className="nosupport__desc">
          Vui lòng xem trên thiết bị laptop/pc để có thể xem được số liệu thống
          kê một cách đầy đủ. Cảm ơn bạn
        </div>
      </div>
    </React.Fragment>
  );
};
