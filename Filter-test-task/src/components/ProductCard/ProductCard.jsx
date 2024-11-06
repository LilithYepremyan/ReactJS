import React from "react";
import Rating from "../Rating/Rating";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { name, brand, price, imageUrl, rating } = product;

  return (
    <div className={styles.wrapper}>
      <h3>{name}</h3>
      <img className={styles.photo} src={imageUrl} alt={name} />
      <div className={styles.info}>
        <span>{brand}</span>
        <span>{price}$</span>
      </div>
      <Rating rating={rating} />
    </div>
  );
};

export default ProductCard;
