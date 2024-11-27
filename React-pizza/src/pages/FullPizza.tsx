import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const { id } = useParams();

  console.log(id, "id");
  console.log(typeof id, " typeid"); 
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://670f9c043e7151861658a5ed.mockapi.io/items/" + id
        );
        console.log(data, "դատա");

        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza?.imageUrl} alt="" />
      <h2>{pizza?.title}</h2>
      <h4>{pizza?.price} ₽</h4>
      <h1>{pizza?.id}</h1>
    </div>
  );
};

export default FullPizza;
