/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <h4>Explore the different facets of countries development </h4>
      <Link to="/"><button className="opening-button" type="button">Start page</button></Link>
    </div>
  )
}
export default Header;
