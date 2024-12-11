import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              className={value == index ? "active" : ""}
              onClick={() => onChangeCategory(index)}
              key={index}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
