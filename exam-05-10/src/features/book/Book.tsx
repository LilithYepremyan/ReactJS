import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import styles from "./Book.module.css"
import Rating from "../rating/Rating"

const Book = () => {
  const { id } = useParams()
  const books = useAppSelector(state => state.books)
const navigate = useNavigate()
  const foundBook = books.books.find(book => book.id === id)

  return (
    <>
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
          {<Rating id={Number(foundBook?.id)} rate={foundBook?.rating} />}
        </div>
      </div>
      <div>
        {foundBook?.comments?.map(comment => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        ))}
        <button onClick={() => navigate(`/addComment/${id}`)}>Add Comment</button>
      </div>
    </>
  )
}

export default Book
