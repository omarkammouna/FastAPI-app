import React, { useState } from 'react'
import classes from '../assets/GameLearn.module.css'
import { ReactComponent as VectorGameType } from '../assets/vectors/VectorGameType.svg'
import { ReactComponent as VectorDropDown } from '../assets/vectors/VectorDropdown.svg'
import { ReactComponent as Logo } from '../assets/vectors/LogoPurpule.svg'
import { ReactComponent as Logout } from '../assets/vectors/Logout.svg'
import { ReactComponent as VectorSearch } from '../assets/vectors/VectorSearch.svg'
import { ReactComponent as VectorCourses } from '../assets/vectors/VectorCourses.svg'
import { ReactComponent as VectorExpand } from '../assets/vectors/VectorExpand.svg'
import { ReactComponent as VectorClock } from '../assets/vectors/VectorClock.svg'
import { ReactComponent as VectorHelp } from '../assets/vectors/VectorHelp.svg'
import { ReactComponent as VectorHeart } from '../assets/vectors/VectorHeart.svg'




const GameLearn = () => {


    const [gameType, setGameType] = useState(false);


    return (
        <div className={classes.bg}>
            <div className={classes.sideNav}>
                <div className={classes.logo}>
                    <Logo className={classes.vector} />
                </div>
                <div className={classes.line} />
                <div className={classes.user}>
                    <div className={classes.pdp} ></div>
                    <div className={classes.username}>
                        Mr. Mahmoud
                    </div>
                    <div className={classes.role}>
                        Administrateur
                    </div>
                    <VectorDropDown className={classes.vector} />
                </div>
                <div className={classes.search}>
                    <VectorSearch className={classes.searchVector} />
                    <input className={classes.name} placeholder='Rechercher' />
                </div>
                <div className={classes.options}>

                    {gameType === false &&
                        <div className={classes.elementContainer}>
                            <div className={classes.optionElement} onClick={() => setGameType(true)}>
                                <VectorGameType className={classes.optionVector} />
                                <div className={classes.optionName}>Type Du Jeu</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>

                    }
                    {gameType === true &&
                        <div className={classes.elementContainer} >
                            <div className={classes.optionElement} onClick={() => setGameType(false)}>
                                <VectorGameType className={classes.optionVector} />
                                <div className={classes.optionName}>Type Du Jeu</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                            <div className={classes.list}>
                                <div className={classes.listElement}>Je m'entraine</div>
                                <div className={classes.listElement}>Je m'évalue</div>
                            </div>

                        </div>




                    }

                    <div className={classes.elementContainer}>
                        <div className={classes.optionElement}>
                            <VectorCourses className={classes.optionVector} />
                            <div className={classes.optionName}>Cours</div>
                        </div>
                    </div>


                </div>
                <div className={classes.logout}>

                    <div className={classes.icon}>
                        <Logout />
                    </div>
                    <div className={classes.message}>Se Déconnecter</div>

                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.header}>
                    <div className={classes.expand}>
                        <VectorExpand className={classes.vectorExpand} />
                    </div>
                    <div className={classes.timer}>
                        <div className={classes.time}>

                        </div>
                        <div className={classes.clockFrame}>
                            <div className={classes.clock}>
                                <VectorClock className={classes.vectorClock} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.hearts}>
                        <VectorHeart className={classes.firstHeart} >
                        </VectorHeart>
                        <VectorHeart className={classes.secondHeart} />
                        <VectorHeart className={classes.thirdHeart} />



                    </div>
                    <div className={classes.gameName}>

                        <div className={classes.length}>
                            Mode Complet
                        </div>
                        <div className={classes.name}>
                            Fruits & Légumes
                        </div>

                        <div className={classes.underLine}>
                            <div className={classes.line}>

                            </div>
                        </div>
                    </div>
                    <div className={classes.score}>
                        <div className={classes.total}>
                            t
                        </div>
                        <div className={classes.correct}>
                            c
                        </div>
                        <div className={classes.incorrect}>
                            i
                        </div>

                    </div>


                    <div className={classes.assisted}>

                    </div>



                    <div className={classes.pause}>

                    </div>

                </div>
                <div className={classes.main}>
                    <div className={classes.help}>
                        <VectorHelp className={classes.vector} />

                    </div>

                </div>



            </div>


        </div>
    )
}

export default GameLearn