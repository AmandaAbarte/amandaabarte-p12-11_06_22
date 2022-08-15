import React from "react";
import propTypes from "prop-types";

export default function KeyData(props) {
  return (
    <div className="key-data-card">
      <div
        className="icon-container"
        style={
          props.lable === "Proteins"
            ? { backgroundColor: "#E9F4FB" }
            : props.lable === "Calories"
            ? { backgroundColor: "#FBEAEA" }
            : props.lable === "Carbs"
            ? { backgroundColor: "#FBF6E5" }
            : { backgroundColor: "#fbeaef" }
        }
      >
        <img src={props.img}></img>
      </div>
      <div className="info-container">
        <p>
          {props.data}
          {props.unit}
        </p>
        <p>{props.lable}</p>
      </div>
    </div>
  );
}

KeyData.propTypes = {
  data: propTypes.number,
  unit: propTypes.string,
  lable: propTypes.string
};
