//components
import FirstComponent from './components/FirstComponent';

// styles / CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


function App() {
  return (
    <div className="App">
      <h1> Hello World React!</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. O doloribus numquam, deleniti, expedita placeat iusto reiciendis pariatur.</p>
      <MyComponent/>
      <Events/>
     <Challenge/>
    </div>
  );
}

export default App;

