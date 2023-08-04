import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planets from "./components/planets/Planets";
import Cabecera from "./components/cabecera/cabecera";

function App() {
  return (
    <>
      <Cabecera />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Planets />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
