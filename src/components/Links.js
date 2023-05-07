/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className="head">
      <div className="head-title">
        <h5>Are you curious about where your country falls in the spectrum of development, or the proportion of women holding seats in parliament? Satiate your curiosity and discover the answers you seek with just a few clicks.</h5>
      </div>
      <h5>Explore the different facets of country development by selecting a category below to access the corresponding data.</h5>
      <div className="nav-links">
        <li>
          <Link to="/low">
            <button type="button"> Least Developed Countries</button>
          </Link>
        </li>
        <li>
          <Link to="/medium"><button type="button">Medium</button></Link>
        </li>
        <li>
          <Link to="/high"><button type="button">Higly Developed Countries</button></Link>
        </li>
        <li>
          <Link to="/very"><button type="button">Very Highly Developed Countries</button></Link>
        </li>
      </div>
    </div>
  )
}
export default Links;
