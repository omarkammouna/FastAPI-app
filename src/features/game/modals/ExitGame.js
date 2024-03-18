import React from 'react'
import classes from '../assets/ExitGame.module.css'
import { ReactComponent as VectorExit } from '../assets/vectors/VectorExitPop.svg'
import { ReactComponent as VectorDiscard } from '../assets/vectors/VectorDiscardPop.svg'

const ExitGame = (props) => {
  return (props.trigger) ? (
    <div className={classes.modalBackdrop}>
      <div className={classes.bg}>
        {props.children}
        <VectorExit className={classes.exit} onClick={() =>{props.setTrigger(false)}}/>
        <div className={classes.title}>Abandonner les modifications</div>
        <div className={classes.body}>
          <VectorDiscard className={classes.discardVector} />
        </div>
        <div className={classes.saveButton}>
          <div className={classes.text}>Sauvegarder</div>
        </div>
        <div className={classes.discardButton}>
          <div className={classes.text}>Abandonner</div>
        </div>
      </div>
    </div>
  ) : "";
}

export default ExitGame