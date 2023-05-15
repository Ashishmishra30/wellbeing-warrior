import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Bmi from '../Pages/BmiCalculator/Bmi'
import Dash from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Error from '../component/Error'
import PrivateRoute from '../component/PrivateRoute'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bmi" element={<PrivateRoute><Bmi/></PrivateRoute>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dash/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default Allroutes