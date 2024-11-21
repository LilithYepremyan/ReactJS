import { useState } from "react";

function Categories({ value, onChangeCategory }: any) {

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  // const onClickCategory = (index: number) => {
  //   setActiveIndex(index);
  // };

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

export default Categories;
