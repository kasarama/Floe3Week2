import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./styles/style2.css";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample({ info, headline, extrathing }) {
  console.log(useRouteMatch);
  return (
    <Router>
      <h2>{headline}</h2>
      <h3>{extrathing}</h3>
      <div>
        <ul className="header">
          <li>
            <Link activeClassName="selected" exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/topics">
              Topics
            </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics info={info} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics({ info }) {
  let { path, url } = useRouteMatch();
  console.log("path: " + path + " url: " + url);
  const listItm = info.map((t) => (
    <li key={t.id}>
      <Link to={`${url}/${t.id}`}>{t.title}</Link>
    </li>
  ));
  return (
    <div>
      <h2>Topics</h2>
      <ul>{listItm}</ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic info={info} />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(props) {
  let { topicId } = useParams();
  const topic = props.info.find((element) => element.id === topicId);

  return (
    <div>
      {topic && (
        <div>
          <h1>{topic.title}</h1>
          <h3> {topicId}</h3>
          <p> {topic.info}</p>
        </div>
      )}
      {!topic && <h2>Not Found</h2>}
    </div>
  );
}
