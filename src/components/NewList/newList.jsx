import React, { useState } from "react";
import "./newList.css";
import BotonTask from "../BotonTask/botonTask";

function NewList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <section className="card">
      <h3>List 1</h3>
      <div className="newTask">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="nameTask"
            id="inputTask"
            placeholder="Name Task"
            value={newTask}
            onChange={handleInputChange}
          />

          <button className="btnnewTask">New Task2</button>
          {/* <BotonTask /> */}
        </form>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default NewList;
