/*
List og keys (table rows istedet for list): https://github.com/kasarama/React_dey2/blob/8e0739252d8106a02ecbf9da9cfe95dcb1ce903a/src/ListDemo.js#L24-L28
Jeg har tidligere brugt forms her: https://github.com/kasarama/React_dey2/blob/8e0739252d8106a02ecbf9da9cfe95dcb1ce903a/src/ex1.js#L34-L37
Dr er sat en event Listener som sætter en ny værdier hver gang inpt er ændret
komponents til formdata: her på linje 23 og 26

*/
import React, { useState } from "react";
const NameForm = () => {
  const [name, setName] = useState("...");
  function handleChange(event) {
    // onChange={(e) => setStart(e.target.valueAsNumber)
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // setName(event.target.name.value);
    window.alert(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input id="name" type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{name}</p>
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
