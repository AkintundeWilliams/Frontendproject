import '../css/Body.css';
import React from 'react';
import Datensatz from './Resources/Datensatz'
import Details from './Resources/Details'

const Body = () => {
  return (
    <div className='wrap'>
        <Details/>

        <Datensatz/>
    </div>
  )
}

export default Body