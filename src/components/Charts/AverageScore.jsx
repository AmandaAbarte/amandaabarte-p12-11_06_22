import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function AverageScore(props) {
  //todays score data 
  const data = [
    {
      value: props.todayScore,
      fill: "#FF0000",
    },
  ];
  return (
    <div className="progress-chart-container">
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="progress-chart"
      >
        <RadialBarChart
          innerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={5}
            fill={data.fill}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="progress-title"> Score</p>
      <p className="progress-lable">
        {props.todayScore * 100} % <br /> of your Goal
      </p>
    </div>
  );
}
