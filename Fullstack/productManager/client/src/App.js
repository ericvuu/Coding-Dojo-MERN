import './App.css';
import { Router, Redirect } from "@reach/router";
import Main from './views/Main';
import ViewProduct from './views/ViewProduct'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products" />
        <ViewProduct path="/products/:id" />
        <Redirect from="/" to="/products" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
