import React from "react";
import ReactDOM from "react-dom";
const a = "Hyper Text Markup Language";
const b = "Cascating Style Sheet";
const c = "JavaScript";
const fname = "Ragunath";
const lname = "G";
ReactDOM.render(
  <div>
    <h1>Front End Technologies:</h1>
    <ol type="I">
      <li>
        <b>HTML</b> - {a}
      </li>
      <li>
        <b>CSS</b> -{b}
      </li>
      <li>
        <b>JS</b> -{c}
      </li>
    </ol>
    <h2>My Favourite Number is {Math.floor(Math.random() * 10)}.</h2>
    <h2>My Name is {fname + " " + lname}</h2>
  </div>,
  document.getElementById("root")
);
