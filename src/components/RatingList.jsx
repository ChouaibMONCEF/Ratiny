import { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import RatingItem from "./RatingItem"
import RatingsContext from "../context/RatingsContext"
import Spinner from "./shared/Spinner"

function RatingList() {
  const { rate, isLoading } = useContext(RatingsContext)

  if (!isLoading && (!rate || rate.length === 0)) {
    return <p>No ratings yet</p>
  } else {
    return isLoading ? <Spinner /> : ( <div className='feedback-list'>
        <AnimatePresence>
          {rate.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <RatingItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>)
  }
}

export default RatingList
