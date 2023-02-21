import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const redTitle = true;
  const n = 9;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>REACT no CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Esse paragráfo é do APP.js</p>
      <p className="my-com-paragraph">
        Esse também é do app.js, mas tem uma classe sendo usada
      </p>
      <p
        style={{ color: "blue", textShadow: "2px 2px aqua", fontWeight: "700" }}
      >
        Esse elemento usa Inline Style
      </p>
      {/* CSS Inline dinâmico */}

      <h2 style={n < 10 ? { color: "purple" } : { color: "olivedrab" }}>
        CSS Dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título terá classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
