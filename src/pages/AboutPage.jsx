import React from "react"
import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>Just practicing react to learn new stuff!! </p>
      <p>Version 0.1</p>
      <Link to='/'>
        <p>Back Home</p>
      </Link>
    </Card>
  )
}

export default AboutPage
