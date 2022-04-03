import React from "react"

function Card({ children, reverse }) {
  return <div className={reverse ? "card reverse" : "card"}>{children}</div>
}

Card.defaultProps = {
  reverse: true,
}

export default Card
