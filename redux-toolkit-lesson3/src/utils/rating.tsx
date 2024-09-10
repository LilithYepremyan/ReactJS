import { useEffect, useState } from "react"
import type { IRate } from "../features/products/types"
import { useAppDispatch } from "../app/hooks"
import { updateRate } from "../features/products/procucts.slice"

const Rating: React.FC<IRate> = ({ id, rate }) => {
  const filled =
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-256.png"
  const empty =
    "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-256.png"

  const [rating, setRating] = useState<number[]>([0, 0, 0, 0, 0])

  const dispatch = useAppDispatch()

  const showTempralRate = (value: number) => {
    const temp = [...rating]
    temp.fill(1, 0, value)
    temp.fill(0, value)

    setRating(temp)
  }

  const loadDefaultRate = () => {
    const temp = [...rating]
    temp.fill(1, 0, rate)
    temp.fill(0, rate)

    setRating(temp)
  }

  useEffect(() => {
    loadDefaultRate()
  }, [])

  return (
    <div>
      {rating.map((star, i) => (
        <img
          key={i}
          style={{ width: 40, height: 40 }}
          alt="img"
          src={star === 0 ? empty : filled}
          onMouseLeave={loadDefaultRate}
          onMouseEnter={() => showTempralRate(i + 1)}
          onClick={() => dispatch(updateRate({ id, rate: i + 1 }))}
        />
      ))}
    </div>
  )
}

export default Rating
