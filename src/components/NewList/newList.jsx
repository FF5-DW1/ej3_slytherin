import React from "react";
import "./newList.css";
import BotonTask from "../BotonTask/botonTask";

function NewList() {
  return (
    <section className="card">
      <h3>List 1</h3>
      <div className="newTask">
      
        <input
          type="text"
          className="nameTask"
          id="inputTask"
          placeholder="Name Task"
        />
        <BotonTask />
      </div>
    </section>
  );
}

export default NewList;
