import React from 'react'
import styles from '../../assets/Modal.module.css'

const Modal = (props) => {
  return (
    <div className={styles.Modal}>
      {props.children}
      <h3>Your new Purchase is :</h3>
      <p>Voulez-vous confirmer votre choix?</p>

    </div>
  )
}

export default Modal
