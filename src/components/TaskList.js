import React, {useState} from "react";
import Task from './Task'
import CategoryFilter from './CategoryFilter'

function TaskList({tasks}) {
  const [displayedTasks, editDisplayedTasks] = useState([...tasks])

  const deleteTask = (taskID) => {
    const filteredTasks = displayedTasks.filter(task => task.text !== taskID)
    editDisplayedTasks(filteredTasks)
  }

  const filterByCategory = (taskID) => {
      const filteredTasks = displayedTasks.filter(task => task.category === taskID)
      editDisplayedTasks(filteredTasks)
  }

<CategoryFilter filterTasks={filterByCategory}/>

  const showTasks = () =>{
   return  displayedTasks.map((task) => <Task text={task.text} key={task.text }category={task.category} filterTasks={deleteTask}/>)
  }

  return (
    <div className="tasks">
      {showTasks()}
    </div>
  );
}

export default TaskList;
