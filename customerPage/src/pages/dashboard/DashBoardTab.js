import React from "react";
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
          <div className="tab-item active">
            <i class="bx bxs-dashboard"></i>
            Dashboard
          </div>
          <div className="tab-item ">
            <i class="fas fa-user-alt"></i>
            Người đóng góp
          </div>
          <div className="tab-item">
            <i class="fab fa-accessible-icon"></i>
            Chương trình
          </div>
          <div className="tab-item">
            <i class="fas fa-hand-holding-medical"></i>
            Hàng tháng
          </div>
          <div className="tab-item">
            <i class="fas fa-people-carry"></i>
            Tình nguyện viên
          </div>
        </div>
      </div>
    </div>
  );
};
