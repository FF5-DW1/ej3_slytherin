import React from "react";
import "./cardList.css";

function CardList() {
  return (
    <section className="card">
      <h1>To Do List</h1>
      <div className="newList">
        <p className="nameList">Name List</p>
        <button className="btnnewList">New List</button>
      </div>
      <hr />
    </section>
  );
}

export default CardList;
