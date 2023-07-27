import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './view/Home'
import MarchingBand from './view/MarchingBand'
import Staff from './view/Staff'
import Fees from './view/Fees'
import ConcertBand from './view/ConcertBand'
import ColorGuard from './view/ColorGuard'
import WindEnsemble from './view/WindEnsemble'
import SymphonicBand from './view/SymphonicBand'
import JazzEnsemble from './view/JazzEnsemble'
import IndoorPercussion from './view/IndoorPercussion'
import Calendar from './view/Calendar'
import GetInvolved from './view/GetInvolved'
import Links from './view/Links'
import Admin from './view/Admin'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/marchingband'} element={<MarchingBand />} />
          <Route path={'/staff'} element={<Staff />} />
          <Route path={'/fees'} element={<Fees />} />
          <Route path={'/colorguard'} element={<ColorGuard />} />
          <Route path={'/concertband'} element={<ConcertBand />} />
          <Route path={'/windensemble'} element={<WindEnsemble />} />
          <Route path={'/symphonicband'} element={<SymphonicBand />} />
          <Route path={'/jazzensemble'} element={<JazzEnsemble />} />
          <Route path={'/indoorpercussion'} element={<IndoorPercussion />} />
          <Route path={'/calendar'} element={<Calendar />} />
          <Route path={'/getinvolved'} element={<GetInvolved />} />
          <Route path={'/links'} element={<Links />} />
          <Route path={'/admin'} element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

