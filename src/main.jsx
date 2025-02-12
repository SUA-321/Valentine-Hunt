import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Puzzle1 from "./Puzzle1.jsx";
import Puzzle2 from "./Puzzle2.jsx";
import Puzzle3 from "./Puzzle3.jsx";
import YouWin from "./YouWin.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/puzzle1" element={<Puzzle1 />} />
        <Route path="/puzzle2" element={<Puzzle2 />} />
        <Route path="/puzzle3" element={<Puzzle3 />} />      
        <Route path="/youwin" element={<YouWin />} />      
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
