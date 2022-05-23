import Nav from "./components/Nav";
import Planet from "./components/Planet";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen text-white">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path=":planetName" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
