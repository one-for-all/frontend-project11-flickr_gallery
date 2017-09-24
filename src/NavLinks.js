import React from 'react'
import { NavLink } from 'react-router-dom'

// Navigation links
function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/cat/'>Cats</NavLink></li>
        <li><NavLink to='/dog/'>Dogs</NavLink></li>
        <li><NavLink to='/computer/'>Computers</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
