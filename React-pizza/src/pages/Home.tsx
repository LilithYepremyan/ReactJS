import { useContext, useEffect, useRef, useState } from "react";
import Categories from "../components/Categories/Categories";
import Skeleton from "../components/PizzaCard/Skeleton";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Sort, { list } from "../components/Sort/Sort";
import "../App.css";
import Pagination from "../components/Pagination/Pagination";
import { SearchContext } from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setItems } from "../redux/slices/pizzasSlice";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filterReducer
  );

  const { items } = useSelector((state) => state.pizzaReducer);

  const sortType = sort.sortProperty;

  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortType);
      dispatch(setFilters({ ...params, sort }));
    }
    isSearch.current = true;
  }, []);

  const fetchPizzas = async () => {
    setIsLoading(true);
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      const { data } = await axios.get(
        `https://670f9c043e7151861658a5ed.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      dispatch(setItems(data));
    } catch (error) {
      console.log(error);
      alert("Ошибка при получении пицц");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isSearch.current) {
      fetchPizzas();
    }
  }, [categoryId, sortType, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({ sortType, categoryId, currentPage });
      navigate(`?${queryString}`);
    } else {
      isMounted.current = true;
    }
  }, [categoryId, sortType, currentPage]);

  const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas}
      </div>
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
