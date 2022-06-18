import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import api from "./api/posts";
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Route, Routes, useParams } from "react-router-dom";

function App() {
  
const {userID} = useParams();
  // {userData.data.id}
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="user" >
              <Route path=":userID" element={<Dashboard />}/>
            </Route>
          </Routes>
          {/* <Dashboard /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
