import React from "react";
import Charts from "./Charts";
import KeyData from "./KeyData";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";  

import proteins from "../assets/proteins.png";
import lipids from "../assets/Lipids.png";
import carbs from "../assets/carbs.png";
import calories from "../assets/calories.png";

export default function Dashboard() {
    //MOVE API CALL TO SEPARATE FILE//
  const [userData, setUserData] = useState("");
  const [userPerformance, setUserPerformance] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userSessions, setUserSessions] = useState("");
  const { userID } = useParams();

 
  //makes two calls and sets user data and user performance state
  const getUserData = () => {
    axios
      .get(`http://localhost:3000/user/${userID}`)

      .then((response) => {
        // console.log(response.data.data);
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserPerformance = () => {
    axios
      .get(`http://localhost:3000/user/${userID}/performance`)

      .then((response) => {
        // console.log(response.data.data);
        setUserPerformance(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserActivity = () => {
    axios
      .get(`http://localhost:3000/user/${userID}/activity`)

      .then((response) => {
        // console.log(response.data.data);
        setUserActivity(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserSessions = () => {
    axios
      .get(`http://localhost:3000/user/${userID}/activity`)

      .then((response) => {
        // console.log(response.data.data);
        setUserSessions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
//calls to api are made only once when page is loaded
  useEffect(() => {
    getUserData();
    getUserPerformance();
    getUserActivity();
    getUserSessions();
  }, []);

  //extract more concise data from api data
  const {firstName, lastName} = userData && userData.userInfos
  const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = userData && userData.keyData
  const {sessions} = userSessions && userSessions

//   let dataCount = userData && Array.from(userData.keyData)
  const dataCount = userData && userData.keyData
// console.log(dataCount);
  return (
    <main>
      <div className="welcome">
        <h1>Hello {firstName}</h1>
        <p>congrats message</p>
      </div>
      <div className="user-data">
        <Charts />
        <div className="key-data-container">
        <KeyData data={calorieCount} img={calories} unit="kCal" lable="Calories"/>
        <KeyData data={carbohydrateCount} img={carbs} unit="g" lable="Carbs"/>
        <KeyData data={lipidCount} img={lipids} unit="g" lable="Lipids"/>
        <KeyData data={proteinCount} img={proteins} unit="g" lable="Proteins"/>
        </div>
      </div>
    </main>
  );
}
