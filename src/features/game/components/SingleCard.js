import React from 'react'
import classes from '../assets/SingleCard.module.css'

const SingleCard = ({card, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className={classes.card} >
            <div className={`${flipped ? classes.flipped : ''}`}>
                <img className={classes.front} src={card.src} alt='card front' />
                <img className={classes.back} 
                src="img/CardBackPlay.svg" 
                alt='card front'
                onClick={handleClick} />
            </div>

        </div>
    )
}

export default SingleCard

