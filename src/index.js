//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

let firstName = "Abdelrahman";
let lastName = "Mohamed";
let currentDate = new Date();
let year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {firstName} {lastName}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.querySelector("#root")
);
