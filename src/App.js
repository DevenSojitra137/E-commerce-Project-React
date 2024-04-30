import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Click from "./compo/Click";
import { Routes, Route } from "react-router-dom"
import Info from "./compo/Info";
import Side from "./compo/Side";
import Addcart from "./compo/Addcart";


function App() {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<Side />} />
        <Route path="/Info/:id" element={<Info />} />
        <Route path="/Addcart" element={<Addcart />} />
      </Routes>
    </>
  );
}

export default App;