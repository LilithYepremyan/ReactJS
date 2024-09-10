import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { copyItem, getProducts } from "./procucts.slice"
import styles from "./products.module.css"
import Rating from "../../utils/rating"

const Products = () => {
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const items = useAppSelector(state => state.items)
  const dispatch = useAppDispatch()
  return (
    <>
      <h1>Products {items.length}</h1>
      <div className={styles.list}>
        {items.map(product => (
          <div key={product.id}>
            <img src={product.picture} alt="img"></img>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <Rating id={product.id} rate={product.rate} />
            <button onClick={() => dispatch(copyItem(product))}>Copy</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
