import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import style from "./BookDetail.module.css"
import Rating from "../rating/rating"
import { deleteBook } from "../books/booksSlice"

const BookDetail = () => {
  const { id } = useParams()
  const books = useAppSelector(state => state.books.books)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const findBook = books.find(book => book.id === id)

  const handleEditBook = (id: number) => {
    navigate(`/edit-book/${id}`)
  }

  const handleDeleteBook = (id: number) => {
    dispatch(deleteBook(id)).unwrap()
    navigate("/")
  }

  return (
    <div className={style.bookDetail}>
      <div className={style.bookDetailImg}>
        <img src={findBook?.photo} alt={findBook?.title} />
      </div>
      <div>
        <h1>{findBook?.title}</h1>
        <h2>Book Details</h2>
        <p className={style.info}>
          <span className={style.bold}>Author: </span>
          {findBook?.author}
        </p>
        <p className={style.info}>
          <span className={style.bold}>Author Info: </span>
          {findBook?.authorInfo}
        </p>
        <p className={style.info}>
          <span className={style.bold}>Book Info: </span>
          {findBook?.bookInfo}
        </p>
        <Rating rating={findBook?.rating} />
        <p className={style.info}>
          <span className={style.bold}>Genres: </span>
          {findBook?.genres.join(", ")}
        </p>
        <p className={style.info}>
          <span className={style.bold}>Price: </span>
          {findBook?.price}$
        </p>
        <div className={style.buttons}>
          <button onClick={() => handleEditBook(findBook?.id)}>Edit </button>
          <button onClick={() => handleDeleteBook(findBook?.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
