import React, { useRef, useEffect } from "react";
import { select } from "d3";
import DailyActivity from "./Charts/DailyActivity";

export default function ChartOne() {
  
  return (
    <div className="charts-container">
        <DailyActivity />
      
    </div>
  );
}
