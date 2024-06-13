import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const onTaskFormSubmit = (newTask) =>{
    if(!tasks.find(entry => entry.text.toLowerCase() === newTask.text.toLowerCase())){
      return setTasks([...tasks, newTask])
    }else{
      console.log('This item is already on the list')
    }
  }

  const filteredTasks = tasks.filter(task => task.category === selectedCategory)
  const displayTasks = selectedCategory === 'All' ? tasks : filteredTasks

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
