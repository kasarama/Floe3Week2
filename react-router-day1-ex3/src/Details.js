import { useParams } from "react-router-dom";
import React from "react";

export default function Details({ bookFacade }) {
  let { productID } = useParams();
  const books = bookFacade.getBooks();
  console.log(books);
  console.log(productID);
  const book = books.find((element) => element.id === parseInt(productID, 10));
  console.log(book);
  return (
    <div>
      <h3>Product details for selected book:</h3>
      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Info: {book.info}</p>
    </div>
  );
}
