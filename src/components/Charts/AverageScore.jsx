import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { select } from "d3";

export default function AverageScore(props) {
  return (
    <div>
        todays score is {props.todayScore}
    </div>
  )
}
