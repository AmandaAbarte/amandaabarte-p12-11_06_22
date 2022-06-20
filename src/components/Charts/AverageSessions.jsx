import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select } from "d3";

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
}
