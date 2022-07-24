import React from "react";
import DailyActivity from "./Charts/DailyActivity";
import AverageScore from "./Charts/AverageScore";
import AverageSessions from "./Charts/AverageSessions";
import RadarChartOne from "./Charts/RadarChartOne";

export default function Charts(props) {
  return (
    <div className="charts-container">
      <DailyActivity data={props.dailyActivity} />
      <div className="small-chart-container">
        <AverageSessions data={props.averageSessions} />
        <RadarChartOne data={props.performance} />
        <AverageScore todayScore={props.todayScore} />
      </div>
    </div>
  );
}
