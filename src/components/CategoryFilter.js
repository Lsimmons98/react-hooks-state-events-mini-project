import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const handleClick = (e) => {
    e.preventDefault()

    const selectedCategory = e.target.name

    setSelectedCategory(selectedCategory)
  }

  const buttonClass = (category) => {
    return selectedCategory === category ? "selected" : ""
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          name={category}
          className={buttonClass(category)}
          onClick={handleClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
