import React from 'react';
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Some info about countries and how developed ther are!</Link>
      </h1>
      <li>
        <Link to="/low">Low Developed Countries </Link>
      </li>
      <li>
        <Link to="/medium">Medium Developed Countries</Link>
      </li>
      <li>
        <Link to="/high">High Developed Countries</Link>
      </li>
      <li>
        <Link to="/very">Very High Developed Countries</Link>
      </li>
    </nav>
  )
}
export default Links;
