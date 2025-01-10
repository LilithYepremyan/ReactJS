import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useEffect } from "react"
import { getAllBooks } from "./booksSlice"
import styles from "./Books.module.css"
import StarIcon from "../starIcon/starIcon"
import Rating from "../rating/rating"

const Books = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(state => state.books.books)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  return (
    <div className={styles.container}>
      {books.map(book => (
        <div  className={styles.book} key={book.id}>
          <h4>{book.title} </h4>
          <img
            className={styles.bookImg}
            src={book.photo}
            alt={book.title}
            onClick={() => navigate(`/books/${book.id}`)}
          />
          <p>{book.author}</p>
          <Rating rating={book.rating} />
        </div>
      ))}
    </div>
  )
}

export default Books
