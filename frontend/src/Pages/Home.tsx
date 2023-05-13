import React from 'react'
import { Navbar } from '../component/Navbar';
import Bmi from './BmiCalculator/Bmi';

// nhi krna
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Bmi/>
    </div>
  )
}

export default Home