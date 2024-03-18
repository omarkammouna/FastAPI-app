import React from 'react'
import classes from '../assets/SideNav.module.css'
import { ReactComponent as VectorHelp } from '../assets/vectors/VectorHelp.svg'
import { ReactComponent as VectorEdit } from '../assets/vectors/VectorEdit.svg'
import { ReactComponent as VectorGameType } from '../assets/vectors/VectorGameType.svg'
import { ReactComponent as VectorDropDown } from '../assets/vectors/VectorDropdown.svg'
import { ReactComponent as VectorExpand } from '../assets/vectors/VectorExpand.svg'
import { ReactComponent as VectorSave } from '../assets/vectors/VectorSave.svg'
import { ReactComponent as Logo } from '../assets/vectors/LogoPurpule.svg'
import { ReactComponent as Logout } from '../assets/vectors/Logout.svg'
import { ReactComponent as VectorChooseGame } from '../assets/vectors/VectorChooseGame.svg'
import { ReactComponent as VectorCards } from '../assets/vectors/VectorCards.svg'
import { ReactComponent as VectorSearch } from '../assets/vectors/VectorSearch.svg'
import { ReactComponent as VectorSubscribers } from '../assets/vectors/VectorSubscribers.svg'
import { ReactComponent as VectorGames } from '../assets/vectors/VectorGames.svg'
import { ReactComponent as VectorContent } from '../assets/vectors/VectorContent.svg'
import { ReactComponent as VectorStudents } from '../assets/vectors/VectorStudents.svg'
import { ReactComponent as VectorCourses } from '../assets/vectors/VectorCourses.svg'
import { ReactComponent as VectorStats } from '../assets/vectors/VectorStats.svg'
import { ReactComponent as VectorAssisted } from '../assets/vectors/VectorAssisted.svg'
import LearnModeGame from '../pages/LearnModeGame'

const SideNav = () => {
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
                    <div className={classes.name}>Rechercher</div>
                </div>
                <div className={classes.options}>
                    <div className={classes.optionElement}>
                        <VectorSubscribers className={classes.optionVector} />
                        <div className={classes.optionName}>Abonnés</div>
                    </div>
                    <div className={classes.optionElement}>
                        <VectorStudents className={classes.optionVector} />
                        <div className={classes.optionName}>Elèves</div>
                    </div>
                    <div className={classes.optionElement}>
                        <VectorContent className={classes.optionVector} />
                        <div className={classes.optionName}>Contenu</div>
                    </div>
                    <div className={classes.optionElement}>
                        <VectorGames className={classes.optionVector} />
                        <div className={classes.optionName}>Jeux</div>
                    </div>
                    <div className={classes.optionElement}>
                        <VectorCourses className={classes.optionVector} />
                        <div className={classes.optionName}>Cours</div>
                    </div>
                    <div className={classes.optionElement}>
                        <VectorStats className={classes.optionVector} />
                        <div className={classes.optionName}>Statistiques</div>
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
                        <div className={classes.name}>Jeu mémoire</div>
                        
                        
                        <div className={classes.expand}>
                            <VectorExpand className={classes.vectorExpand} />
                        </div>
                    </div>
                    
                </div>
               
                <div className={classes.sets}>
                    <div className={classes.setsBg}>
                        <div className={classes.test}>
                            <LearnModeGame/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

  )
}

export default SideNav