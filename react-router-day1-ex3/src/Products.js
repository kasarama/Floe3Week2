import Details from "./Details";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import React from "react";

export default function Products({ bookFacade }) {
  let books = bookFacade.getBooks();
  let { path, url } = useRouteMatch();
  
  let bookList = books.map((b) => (
    <li key={b.id}>
      {b.title} <Link to={`${url}/${b.id}`}> Details</Link>
    </li>
  ));

  return (
    <div>
      <h2>Products</h2>
      <ul>{bookList}</ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a product.</h3>
        </Route>
        <Route exact path="/products/:productID">
          <Details bookFacade={bookFacade} />
        </Route>
      </Switch>
    </div>
  );
  /*
  return (
    <div>
      <h2>Products</h2>
      <ul>{bookList}</ul>
    </div>
  );
  */
}
