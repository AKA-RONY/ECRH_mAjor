
// import React from 'react';
import React, { useState } from 'react';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import {BrowserRouter,Link, Route, Router, Routes}  from  "react-router-dom";
import AboutUs from './pages/AboutUs';
import { lazy, Suspense } from 'react';
import Login from './pages/Login';
import QuickFIR from './pages/Quickfir';

import 'bootstrap/dist/css/bootstrap.min.css';
import OurMission from './pages/OurMission';
import FAQ from './pages/FAQ';
import Theft from './pages/Theft';
import Assault from './pages/Assault';
import Fraud from './pages/fraud';
import DrugRelatedCrimes from './pages/DrugRelatedCrimes'
import Vandalism from './pages/Vandalism';
const App = () => {


  return (

    <div>
      {/* <Title/> */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/QuickFIR" element={<QuickFIR />} />
        <Route path="/OurMission" element={<OurMission />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Theft" element={<Theft />} />
        <Route path="/Assault" element={<Assault />} />
        <Route path="/Fraud" element={<Fraud />} />
        <Route path="/DrugRelatedCrimes" element={<DrugRelatedCrimes />} />
        <Route path="/Vandalism" element={<Vandalism />} />

        
       
      </Routes>
    </div> 
  );
};

export default App;






