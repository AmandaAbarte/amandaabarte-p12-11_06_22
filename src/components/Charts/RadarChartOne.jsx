import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartOne(props) {
  const [userPerformance, setUserPerformance] = useState({
    labels: [],
    data: [],
  });
  //axios call to api to get data
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
        const label = Object.values(response.data.data.kind);
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

  function sortArray(arrayData, arrayLegend){
    let result = [];
    for(let i = 0; i<arrayData.length; i++){
        result.push({data: arrayData[i], type: arrayLegend[i]});
    }
    return result;
}

let data = sortArray(userPerformance.data, userPerformance.labels);
  return (
    // <ResponsiveContainer width="250px" height="250px">
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" stroke="white" tickLine={false} />
          <Radar
            name="userPerformance"
            dataKey="data"
            stroke={"red"}
            fill={"green"}
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    // </ResponsiveContainer>
  );
}
