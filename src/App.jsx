import { useState } from 'react';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dynamic state for login status

  return (
    <div className="app-container">
      {isLoggedIn ? <AdminPage /> : <LoginForm />}
    </div>
  );
}

function AdminPage() {
  return (
    <div className="admin-wrapper">
      <div className="left-panel">
        <ul className="nav-list">
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">Profile</li>
          <li className="nav-item">Settings</li>
          <li className="nav-item">Logout</li>
        </ul>
      </div>
      <div className="right-panel">
        <nav><img src={UserActivation.img}/></nav>
        <p className="welcome-message">Welcome, Simi!</p>

      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="login-form">
      <h1 className="login-title">Login</h1>
      <form>
        
      </form>
    </div>
  );
}
