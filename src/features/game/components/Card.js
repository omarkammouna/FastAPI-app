import React from 'react'
import classes from '../assets/Card.module.css'
import { ReactComponent as VectorImage } from '../assets/vectors/VectorImage.svg'
import { ReactComponent as VectorSound } from '../assets/vectors/VectorSound.svg'
import { useDrag } from "react-dnd";
const Card = (props) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { id: props.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));

    return (
        <div className={classes.card} ref={drag} style={{ opacity: isDragging ? 0 : 1 }}>
            <div className={classes.image}>
                <div className={classes.content}>
                    {/* <VectorImage className={classes.vectorImage} /> */}
                    <img src={props.cardImage}/>
                </div>
            </div>
            <div className={classes.text}>
                {props.cardText}
            </div>
            <div className={classes.sound}>
                <VectorSound className={classes.vectorSound} />
            </div>
        </div>
    )
}

export default Card