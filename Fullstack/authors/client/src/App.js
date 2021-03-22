import { Router} from "@reach/router";
import Dashboard from './views/Dashboard';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import NoAuthor from "./views/NoAuthor";
import ViewAuthor from "./views/ViewAuthor";

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/" />
        <NewAuthor path="/new" />
        <NoAuthor path="/error" />
        <ViewAuthor path="/:id"/>
        <UpdateAuthor path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
