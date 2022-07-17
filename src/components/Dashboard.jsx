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
//calls to api are made only once when page is loaded
  useEffect(() => {
    getUserData();
  }, []);

  //extract more concise data from api data
  const {firstName, lastName} = userData && userData.userInfos
  const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = userData && userData.keyData
 
  return (
    <main>
      <div className="welcome">
        <h1>Hello <span className="name">{firstName}</span></h1>
        <p>Congratulations on reaching yesterday's Goal!</p>
      </div>
      <div className="user-data">
        <Charts userID={userID} todayScore={userData.todayScore}/>
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
