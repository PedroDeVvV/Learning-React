import "./App.css";

//1 - Configuração routers
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NoMatchRoute from "./pages/NoMatchRoute";
import Search from "./pages/Search";

//components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <h1>React Routers</h1>
      <BrowserRouter>
        {/* 2- links com react router */}
        <Navbar />
        {/* 9 - Search Params */}
        <SearchForm/>
        {/* Necessário colocar dentro do browse router, pois tem elementos do mesmo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 Nested Routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9- Search */}
          <Route path="/search" element={<Search/>} />
          {/* 10 Redirecionamento */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          {/* 7- No match route */}
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
