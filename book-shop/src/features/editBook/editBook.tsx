import { useState } from "react"
import styles from "./editBook.module.css"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useNavigate, useParams } from "react-router-dom"
import { editBook } from "../books/booksSlice"

const EditBook = () => {
  const { id } = useParams()
  const books = useAppSelector(state => state.books.books)

  const foundBook = books.find(book => book.id === id)
  console.log(foundBook)

  const [title, setTitle] = useState(foundBook?.title)
  const [author, setAuthor] = useState(foundBook?.author)
  const [authorInfo, setAuthorInfo] = useState(foundBook?.authorInfo)
  const [photo, setPhoto] = useState(foundBook?.photo)
  const [bookInfo, setBookInfo] = useState(foundBook?.bookInfo)
  const [price, setPrice] = useState(foundBook?.price)
  const [genres, setGenres] = useState(foundBook?.genres)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSelectedGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      option => option.value,
    )
    setSelectedGenres(selected)
  }

  const handleEditBook = (data: any) => {
    const bookData = {
      id: foundBook?.id,
      ...data,
    }
    dispatch(editBook(bookData)).unwrap()
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleEditBook)}>
        <h3>Edit Book Details</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
          defaultValue={foundBook?.title}
          onChange={e => setTitle(e.target.value)}
        />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
        <label htmlFor="author">Author</label>
        <input
          type="text"
          placeholder="Author"
          defaultValue={foundBook?.author}
          {...register("author", { required: "Author is required" })}
          onChange={e => setAuthor(e.target.value)}
        />
        {errors.author && (
          <span className={styles.error}>{errors.author.message}</span>
        )}
        <label htmlFor="authorInfo">Author Info</label>
        <textarea
          rows={4}
          type="text"
          placeholder="Author Info"
          defaultValue={foundBook?.authorInfo}
          {...register("authorInfo", { required: "Author Info is required" })}
          onChange={e => setAuthorInfo(e.target.value)}
        />
        {errors.authorInfo && (
          <span className={styles.error}>{errors.authorInfo.message}</span>
        )}
        <label htmlFor="bookInfo">Book Info</label>
        <textarea
          rows={4}
          type="text"
          placeholder="Book Info"
          defaultValue={foundBook?.bookInfo}
          {...register("bookInfo", { required: "Book Info is required" })}
          onChange={e => setBookInfo(e.target.value)}
        />
        {errors.bookInfo && (
          <span className={styles.error}>{errors.bookInfo.message}</span>
        )}
        <label htmlFor="photo">Photo URL</label>
        <input
          type="text"
          placeholder="Photo URL"
          defaultValue={foundBook?.photo}
          {...register("photo", { required: "Photo URL is required" })}
          onChange={e => setPhoto(e.target.value)}
        />
        {errors.photo && (
          <span className={styles.error}>{errors.photo.message}</span>
        )}
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="Rating"
          defaultValue={foundBook?.rating}
          {...register("rating", { required: "Rating is required" })}
          onChange={e => setPrice(Number(e.target.value))}
        />
        {errors.rating && (
          <span className={styles.error}>{errors.rating.message}</span>
        )}
        <label htmlFor="price">Price</label>
        <input
          type="number"
          placeholder="Price"
          defaultValue={foundBook?.price}
          {...register("price", { required: "Price is required" })}
          onChange={e => setPrice(Number(e.target.value))}
        />
        {errors.price && (
          <span className={styles.error}>{errors.price.message}</span>
        )}

        <label htmlFor="genres">Genre</label>
        <select
          {...register("genres", { required: "Genres is required" })}
          name="genres"
          id="genres"
          multiple
          onChange={handleSelectedGenres}
          value={selectedGenres}
          defaultValue={foundBook?.genres}
          onRateChange={e => setGenres(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Classics">Classics</option>
          <option value="Fiction">Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Historical">Historical</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Gothic Fiction">Gothic Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Western">Western</option>
          <option value="Dystopian">Dystopian</option>
        </select>
        {errors.genres && (
          <span className={styles.error}>{errors.genres.message}</span>
        )}
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditBook
