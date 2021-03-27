import Index from './pages/index'
import Popular from './pages/Popular/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/popular" exact>
            <Popular />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
