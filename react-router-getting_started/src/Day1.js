import "./App.css";
import upper from "./file1";
import { text1, text2, text3 } from "./file1";
// or all at once: import upper, {text1, text2, text3} from "./file1"
import person, { males, females } from "./file2";
import MultiWelcome from "./file3";
import Example from "./day2/example";

const { firstName, email } = person;
const [a, b] = males;
const [c, d] = females;
const arr = [];
const names = [...males, "Kurt", ...females, "Tina"];
console.log(names);

const personV2 = {
  email: "kurt@wonnegut.dk",
  firstName: "Kurt",
  friends: [...males, ...females],
  gender: "Male",
  lastName: "Wonnegut",
  phone: 123456,
};
console.log(personV2);

function Day1() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Day 2</h2>
          <Example />
          <br />
        </div>
        <div>
          <h2>Ex3</h2>
          <MultiWelcome />
          <h2>Ex 1</h2>
          <p>{upper("my own text")}</p>
          <p>{upper(text1)}</p>
          <p>{upper(text2)}</p>
          <p>{upper(text3)}</p>
          <h2>Ex2</h2>
          <p>
            {firstName}, {email}
          </p>
          <p>
            {a} {b}
          </p>
        </div>
      </header>
    </div>
  );
}

export default Day1;
