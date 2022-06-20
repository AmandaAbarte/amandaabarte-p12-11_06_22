import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select, line, curveCardinal} from "d3";

export default function AverageSessions(props) {
  const [userSessions, setUserSessions] = useState("");

  const allSessions = userSessions && userSessions.sessions;
//returns session lengths into an array
  const sessionData =
    allSessions &&
    allSessions.map((item) => {
      return item.sessionLength
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

      //generates "d" attribute of a path element
      const myLine =line()
      .x((value,index)=> index *50)
      .y(value => 150 - value)
      .curve(curveCardinal)
        //renders path element and attaches "d" attribute from the line generator
      svg
      .selectAll("path")
      .data([sessionData])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "white")
    }, [sessionData]);
  return (
    <div className="linechart-container">
      <svg ref={svgRef} className="linechart"></svg>
    </div>
  );
}
