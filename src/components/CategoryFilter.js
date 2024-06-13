import React from "react";

function CategoryFilter({categories, filterTasks}) {

  const handleClick = (e) => {
    e.preventDefault()
    e.target.classList.contains('selected') ? e.target.classList.remove('selected') : e.target.classList.add('selected')
    const taskID = e.target.id
    filterTasks(taskID)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button id={categories[0]} onClick={handleClick}>{categories[0]}</button>
      <button id={categories[1]} onClick={handleClick}>{categories[1]}</button>
      <button id={categories[2]} onClick={handleClick}>{categories[2]}</button>
      <button id={categories[3]} onClick={handleClick}>{categories[3]}</button>
      <button id={categories[4]} onClick={handleClick}>{categories[4]}</button>
    </div>
  );
}

export default CategoryFilter;
