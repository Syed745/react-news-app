import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayOut from '../pages/layOut'
import SMLogin from '../pages/login'

export default function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<LayOut />} />
        <Route path='login' element={<SMLogin />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
