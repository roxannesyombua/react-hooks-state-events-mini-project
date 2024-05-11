import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const handleClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

