import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import firebaseApp from "./firebaseConfig";

function App() {
  return (
    <Router>
    <div>
      <section>                              
          <Routes>   <Route path="/" element={<Home/>}/>
             <Route path="/signUp" element={<SignUp/>}/>
             <Route path="/signIn" element={<SignIn/>}/>
          </Routes>                    
      </section>
    </div>
  </Router>
    
   
  );
}

export default App;
