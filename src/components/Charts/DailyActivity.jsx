import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select } from "d3";

export default function DailyActivity(props) {
    //api call to get daily user activity and set data in state
  const [userActivity, setUserActivity] = useState("");
  const getUserActivity = () => {
    axios
      .get(`http://localhost:3000/user/${props.userID}/activity`)

      .then((response) => {
        // console.log(response.data.data);
        setUserActivity(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserActivity();
  }, []);


  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
  }, []);
  return <svg ref={svgRef}></svg>;
}
