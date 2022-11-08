import React from 'react'
import Navbar from './Navb'
import '../css/Header.css'
import Dzlogo from '../images/Dzlogo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='image_logo'>
        <img classname = 'dzlogo' src={Dzlogo} height={40} width={240}/>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header