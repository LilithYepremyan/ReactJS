import { useAppSelector } from "../../app/hooks"
import styles from "./Authors.module.css"

const Authors = () => {
  const books = useAppSelector(state => state.books.books)

  return (
    <div className={styles.container}>
      {books.map(book => (
        <div key={book.id} className={styles.authorBlock}>
          <h3> {book.author}</h3>
          <p>{book.authorInfo}</p>
        </div>
      ))}
    </div>
  )
}

export default Authors
