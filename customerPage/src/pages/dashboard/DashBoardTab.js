import React from "react";
import { Link } from "react-router-dom";
import "./dashboardtab.css";

/**
 * @author
 * @function DashBoardTab
 **/

export const DashBoardTab = (props) => {
  return (
    <div>
      <div className="dashboardtab">
        <div className="logo-name">Charity Support</div>
        <div className="tab-list">
          <Link to="/dashboard">
            <div
              className={
                props.link === "dashboard" ? "tab-item active" : "tab-item"
              }
            >
              <i class="bx bxs-dashboard"></i>
              Tổng quan
            </div>
          </Link>

          <Link to="/dashboard/donator">
            <div
              className={props.link === "user" ? "tab-item active" : "tab-item"}
            >
              <i class="fas fa-user-alt"></i>
              Người đóng góp
            </div>
          </Link>
          <Link to="/dashboard/chuongtrinh">
            <div
              className={
                props.link === "chuongtrinh" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fab fa-accessible-icon"></i>
              Chương trình
            </div>
          </Link>

          <Link to="/dashboard/monthly">
            <div
              className={
                props.link === "monthly" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-hand-holding-medical"></i>
              Hàng tháng
            </div>
          </Link>

          <Link to="/dashboard/volunteer">
            <div
              className={
                props.link === "volunteer" ? "tab-item active" : "tab-item"
              }
            >
              <i class="fas fa-people-carry"></i>
              Tình nguyện viên
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
