import React from "react";

function CategoryFilter({categories, filterTasks}) {

  const handleClick = (e) => {
    e.preventDefault()

    const taskID = e.target.id

    const ifSelecting = () => {
      e.target.classList.add('selected')
      categories.forEach(category => {
        if(category !== taskID){
        document.getElementById(category).classList.remove('selected')
       }})

    }
    e.target.classList.contains('selected') ? e.target.classList.remove('selected') : ifSelecting(e)

    filterTasks(taskID)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button id={categories[0]} className = 'selected' onClick={handleClick}>{categories[0]}</button>
      <button id={categories[1]} onClick={handleClick}>{categories[1]}</button>
      <button id={categories[2]} onClick={handleClick}>{categories[2]}</button>
      <button id={categories[3]} onClick={handleClick}>{categories[3]}</button>
      <button id={categories[4]} onClick={handleClick}>{categories[4]}</button>
    </div>
  );
}

export default CategoryFilter;
