import React, { useState, useEffect } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://project-express-api-uowr37jooq-lz.a.run.app/development/Very%20high')
      .then((response) => response.json())
      .then((country) => setCountries(country));
  }, []);
  return (
    <div>
      <h1>This should be the start page</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.Country}>
            <h2>{country.Country}</h2>
            <p>GII: {country.GII}</p>
            <p>Rank: {country.Rank}</p>
            <p>Human Development: {country.Human_development}</p>
            <p>GII: {country.GII}</p>
            <p>Rank: {country.Rank}</p>
            <p>Maternal Mortality: {country.Maternal_mortality}</p>
            <p>Adolescent Birth Rate: {country.Adolescent_birth_rate}</p>
            <p>Seats in Parliament: {country.Seats_parliament}</p>
            <p>Female Secondary Education: {country.F_secondary_educ}</p>
            <p>Male Secondary Education: {country.M_secondary_educ}</p>
            <p>Female Labour Force: {country.F_Labour_force}%</p>
            <p>Male Labour Force: {country.M_Labour_force}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CountryList;
