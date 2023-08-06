import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "./components/cabecera/cabecera";
import Planets from "./pages/Planets";

function App() {
  return (
    <>
      <Cabecera />
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/destination" element={<Planets />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
