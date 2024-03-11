import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/Title';
import Navbar from './components/Navbar';
import BigButtonGroup from './components/core_options';
import ReachUs from './components/reach_us';
import Registration from './components/Registration';
import {BrowserRouter,Link, Route, Router, Routes}  from  "react-router-dom";
// import  aboutus  from './components/pages/AboutUs';
import AboutUs from './components/pages/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

    <div>
      <Title/>
      <Navbar />
      <Routes>
    
        {/* <Route  path="/aboutus"  element={<aboutus/>}/> */}
    
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Registration" element={<Registration />} />


       
      </Routes>

      <BigButtonGroup/>
      <ReachUs/>
    </div>
    

    
  );
};

export default App;






