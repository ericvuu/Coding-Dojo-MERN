import { Router } from "@reach/router";
import "./App.css";
import Home from './components/Home'
import NumOrWord from './components/NumOrWord'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <NumOrWord path="/:input" />
        <NumOrWord path="/:input/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
