import { useEffect, useState } from "react"
import type { IRate } from "./Rating.types"
import { useAppDispatch } from "../../app/hooks"

const Rating: React.FC<IRate> = ({ id, rate }) => {
  const filled =
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-256.png"
  const empty =
    "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-256.png"

  const [rating, setRating] = useState<number[]>([0, 0, 0, 0, 0])
  const dispatch = useAppDispatch()

  // const showTemporalRate = (value: number) => {
  //   const temp = [...rating]
  //   temp.fill(1, 0, value)
  //   temp.fill(0, value)

  //   setRating(temp)
  // }


  const loadRate = () => {
    const temp = [...rating]
    temp.fill(1, 0, rate)
    temp.fill(0, rate)

    setRating(temp)
  }

  useEffect(() => {
    loadRate()
  }, [])

  return (
    <div>
      {rating &&
        rating.map((star, i) => (
          <img
            key={i}
            style={{ width: 25, height: 25 }}
            alt="img"
            src={star === 0 ? empty : filled}
            // onMouseLeave={loadRate}
            // onMouseEnter={() => showTemporalRate(i + 1)}
            // onClick={() =>{}}
          />
        ))}
    </div>
  )
}

export default Rating
