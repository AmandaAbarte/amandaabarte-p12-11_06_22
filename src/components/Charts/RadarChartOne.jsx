import React from "react";
import axios from "axios";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import propTypes from "prop-types";

export default function RadarChartOne(props) {
  
/**
 * Sort data correctly to generate data for radar chart
 * @param {array} arrayData data for chart
 * @param {array} arrayLegend legend for chart
 * @returns {array} data that corresponds to legend
 */
  function sortArray(arrayData, arrayLegend){
    let result = [];
    for(let i = 0; i<arrayData.length; i++){
        result.push({data: arrayData[i].value, type: arrayLegend[i+1]});
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

RadarChartOne.propTypes = {
  data: propTypes.shape({
    data: propTypes.arrayOf(propTypes.shape({
      value: propTypes.number,
      kind: propTypes.number
    })),
    kind: propTypes.objectOf(propTypes.string)
  })
}