import React from "react";

function Task({text, category , filterTasks}) {

  const handleDelete = e => {
    e.preventDefault()
    const taskID = e.target.parentElement.id
    filterTasks(taskID)
  }

  return (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
