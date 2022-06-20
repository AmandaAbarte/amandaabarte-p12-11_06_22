import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select, line, curveCardinal, axisBottom, scaleLinear, scaleBand } from "d3";

export default function AverageSessions(props) {
  const [userSessions, setUserSessions] = useState("");
  const days = ["M","T","W","Th","F","S","Sn"]

  const allSessions = userSessions && userSessions.sessions;
  //returns session lengths into an array
  const sessionData =
    allSessions &&
    allSessions.map((item) => {
      return item.sessionLength;
    });

  const getUserSessions = () => {
    axios
      .get(`http://localhost:3000/user/${props.userID}/average-sessions`)

      .then((response) => {
        // console.log(response.data.data);
        setUserSessions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserSessions();
  }, []);

  const svgRef = useRef();
  //called on loading and when data changes
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain([1,2,3,4,5,6,7])
      .range([0, 250]);
    const yScale = scaleLinear().domain([0, 70]).range([150, 0]);
    const xAxis = axisBottom(xScale).ticks(sessionData.length).tickFormat(index => index +1);
    svg.select(".xaxis").style("transform", "translateY(200px)").call(xAxis);
    //generates "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(curveCardinal);
    //renders path element and attaches "d" attribute from the line generator
    svg
      .selectAll(".line")
      .data([sessionData])
      .join("path")
      .attr("class","line")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "white");
  }, [sessionData]);
  return (
    <div className="linechart-container">
      <svg ref={svgRef} className="linechart">
        <g className="xaxis"/>
      </svg>
    </div>
  );
}
