import Index from './pages/index'
import Popular from './pages/Popular/index'
import CreatedMeme from './pages/CreatedMeme/index'
import SignIn from './pages/Login/SignIn'
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
          <Route path="/createdMeme" exact>
            <CreatedMeme />
          </Route>
          <Route path="/Login" exact>
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
