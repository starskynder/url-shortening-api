import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__title">
        <h2 className="heading__secondary">Advanced Statistics</h2>
        <p className="statistics__text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics__boxes">
        <div className="statistics__box one">
          <div className="statistics__imgwrap">
            <div className="statistics__img">
              <img src={brand} alt="" />
            </div>
          </div>

          <h3 className="heading__tertiary statistics__boxtitle">
            Brand Recognition
          </h3>

          <div className="statistics__box-text ">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </div>
        </div>
        <div className="statistics__box two">
          <div className="statistics__imgwrap">
            <div className="statistics__img">
              <img src={records} alt="" />
            </div>
          </div>

          <h3 className="heading__tertiary statistics__boxtitle">
            Detailed Records
          </h3>

          <div className="statistics__box-text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="statistics__box three">
          <div className="statistics__imgwrap">
            <div className="statistics__img">
              <img src={customizable} alt="" />
            </div>
          </div>

          <h3 className="heading__tertiary statistics__boxtitle">
            Fully Customizable
          </h3>

          <div className="statistics__box-text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
