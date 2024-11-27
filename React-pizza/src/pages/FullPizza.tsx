import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../redux/slices/pizzaSlice";

const FullPizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`${BASE_URL}/` + id);

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
    </div>
  );
};

export default FullPizza;
