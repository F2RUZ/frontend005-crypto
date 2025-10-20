import React from "react";
import "./intro.scss";
import introImg from "../../../img/introImg.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <h2 className="intro__title">
            The crypto portfolio app that makes you smile. Every day.
          </h2>
          <p className="intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor.
          </p>

          <div className="intro__btns">
            <button className="intro__btn">Google Play</button>
            <button className="intro__btn">App Store</button>
          </div>
        </div>
        <div className="intro__right">
          <img className="intro__images" src={introImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
