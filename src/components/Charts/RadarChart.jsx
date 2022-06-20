import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select } from "d3";

export default function RadarChart(props) {
    
  const [userPerformance, setUserPerformance] = useState("");
  const getUserPerformance = () => {
    axios
      .get(`http://localhost:3000/user/${props.userID}/performance`)

      .then((response) => {
        // console.log(response.data.data);
        setUserPerformance(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
    getUserPerformance();
  },[])
}