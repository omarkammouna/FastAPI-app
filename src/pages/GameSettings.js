import React, { useState } from 'react'
import classes from '../assets/GameSetting.module.css'

import { ReactComponent as VectorEdit } from '../assets/vectors/VectorEdit.svg'
import { ReactComponent as VectorGameType } from '../assets/vectors/VectorGameType.svg'
import { ReactComponent as VectorDropDown } from '../assets/vectors/VectorDropdown.svg'
import { ReactComponent as VectorExpand } from '../assets/vectors/VectorExpand.svg'
import { ReactComponent as Logo } from '../assets/vectors/LogoPurpule.svg'
import { ReactComponent as Logout } from '../assets/vectors/Logout.svg'
import { ReactComponent as VectorChooseGame } from '../assets/vectors/VectorChooseGame.svg'
import { ReactComponent as VectorSearch } from '../assets/vectors/VectorSearch.svg'
import { ReactComponent as VectorCourses } from '../assets/vectors/VectorCourses.svg'
import { ReactComponent as VectorAssisted } from '../assets/vectors/VectorAssisted.svg'
import { ReactComponent as VectorHelp } from '../assets/vectors/VectorHelp.svg'
import { ReactComponent as VectorTwoCards } from '../assets/vectors/VectorTwoCards.svg'
import { ReactComponent as VectorThreeCards } from '../assets/vectors/VectorThreeCards.svg'
import { ReactComponent as VectorFourCards } from '../assets/vectors/VectorFourCards.svg'
import { ReactComponent as VectorPreview } from '../assets/vectors/VectorPreview.svg'
import { ReactComponent as VectorText } from '../assets/vectors/VectorText.svg'
import { ReactComponent as VectorImage } from '../assets/vectors/VectorPicture.svg'
import { ReactComponent as VectorSound } from '../assets/vectors/VectorSound.svg'
import { ReactComponent as VectorPlay } from '../assets/vectors/VectorPlay.svg'
import { ReactComponent as VectorTime } from '../assets/vectors/VectorTime.svg'
import { ReactComponent as VectorSlow } from '../assets/vectors/VectorSlow.svg'
import { ReactComponent as VectorFast } from '../assets/vectors/VectorFast.svg'
import { ReactComponent as VectorMedium } from '../assets/vectors/VectorMedium.svg'


const GameSettings = () => {


    const [gameType, setGameType] = useState(false);
    const [cardCount, setCardCount] = useState(2);
    const [assisted, setAssisted] = useState(false);
    const [preview, setPreview] = useState(false);


    const toggleBlur = () => {
        setPreview(!preview);
    };


    const toggleAssist = () => {
        setAssisted(!assisted);
    };

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
                    <div className={classes.game}>
                        <input className={classes.namePlaceholder} placeholder='Nom Du Jeu' />
                        <div className={classes.edit}>
                            <VectorEdit className={classes.vectorEdit} />
                        </div>
                        <div className={`${assisted ? `${classes.assisted} ${classes.activeAssist}` : classes.assisted}`}>
                            <VectorAssisted className={classes.assistedVector} />
                            <div className={classes.nameAssisted}>Assitance</div>
                            <label className={classes.switch}>
                                <input type="checkbox" onChange={()=>{toggleAssist()}} />
                                <span className={classes.slider} />
                            </label>
                        </div>
                        <div className={classes.expand}>
                            <VectorExpand className={classes.vectorExpand} />
                        </div>
                    </div>
                    <div className={classes.chooseGame}>
                        <VectorChooseGame className={classes.vectorChooseGame} />
                        <div className={classes.label}>CHOISIR JEU</div>
                        <div className={classes.vectorUnder}></div>
                    </div>
                    <div className={classes.filters}>
                        <div className={classes.filterElement}>
                            <div className={classes.content}>
                                <div className={classes.name}>Matière</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement}>
                            <div className={classes.content}>
                                <div className={classes.name}>Thème</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement}>
                            <div className={classes.content}>
                                <div className={classes.name}>Sous-Thème</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement}>
                            <div className={classes.content}>
                                <div className={classes.name}>Chapitre</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement}>
                            <div className={classes.content}>
                                <div className={classes.name}>Compétance</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={classes.gameContainer}>
                    <div className={classes.help}>
                        <VectorHelp className={classes.vector} />
                    </div>
                    <div className={classes.cardSwitcher}>
                        <div className={classes.firstChoice} onClick={() => setCardCount(2)}>
                            <VectorTwoCards className={classes.twoCardsVector} />
                        </div>
                        <div className={classes.secondChoice} onClick={() => setCardCount(3)}>
                            <VectorThreeCards className={classes.threeCardsVector} />
                        </div>
                        <div className={classes.thirdChoice} onClick={() => setCardCount(4)}>
                            <VectorFourCards className={classes.fourCardsVector} />
                        </div>
                    </div>
                    <div className={classes.preview}>
                        <VectorPreview className={classes.previewVector} />
                        <div className={classes.previewName}>Prévisualiser </div>
                        <label className={classes.switch}>
                            <input type="checkbox" onChange={toggleBlur} />
                            <span className={classes.slider} />
                        </label>
                    </div>
                    <div className={classes.half}>
                        <div className={classes.firstChoice}>
                            <div className={classes.name}>Comlpet </div>
                        </div>
                        <div className={classes.secondChoice}>
                            <div className={classes.name}>Moitié </div>
                        </div>
                    </div>

                    {cardCount === 2 && <div className={classes.cardType}>
                        <div className={classes.titleList}>
                            <div className={classes.title}>Card 1</div>
                            <div className={classes.title}>Card 2</div>

                        </div>
                        <div className={classes.cardList}>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>

                        </div>
                    </div>
                    }
                    {cardCount === 3 && <div className={classes.cardType}>
                        <div className={classes.titleList}>
                            <div className={classes.title}>Card 1</div>
                            <div className={classes.title}>Card 2</div>
                            <div className={classes.title}>Card 3</div>
                        </div>
                        <div className={classes.cardList}>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    {cardCount === 4 && <div className={classes.cardType}>
                        <div className={classes.titleList}>
                            <div className={classes.title}>Card 1</div>
                            <div className={classes.title}>Card 2</div>
                            <div className={classes.title}>Card 3</div>
                            <div className={classes.title}>Card 4</div>
                        </div>
                        <div className={classes.cardList}>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.text}>
                                    <VectorText className={classes.textVector} />
                                </div>
                                <div className={classes.sound}>
                                    <VectorSound className={classes.soundVector} />
                                </div>
                                <div className={classes.image}>
                                    <VectorImage className={classes.imageVector} />
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    {/* {preview && <div className={classes.speed}>
                        <div className={classes.option}>
                            <div className={classes.image}>
                                <VectorSlow className={classes.vector} />
                            </div>
                            <div className={classes.text}>lent</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>60 seconds</div>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <div className={classes.image}>
                                <VectorMedium className={classes.vector} />
                            </div>
                            <div className={classes.text}>normal</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>45 seconds</div>
                            </div>
                        </div>
                        <div className={classes.option}>
                            <div className={classes.image}>
                                <VectorFast className={classes.vector} />
                            </div>
                            <div className={classes.text}>rapide</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>30 seconds</div>
                            </div>
                        </div>
                    </div>} */}
                    <div className={classes.speed}>
                        <div className={`${!preview ? `${classes.option} ${classes.optionDisabled}` : classes.option}`}>
                            <div className={classes.image}>
                                <VectorSlow className={classes.vector} />
                            </div>
                            <div className={classes.text}>lent</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>60 seconds</div>
                            </div>
                        </div>
                        <div className={`${!preview ? `${classes.option} ${classes.optionDisabled}` : classes.option}`} onClick={()=>console.log('clicked')}>
                            <div className={classes.image}>
                                <VectorMedium className={classes.vector} />
                            </div>
                            <div className={classes.text}>normal</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>45 seconds</div>
                            </div>
                        </div>
                        <div className={`${!preview ? `${classes.option} ${classes.optionDisabled}` : classes.option}`}>
                            <div className={classes.image}>
                                <VectorFast className={classes.vector} />
                            </div>
                            <div className={classes.text}>rapide</div>
                            <div className={classes.timeFrame}>
                                <div className={classes.vectorFrame}>
                                    <VectorTime className={classes.vector} />
                                </div>
                                <div className={classes.time}>30 seconds</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.playButton}>
                        <div className={classes.vectorContainer}>
                            <VectorPlay className={classes.vector}></VectorPlay>
                        </div>
                        <div className={classes.text}>Jouer</div>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default GameSettings