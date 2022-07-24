import React from "react";
import Charts from "./Charts";
import KeyData from "./KeyData";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import proteins from "../assets/proteins.png";
import lipids from "../assets/Lipids.png";
import carbs from "../assets/carbs.png";
import calories from "../assets/calories.png";
import { DataContext } from "../context/DataContext";

export default function Dashboard() {
  // gets id from url
  const { id } = useParams();
  const { data, fetchData } = useContext(DataContext);
  const [userInfo, setUserInfo] = useState("");

  //calls to api are made only once when page is loaded
  useEffect(() => {
    fetchData(id);
  }, []);

  // Check error value and set data if it's ok
  useEffect(() => {
    if (data.error >= 200 && data.error <= 299) {
      setUserInfo(data);
      console.log(data);
    } else if (data.error === 404) {
      // navigation("/404");
      console.log("404 not found");
    }
  }, [data]);

  return (
    <>
    {/* Renders only if info is set */}
      {userInfo && (
        <main>
          <div className="welcome">
            <h1>
              Hello{" "}
              <span className="name">
                {userInfo.globalInfo.data.userInfos.firstName}
              </span>
            </h1>
            <p>Congratulations on reaching yesterday's Goal!</p>
          </div>
          <div className="user-data">
            <Charts
              dailyActivity={userInfo.activity.data.sessions}
              averageSessions={userInfo.averageSessions.data.sessions}
              performance={userInfo.performance.data}
              todayScore={userInfo.globalInfo.data.todayScore}
            />
            <div className="key-data-container">
              <KeyData
                data={userInfo.globalInfo.data.keyData.calorieCount}
                img={calories}
                unit="kCal"
                lable="Calories"
              />
              <KeyData
                data={userInfo.globalInfo.data.keyData.carbohydrateCount}
                img={carbs}
                unit="g"
                lable="Carbs"
              />
              <KeyData
                data={userInfo.globalInfo.data.keyData.lipidCount}
                img={lipids}
                unit="g"
                lable="Lipids"
              />
              <KeyData
                data={userInfo.globalInfo.data.keyData.proteinCount}
                img={proteins}
                unit="g"
                lable="Proteins"
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
