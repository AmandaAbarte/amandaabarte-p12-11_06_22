
import './App.css';
import Nav from './components/Nav';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SideBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
