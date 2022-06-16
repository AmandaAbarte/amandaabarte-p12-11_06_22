
import './App.css';
import Nav from './components/Nav';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import api from './api/posts';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState([]);
  useEffect(()=> {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/12');
        setUser(response.data);
      } catch (err) {
        //not in the 200 response range
      }
    }
    fetchUsers();
  }, [])
  return (
    <div className="App">
      <Nav/>
      <div className='container'>

      <SideBar/>
      <Dashboard user={user}/>
      </div>
    </div>
  );
}

export default App;
