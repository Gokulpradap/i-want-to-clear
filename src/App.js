
import "./App.css";
import React from "react";
import Nav from "./nav";

import Header from "./header";
import Skill from "./Skill";
import Contact from "./Contact";


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  
    <BrowserRouter>   
      <Nav />
     <Routes>
        <Route path="/header"element={<Header />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/contact" element={<Contact />}/>
       
       </Routes>
    </BrowserRouter>
    
  );
}

export default App;
