import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className=' bg-neutral-300 h-screen w-screen'>
        <NavBar />
        <Routes>
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/suppliers" Component={Suppliers} />
          <Route path="/inventory" Component={Inventory} />
          <Route path="/orders" Component={Orders} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
