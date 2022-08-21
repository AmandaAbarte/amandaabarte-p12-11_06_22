import React from "react";
import DailyActivity from "./Charts/DailyActivity";
import AverageScore from "./Charts/AverageScore";
import AverageSessions from "./Charts/AverageSessions";
import RadarChartOne from "./Charts/RadarChartOne";
import propTypes from "prop-types";

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

Charts.propTypes = {
  dailyActivity: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  ),
  AverageSessions: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.number,
      sessionLength: propTypes.number,
    })
  ),
  performance: propTypes.shape({
    data: propTypes.arrayOf(
      propTypes.shape({
        value: propTypes.number,
        kind: propTypes.number,
      })
    ),
    kind: propTypes.objectOf(propTypes.string),
  }),
  todayScore: propTypes.number,
};
