import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AverageSessions(props) {
  const [userSessions, setUserSessions] = useState("");

  
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

  
  return (
    <div className="linechart-container">
      
    </div>
  );
}
