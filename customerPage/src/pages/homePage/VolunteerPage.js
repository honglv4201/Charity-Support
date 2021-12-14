import React from "react";
import { Header } from "../../components/header/Header";
import "./volunteerpage.css";

import video from "../../assets/img/video/video.mp4";
import maskImg from "../../assets/img/video/mask.jpg";
/**
 * @author
 * @function Volunteer
 **/

export const Volunteer = (props) => {
  return (
    <div className="volunteer_page__wrapper">
      <Header link="volunteer" />
      <div className="voluteer_page">
        <div class="video__wrapper">
          <video src={video} autoPlay muted loop type="mp4"></video>
          <img src={maskImg} class="mask" />
          <h2>Cứu trợ Covid 19</h2>
        </div>
      </div>
    </div>
  );
};
