import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((cat) => (
    <button
      key={cat}
      className={selectedCategory === cat ? "selected" : ""}
      onClick={() => onSelectCategory(cat)}
    >
      {cat}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
