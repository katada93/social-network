import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/profile'>Profile</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/messages'>Messages</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/news'>News</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/music'>Music</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/settings'>Settings</NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink activeClassName='active-page' to='/users'>Users</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
