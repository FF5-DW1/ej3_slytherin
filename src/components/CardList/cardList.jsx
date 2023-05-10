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
    </section>
  );
}

export default CardList;
