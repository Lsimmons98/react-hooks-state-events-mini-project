import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({text:'', category:'Code'})

  const handleTextChange= (e) => {
    e.preventDefault()
    const newText = e.target.value
    setNewTask(newTask => ({...newTask, text : newText}))
  }

  const handleCategoryChange = (e) => {
    e.preventDefault()
    const newCategory = e.target.value
    setNewTask(newTask => ({...newTask, category : newCategory}))
    console.log(newTask)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form"  onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          <option value='Code'>Code</option>
          <option value='Food'>Food</option>
          <option value='Money'>Money</option>
          <option value='Misc'>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
