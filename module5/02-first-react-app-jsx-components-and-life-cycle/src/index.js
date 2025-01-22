import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

let obj = { value: 10 };

function sum(a, b) {
  return a + b + obj.value;
}

const students = [
  {
    id: 1,
    name: "Loc",
    age: 20,
  },
  {
    id: 2,
    name: "Chuyen",
    age: 21,
  },
];

function App() {
  return students.map((item) => (
    <Headline key={item.id} id={item.id} name={item.name} age={item.age} />
  ));
}

function Headline({ id, name, age }) {
  obj.value = 50;
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Sum: {sum(10, 2)}</p>
      <hr />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return students.map((item) => <Headline key={item.id} student={item} />);
//   }
// }

// class Headline extends Component {
//   render() {
//     const { id, name, age } = this.props.student;

//     return (
//       <div>
//         <p>ID: {id}</p>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <hr />
//       </div>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Counter value={1} />
  </>
);
