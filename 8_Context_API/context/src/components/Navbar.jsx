import React from 'react'
import {NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/shopping">Shopping</NavLink>
    </nav>
  )
}

export default Navbar