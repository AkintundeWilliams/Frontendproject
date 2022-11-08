import React from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
      <div class="topnav">
        <input class="Suche" type="text" placeholder="&#x1F50D; Auswahl.."></input>
        <button type="button" class="Abmelden">
          <span class="glyphicon"></span> <h1 class="Abmelden_text" style={{fontSize:25}}> Abmelden <i class="icon-signout"></i></h1>
        </button>
      </div>
    </>
  )
}

export default Navbar