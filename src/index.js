import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Errorpage from "./js/Errorpage";

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated code

root.render(
  <BrowserRouter basename="/Terminal_Portfolio">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/error" element={<Errorpage />} />
    </Routes>
  </BrowserRouter>
);
