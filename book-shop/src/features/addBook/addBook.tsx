import { useState } from "react"
import styles from "./addBook.module.css"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addBook } from "../books/booksSlice"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
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

  const handleAddBook = (data: any) => {
    const bookData = {
      id: String(Date.now()),
      ...data,
    }
    dispatch(addBook(bookData)).unwrap()
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleAddBook)}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
        <input
          type="text"
          placeholder="Author"
          {...register("author", { required: "Author is required" })}
        />
        {errors.author && (
          <span className={styles.error}>{errors.author.message}</span>
        )}
        <input
          type="text"
          placeholder="Author Info"
          {...register("authorInfo", { required: "Author Info is required" })}
        />
        {errors.authorInfo && (
          <span className={styles.error}>{errors.authorInfo.message}</span>
        )}
        <input
          type="text"
          placeholder="Book Info"
          {...register("bookInfo", { required: "Book Info is required" })}
        />
        {errors.bookInfo && (
          <span className={styles.error}>{errors.bookInfo.message}</span>
        )}
        <input
          type="number"
          placeholder="Rating"
          {...register("rating", {
            required: "Rating is required and can be only from 0 to 5",
            min: 0,
            max: 5,
            pattern: /^[0-5]$/,
          })}
        />
        {errors.rating && (
          <span className={styles.error}>{errors.rating.message}</span>
        )}
        <input
          type="text"
          placeholder="Photo URL"
          {...register("photo", { required: "Photo URL is required" })}
        />
        {errors.photo && (
          <span className={styles.error}>{errors.photo.message}</span>
        )}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: "Price is required" })}
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
