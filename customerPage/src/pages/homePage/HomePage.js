import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import "./homepage.css";
import homeImg from "../../assets/img/home1.png";
import donateImg from "../../assets/img/donate.png";
import collectImg from "../../assets/img/collect.png";

// img
import post1Img from "../../assets/img/homePagePost/post1.jpg";
import post2Img from "../../assets/img/homePagePost/post2.jpg";
import post3Img from "../../assets/img/homePagePost/post3.jpg";
import { ItemHomePage } from "../../components/donateItemHomePage/ItemHomePage";

// json
import { featuredPost } from "../../assets/JsonData/featuredPost";
/**
 * @author
 * @function HomePage
 **/

export const HomePage = (props) => {
  const handleDonateBtn = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Header link="home" />

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
              <Link
                to="/donate"
                onClick={handleDonateBtn}
                className="btn btn-donate zoom-anim"
              >
                Ủng hộ
              </Link>
              <Link to="/detail" className="btn btn-detail zoom-anim">
                Chi tiết
              </Link>
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
          {featuredPost.map((item, ind) => (
            <ItemHomePage {...item} />
          ))}
        </div>
      </div>
      {/* end : page 2 */}

      {/* page 3 */}
      <div className="homepage session2">
        <div className="session2-header">
          <div className="title">
            <span>Các dự án </span>
            <span> Ủng hộ chống dịch Covid-19</span>
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
          {featuredPost.map((item, ind) => (
            <ItemHomePage {...item} />
          ))}
        </div>
      </div>
      {/* end : page 3 */}
    </div>
  );
};
