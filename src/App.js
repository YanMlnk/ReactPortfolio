import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
    </div>
   
    <div className="container">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" exact element={<About />}/>
      <Route path="/contact" exact element={<Contact />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
