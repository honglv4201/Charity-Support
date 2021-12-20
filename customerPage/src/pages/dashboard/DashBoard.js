import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { DashBoardTab } from "./DashBoardTab";
import avatarImg from "../../assets/img/avatar.png";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

// img
import coinImg from "../../assets/img/coin.png";

/**
 * @author
 * @function DashBoard
 **/

export const DashBoard = (props) => {
  const state = {
    series: [
      {
        type: "column",
        name: "Tiền quyên góp",
        data: [3467000, 5060000, 7880000, 5060000, 6688000, 7500000, 4400000, 2200000, 5789000, 7100000, 5420000, 9677000, 5512000, 7898000, 11220000, 0, 0, 0, 0, 0],
      },
      {
        name: "Lượt quyên góp",
        data: [11, 32, 45, 32, 34, 52, 41, 11, 32, 45, 32, 34, 52, 41, 55, 0, 0, 0, 0, 0],
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
        categories: [
          "1/12/2021",
          "2/12/2021",
          "3/12/2021",
          "4/12/2021",
          "5/12/2021",
          "6/12/2021",
          "7/12/2021",
          "8/12/2021",
          "9/12/2021",
          "10/12/2021",
          "11/12/2021",
          "12/12/2021",
          "13/12/2021",
          "14/12/2021",
          "15/12/2021",
          "16/12/2021",
          "17/12/2021",
          "18/12/2021",
          "19/12/2021",
          "20/12/2021"
        ],
      },
      yaxis: [
        {
          title: {
            text: "Tiền quyên góp",
          },
        },
        {
          opposite: true,
          title: {
            text: "Lượt quyên góp",
          },
        },
      ],
      title: {
        text: "Thống kê Quyên góp",
        align: "left",
      },
    },
  };

  const state2 = {
    series: [33000000, 17200000, 27650000, 44225000, 57550000, 45670000],
    options: {
      series: [33000000, 17200000, 27650000, 44225000, 57550000, 45670000],
      labels: [
        "Hội chữ thập đỏ",
        "Quỹ tình thương HCM",
        "Bông sen vàng",
        "Hội Covid Việt Nam",
        "Trẻ Em việt Nam",
        "Từ Thiện Hoài Linh",
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "50px",
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                fontSize: "24px",
                color: "#2787AB"
              }
            }
          }
        }
      }
    }
  };

  const state3 = {
    series: [{
      name: 'Người trong độ tuổi lao động',
      data: [30, 45, 42, 50, 34, 44, 67, 30, 33, 27, 32, 34, 52, 50, 30, 0, 0, 0, 0, 0]
    }, {
      name: 'Người trên tuổi lao động',
      data: [67, 55, 72, 61, 44, 78, 66, 87, 59, 69, 79, 54, 45, 66, 42, 0, 0, 0, 0, 0]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: [
          "1/12/2021",
          "2/12/2021",
          "3/12/2021",
          "4/12/2021",
          "5/12/2021",
          "6/12/2021",
          "7/12/2021",
          "8/12/2021",
          "9/12/2021",
          "10/12/2021",
          "11/12/2021",
          "12/12/2021",
          "13/12/2021",
          "14/12/2021",
          "15/12/2021",
          "16/12/2021",
          "17/12/2021",
          "18/12/2021",
          "19/12/2021",
          "20/12/2021"
        ],
      },
      title: {
        text: "Thống kê Người dùng mới",
        align: "left",
      },
    }
  };

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__left">
          <DashBoardTab />
        </div>

        <div className="dashboard__body">
          <div className="header">
            <div className="search-input">
              <input type="text" />
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
                    <span>35.000.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-chart">
            {" "}
            <Chart
              options={state2.options}
              series={state2.series}
              height="100%"
              type="donut"
            />
          </div>
          <div className="main-chart">
            {" "}
            <Chart
              options={state3.options}
              series={state3.series}
              height="100%"
              type="area"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
