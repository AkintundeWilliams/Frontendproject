import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
             Neuanlage   
            </NavLink>

        </nav>
    
    </>
  )
}

export default Navbar