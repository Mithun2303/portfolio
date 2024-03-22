import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { LandingPage } from './LandingPage'
import {S} from "./crc";
import {H} from "./h";
function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path="/crc" element={<S/>}/>
      <Route path="/h" element={<H/>}/>

      </Routes>
      </BrowserRouter>
  )

}

export default App
