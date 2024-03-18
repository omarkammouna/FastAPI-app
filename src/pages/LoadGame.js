import React, { useState } from 'react'
import classes from '../assets/LoadGame.module.css'
import { ReactComponent as VectorGameType } from '../assets/vectors/VectorGameType.svg'
import { ReactComponent as VectorDropDown } from '../assets/vectors/VectorDropdown.svg'
import { ReactComponent as Logo } from '../assets/vectors/LogoPurpule.svg'
import { ReactComponent as Logout } from '../assets/vectors/Logout.svg'
import { ReactComponent as VectorSearch } from '../assets/vectors/VectorSearch.svg'
import { ReactComponent as VectorCourses } from '../assets/vectors/VectorCourses.svg'


const LoadGame = () => {
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

                
                
                
                
                
                
                <div className={classes.conSeven}>
                    <div className={classes.recSeven} />
                </div>

                <div className={classes.conSix}>
                    <div className={classes.recSix} />
                </div>

                <div className={classes.conFive}>
                    <div className={classes.recFive} />
                </div>

                <div className={classes.conFour}>
                    <div className={classes.recFour} />
                </div>
                <div className={classes.conThree}>
                    <div className={classes.recThree} />
                </div>

                <div className={classes.conTwo}>
                    <div className={classes.recTwo} />
                </div>
                
                <div className={classes.conOne}>
                    <div className={classes.recOne} />
                </div>

            </div>


        </div>
    )
}

export default LoadGame