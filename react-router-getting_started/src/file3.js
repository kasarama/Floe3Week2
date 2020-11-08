import React from "react";
import { persons } from "./file2";
import PropTypes from "prop-types";

function Welcome(props) {
  return (
    <p>
      Hello, {props.name}. {props.age}
    </p>
  );
}

/*
In the MultiWelcome component, below the three usages of the original 
Welcome component add three usages of the new component as sketched here: 
<WelcomePerson person={persons[0]}  />
Hint: In the WelcomePerson function, the person is available in the arguments
 as props.person or if using destructuring ({person}) just as person.

*/

function WelcomePerson(props) {
  const { person } = props;
  /*
  
  return (
    <div>
      <h1>...</h1>
      <table>
        <tbody>
          <tr>
            <th>First name:</th>
            <td>
              {person.firstName === "Magda"
                ? "Hej Magda"
                : person.firstName + ", du er ikke Magda"}
            </td>
          </tr>
          <tr>
            <th>Last name:</th>
            <td>{person.lastName}</td>
          </tr>
          <tr>
            <th>Telephone:</th>
            <td>{person.phone ? person.phone : person.defaultProps}</td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>{person.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );*/
  return (
    <div>
      <h1>...</h1>
      <table>
        <tbody>
          <tr>
            <th>First name:</th>
            <td>{person.firstName || "unknown name"}</td>
          </tr>
          <tr>
            <th>Last name:</th>
            <td>{person.lastName}</td>
          </tr>
          <tr>
            <th>Telephone:</th>
            <td>{person.phone ? person.phone : person.defaultProps}</td>
          </tr>
          <tr>
            <th>E-mail:</th>
            <td>{person.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};

WelcomePerson.defaultProps = {
  firstName: "Unknown first name",
  lastName: "Unknown last name",
  email: "Unknown email",
  phone: "Unknown number",
};

function MultiWelcome() {
  const age1 = 12;
  return (
    <div>
      <div>
        {persons.map((persona) => (
          <WelcomePerson person={persona} />
        ))}

        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <Welcome name="Sara" age={"You are " + age1 + " years old."} />
        <Welcome name="Cahal" age={15} />
        <Welcome name="Edith" age />
      </div>
    </div>
  );
}

export default MultiWelcome;
