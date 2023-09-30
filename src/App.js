import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <section>                              
          <Routes>   <Route path="/" element={<SignIn/>}/>
             <Route path="/signUp" element={<SignUp/>}/>
             <Route path="/home" element={<Home/>}/>
          </Routes>                    
      </section>
    </div>
  </Router>
    
   
  );
}

export default App;
                 