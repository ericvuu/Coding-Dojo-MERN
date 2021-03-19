import { Router} from "@reach/router";
import Dashboard from './views/Dashboard';
import NewAuthor from './views/NewAuthor';
import { UpdateAuthor } from './views/UpdateAuthor';

function App() {
  return (
    <div className="App">
       <Router>
          <Dashboard path="/"/>
          <NewAuthor path="/new"/>
          <UpdateAuthor path="/edit/:id"/>
       </Router>
    </div>
  );
}

export default App;
