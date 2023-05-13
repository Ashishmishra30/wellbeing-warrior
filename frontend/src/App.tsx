import React from 'react';
import './App.css';
import Home from './Pages/Home';

import Login from './Pages/Login'; 
import Signup from './Pages/Signup';

import HeroSection from './Pages/DashTop';
import Card from './Card/User';
import Dash from './Pages/Dashboard';
import Allroutes from './MainRoutes/Allroutes';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}


export default App;
