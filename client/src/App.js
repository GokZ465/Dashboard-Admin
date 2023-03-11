import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./layout/Topbar";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/dashboard";
import ProjectCreate from "./pages/projects";
import UserList from "./pages/userlist";
import Profile from "./pages/profile";
import Tickets from "./pages/tickets";
import Payments from "./pages/payments";
import Charts from "./pages/charts";
import Calendar from "./pages/calendar";
import Logout from "./pages/logout";
import Login from "./auth/login";
import Register from "./auth/register";
import ForgotPassword from "./auth/ForgotPassword";
import "./App.css";



function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <div className="topbar" style={{
        background: 'rgb(0, 249, 249, 0.7)',
        marginBottom: '20px'
      }}>
          <Topbar setIsSidebar={setIsSidebar} /> 
      </div> 
        <div style={{
        display: 'flex'
      }}>
            
      <div className="sidebar">
      <Sidebar isSidebar={isSidebar} /> 
      </div>        
      <main className="content" style={{
        width: '100%'
      }}>
                     
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<ProjectCreate />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/calendar" element={<Calendar />} /> 
              <Route path="/payments" element={<Payments />} />
               <Route path="/charts" element={<Charts />} /> 
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password/forgot" element={<ForgotPassword />} />
            </Routes>
      </main>
      </div>
        </div>
    
  );
}

export default App;