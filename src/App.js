import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="container">
          <SideBar />
          <DataProvider>
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="user/:id" element={<Dashboard />} />
            </Routes>
          </DataProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
