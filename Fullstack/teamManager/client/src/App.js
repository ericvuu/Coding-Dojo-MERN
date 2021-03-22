import './App.css';
import { Router, Redirect } from "@reach/router";
import Roster from './views/Roster'
import AddPlayer from "./views/AddPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Roster path="/players/list" />
        <AddPlayer path="/players/addplayer"/>
        <Redirect from="/" to="/players/list" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
