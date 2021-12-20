import React from "react";
import { Header } from "../../components/header/Header";
import Chart from "react-apexcharts";

import "./analysicitem.css";
import avatarImg from "../../assets/img/avatar.png";
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import { Link } from "react-router-dom";

// json
import { donateUser } from "../../assets/JsonData/donateUser";
/**
 * @author
 * @function AnaLysicItem
 **/

export const AnaLysicItem = (props) => {
  // chart

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
    <div className="analysic-item-page">
      <Header type="analysic" />

      <div className="body">
        <div className="left-pannel">
          <div className="left-pannel__container__wrapper">
            <div className="left-pannel__container">
              <Link className="xxx" to="/">
                <button className="return-home">
                  {" "}
                  <i class="fas fa-arrow-left"></i>Về trang chủ
                </button>
              </Link>
              <div className="post-left">
                <div className="image">
                  <img src={post1Img} alt="" />
                </div>
              </div>

              <div className="title">
                Chương trình tặng quà cho người lao động khu vực Sài Gòn và các
                tỉnh bị giãn cách
              </div>
              {/* <div className="option" >
                <a className="detail-btn" href="#">
                  Xem chi tiết
                </a>
                <a className="save-btn" href="#">
                  Lưu lại
                </a>
              </div> */}

              <div className="option-tab">
                <div className="tab-btn active">
                  <Link to="/analysic">Tổng quan</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/user">Danh sách ủng hộ</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/statement">Sao kê</Link>
                </div>
                <div className="tab-btn">
                  <Link to="/achievement">Thành quả</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-pannel">
          <h3>
            <div class="container">
              <div class="main">
                <div class="topbar">
                  <div class="toggle"></div>
                </div>

                <div class="cardBox">
                  <div class="card">
                    <div>
                      <div class="numbers">1,504</div>
                      <div class="cardName">Daily Views</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">80</div>
                      <div class="cardName">Sales</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="cart-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">284</div>
                      <div class="cardName">Comments</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                  </div>
                  <div class="card">
                    <div>
                      <div class="numbers">$7,842</div>
                      <div class="cardName">Earning</div>
                    </div>
                    <div class="iconBx">
                      <ion-icon name="cash-outline"></ion-icon>
                    </div>
                  </div>
                </div>
                <div class="details recentCustomers">
                  <div class="chart1">
                    <Chart
                      options={state.options}
                      series={state.series}
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};
