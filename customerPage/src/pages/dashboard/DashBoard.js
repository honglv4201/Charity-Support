import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { DashBoardTab } from "./DashBoardTab";
import avatarImg from "../../assets/img/avatar.png";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

// img
import coinImg from "../../assets/img/coin.png";
import { DashBoardTopNav } from "./DashBoardTopNav";

/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
  const state = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <DashBoardTab link="dashboard" />
        </div>

        <div className="dashboard__body">
          <div className="header">
            <div className="search-input">
              <input type="text" placeholder="Tìm kiếm" />
              <i class="fas fa-search"></i>
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

            <DashBoardTopNav />
          </div>
          {/* end : header */}

          {/* content */}

          {/* top pannel */}
          <div className="top-pannel">
            <div className="short-info">
              <div className="title">Thống kê tổng quan</div>
              <div className="short-info__body">
                <div className="item">
                  <div className="image">
                    <i class="fas fa-user-alt"></i>
                  </div>
                  <div className="info">
                    <span className="name-item">Người ủng hộ</span>
                    <div className="detail-info">
                      <div className="txt-tongcong">Tổng cộng:</div>
                      <div className="number">1.542</div>
                      <div className="percent">( 23.5% )</div>
                      <i class="fas fa-arrow-circle-up"></i>
                    </div>
                  </div>
                </div>

                <div className="item item2">
                  <div className="image">
                    <i class="fas fa-people-carry"></i>
                  </div>
                  <div className="info">
                    <span className="name-item">Tình nguyện viên</span>
                    <div className="detail-info">
                      <div className="txt-tongcong">Tổng cộng:</div>
                      <div className="number">442</div>
                      <div className="percent">( 23.5% )</div>
                      <i class="fas fa-arrow-circle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-info">
              <h3 className="title">Tổng cộng</h3>
              <div className="total-info__detail">
                <div className="money">
                  <span className="vnd">VND</span>
                  <span className="txt-money">365.300.000</span>
                </div>

                <div className="percent">
                  (11.5%) <i class="fas fa-arrow-circle-up"></i>
                </div>
              </div>
            </div>
          </div>
          {/* end: top pannel */}

          {/* second pannel */}
          <div className="second-pannel">
            <div className="main-chart">
              {" "}
              <Chart
                options={state.options}
                series={state.series}
                height="100%"
              />
            </div>
            <div className="top-donator">
              <h3 className="title">Người đóng góp nhiều nhất</h3>
              <div className="list-user">
                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://img2.thuthuatphanmem.vn/uploads/2019/01/05/avatar-chibi-doi-2_042810274.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Trương Bích Thần</div>
                    <div className="type">11 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>35.000.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Nhậm Gia Luân</div>
                    <div className="type">25 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>18.600.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://robohash.org/estminimaut.png?size=50x50&set=set1"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Bạch Lộc</div>
                    <div className="type">hàng tháng</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>8.500.000 </span>
                    <div className="vnd">VNĐ</div>
                  </div>
                </div>

                <div className="item-user">
                  <div className="image">
                    <img
                      src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name">Nhậm Gia Luân</div>
                    <div className="type">25 x một lần</div>
                  </div>
                  <div className="money">
                    {" "}
                    <div className="image-coin">
                      <img src={coinImg} alt="" />
                    </div>
                    <span>18.600.000</span> <div className="vnd">VNĐ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
