import React, { useRef, useEffect } from "react";
import { select } from "d3";
import DailyActivity from "./Charts/DailyActivity";
import AverageScore from "./Charts/AverageScore";
import AverageSessions from "./Charts/AverageSessions";
import RadarChartOne from "./Charts/RadarChartOne";

export default function Charts(props) {
  return (
    <div className="charts-container">
      <DailyActivity userID={props.userID} />
      <div className="small-chart-container">
        <AverageSessions userID={props.userID} />
        <RadarChartOne userID={props.userID} />
        <AverageScore userID={props.userID} todayScore={props.todayScore} />
      </div>
    </div>
  );
}
