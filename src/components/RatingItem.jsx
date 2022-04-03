import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import RatingsContext from "../context/RatingsContext"

function RatingItem({ item }) {
  const { deleteRate, editRating } = useContext(RatingsContext)

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteRate(item.id)} className='close'>
        <FaTimes color='white' />
      </button>
      <button className='edit' onClick={() => editRating(item)}>
        <FaEdit color='white' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default RatingItem
