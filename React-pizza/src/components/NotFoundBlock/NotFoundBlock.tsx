import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h2>Ничего не найдено 😞</h2>
      <p>К сожелению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFoundBlock;
