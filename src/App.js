import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import "aos/dist/aos.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
   
  }, []);
  return (
    
   <>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   <Router className="App">
     <Navbar />
      <Routes>
              <Route path="/" element={<Home/>} />   
              <Route path="/about" element={<About/>} />
            </Routes>
   </Router>
   </>
  );
}

export default App;
