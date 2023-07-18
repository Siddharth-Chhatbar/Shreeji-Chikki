import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './svg/Dashboard';
import NewNavBar from './components/NewNavBar';

function App() {
  return (
    <div className=' bg-neutral-300 h-screen w-screen'>
      <NewNavBar />
      {/*
      <div className=' text-secondary-75 stroke-secondary-75 hover:text-secondary-300 hover:stroke-secondary-300'>
        <p className=' nav-bar-elements'>
          <Dashboard />
        </p>
      </div>
    */}

    </div>
  );
}

export default App;
