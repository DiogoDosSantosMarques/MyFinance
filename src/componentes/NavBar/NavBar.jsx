import React from 'react'

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

      <Link to="/">

      <span> My Finance</span>

    </Link>

            <ul>
            
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/transacoes">Transações</Link>
              </li>
            </ul>
      
    </nav>
  )
}

export default NavBar
