import React from "react";
import Task from './Task'

function TaskList({ tasks, setTasks }) {
  const deleteTask = (taskID) => {
    const filteredTasks = tasks.filter(task => task.text !== taskID)

    setTasks(filteredTasks)
  }

  const showTasks = () => (
    tasks.map((task) => (
      <Task
        key={task.text }
        category={task.category}
        filterTasks={deleteTask}
        text={task.text}
      />
    ))
  )

  return (
    <div className="tasks">
      {showTasks()}
    </div>
  );
}

export default TaskList;
