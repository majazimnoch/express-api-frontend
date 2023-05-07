import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from 'components/Header'
import Links from 'components/Links'
import LowCountries from 'components/LowCountries'
import MediumCountries from 'components/MediumCountries'
import HighCountries from 'components/HighCountries'
import VeryHigh from 'components/VeryHigh'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <Links />
        <Routes>
          <Route path="/low" element={<LowCountries />} />
          <Route path="/medium" element={<MediumCountries />} />
          <Route path="/high" element={<HighCountries />} />
          <Route path="/very" element={<VeryHigh />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}