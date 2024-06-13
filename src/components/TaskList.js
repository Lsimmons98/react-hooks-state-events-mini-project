import React from "react";
import Task from './Task'

function TaskList({displayedTasksByCategory, editDisplayedTasks, displayedTasks, editDisplayedTasksByCategory}) {

  const deleteTask = (taskID) => {
    const filteredTasks = displayedTasks.filter(task => task.text !== taskID)
    console.log(filteredTasks)
    editDisplayedTasks(filteredTasks)
    editDisplayedTasksByCategory(filteredTasks)
  }

  const showTasks = () => displayedTasksByCategory.map((task) => <Task text={task.text} key={task.text }category={task.category} filterTasks={deleteTask}/>)


  return (
    <div className="tasks">
      {showTasks()}
    </div>
  );
}

export default TaskList;
