import React from 'react'
import classes from '../assets/MainHeader.module.css'
import CartButton from '../components/CartButton'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Renouveler mes Abonnements</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
