import React from 'react'
import logo from '../images/beach.png'
import './Header.css'

const Header = ({year = 2022}) => {

  return (
    <>
        <h1><span><img src={logo} alt="Logo" /></span>Feriados Chile {year} </h1>
    </>
  )
}

export default Header