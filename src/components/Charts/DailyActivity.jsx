import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select, axisBottom, scaleLinear, index, scaleBand } from "d3";

export default function DailyActivity(props) {
  //api call to get daily user activity and set data in state
  const [userActivity, setUserActivity] = useState("");
  const allSessions = userActivity && userActivity.sessions;
  //returns session data into sepparate arrays
  const calorieData =
    allSessions &&
    allSessions.map((item) => {
      return item.calories;
    });
  const kgData =
    allSessions &&
    allSessions.map((item) => {
      return item.kilogram;
    });
  const getUserActivity = () => {
    axios
      .get(`http://localhost:3000/user/${props.userID}/activity`)

      .then((response) => {
        // console.log(response.data.data);
        setUserActivity(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserActivity();
  }, []);
  const svgDaily = useRef();
  //called on loading and when data changes
  useEffect(() => {
    const svg = select(svgDaily.current);
    const xScale = scaleBand().domain([0, 1, 2, 3, 4, 5, 6]).range([0, 750]).padding(0.8);
    const yScale = scaleLinear().domain([65, 85]).range([150, 0]);
    const xAxis = axisBottom(xScale)
      .ticks(kgData.length)
      .tickFormat((index) => index + 1);
    svg.select(".xaxis").style("transform", "translateY(200px)").call(xAxis);

    svg
      .selectAll("bar")
      .data(kgData)
      .join("rect")
      .attr("class", "bar, kg-bar")
      .style("transform","scale(1,-1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y",-200)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("height", value => 200 - yScale(value))
  }, [kgData]);

  return (
    <div className="daily-chart-container">
      <svg ref={svgDaily} className="daily-chart">
        <g className="xaxis" />
      </svg>
    </div>
  );
}
