import React from 'react'
import classes from '../assets/SaveGame.module.css'
import { ReactComponent as VectorExit } from '../assets/vectors/VectorExitPop.svg'
import { ReactComponent as VectorSave } from '../assets/vectors/VectorSavePop.svg'
const SaveGame = (props) => {
    return (props.trigger) ? (
        <div className={classes.modalBackdrop}>
            <div className={classes.bg}>
                {props.children}
                <VectorExit className={classes.exit} onClick={() =>{props.setTrigger(false)}}/>
                <div className={classes.title}>Sauvegarder le jeu?</div>
                <div className={classes.body}>
                    <VectorSave className={classes.saveVector} />
                </div>
                <div className={classes.button}>
                    <div className={classes.text}>Sauvegarder</div>
                </div>
            </div>
        </div>
    ) : "";
}

export default SaveGame