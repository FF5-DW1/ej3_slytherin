import React, { useState } from "react";
import "./cardList.css";
import NewList from "../NewList/newList";

function CardList() {
  const [lists, setLists] = useState([]);
  const [newList, setNewList] = useState("");

  const handleInputChange = (e) => {
    setNewList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newList.trim() !== "") {
      setLists([...lists, newList]);
      setNewList("");
    }
  };

  return (
    <section className="card">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit} className="newList">
        <input
          type="text"
          className="nameList"
          id="inputList"
          placeholder="Name List"
          value={newList}
          onChange={handleInputChange}
        />
        <button className="btnnewList">New List</button>
      </form>
      <ul className="cardsList">
        {lists.map((list, index) => (
          <NewList key={index} id={index} title={list} />
        ))}
      </ul>
    </section>
  );
}

export default CardList;
