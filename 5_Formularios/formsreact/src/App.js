import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulários</h2>
    <MyForm user={{name: "Harvey", email:"harveyspecter@gmail.com", bio:"Sou advogado na Pearson Specter Litt", role:"admin"}}/>
    </div>
  );
}

export default App;
