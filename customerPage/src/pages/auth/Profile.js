import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import "./profile.css";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProfileTab } from "./ProfileTab";
import { AuthContext } from "../../contexts/AuthContext";
/**
 * @author
 * @function Profile
 **/

export const Profile = (props) => {
  const {
    authState: { user },
    changeInfo,
  } = useContext(AuthContext);
  const [changed, setChanged] = useState(false);

  const [profile, setProfile] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    hometown: "",
  });
  const setOnChangeForm = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

    console.log(changed, profile, user);
  };

  // change info
  const [changeStatus, setChangeStatus] = useState("update");
  const handleUpdateInfo = async () => {
    setChangeStatus("updating");
    const result = await changeInfo({
      fullname: profile.fullname,
      email: profile.email,
      phoneNumber: profile.phoneNumber,
    });
    console.log(result);
    setTimeout(() => {
      setChangeStatus("updated");
    }, 1000);
    setTimeout(() => {
      setChangeStatus("update");
    }, 3000);
  };

  // use effect + ui
  useEffect(() => {
    if (
      user?.email !== profile.email ||
      user?.fullname !== profile.fullname ||
      user?.phoneNumber !== profile.phoneNumber
    ) {
      setChanged(true);
    } else setChanged(false);
  }, [profile, user?.email, user?.fullname, user?.phoneNumber]);
  useEffect(() => {
    setProfile({
      fullname: user?.fullname,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      hometown: "",
    });
  }, [user?.email, user?.fullname, user?.phoneNumber]);
  // toast
  // toast
  const notifyx = () => {
    if (true) {
      toast.success("🎄 Đã tải bản sao kê về máy", {
        position: "top-right",
        autoClose: 5222,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        width: "500px",
      });
    } else {
      toast.error("Vui lòng chọn tháng và năm!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="profile-page">
        <div className="profile-tab">
          <ProfileTab tab="account" />
        </div>
        <div className="content">
          {" "}
          <h1 className="title">Cài đặt tài khoản</h1>
          <div className="account-info">
            <div className="session-input">
              <div className="title">Họ Tên</div>
              <input
                name="fullname"
                onChange={setOnChangeForm}
                type="text"
                defaultValue={user?.fullname}
              />
            </div>
            <div className="session-input">
              <div className="title">Email</div>
              <input
                name="email"
                onChange={setOnChangeForm}
                type="text"
                defaultValue={user ? user.email : ""}
              />
            </div>
            <div className="session-input">
              <div className="title">Số điện thoại</div>
              <input
                name="phoneNumber"
                onChange={setOnChangeForm}
                type="text"
                defaultValue={user?.phoneNumber}
              />
            </div>
            <div className="session-input">
              <div className="title">Nơi ở</div>
              <input type="text" defaultValue="Quảng Nam" />
            </div>
          </div>
          <div className="session-input area">
            <div className="title">Mô tả bản thân</div>
            <textarea type="text" placeholder="mô tả ..." defaultValue="" />
          </div>
          <div className="button-wrap">
            <button
              onClick={handleUpdateInfo}
              className={
                changeStatus === "updating" || changed
                  ? "btn btn-update active"
                  : "btn btn-update"
              }
            >
              <div
                className={
                  changeStatus === "updating"
                    ? "spin-loading"
                    : "spin-loading hide"
                }
              ></div>
              <i
                class={
                  changeStatus === "updated"
                    ? "fa-solid fa-check icon-complete"
                    : "fa-solid fa-check icon-complete hide"
                }
              ></i>
              <span
                className={
                  changeStatus !== "update" || changed ? "txt active" : "txt"
                }
              >
                {" "}
                {changeStatus === "update"
                  ? "Cập nhật"
                  : changeStatus === "updated"
                  ? "đã cập nhật"
                  : "đang cập nhật"}
              </span>
            </button>
            <button onClick={notifyx} className="btn btn-cancle">
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
