import React from "react";
import { zeroPad } from "react-countdown";

const CountDownComponent = ({ days, minutes, seconds, hours }) => {
  return (
    <div className="countdown">
      <div className="row">
        <div className="col">
          <div className="text-12 fw-600 px-sm-3">{zeroPad(days)}</div>
          <span className="fw-300 opacity-9">
            {days === 1 ? "Day" : "Days"}
          </span>
        </div>
        <div className="col">
          <div className="text-12 fw-600 px-sm-3">{zeroPad(hours)}</div>
          <span className="fw-300 opacity-9">Hrs</span>
        </div>
        <div className="col">
          <div className="text-12 fw-600 px-sm-3">{zeroPad(minutes)}</div>
          <span className="fw-300 opacity-9">Min</span>
        </div>
        <div className="col">
          <div className="text-12 fw-600 px-sm-3">{zeroPad(seconds)}</div>
          <span className="fw-300 opacity-9">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownComponent;
