import React from "react"

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>Rating App</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Rating App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "rgba(255,255,255,0.7)",
}

export default Header
