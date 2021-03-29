import LandingPage from "./views/LandingPage";
import { Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage path="/" />
      </Router>
    </div>
  );
}

export default App;
