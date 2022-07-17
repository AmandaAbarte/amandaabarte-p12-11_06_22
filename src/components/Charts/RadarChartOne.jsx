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
  const [userPerformance, setUserPerformance] = useState({
    labels: [],
    data: [],
  });
  const getUserPerformance = () => {
    axios
      .get(`http://localhost:3000/user/${props.userID}/performance`)

      .then((response) => {
        const data = response.data.data.data.map((data) => {
          return data.value;
        });
        // const data = Object.keys(response.data.data.kind).map(key => {
        //   return key
        // })
        const label = Object.values(response.data.data.kind)
        console.log(label);
        setUserPerformance(
          //
          // [response.data.data.data, [response.data.data.kind]]
          { labels: label, data: data }
        );
        console.log("data", userPerformance.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(userPerformance);
  useEffect(() => {
    getUserPerformance();
  }, []);
  const performance = userPerformance && userPerformance.data;
  return (
    // <ResponsiveContainer width="250px" height="250px">
    <div className="radar-chart-container">
      <RadarChart
        cx={50}
        cy={50}
        outerRadius={90}
        width={250}
        height={250}
        data={userPerformance}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="labels" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="data"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
    // </ResponsiveContainer>
  );
}
