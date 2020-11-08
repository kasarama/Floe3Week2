import {
  useHistory,
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";
import React from "react";

export default function Login({ updateLogin }) {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  const login = (e) => {
    e.preventDefault();
    updateLogin(1);
    history.push("/");
  };
  return (
    <div>
      <h3>Log in here </h3>
      <button class="active" onClick={login}>
        Log in
      </button>{" "}
    </div>
  );
}
