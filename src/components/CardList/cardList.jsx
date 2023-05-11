import React, { useState } from "react";
import "./cardList.css";
import NewList from "../NewList/newList";

function CardList() {
  return (
    <section className="card">
      <h1>To Do List</h1>
      <form className="newList">
        <input
          type="text"
          className="nameList"
          id="inputList"
          placeholder="Name List"
        />
        <button className="btnnewList">New List</button>;
      </form>
      <NewList />
    </section>
  )
}

export default CardList;
