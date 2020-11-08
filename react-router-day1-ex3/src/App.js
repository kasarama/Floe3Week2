import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import Company from "./Company";
import AddBook from "./AddBook";
import FindBook from "./FindBook";
import Login from "./LogIn";
import { useState } from "react";

function App({ bookFacade }) {
  const [loginStatus, setLoginStatus] = useState(false);
  function updateLogin(nr) {
    nr === 1 ? setLoginStatus(true) : setLoginStatus(false);
  }
  return (
    <Router>
      <div className="App">
        <Header loginStatus={loginStatus} updateLogin={updateLogin} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products bookFacade={bookFacade} />
          </Route>

          <Route exact path="/company">
            <Company />
          </Route>
          {loginStatus ? (
            <Route exact path="/add-book">
              <AddBook bookFacade={bookFacade} id={null} />
            </Route>
          ) : (
            ""
          )}
          {loginStatus ? (
            <Route exact path="/find-book">
              <FindBook bookFacade={bookFacade} />
            </Route>
          ) : (
            ""
          )}
          {!loginStatus ? (
            <Route exact path="/login">
              <Login updateLogin={updateLogin} />
            </Route>
          ) : (
            ""
          )}

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default App;
