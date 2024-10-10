import { useState } from "react"
import styles from "./AddComment.module.css"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { updateBookRatingAndComment } from "../books/booksSlice"

type FormData = {
  comment: string
  email: string
  rate: number
}

const AddComment = () => {
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState(0)
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const handleAddCommentAndRating = (data: FormData) => {
    console.log(data, "data")
    dispatch(
      updateBookRatingAndComment({
        id: Number(id),
        comment: data.comment,
        rate: +data.rate,
        email: data.email,
      }),
    )

    reset()
    navigate("/books")
  }

  return (
    <div className={styles.formBlock}>
      <h2>Add Comment</h2>
      <form onSubmit={handleSubmit(handleAddCommentAndRating)}>
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <input
          type="email"
          placeholder="Add Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />

        {errors.comment && (
          <span style={{ color: "red" }}>Comment is required</span>
        )}
        <input
          {...register("comment", { required: true })}
          placeholder="Add Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <span>Add Rate</span>
        {errors.rate && (
          <span style={{ color: "red" }}>Please select a rating</span>
        )}
        <select
          {...register("rate", { required: true })}
          value={rate}
          onChange={e => setRate(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default AddComment
