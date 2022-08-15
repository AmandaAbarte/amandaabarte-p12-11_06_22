import React from "react";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import propTypes from "prop-types";

export default function AverageSessions(props) {
  /**
   * Get data for Average Session Chart
   * @param {array} arrayData Session data
   * @returns {array} Data corresponding to each day
   */
  function sortArray(arrayData) {
    let result = [];
    const day = ["L", "M", "M", "J", "V", "S", "D"];
    for (let i = 0; i < arrayData.length; i++) {
      result.push({ day: day[i], sessionLength: arrayData[i].sessionLength });
    }
    return result;
  }

  let data = sortArray(props.data);
  return (
    <div className="linechart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} style={{ backgroundColor: "red" }}>
          <XAxis
            dataKey="day"
            stroke="white"
            axisLine={false}
            tickLine={false}
          />
          <Line
            type="monotone"
            dot={false}
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessions.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    day: propTypes.number,
    sessionLength: propTypes.number
  }))
}
