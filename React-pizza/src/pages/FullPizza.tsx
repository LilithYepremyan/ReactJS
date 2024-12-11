import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../redux/slices/pizzaSlice";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`${BASE_URL}/` + id);

        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
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
