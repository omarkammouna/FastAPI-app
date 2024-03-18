import React from 'react'
import classes from '../assets/CropImage.module.css'
import { ReactComponent as VectorExitPop } from '../assets/vectors/VectorExitPop.svg'

const CropImage = (props) => {
    return (props.trigger) ? (
        <div className={classes.modalBackdrop}>
            <div className={classes.bg}>
                {props.children}
                <VectorExitPop className={classes.exit} onClick={() => { props.setTrigger(false) }} />
                <div className={classes.title}>Ajuster Photo</div>
                <div className={classes.body}>

                </div>
                <div className={classes}>
                    <div className={classes.text}>Ajouter</div>
                </div>
            </div>
        </div>
    ) : "";
}

export default CropImage