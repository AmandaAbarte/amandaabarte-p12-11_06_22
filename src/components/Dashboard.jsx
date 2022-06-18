import React from "react";
import ChartOne from "./ChartOne";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
    //MOVE API CALL TO SEPARATE FILE//
  const [userData, setUserData] = useState("");
  const [userPerformance, setUserPerformance] = useState("");
  const { userID } = useParams();


  //makes two calls and sets user data and user performance state
  const getUserData = () => {
    axios
      .get(`http://localhost:3000/user/${userID}`)

      .then((response) => {
        console.log(response.data.data);
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
        console.log(response.data.data);
        setUserPerformance(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
//calls to api are made only once when page is loaded
  useEffect(() => {
    getUserData();
    getUserPerformance();
  }, []);

  //extract more concise data from api data
  const {firstName, lastName} = userData && userData.userInfos
  const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = userData && userData.keyData
  return (
    <main>
      <div className="welcome">
        <h1>Hello {firstName}</h1>
        <p>congrats message</p>
      </div>
      <div className="activity-container">
        <ChartOne />
      </div>
    </main>
  );
}
