import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DailyActivity(props) {
  //api call to get daily user activity and set data in state
  const [userActivity, setUserActivity] = useState("");
  const allSessions = userActivity && userActivity.sessions;
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
  function sortArray(arrayData){
    let result = [];
    for(let i = 0; i<arrayData.length; i++){
        result.push({calories: arrayData[i].calories, kilogram: arrayData[i].kilogram, day: i});
    }
    return result;
}

let data = sortArray(allSessions);
  useEffect(() => {
    getUserActivity();
  }, []);
  
  return (
    <div className="daily-chart-container">
      <div className="barGraphHeader">
            <h3 className="barGraphTitle">Daily Activity</h3>
            <div className="barGraphLegend">
                <div className="barGraphType">
                    <div className="typeCircle typeCircle--black" />
                    <p className="typeText">Weight (kg)</p>
                </div>
                <div className="barGraphType">
                    <div className="typeCircle typeCircle--red" />
                    <p className="typeText">Burned Calories (kCal)</p>
                </div>
            </div>
        </div>
        <ResponsiveContainer width="100%" height="100%" className="daily-chart">
        <BarChart data={data} margin={{top: 50, left: -10}}>
          <CartesianGrid strokeDasharray="3 2" stroke="#DEDEDE"/>
          <XAxis dataKey="day" stroke="#9B9EAC" />
          <YAxis stroke="#9B9EAC" />
          {/* <Tooltip content={<CustomTooltip />} cursor={{ fill: '#C4C4C480', strokeWidth: 2 }} /> */}
          <Bar dataKey="kilogram" fill="#282D30" radius={[25,25,0,0]} barSize={7}  />
          <Bar dataKey="calories" fill="#E60000" radius={[25,25,0,0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
