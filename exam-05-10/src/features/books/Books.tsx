import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllBooks, updateBookRatingAndComment } from "./booksSlice"
import styles from "./Books.module.css"
import { Link } from "react-router-dom"
import Rating from "../rating/Rating"

const Books = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(state => state.books)
  console.log(books.books, "books")

  useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {books.books.map(book => (
        <div className={styles.book} key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img className={styles.image} src={book.photo} alt={book.title} />
          <div>
            Rating: {<Rating id={Number(book.id)} rate={book.totalRating} />}
          </div>

          <Link to={`/details/${book.id}`}>Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Books
