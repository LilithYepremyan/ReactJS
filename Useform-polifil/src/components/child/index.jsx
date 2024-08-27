import { useHttpGet } from "../../hooks";
export const Child = () => {
  const [loading] = useHttpGet("https://fakestoreapi.com/products");
  return (
    <>
      {loading && (
        <img
          style={{ width: 200 }}
          src="https://loading.io/assets/mod/spinner/rolling/lg.gif"
        />
      )}

      {/* {data && <p>{data.length}</p>} */}
    </>
  );
};
