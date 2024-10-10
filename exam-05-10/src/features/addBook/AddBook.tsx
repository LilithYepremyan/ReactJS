import { useForm } from "react-hook-form"
import { addBook } from "../books/booksSlice"
import { useAppDispatch } from "../../app/hooks"
import { useState } from "react"
import styles from "./AddBook.module.css"
import { useNavigate } from "react-router-dom"

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [photo, setPhoto] = useState("")

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const handleAddBook = () => {
    dispatch(
      addBook({
        id: new Date().getTime(),
        title,
        author,
        photo,
        totalRating: 0,
        comments: [],
      }),
    ).unwrap()
    navigate("/books")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddBook)} className={styles.formBlock}>
        <p style={{ color: "red" }}>
          {errors.text ? "Please fill all the fields" : ""}
        </p>
        <label>Title</label>
        <input
          value={title}
          {...register("text", { required: true, minLength: 1 })}
          className={styles.input}
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          value={author}
          {...register("text", { required: true, minLength: 1 })}
          className={styles.input}
          type="text"
          placeholder="Author"
          onChange={e => setAuthor(e.target.value)}
        />
        <label>Photo</label>
        <input
          value={photo}
          type="text"
          placeholder="Photo"
          {...register("text", { required: true, minLength: 1 })}
          className={styles.input}
          onChange={e => setPhoto(e.target.value)}
        />
        <button className={styles.button}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
