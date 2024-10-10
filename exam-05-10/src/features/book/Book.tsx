import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import styles from "./Book.module.css"
import Rating from "../rating/Rating"
import AddComment from "../addComment/AddComment"

const Book = () => {
  const { id } = useParams()
  const books = useAppSelector(state => state.books)
  const navigate = useNavigate()
  const foundBook = books.books.find(book => book.id === id)
  console.log(foundBook, "foundBook")
  console.log(foundBook?.comments, "foundBook")

  return (
    <>
      <div className={styles.container}>
        <div className={styles.book} key={foundBook?.id}>
          <h3>{foundBook?.title}</h3>
          <p>{foundBook?.author}</p>
          <img
            className={styles.image}
            src={foundBook?.photo}
            alt={foundBook?.title}
          />
          <div>
            Rating:{" "}
            {
              <Rating
                id={Number(foundBook?.id)}
                rate={foundBook?.totalRating}
              />
            }
          </div>
        </div>
        <div>
          {foundBook?.comments?.map(info => (
            <div key={info.id}>
              <p>{info.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <AddComment />
    </>
  )
}

export default Book
