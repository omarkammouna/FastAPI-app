import React from 'react'
import { ReactComponent as VectorAddDropDown } from '../assets/vectors/VectorAddDropDown.svg'
import classes from '../assets/DropDown.module.css'

const DropDown = (props) => {
    return (
        <div className={classes.bg}>
            <div className={classes.ul}>
                {props.list && props.list.map((e) => {
                    return <div className={classes.li}>{e.name}</div>;
                })}

            </div>
            <div className={classes.add}>

                <VectorAddDropDown className={classes.vector} />
                <div className={classes.text}>{`Ajouter ${props.name}`}</div>
            </div>
        </div>
    )
}

export default DropDown