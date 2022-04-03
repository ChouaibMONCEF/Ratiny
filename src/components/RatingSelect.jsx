import { useContext, useState, useEffect } from "react"
import RatingsContext from "../context/RatingsContext"

function RatingSelect({ select }) {
  const { rateEdit } = useContext(RatingsContext)
  const [selected, setSelected] = useState(10)


  useEffect(() => {
   setSelected(rateEdit.item.rating)
  }, [rateEdit])
  

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
