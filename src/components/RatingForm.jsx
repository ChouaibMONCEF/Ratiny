import { useContext, useState, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import RatingsContext from "../context/RatingsContext"

function RatingForm() {
  const { addRating, rateEdit, updateRate, setRateEdit } =
    useContext(RatingsContext)
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (rateEdit.edit === true) {
      setBtnDisabled(false)
      setComment(rateEdit.item.text)
      setRating(rateEdit.item.rating)
    }
  }, [rateEdit])

  const handleTextChange = (e) => {
    if (comment === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (comment !== "" && comment.trim().length <= 10) {
      let left = 10 - comment.length
      setMessage("You Need at least " + left + " Characters")
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim().length > 10) {
      const newRating = {
        text: comment,
        rating: rating,
      }
      if (rateEdit.edit === true) {
        updateRate(rateEdit.item.id, newRating)
        setRateEdit({
          item: {},
          edit: true,
        })
      } else {
        addRating(newRating)
      }

      setComment("")
    }
  }

  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>Rate Us!</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={comment}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Rate
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default RatingForm
