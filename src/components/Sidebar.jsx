import React from "react";
import yoga from "../assets/yoga.png";
import swim from "../assets/swim.png";
import weight from "../assets/weight.png";
import bike from "../assets/bike.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="icon-container">
        <img src={yoga} className="icon"></img>
      </div>
      <div className="icon-container">
        <img src={swim} className="icon"></img>
      </div>
      <div className="icon-container">
        <img src={weight} className="icon"></img>
      </div>
      <div className="icon-container">
        <img src={bike} className="icon"></img>
      </div>
      <p>copyright</p>
    </div>
  );
}
