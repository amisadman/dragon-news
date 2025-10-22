import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch(
  " https://openapi.programming-hero.com/api/news/categories"
).then((res) => res.json());
const Category = () => {
  const data = use(categoryPromise);
  const categories = data.data.news_category;

  return (
    <div>
      <p className="font-bold">All Categories({categories.length})</p>
      <div className="flex flex-col gap-1 mt-2">
        {categories.map((category) => (
        <NavLink
          className={({isActive}) =>`${(isActive)?"bg-base-300" : ""} p-2 hover:bg-base-200 font-semibold`}
          key={category.category_id}
          to={`/category/${category.category_id}`}
        >
          {category.category_name}
        </NavLink>
      ))}

      </div>
      
    </div>
  );
};

export default Category;
