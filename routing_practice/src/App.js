import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Output from './components/Output';
import Style from './components/Style';



function App() {
  return (
    <div className="App">
      <Router>
        <Home path = "/home"/>
        <Output path = "/:output"/>
        <Style path="/:str/:backg/:color"/>
      </Router>
    </div>
  );
}

export default App;
