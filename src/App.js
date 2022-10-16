import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./Components/Characters";
import Home from "./Components/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
