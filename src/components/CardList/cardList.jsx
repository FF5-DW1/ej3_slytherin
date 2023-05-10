import React from "react";
import "./cardList.css";
import BotonList from "../BotonList/botonList";

function CardList() {
  return (
    <section className="card">
      <h1>To Do List</h1>
      
      <div className="newList">
        <input
          type="text"
          className="nameList"
          id="inputList"
          placeholder="Name List"
        />
        <BotonList />

      </div>
      <hr />
      <h3>List 1</h3>
      <div className="newTask">
        <input
          type="text"
          className="nameTask"
          id="inputTask"
          placeholder="Name Task"
        />
        <button className="btnnewTask">New Task</button>
      </div>
    </section>
  );
}

export default CardList;
