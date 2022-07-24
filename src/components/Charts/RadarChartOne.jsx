import React from "react";
import axios from "axios";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartOne(props) {
  

  function sortArray(arrayData, arrayLegend){
    let result = [];
    for(let i = 0; i<arrayData.length; i++){
        result.push({data: arrayData[i], type: arrayLegend[i]});
    }
    return result;
}

let data = sortArray(props.data.data, props.data.kind);
  return (
    <div className="radar-chart-container">
      <ResponsiveContainer width="100%" height="100%" className="radar-chart">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="type" stroke="white" tickLine={false} />
          <Radar
            name="userPerformance"
            dataKey="data"
            stroke="red"
            fill="red"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
