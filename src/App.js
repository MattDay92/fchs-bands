import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {getDatabase, ref, set, onValue} from 'firebase/database'
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
import Store from './view/Store'
import PageNotFound from './view/PageNotFound'

export default function App({ storage, database }) {
  const [signUpLink, setSignUpLink] = useState(null)

  const getSignUpLink = () => {
    const db = getDatabase()
    const link = ref(db, '/signuplink/linkURL')

    onValue(link, (snapshot) => {
      const data = snapshot.val();
      setSignUpLink(data)
    })

  }

  useEffect(() => {
    getSignUpLink()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav storage={storage} />
        <Routes>
          <Route exact path={'/'} element={<Home getSignUpLink={getSignUpLink} signUpLink={signUpLink} />} />
          <Route exact path={'/marchingband'} element={<MarchingBand />} />
          <Route exact path={'/staff'} element={<Staff />} />
          <Route exact path={'/fees'} element={<Fees />} />
          <Route exact path={'/colorguard'} element={<ColorGuard />} />
          <Route exact path={'/concertband'} element={<ConcertBand />} />
          <Route exact path={'/windensemble'} element={<WindEnsemble />} />
          <Route exact path={'/symphonicband'} element={<SymphonicBand />} />
          <Route exact path={'/jazzensemble'} element={<JazzEnsemble />} />
          <Route exact path={'/indoorpercussion'} element={<IndoorPercussion />} />
          <Route exact path={'/calendar'} element={<Calendar />} />
          <Route exact path={'/getinvolved'} element={<GetInvolved />} />
          <Route exact path={'/links'} element={<Links />} />
          <Route exact path={'/admin12345'} element={<Admin storage={storage} signUpLink={signUpLink} />} />
          <Route exact path={'/equipmentsales'} element={<Store />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

