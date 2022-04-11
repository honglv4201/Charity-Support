import React from "react";
import { Link } from "react-router-dom";
import { EnumData } from "../../assets/JsonData/enumData";

const ItemHomePageNode = ({ ...props }) => {
  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  const transferToVnd = (money) => {
    // const formated = count.toLocaleString("vi", {
    //   style: "currency",
    //   currency: "VND",
    // });

    let temptMoney = money;
    let unitMoney = "nghìn đồng";
    let timeCount = 0;
    while (temptMoney > 1000) {
      temptMoney = temptMoney / 1000;
      timeCount += 1;
    }
    switch (timeCount) {
      case 1: {
        unitMoney = "nghìn đồng";
        break;
      }
      case 2: {
        unitMoney = "triệu đồng";
        break;
      }
      case 3: {
        unitMoney = "tỷ đồng";
      }
      default: {
        unitMoney = "lỗi";
        break;
      }
    }

    return `${temptMoney} ${unitMoney}`;
  };

  return (
    <div className="donate-item">
      <Link to="/post" onClick={handleToTop}>
        <div className="image">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <div className="donate-item__body">
        <div className="pop-info time-remaining">
          {"còn " + props.timeRemain + " ngày"}
        </div>
        <div className="pop-info project">{props.typecharity.name}</div>
        <div className="pop-info owner">{props.organization.name}</div>
        <div className="title">{props.title}</div>
        <div className="desc" style={{ display: "none" }}>
          {props.desc}
        </div>
        <div className="below-desc">
          <div className="status-bar item2">
            <span></span>
          </div>
          {/* <div className="status">{props.time}</div> */}
        </div>
        <div className="donate-info">
          <div className="target">
            <div className="target__txt">Mục tiêu</div>
            <div className="target__detail">
              <span> {transferToVnd(props.donated)} </span>/{" "}
              {transferToVnd(props.target)}
            </div>
          </div>

          <Link to="/post" onClick={handleToTop}>
            <div className="btn-donate">
              <button className="zoom-anim">Ủng hộ</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemHomePageNode;
