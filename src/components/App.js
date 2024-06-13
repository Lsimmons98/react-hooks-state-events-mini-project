import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [displayedTasks, editDisplayedTasks] = useState([...TASKS])
  const [displayedTasksByCategory, editDisplayedTasksByCategory] = useState([...displayedTasks])

  const filterByCategory = (taskID) => {
    const filteredTasks = taskID === 'All' ? displayedTasks : displayedTasks.filter(task => task.category === taskID)
    editDisplayedTasksByCategory(filteredTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterByCategory}/>
      <NewTaskForm />
      <TaskList
        displayedTasksByCategory={displayedTasksByCategory}
        editDisplayedTasks={editDisplayedTasks}
        displayedTasks={displayedTasks}
        editDisplayedTasksByCategory={editDisplayedTasksByCategory}
      />
    </div>
  );
}

export default App;
