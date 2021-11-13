import React from "react";
import { Header } from "../../components/header/Header";
import "./homepage.css";
import homeImg from "../../assets/img/home1.png";
import donateImg from "../../assets/img/donate.png";
import collectImg from "../../assets/img/collect.png";

// img
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import post2Img from "../../assets/img/homePagePost/post2.jpg";
import post3Img from "../../assets/img/homePagePost/post3.jpg";
/**
 * @author
 * @function HomePage
 **/

export const HomePage = (props) => {
  return (
    <div>
      <Header />

      {/* Start : HomePage Top */}
      <div className="home__top">
        <div className="row">
          <div className="col-6">
            <div className="home__top-leftpannel">
              <div className="left-panel__above">
                <h1 className="home__top-maintitle">Cho đi là còn mãi</h1>
                <p className="desc">
                  Chúng tôi sẽ "trao tận tay" tấm lòng nhân ái của bạn
                </p>
                <a href="#" className="btn-donate zoom-anim">
                  Ủng hộ ngay
                  <i class="fas fa-caret-right"></i>
                </a>
              </div>
              <div className="left-pannel__bottom">
                <div className="each-item">
                  <div className="image-icon">
                    <img src={donateImg} alt="" />
                  </div>
                  <div className="info">
                    <div className="quantity">380</div>
                    <div className="desc">Chương trình hoàn thành</div>
                  </div>
                </div>

                <div className="each-item">
                  <div className="image-icon">
                    <img src={collectImg} alt="" />
                  </div>
                  <div className="info">
                    <div className="quantity">380</div>
                    <div className="desc">Tổng số tiền</div>
                  </div>
                </div>

                <div className="separate-item"></div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="home__top-rightpannel">
              <div className="image">
                <img src={homeImg} alt="" />
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="card__title">Số người ủng hộ</div>
                  <div className="card__quantity">4.323</div>
                  <div className="card__user">
                    <div className="user-item quantity">
                      <div className="quantity">4.5k</div>
                    </div>
                    <div className="user-item">
                      <img src={homeImg} alt="" />
                    </div>
                    <div className="user-item">
                      <img src={homeImg} alt="" />
                    </div>
                    <div className="user-item">
                      <img src={homeImg} alt="" />
                    </div>
                    <div className="user-item">
                      <img src={homeImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End : HomePage Top */}

      {/* Page 1 - new important feed */}
      <div className="homepage session1">
        <div className="new-update">
          <h2>Cập nhật mới nhất</h2>
          <div className="desc">
            Đây là bài viết mới nhất được cập nhật từ tổ chức quản lý của chúng
            tôi
          </div>

          <div className="post">
            <div className="post-left">
              <div className="image">
                <img src={post1Img} alt="" />
              </div>
            </div>
            <div className="post-right">
              <h3>
                Chương trình quà cho người lao động khu vực Sài Gòn và các tỉnh
                bị giãn cách
              </h3>
              <p className="desc">
                Trước tình hình dịch bệnh vẫn diễn biến phức tạp, đời sống bà
                con sẽ còn khó khăn trong thời gian dài. Chúng tôi tiếp tục mở
                thành Chương trình 20,000 phần quà để hỗ trợ cho cả Hồ Chí Minh
                và các tỉnh đang chịu ảnh hưởng bởi Covid-19 mà chúng tôi có thể
                tiếp cận được.
                <br />
                Hi vọng sẽ nhận được tình yêu thương từ quý vị
              </p>
              <button className="btn btn-donate zoom-anim">Ủng hộ</button>
              <button className="btn btn-detail zoom-anim">Chi tiết</button>
            </div>
          </div>
        </div>
      </div>
      {/* End: Homepage page 1 */}

      {/* page2 */}
      <div className="homepage session2">
        <div className="session2-header">
          <div className="title">
            <span>Các dự án </span>
            <span>Nổi bật</span>
          </div>
          <div className="nav-item">
            <div className="nav-btn prev">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div className="nav-btn next">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>

        <div className="list-donate-items">
          <div className="donate-item">
            <div className="image">
              <img src={post2Img} alt="" />
            </div>
            <div className="title">
              Góp máy thở cho bệnh viện chống dịch tại thành phố
            </div>
            <div className="desc">
              Hỗ trợ bệnh nhân tại các bệnh viện tại thành phố Hồ Chí Minh
            </div>
            <div className="below-desc">
              <div className="status-bar item1">
                <span></span>
              </div>
              <div className="status danger">Còn 3 ngày</div>
            </div>
            <div className="donate-info">
              <div className="target">
                <div className="target__txt">Mục tiêu</div>
                <div className="target__detail">
                  <span> 7.5 Triệu Đồng </span>/ 10 Triệu Đồng
                </div>
              </div>

              <div className="btn-donate">
                <button className="zoom-anim">Ủng hộ</button>
              </div>
            </div>
          </div>

          <div className="donate-item">
            <div className="image">
              <img src={post3Img} alt="" />
            </div>
            <div className="title">
              Tặng xe cho anh chàng khuyết tật nhà nghèo
            </div>
            <div className="desc">
              Hỗ trợ bệnh nhân tại các bệnh viện tại thành phố Hồ Chí Minh
            </div>
            <div className="below-desc">
              <div className="status-bar item2">
                <span></span>
              </div>
              <div className="status">Còn 11 ngày</div>
            </div>
            <div className="donate-info">
              <div className="target">
                <div className="target__txt">Mục tiêu</div>
                <div className="target__detail">
                  <span> 11.5 Triệu Đồng </span>/ 22 Triệu Đồng
                </div>
              </div>

              <div className="btn-donate">
                <button className="zoom-anim">Ủng hộ</button>
              </div>
            </div>
          </div>

          <div className="donate-item">
            <div className="image">
              <img src={post2Img} alt="" />
            </div>
            <div className="title">
              Góp máy thở cho bệnh viện chống dịch tại thành phố
            </div>
            <div className="desc">
              Hỗ trợ bệnh nhân tại các bệnh viện tại thành phố Hồ Chí Minh
            </div>
            <div className="below-desc">
              <div className="status-bar item1">
                <span></span>
              </div>
              <div className="status danger">Còn 3 ngày</div>
            </div>
            <div className="donate-info">
              <div className="target">
                <div className="target__txt">Mục tiêu</div>
                <div className="target__detail">
                  <span> 7.5 Triệu Đồng </span>/ 10 Triệu Đồng
                </div>
              </div>

              <div className="btn-donate">
                <button className="zoom-anim">Ủng hộ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
