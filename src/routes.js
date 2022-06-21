import React from 'react'
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './Home/Home'
import Giffs from './Giffs/Giffs'

export default function Ola() {
  return (
      <BrowserRouter>
        <Routes >
            <Route path='/' element = {<Home/>}/>
            <Route path = '/giffs' element = {<Giffs/>}/>
        </Routes>
      </BrowserRouter>
  )
}
