import LandingPage from "./views/LandingPage";
import Work from "./views/Work";
import { Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
        <Work path="/work" />
      </Router>
    </div>
  );
}

export default App;
