import { useEffect, useState } from "react";
interface IProduct {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Pagination = (props:{limit:number}) => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const pageSum = Math.ceil(products.length / props.limit);

  const count = new Array(pageSum).fill(null);

  const pagination = products.slice(
    (selected - 1) * props.limit,
    selected * props.limit
  );

  const changePage = (page: number) => {
    if (page <= pageSum) {
      setSelected(page);
    }
  };

  return (
    <>
      <h1>Products list</h1>

      <div className="wrapper">
        {pagination.map((product: IProduct) => (
          <div className="box" key={product.id}>
            <h5>{product.title}</h5>
            <img className="img" src={product.image} alt="img" />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div>
        {selected == 1 ? (
          <button disabled onClick={() => changePage(selected - 1)}>
            Prev
          </button>
        ) : (
          <button onClick={() => changePage(selected - 1)}>Prev</button>
        )}

        {count.map((_, index) => (
          <button
            style={{ margin: "5px" }}
            onClick={() => changePage(index + 1)}
            className={selected == index + 1 ? "active" : ""}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => changePage(selected + 1)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
