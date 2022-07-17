import React, { useRef, useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis
} from "recharts";

export default function AverageScore(props) {
  // const [todayData, setTodayData] = useState(props.todayScore);
  console.log(props.todayScore *100);
  const data = [
    {
      value: props.todayScore ,
      fill: "#FF0000",
    },
  ];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="progress-chart-container">
      <p> Score</p>
      <ResponsiveContainer width="100%" height="100%" className='progress-chart'>
            <RadialBarChart innerRadius="80%" barSize={10} data={data} startAngle={90} endAngle={450} >
                <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                <RadialBar background dataKey="value" cornerRadius={5} fill={data.fill} />
            </RadialBarChart>
        </ResponsiveContainer>
        <p className="progress-lable">{props.todayScore * 100} % <br/> of your Goal</p>
    </div>
  );
}
