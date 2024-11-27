import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import Skeleton from "../components/PizzaCard/Skeleton";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pagination from "../components/Pagination/Pagination";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.pizzaReducer);
  const { categoryId, currentPage, searchValue } = useSelector(
    (state) => state.filterReducer
  );
  const sort = useSelector((state) => state.filterReducer.sort);
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const onChangeCategory = React.useCallback(
    (i: number) => dispatch(setCategoryId(i)),
    [dispatch]
  );


  React.useEffect(() => {
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      })
    );
    window.scrollTo(0, 0);
  }, [dispatch, order, sortBy, category, search, currentPage]);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((obj: any) => {

    return (
      <Link to={`/pizza/${obj.id}`} key={obj.id}>
        <PizzaCard {...obj} />
      </Link>
    );
  });
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2 style={{ color: "red" }}>Произошла ошибка</h2>
          <h4>
            Что-то пошло не так <br /> Попробуйте повторить попытку позже
          </h4>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
