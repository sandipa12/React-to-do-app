import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Todolist from "./Todolist";

var destination = document.querySelector("#container");

ReactDom.render(
    <div>
   <Todolist/>
         
    
    </div>,
    destination
);
