import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Shopping from "./pages/Shopping";

import Navbar from "./components/Navbar";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/shopping" element={<Shopping/>} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
