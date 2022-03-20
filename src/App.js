import './App.css';
import TextForm from './components/TextForm';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
  <>
  <Router>
  <Navbar link="About" title="Bhatia PVT LTD"/>
  <Routes>
  
  <Route path='/About' element={<About/>} />
  <Route path='/home' element={<TextForm heading="Enter Any Text Here To Convert"/>} />
  </Routes>
  </Router>
      
  
  </>
    
  );
  
}

export default App;
