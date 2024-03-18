import React from 'react'
import classes from '../assets/DeleteRow.module.css'
import { ReactComponent as VectorDelete } from '../assets/vectors/VectorDeletePop.svg'
import { ReactComponent as VectorExit } from '../assets/vectors/VectorExitPop.svg'
const DeleteRow = (props) => {

  const handleDelete = () => {
    props.delete();
    props.setTrigger(false)
  };

  return (props.trigger) ? (
    <div className={classes.modalBackdrop}>
      <div className={classes.bg}>
        <VectorExit className={classes.exit} onClick={() =>{props.setTrigger(false)}}/>
        <div className={classes.title}>Supprimer la ligne?</div>
        <div className={classes.body}>
          <VectorDelete className={classes.deleteVector} />
        </div>
        <div className={classes.button} onClick={handleDelete}>
          <div className={classes.text}>Supprimer</div>
        </div>
      </div>
    </div>
  ) : "";
}

export default DeleteRow