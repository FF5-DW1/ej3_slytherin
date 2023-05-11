import React, { useState, useEffect } from "react";
import "./newList.css";
import BotonTask from "../BotonTask/botonTask";

// Resto del código del componente NewList


// function NewList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [sortedTasks, setSortedTasks] = useState([]);
//   const [listTitle, setListTitle] = useState("");

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleTitleChange = (e) => {
//     setListTitle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const handleTitleClear = () => {
//     setListTitle("");
//   };

//   const handleTaskToggleComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
//     setTasks(updatedTasks);
//   };

//   const sortTasks = () => {
//     const sorted = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
//     setSortedTasks(sorted);
//   };

//   useEffect(() => {
//     sortTasks();
//   }, [tasks]);

//   return (
//     <section className="card">
//       <div className="listTitle">
//         <input
//           type="text"
//           className="titleInput"
//           placeholder="List Title"
//           value={listTitle}
//           onChange={handleTitleChange}
//         />
//         <button className="clearTitleButton" onClick={handleTitleClear}>
//           Clear Title
//         </button>
//       </div>
//       <div className="newTask">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="nameTask"
//             id="inputTask"
//             placeholder="Name Task"
//             value={newTask}
//             onChange={handleInputChange}
//           />
//              <BotonTask />
//           {/* <button type="submit">Add Task</button> */}
//         </form>
     
//       </div>

//       <ul>
//         {sortedTasks.map((task, index) => (
//           <li
//             key={index}
//             className={task.completed ? "completed" : ""}
//             onClick={() => handleTaskToggleComplete(index)}
//           >
//             {task}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default NewList;




function NewList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [sortedTasks, setSortedTasks] = useState([]);

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

  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.localeCompare(b));
    setSortedTasks(sorted);
  };

  useEffect(() => {
    sortTasks();
  }, [tasks]);

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
            <BotonTask />
          {/* <button type="submit">Add Task</button> */}
        </form>
      
      </div>

      <ul>
        {sortedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export default NewList;


// import React, { useState, useEffect } from "react";
// import "./newList.css";
// import BotonTask from "../BotonTask/botonTask";

// function NewList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [sortedTasks, setSortedTasks] = useState([]);
//   const [listTitle, setListTitle] = useState("");

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleTitleChange = (e) => {
//     setListTitle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   const handleTitleClear = () => {
//     setListTitle("");
//   };

//   const handleTaskToggleComplete = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
//     setTasks(updatedTasks);
//   };

//   const sortTasks = () => {
//     const sorted = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
//     setSortedTasks(sorted);
//   };

//   useEffect(() => {
//     sortTasks();
//   }, [tasks]);

//   return (
//     <section className="card">
//       <div className="listTitle">
//         <input
//           type="text"
//           className="titleInput"
//           placeholder="List Title"
//           value={listTitle}
//           onChange={handleTitleChange}
//         />
//         <button className="clearTitleButton" onClick={handleTitleClear}>
//           Clear Title
//         </button>
//       </div>
//       <div className="newTask">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="nameTask"
//             id="inputTask"
//             placeholder="Name Task"
//             value={newTask}
//             onChange={handleInputChange}
//           />
//           <button type="submit">Add Task</button>
//         </form>
//         <BotonTask />
//       </div>

//       <ul>
//         {sortedTasks.map((task, index) => (
//           <li
//             key={index}
//             className={task.completed ? "completed" : ""}
//             onClick={() => handleTaskToggleComplete(index)}
//           >
//             {task}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default NewList;












// import React, { useState } from "react";
// import "./newList.css";
// import BotonTask from "../BotonTask/botonTask";

// function NewList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newTask.trim() !== "") {
//       setTasks([...tasks, newTask]);
//       setNewTask("");
//     }
//   };

//   return (
//     <section className="card">
//       <h3>List 1</h3>
//       <div className="newTask">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="nameTask"
//             id="inputTask"
//             placeholder="Name Task"
//             value={newTask}
//             onChange={handleInputChange}
//           />
//             <BotonTask />
//           {/* <button type="submit">Add Task</button> */}
//         </form>
      
//       </div>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default NewList;





















// import React from "react";
// import "./newList.css";
// import BotonTask from "../BotonTask/botonTask";

// function NewList() {
//   return (
//     <section className="card">
//       <h3>List 1</h3>
//       <div className="newTask">
      
//         <input
//           type="text"
//           className="nameTask"
//           id="inputTask"
//           placeholder="Name Task"
//         />
//         <BotonTask />
//       </div>
//     </section>
//   );
// }

// export default NewList;
