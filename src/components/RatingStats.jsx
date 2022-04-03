import { useContext } from "react"
import RatingsContext from "../context/RatingsContext"



function RatingStats() {
  const {rate} = useContext(RatingsContext)

  let average =
    rate.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / rate.length

  average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className='feedback-stats'>
      <h4>{rate.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

export default RatingStats
