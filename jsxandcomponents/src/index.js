import React from "react";
import ReactDOM from "react-dom";
import TypesOfFood from "./components/TypesOfFood.js";

const JSX = (
  <div>
     <h1>Hello World</h1>
     <p>Lets render this to the DOM</p>
     <TypesOfFood/>
  </div>
)

ReactDOM.render(
  JSX , document.getElementById("root")
);
