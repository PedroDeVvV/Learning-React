import "./App.css";

//1 - Configuração routers
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home'
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>React Routers</h1>
      <BrowserRouter>
      {/* 2- links com react router */}
      <Navbar/> {/* Necessário colocar dentro do browse router, pois tem elementos do mesmo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 Nested Routes */}
          <Route path="./products/:id/info" element={<Info/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
