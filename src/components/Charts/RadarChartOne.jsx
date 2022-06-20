import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartOne(props) {
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
  console.log(userPerformance);
  useEffect(() => {
    getUserPerformance();
  }, []);
  const performance = userPerformance && userPerformance.data
  // const [data, setData] = useState()
  // const allPerformanceData = userPerformance && userPerformance.data.map((item)=>{
  //   return item.data.map((data)=>{
  //     return data.value
  //   })
  // })
  // const performanceData = allPerformanceData && allPerformanceData.map((data)=>{
  //   return data.value
  // })
  // console.log(performanceData);
  return (
    // <ResponsiveContainer width="250px" height="250px">
    // <div className="radar-chart-container">
      <RadarChart cx={50} cy={50} outerRadius={90} width={250} height={250} data={performance}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    // </div>
    // </ResponsiveContainer>
  );
}
