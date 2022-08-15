import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

export default function DailyActivity(props) {
  /**
   * Sort data corretly for daily activity graph
   * @param {array} arrayData daily activity data
   * @returns {array} with calories and kg corresponding to each day
   */
  function sortArray(arrayData) {
    let result = [];
    for (let i = 0; i < arrayData.length; i++) {
      result.push({
        calories: arrayData[i].calories,
        kilogram: arrayData[i].kilogram,
        day: i + 1,
      });
    }
    return result;
  }

  let data = sortArray(props.data);
  console.log(props.data);

  return (
    <div className="daily-chart-container">
      <div className="bar-graph-header">
        <h3 className="bar-graph-title">Daily Activity</h3>
        <div className="bar-graph-legend">
          <div className="bar-graph-type">
            <div className="circle circle-black"></div>
            <p className="typeText">Weight (kg)</p>
          </div>
          <div className="bar-graph-type">
            <div className="circle circle-red"></div>
            <p className="typeText">Burned Calories (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%" className="daily-chart">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 2" stroke="#DEDEDE" />
          <XAxis dataKey="day" stroke="#9B9EAC" />
          <YAxis stroke="#9B9EAC" />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


DailyActivity.PropTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string,
    kilogram: PropTypes.number,
    calories: PropTypes.number
  }))
}