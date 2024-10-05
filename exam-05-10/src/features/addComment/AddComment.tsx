import { useState } from "react"
import styles from "./AddComment.module.css"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { addRate } from "../books/booksSlice"

const AddComment = () => {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState(0)
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

//   const handleAddComment = () => {
//     dispatch(addRate({ id: Number(id), comment, rate })).unwrap()
//     // navigate("/books")
//   }
  const { register, handleSubmit } = useForm({})

  return (
    <div className={styles.formBlock}>
      AddComment
      <form onSubmit={handleSubmit(handleAddComment)}>
        <input
          {...register("comment")}
          placeholder="Add Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        ></input>
        <span>Add Rate</span>
        <select
          name="rating"
          id=""
          value={rate}
          onChange={e => setRate(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddComment
