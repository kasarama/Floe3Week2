import { useState } from "react";
import AddBook from "./AddBook";

export default function FindBook({ bookFacade }) {
  const [id, setId] = useState("id");
  let findBook = bookFacade.findBook;
  let deleteBook = bookFacade.deleteBook;
  const [bookresult, setBookResult] = useState("");
  function find(event) {
    event.preventDefault();
    let book = findBook(id);
    console.log(book);
    setBookResult(
      <div>
        <p>ID: {book.id}</p>
        <p>Title: {book.title}</p>
        <p>Info: {book.info}</p>
        <button onClick={deleteChosen}>Delete</button>
        <button onClick={editChosen}>Edit</button>
      </div>
    );
  }
  function deleteChosen(event) {
    event.preventDefault();
    bookFacade.deleteBook(id);
    //setId("");
    setBookResult(<p>deleted</p>);
  }
  function editChosen(event) {
    event.preventDefault();

    //setId("");
    setBookResult(<AddBook bookFacade={bookFacade} id={id} />);
  }

  return (
    <div>
      <h3>Find a book here </h3>
      <form onSubmit={find}>
        <input
          type="number"
          placeholder={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
        <button type="submit" onClick={find}>
          Find book
        </button>
      </form>
      {bookresult}
    </div>
  );
}
