import { createContext, useEffect, useState } from "react"

const RatingsContext = createContext()

export const RatingsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [rate, setRate] = useState([])

  const [rateEdit, setRateEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchrate()
  }, [])

  const fetchrate = async () => {
    const respose = await fetch(
      `/rate?_sort=id&_order=desc`
    )
    const data = await respose.json()
    setRate(data)
    setIsLoading(false)
  }

  const editRating = (item) => {
    setRateEdit({
      item,
      edit: true,
    })
  }

  const updateRate = async (id, uitem) => {
    const response = await fetch(`/rate/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(uitem)
    })
    const data = await response.json() 

    setRate(rate.map((item) => (item.id === id ? { ...item, ...data } : item)))
  }

  const addRating = async (newRating) => {
    const response = await fetch('/rate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRating)
    })

    const data = await response.json()

    setRate([data, ...rate])

  }

  const deleteRate = async (id) => {
    if (window.confirm("Are you Sure you wanna delete ?")) {
      await fetch(`/rate/${id}`, { method: "DELETE" })
      setRate(rate.filter((rating) => rating.id !== id))
    }
  }

  return (
    <RatingsContext.Provider
      value={{
        rate,
        deleteRate,
        addRating,
        isLoading,
        editRating,
        rateEdit,
        updateRate,
      }}
    >
      {children}
    </RatingsContext.Provider>
  )
}

export default RatingsContext
