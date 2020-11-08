import { useState } from "react";
import { Prompt } from "react-router-dom";

export default function AddBook({ bookFacade, id }) {
  let peroformAddBook = bookFacade.addBook;
  // const [newBook, setNewBook] = useState({ title: "Title", info: "Info" });
  const [title, setTitle] = useState("Title");
  const [info, setInfo] = useState("Info");
  function handleSubmit(event) {
    event.preventDefault();
    //event.target.reset();
    setIsBLocking(false);
    id === null
      ? peroformAddBook({ title, info })
      : bookFacade.editBook({ id, title, info });
  }

  let [isBlocking, setIsBLocking] = useState(false);

  return (
    <div>
      <form>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <input
          type="text"
          placeholder={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setIsBLocking(event.target.value.length > 0);
            console.log(isBlocking + "value:" + event.target.value + ".");
          }}
        />
        <input
          type="text"
          placeholder={info}
          onChange={(event) => {
            setInfo(event.target.value);
            setIsBLocking(event.target.value.length > 0);
            console.log(isBlocking + " length: " + event.target.value.length);
          }}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
      <p>{isBlocking ? "Unsaved data:" : "Start writing"}</p>
      <p>Title: {title}</p>
      <p> Info: {info}</p>
    </div>
  );
}
