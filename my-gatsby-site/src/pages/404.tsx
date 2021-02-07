import React from "react"
import { Link } from "gatsby"

const NotFoundPage: React.FC = () => {
  return (
    <main>
      <h1>404Page</h1>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFoundPage
