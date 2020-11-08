import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Table } from "react-bootstrap";

const PersonList = ({ allPeople, editPerson }) => {
  const [person, setPerson] = useState({ name: "", id: "" });
  const edit = (event) => {
    event.preventDefault();
    const id = event.target.value;
    console.log(id);
  };

  const onChange = (event) => {
    const value = event.target.value;
    person.name = value;
    setPerson({ ...person });
  };

  return (
    <Col>
      <h4>All people</h4>
      <ul>
        {allPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th> Name</th>
            <th colSpan="2">options</th>
          </tr>
        </thead>
        <tbody>
          {allPeople.map((person) => (
            <tr id={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>
                <button onClick={edit}>edit</button>
              </td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default PersonList;
PersonList.propTypes = {
  allPeople: PropTypes.array,
};
