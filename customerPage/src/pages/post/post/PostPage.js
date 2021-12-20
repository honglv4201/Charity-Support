import React from "react";
import { Header } from "../../../components/header/Header";

//  sliderr
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";

import SimpleImageSlider from "react-simple-image-slider";

// css
import "./postpage.css";
import postImg from "../../../assets/img/post/post1.jpg";
import { RecentDonates } from "../../../assets/JsonData/RecentDonates";
import { Link } from "react-router-dom";

/**
 * @author
 * @function PostPage
 **/

export const PostPage = (props) => {
  const images = [
    {
      url: "https://bloganchoi.com/wp-content/uploads/2021/09/con-p3-scaled.jpeg",
    },

    {
      url: "https://file3.qdnd.vn/data/images/0/2021/08/24/phucthang/anh-bai-tren-phai.jpg?dpi=150&quality=100&w=870",
    },
    {
      url: "https://cdnimg.vietnamplus.vn/t620/uploaded/fsmsy/2021_06_19/phun_khu_khuan.jpg",
    },
    {
      url: "https://cdnimg.vietnamplus.vn/uploaded/bokttj/2021_07_16/ttxvn_tphcm_khu_cach_ly_phong_toa.jpg",
    },
    {
      url: "https://lh3.googleusercontent.com/proxy/n8ZD37gicPaQ1RVewd5XKCblNARp7kbDViIhIjziv_yLka-Nwr1lDGnUqhHEXPMlR_VsFnp-b6oqzTZYJLTEw5HSJnEAh-uya4BYh7WsjKChyL_8Wj2izlMk7CRJ_HLAsI2DEeZmYMKlZNYIPo3H2ZgM",
    },
    {
      url: "https://baokhanhhoa.vn/dataimages/202108/original/images5464774_rau1.jpg",
    },
    {
      url: "https://images.hcmcpv.org.vn/res/news/2020/11/29-11-2020-trao-1600-phan-qua-ho-tro-nguoi-dan-bi-anh-huong-dich-benh-covid19-959872D0.jpg",
    },
    {
      url: "https://images.hcmcpv.org.vn/res/news/2020/11/29-11-2020-trao-1600-phan-qua-ho-tro-nguoi-dan-bi-anh-huong-dich-benh-covid19-959872D0.jpg",
    },
    {
      url: "https://img.nhandan.com.vn/Files/Images/2020/09/10/tr8-1599678065249.jpg",
    },
  ];
  return (
    <div>
      <Header />
      <div className="post-page">
        <div className="post-page__header">
          <div className="header__title">
            <h3>
              Chương trình quà cho người lao động khu vực Sài Gòn và các tỉnh bị
              giãn cách
            </h3>

            <div className="header-info">
              <div className="txt txt-author">
                <i class="fas fa-check-circle"></i> Hội Chữ Thập Đỏ HCM
              </div>
              <div className="txt txt-date">Ngày 10 tháng 05 năm 2021</div>
              <div className="txt txt-type">Chương trình Covid</div>
            </div>
          </div>
          <div className="slider">
            <SimpleImageSlider
              width={1000}
              height={404}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div>
        </div>
        <div className="post-page__above">
          <h3>Tổng quan</h3>
          <div className="items">
            <div className="item">
              <span>35</span>
              <p>Lượt Ủng Hộ</p>
            </div>
            <div className="item">
              <span>32.500.000 VNĐ</span>
              <p>Tổng tiền</p>
            </div>
            <div className="item">
              <span>35</span>
              <p>Lượt Ủng Hộ</p>
            </div>
          </div>

          <div className="funtion">
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="report"
              to="/analysic"
            >
              <i class="bx bxs-report"></i> Xem báo cáo
            </Link>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="donate"
              to="/donate"
            >
              Ủng hộ
            </Link>
          </div>
        </div>

        <div className="post-page__body">
          <div className="left">
            <h1 className="txt-title">Thông tin về chiến dịch</h1>
            <h3>
              (Mặt trận) - Những ngày này, không ít các cá nhân, doanh nghiệp,
              nhóm từ thiện tại TP Hồ Chí Minh đã cùng chung tay lo những bữa
              cơm, bó rau, con cá, cân thịt… cho người có hoàn cảnh khó khăn,
              người sống trong vùng cách ly, phong tỏa và các lực lượng tuyến
              đầu chống dịch.
            </h3>
            <div className="image">
              <img
                src="http://static.mattran.org.vn/zoom/648/uploaded/dieptmh/2021_08_19/newfolder/phanqua5_wfte.jpg"
                alt=""
              />
            </div>
            <h6>
              Người dân ở hẻm 34 Đường 168, phường Phước Long A, thành phố Thủ
              Đức bị phong tỏa nhận các quà nhu yếu phẩm do Chính quyền và các
              nhà hảo tâm chung tay chăm lo.
            </h6>
            <div className="image">
              <img
                src="http://static.mattran.org.vn/zoom/648/uploaded/dieptmh/2021_08_19/newfolder/phanqua9_uyxa.jpg"
                alt=""
              />
            </div>
            <h6>
              Người dân ở hẻm 34 Đường 168, phường Phước Long A, thành phố Thủ
              Đức bị phong tỏa nhận các quà nhu yếu phẩm do Chính quyền và các
              nhà hảo tâm chung tay chăm lo.
            </h6>
            <p>
              Họ chăm lo cho người dân khó khăn đơn giản chỉ vì muốn đóng góp
              một chút công sức của mình để cùng TP Hồ Chí Minnh chống dịch,
              mong cuộc sống sớm trở lại bình thường. <br />
              Ngay khi có ca nghi mắc COVID-19, con hẻm 34 Đường 168, phước Long
              A, thành phố Thủ Đức, với gần 30 hộ dân, đã áp dụng các biện pháp
              phong tỏa, cách ly y tế để phòng dịch. <br /> Do bị phong tỏa bất
              ngờ, nên hầu hết đều không có lương thực dự trữ. Với phương châm
              "không để người dân thiếu ăn khi bị phong tỏa", cán bộ Mặt trận Tổ
              quốc và Hội Phụ nữ phường đã cùng với nhóm từ thiện Bếp Cô Minh…
              ngay lập tức tìm cách hỗ trợ người dân, bằng những bao gạo, vỉ
              trứng, bó rau… <br /> Ông Nguyễn Hữu Tâm, nhà ở hẻm 34 Đường 168
              cho biết, mặc dù sống trong khu bị phong tỏa nhưng gia đình ông
              không lo thiếu rau xanh, trứng, gạo… Cứ 1-2 ngày, các nhà trong
              hẻm lại được phát rau xanh, trứng, gạo… giúp bà con an tâm ở nhà
              chống dịch. <br /> “Nhờ sự quan tâm của các nhà tài trợ và chính
              quyền địa phương mà hơn 30 hộ dân trong con hẻm 34 này không ai
              phải lo bị đói trong suốt thời gian bị phong tỏa”, ông Nguyễn Hữu
              Tâm nói.
            </p>

            <div className="image">
              <img
                src="http://static.mattran.org.vn/zoom/648/uploaded/dieptmh/2021_08_19/newfolder/nhanqua14_xpzu.jpg"
                alt=""
              />
            </div>
            <h6>
              Các chị em Hội phụ nữ tại phường Phước Long A, thành phố Thủ Đức
              chuẩn bị các phần quà "tiếp tế" cho người dân sống trong các khu
              vực bị phong tỏa, cách ly y tế.{" "}
            </h6>
            <div className="image">
              <img
                src="http://static.mattran.org.vn/zoom/648/uploaded/dieptmh/2021_08_19/newfolder/nhanqua18_mzis.jpg"
                alt=""
              />
            </div>
            <h6>
              Hàng chục tấn rau xanh được các doanh nghiệp, đơn vị, nhóm từ
              thiện... vận chuyển đến gửi tặng người dân khó khăn tại TP Hồ Chí
              Minh.{" "}
            </h6>

            <div className="image">
              <img
                src="http://static.mattran.org.vn/zoom/648/uploaded/dieptmh/2021_08_19/newfolder/phanqua12_hrxa.jpg"
                alt=""
              />
            </div>
            <h6>
              Mỗi ngày, tại TP Hồ Chí Minh có nhiều nhóm từ thiện chung tay cùng
              chính quyền chăm lo cho người dân có hoàn cảnh khó khăn trong mùa
              dịch.{" "}
            </h6>
          </div>

          <div className="right">
            <div className="recent-donates">
              <div className="txt-recent-donates">
                <div className="txt">Đóng góp gần đây</div>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/user"
                >
                  Xem tất cả
                </Link>
              </div>
              {RecentDonates.map((value, ind) => (
                <div className="item" key={ind}>
                  <div className="avatar">
                    <img src={value.avatar} alt="" />
                  </div>
                  <div className="info">
                    <div className="name">{value.name}</div>
                    <div className="time">{value.time}</div>
                  </div>
                  <div className="money">{value.money}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
