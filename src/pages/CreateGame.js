import React, { useState, useMemo, useRef, useEffect } from 'react'
//import { useResizable } from './useResizable';
//const { width, height, onMouseDown } = useResizable(resizableRef);
import classes from '../assets/CreateGame.module.css'
import ExitGame from '../features/game/modals/ExitGame'
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
import { ReactComponent as VectorDelete } from '../assets/vectors/VectorDelete.svg'
import { ReactComponent as VectorTwoCards } from '../assets/vectors/VectorTwoCards.svg'
import { ReactComponent as VectorThreeCards } from '../assets/vectors/VectorThreeCards.svg'
import { ReactComponent as VectorFourCards } from '../assets/vectors/VectorFourCards.svg'
import { ReactComponent as CradDeck } from '../assets/images/CardDeck.svg'
import { ReactComponent as VectorBack } from '../assets/vectors/VectorBack.svg'
import { ReactComponent as VectorFilter } from '../assets/vectors/VectorFilter.svg'
import { ReactComponent as VectorAdd } from '../assets/vectors/VectorAdd.svg'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from "react-dnd";

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import Card from '../features/game/components/Card'

import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'
import { useDispatch, useSelector } from 'react-redux';

import { addPlaceholderAsync } from '../features/game/store/index';

import DeleteRow from '../features/game/modals/DeleteRow'
import SaveGame from '../features/game/modals/SaveGame'
import CropImage from '../features/game/modals/CropImage'
import AddCard from '../features/game/modals/AddCard'
import { Placeholder } from '../features/game/components/Placeholder'
import { Link, NavLink } from 'react-router-dom'
import DropDown from '../features/game/modals/DropDown'



const CreateGame = () => {

    const [popDelete, setPopDelete] = useState(false);
    const [rowIndexToDelete, setRowIndexToDelete] = useState({});
    const [variantToDelete, setVariantToDelete] = useState({});
    const [openGallery, setOpenGallery] = useState(true);

    const [popSave, setPopSave] = useState(false);
    const [popExit, setPopExit] = useState(false);
    const [popAdd, setPopAdd] = useState(false);
    const [popCrop, setPopCrop] = useState(false);

    const [placeholderCount, setPlaceholderCount] = useState(2);
    const [rowsTwoCards, setRowsTwoCards] = useState([0, 1, 2, 3]);
    const [rowsThreeCards, setRowsThreeCards] = useState([0, 1, 2, 4]);
    const [rowsFourCards, setRowsFourCards] = useState([0, 1, 2, 5]);
    const rows = placeholderCount === 2 ? rowsTwoCards : placeholderCount === 3 ? rowsThreeCards : rowsFourCards;
    const [cards, setCards] = useState(null);
    const [recentCards, setRecentCards] = useState(null);

    const [assisted, setAssisted] = useState(false);

    const [levelOpen, setLevelOpen] = useState(false);
    const [subjectOpen, setSubjectOpen] = useState(false);
    const [thematicOpen, setThematicOpen] = useState(false);
    const [subthematicOpen, setSubthematicOpen] = useState(false);
    const [chapterOpen, setChapterOpen] = useState(false);
    const [skillOpen, setSkillOpen] = useState(false);

    const [levels, setLevels] = useState(null);
    const [subjects, setSubjects] = useState(null);
    const [thematics, setThematics] = useState(null);
    const [subthemetics, setSubthematics] = useState(null);
    const [chapters, setChapters] = useState(null);
    const [skills, setSkills] = useState(null);


    const toggleAssist = () => {
        setAssisted(!assisted);
        console.log(`changed to ${assisted}`)
    };


    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:8000/cards');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchCards();
    }, [])

    useEffect(() => {
        const fetchRecentCards = async () => {
            try {
                const response = await fetch('http://localhost:8000/cards');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const sortedData = data.sort((a, b) => b.id - a.id);
                const lastTwoCards = sortedData.slice(0, 2);
                setRecentCards(lastTwoCards);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchRecentCards();
    }, [])

    useEffect(() => {
        const fetchlevels = async () => {
            try {
                const response = await fetch('http://localhost:8000/levels');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setLevels(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchlevels();
    }, [])

    useEffect(() => {
        const fetchsubjects = async () => {
            try {
                const response = await fetch('http://localhost:8000/subjects');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);


                setSubjects(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchsubjects();
    }, []);

    useEffect(() => {
        const fetchthematics = async () => {
            try {
                const response = await fetch('http://localhost:8000/thematics');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);


                setThematics(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchthematics();
    }, []);

    useEffect(() => {
        const fetchsubthematics = async () => {
            try {
                const response = await fetch('http://localhost:8000/subthematics');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);


                setSubthematics(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchsubthematics();
    }, []);

    useEffect(() => {
        const fetchchapters = async () => {
            try {
                const response = await fetch('http://localhost:8000/chapters');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);


                setChapters(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchchapters();
    }, []);
    useEffect(() => {
        const fetchskills = async () => {
            try {
                const response = await fetch('http://localhost:8000/skills');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);


                setSkills(data);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchskills();
    }, []);




    const handleSwitchChange = (count) => {
        setPlaceholderCount(count);
    };



    const handleDeleteRow = (index) => {
        let variant;
        switch (placeholderCount) {
            case 2:
                variant = 'twoCards';
                break;
            case 3:
                variant = 'threeCards';
                break;
            case 4:
                variant = 'fourCards';
                break;
            default:
                break;
        }

        switch (variant) {
            case 'twoCards':
                setRowsTwoCards(prevState => prevState.filter((_, idx) => idx !== index));
                break;
            case 'threeCards':
                setRowsThreeCards(prevState => prevState.filter((_, idx) => idx !== index));
                break;
            case 'fourCards':
                setRowsFourCards(prevState => prevState.filter((_, idx) => idx !== index));
                break;
            default:
                break;
        }
        setPopDelete(false); // Close the delete modal after deleting
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
                        <input className={classes.namePlaceholder} placeholder='Nom Du Jeu' />
                        <div className={classes.edit}>
                            <VectorEdit className={classes.vectorEdit} />
                        </div>
                        <div className={classes.type}>
                            <VectorGameType className={classes.vectorGameType} />
                            <div className={classes.name}>Type Du Jeu</div>
                            <VectorDropDown className={classes.vectorDropDown} />
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
                        <div className={classes.filterElement} onClick={() => setLevelOpen(!levelOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Niveau Scolaire</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>

                        <div className={classes.filterElement} onClick={() => setSubjectOpen(!subjectOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Matière</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement} onClick={() => setThematicOpen(!thematicOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Thème</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement} onClick={() => setSubthematicOpen(!subthematicOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Sous-Thème</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement} onClick={() => setChapterOpen(!chapterOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Chapitre</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>
                        <div className={classes.filterElement} onClick={() => setSkillOpen(!skillOpen)}>
                            <div className={classes.content}>
                                <div className={classes.name}>Compétance</div>
                                <VectorDropDown className={classes.vectorDropDown} />
                            </div>
                        </div>

                    </div>

                    <div className={classes.addGame} onClick={() => { setPopExit(true) }}>
                        <VectorGameType className={classes.gameVector} />
                        <div className={classes.ajouter}>Ajouter</div>
                    </div>
                    <div className={classes.saveGame} onClick={() => { setPopSave(true) }}>

                        <VectorSave className={classes.saveVector} />

                        <div className={classes.save}>Sauvegarder</div>
                    </div>

                </div>
                <div className={classes.gallery}>
                    <div className={classes.galleryBg}>
                        <div className={classes.help}>
                            <VectorHelp className={classes.vector} />

                        </div>
                        <div className={classes.title}>
                            <VectorCards className={classes.VectorCards0} />
                            <div className={classes.name}>Gallerie</div>
                        </div>
                        {openGallery === false && <>
                            <div className={`${assisted ? `${classes.assisted} ${classes.activeAssist}` : classes.assisted}`}>
                                <VectorAssisted className={classes.assistedVector} />
                                <div className={classes.nameAssisted}>Assitance</div>
                                <label className={classes.switch}>
                                    <input type="checkbox" onChange={() => { toggleAssist() }} />
                                    <span className={classes.slider} />
                                </label>
                            </div>
                            <div className={classes.cardSwitcher}>


                                <div className={classes.firstChoice} onClick={() => setPlaceholderCount(2)}>
                                    <VectorTwoCards className={classes.twoCardsVector} />

                                </div>


                                <div className={classes.secondChoice} onClick={() => setPlaceholderCount(3)}>
                                    <VectorThreeCards className={classes.threeCardsVector} />
                                </div>


                                <div className={classes.thirdChoice} onClick={() => setPlaceholderCount(4)}>
                                    <VectorFourCards className={classes.fourCardsVector} />
                                </div>

                            </div>
                            <div className={classes.gameChoice}>
                                <div className={classes.name}>Nom Du jeu</div>
                                <VectorDropDown className={classes.vectorDropDown} />

                            </div>
                            <div className={classes.store}>
                                <div className={classes.title}>Consulter votre Gallerie</div>
                                <div className={classes.body}>
                                    <div className={classes.recent}>
                                        <div className={classes.title}>
                                            <div className={classes.content}>Dernières Cartes Utilisées</div>
                                        </div>
                                        {recentCards && <div className={classes.twoCards}>
                                            {recentCards.map((card) => {
                                                return <div className={classes.twoCardsContainer}><Card id={card.id} cardText={card.cardText} cardImage={card.cardImage} /></div>;
                                            })}
                                            <div className={classes.seperation}></div>
                                        </div>}


                                    </div>
                                    <div className={classes.cardDeck} onClick={() => { setOpenGallery(true) }}>
                                        <CradDeck className={classes.vector} />
                                    </div>
                                </div>
                            </div></>}
                        {openGallery &&
                            <div className={classes.openStore}>
                                <div className={classes.openTitle}>Consulter votre Gallerie</div>
                                <div className={classes.openBody}>
                                    <VectorBack className={classes.vectorBack} />
                                    <div className={classes.name}>Vos cartes</div>
                                    <div className={classes.search}>
                                        <div className={classes.vectorFrame}>
                                            <VectorSearch className={classes.searchVector} />
                                        </div>

                                        <input className={classes.name} placeholder='Rechercher' />
                                    </div>
                                    <div className={classes.filterContainer}>
                                        <VectorFilter className={classes.filterVector} />
                                    </div>

                                    {cards && (
                                        <div className={classes.cards}>

                                            {cards.map((card) => {
                                                return <div className={classes.cardContainer}><Card id={card.id} cardText={card.cardText} cardImage={card.cardImage} /></div>;
                                            })}

                                        </div>
                                    )}


                                    <div className={classes.addCard} onClick={() => { setPopAdd(true) }}>
                                        <VectorAdd className={classes.vector} />
                                        <div className={classes.name}>Ajouter une nouvelle carte</div>
                                    </div>
                                    <div className={classes.openCardDeck} onClick={() => { setOpenGallery(false) }}>
                                        <CradDeck className={classes.openVector} />
                                    </div>
                                </div>
                            </div>}

                    </div>
                </div>
                <div className={classes.sets}>
                    <div className={classes.setsBg} >

                        {placeholderCount === 2 &&
                            <div className={classes.cards}>
                                {rows.map((row, rowIndex) => (
                                    <div key={rowIndex} className={classes.rows} >
                                        <div className={classes.container}>
                                            <div className={classes.rowContent}>
                                                <VectorDelete
                                                    className={classes.deleteVector}
                                                    onClick={() => {
                                                        setRowIndexToDelete(rowIndex)
                                                        setPopDelete(true)
                                                    }}
                                                />
                                            </div>
                                            <div className={classes.rowContent} >
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>}

                        {placeholderCount === 3 &&
                            <div className={classes.cards}>
                                {rows.map((row, rowIndex) => (
                                    <div key={rowIndex} className={classes.rows} >
                                        <div className={classes.container}>
                                            <div className={classes.rowContent}>
                                                <VectorDelete
                                                    className={classes.deleteVector}
                                                    onClick={() => {
                                                        setRowIndexToDelete(rowIndex)
                                                        setPopDelete(true)
                                                    }}
                                                />
                                            </div>
                                            <div className={classes.rowContent} >
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>}

                        {placeholderCount === 4 &&
                            <div className={classes.cards}>
                                {rows.map((row, rowIndex) => (
                                    <div key={rowIndex} className={classes.rows} >
                                        <div className={classes.container}>
                                            <div className={classes.rowContent}>
                                                <VectorDelete
                                                    className={classes.deleteVector}
                                                    onClick={() => {
                                                        setRowIndexToDelete(rowIndex)
                                                        setPopDelete(true)
                                                    }}
                                                />
                                            </div>
                                            <div className={classes.rowContent} >
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                                <div className={classes.element} >
                                                    {cards && <Placeholder list={cards} />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>}




                    </div>
                </div>
                {levelOpen && <div className={classes.dropLevel}>
                    <DropDown name={'niveau scolaire'} list={levels} />
                </div>}
                {subjectOpen && <div className={classes.dropSubject}>
                    <DropDown name={'matière'} list={subjects} />
                </div>}
                {thematicOpen && <div className={classes.dropThematic}>
                    <DropDown name={'thème'} list={thematics} />
                </div>}
                {subthematicOpen && <div className={classes.dropSubthematic}>
                    <DropDown name={'sous-thème'} list={subthemetics} />
                </div>}
                {chapterOpen && <div className={classes.dropChapter}>
                    <DropDown name={'chapitre'} list={chapters} />
                </div>}
                {skillOpen && <div className={classes.dropSkill}>
                    <DropDown name={'compétance'} list={skills} />
                </div>}


                <DeleteRow
                    trigger={popDelete}
                    setTrigger={setPopDelete}
                    delete={() => handleDeleteRow(rowIndexToDelete, placeholderCount === 2 ? 'twoCards' : placeholderCount === 3 ? 'threeCards' : 'fourCards')}

                />

                <SaveGame
                    trigger={popSave}
                    setTrigger={setPopSave}
                />
                <ExitGame
                    trigger={popExit}
                    setTrigger={setPopExit}
                />
                <CropImage
                    trigger={popCrop}
                    setTrigger={setPopCrop}
                />
                <AddCard
                    trigger={popAdd}
                    setTrigger={setPopAdd}
                />


            </div>


        </div>
    )
}

export default CreateGame

