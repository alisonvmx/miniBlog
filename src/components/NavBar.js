import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from "./NavBar.module.css"

const NavBar = () => {
  return <nav className={ Styles.navbar }>
    <NavLink to="/" className={ Styles.brand }>
      Mini<span>Blog</span>
    </NavLink>
    <ul className={ Styles.links_list }>
      <li >
        <NavLink 
          to="/" 
          className={({isActive})=> (isActive ? Styles.active : '')}
        >
          Home
        </NavLink>
      </li>
      <li >
        <NavLink 
          to="/login" 
          className={({isActive})=> (isActive ? Styles.active : '')}
          >
            Entrar
          </NavLink>
      </li>
      <li >
        <NavLink 
          to="/register" 
          className={({isActive})=> (isActive ? Styles.active : '')}
          >
            Cadastrar
          </NavLink>
      </li>
      <li >
        <NavLink 
          to="/about" 
          className={({isActive})=> (isActive ? Styles.active : '')}
          >
            Sobre
          </NavLink>
      </li>
    </ul>
  </nav>
}

export default NavBar