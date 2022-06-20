import React from "react";

export default function KeyData(props) {
  return (
    <div className="key-data-card">
      <div className="icon-container">
        <img src={props.img}></img>
      </div>
      <div className="info-container">
        <p>{props.data}{props.unit}</p>
        <p>{props.lable}</p>
      </div>
    </div>
  );
}
