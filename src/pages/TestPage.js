import React, { useMemo, useState } from 'react'
import classes from '../assets/TestPage.module.css'
import { DndContext, DragOverlay , PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import { SortableContext, arrayMove  } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'
import SetOfCards from '../features/game/components/SetOfCards';
import { createPortal } from "react-dom";



const TestPage = ({ numCards }) => {



  const [rowCounts, setRowCounts] = useState({
    fourCards: 4,
    threeCards: 4,
    twoCards: 4
  }); // Initial number of cards by each form

  const [rows, setRows] = useState([]);
  console.log(rows);
  //const [placeHolders, setPlaceHolders] = useState([]);

  const [activeRow, setActiveRow] = useState(null);

  const rowId = useMemo(() => rows.map((row) => row.id), [rows]);

  const removeRow = (element) => {
    const parentRow = element.closest('tr');
    if (parentRow) {
      parentRow.remove();
    } else {
      console.error('Parent row not found!');
    }
  };

  const addRow = (variant) => {
    setRowCounts(prevCounts => ({
      ...prevCounts,
      [variant]: prevCounts[variant] + 1
    }));
  };

  const createNewRow = () => {
    const rowToAdd = { id: generateId(), name: `Row ${rows.length + 1}` };
    setRows([...rows, rowToAdd]);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 10001); //generate a random number 
  }

  const deleteRow = (id) => {
    const filtredRows = rows.filter(row => row.id !== id);
    setRows(filtredRows);
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  /*const { setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging } = useSortable({
      id: row.id,
      data: { type: "row", row }
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };*/

  function onDragStart(event) {
    if (event.active.data.current?.type === "Row") {
      setActiveRow(event.active.data.current.row);
      return;
    }

    /*if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }*/
  }

  function onDragEnd(event) {
    setActiveRow(null);
    //setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    /*const isActiveARow = active.data.current?.type === "Row";
    if (!isActiveARow) return;*/

    

    console.log("DRAG END");

    setRows((rows) => {
      const activeRowIndex = rows.findIndex((row) => row.id === activeId);

      const overRowIndex = rows.findIndex((row) => row.id === overId);

      return arrayMove(rows, activeRowIndex, overRowIndex);
    });
  }

  return (
    <div style={{ display: 'flex' }}>


      <div className={`col-xxl-9 col-xl-9 col-lg-9 col-md-12 order-lg-1  order-sm-2 order-2 ${classes.testDrop} `}>
        <div className="card shadow-sm overflow-hidden">
          <div className="card-header py-3">
            <h6 className="mb-0 fw-bold">Nom Du Jeu</h6>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-end mb-3">
              <ul className="nav nav-tabs tab-body-header rounded" role="tablist">
                <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#Open" role="tab">4 cards</a></li>
                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#ThreeCards" role="tab">3 cards</a></li>
                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#TwoCards" role="tab">2 cards</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="Open">
                <div className="table-responsive">
                  <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} sensors={sensors}>
                    <table className="table table-hover">
                      <tbody >
                        <SortableContext items={rowId} >
                          {rows.map((row) => (

                            <SetOfCards key={row.id} row={row} deleteRow={deleteRow} />

                          ))}
                        </SortableContext>
                      </tbody>
                    </table>
                    {createPortal(<DragOverlay>
                      {activeRow && <SetOfCards row={activeRow} deleteRow={deleteRow} />}
                    </DragOverlay>, document.body)}
                  </DndContext>
                </div>
                <div className={`add_lession_person avatar-list center ${classes.addButton}`}>
                  <span className={`avatar rounded-circle text-center pointer `} onClick={() => createNewRow()} data-bs-target="#addUser"><i className="icofont-ui-add" /></span>
                </div>
              </div>
              <div className="tab-pane fade" id="ThreeCards">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      {Array.from({ length: rowCounts.threeCards }).map((_, index) => (
                        <tr key={index}>
                          <td className="text-center text-truncate">
                            <div className={classes.droppedCard}></div>
                          </td>
                          <td className="text-center text-truncate">
                            <div className={classes.droppedCard}></div>
                          </td>
                          <td className="text-center text-truncate">
                            <div className={classes.droppedCard}></div>
                          </td>
                          <td className="text-center text-truncate">
                            <button type="button" className="btn text-decoration-none rounded-1" title="close" onClick={(e) => removeRow(e.target)}><i className="icofont-close-circled" /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`add_lession_person avatar-list center ${classes.addButton}`}>
                  <span className={`avatar rounded-circle text-center pointer `} onClick={() => addRow('threeCards')} data-bs-target="#addUser"><i className="icofont-ui-add" /></span>
                </div>
              </div>
              <div className="tab-pane fade" id="TwoCards">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>

                      {Array.from({ length: rowCounts.twoCards }).map((_, index) => (
                        <tr key={index}>
                          <td className="text-center text-truncate">
                            <div className={classes.droppedCard}>hey</div>
                          </td>
                          <td className="text-center text-truncate">
                            <div className={classes.droppedCard}></div>
                          </td>
                          <td className="text-center text-truncate">
                            <button type="button" className="btn text-decoration-none rounded-1" title="close" onClick={(e) => removeRow(e.target)}><i className="icofont-close-circled" /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`add_lession_person avatar-list center ${classes.addButton}`}>
                  <span className={`avatar rounded-circle text-center pointer `} onClick={() => addRow('twoCards')} data-bs-target="#addUser"><i className="icofont-ui-add" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={classes.testPage}>

        <a href="#" className={`mb-0 brand-icon ${classes.header}`}>
          <span className="logo-icon">
            <svg width={35} height={35} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </span>
          <span className="logo-text">Ajouter<br />
            Carte</span>
        </a>

        <div className="sidebar mx-0 video-menu px-4 py-4  order-1">
          <div className="d-flex flex-xl-column flex-xxl-column h-100">



            {/* Menu: main ul */}

            <ul className="menu-list flex-grow-1 mt-3 px-2">

              <li>
                <a className="m-link flex-column" href="#">
                  <img className="img-thumbnail img-fluid" src="../dist/assets/images/video-img/video6.jpg" alt="teching" />
                  <span className="small-xs text-start w-100 mt-2 color-400">Carte 1</span>
                  <span className="small-xs text-start w-100 color-600">description 1</span>
                </a>
              </li>
              <li>
                <a className="m-link flex-column" href="#">
                  <img className="img-thumbnail img-fluid" src="../dist/assets/images/video-img/video11.jpg" alt="teching" />
                  <span className="small-xs text-start w-100 mt-2 color-400">Carte 2</span>
                  <span className="small-xs text-start w-100 color-600">description 2</span>
                </a>
              </li>
              <li>
                <a className="m-link flex-column" href="#">
                  <img className="img-thumbnail img-fluid" src="../dist/assets/images/video-img/video10.jpg" alt="teching" />
                  <span className="small-xs text-start w-100 mt-2 color-400">Carte 3</span>
                  <span className="small-xs text-start w-100 color-600">description 3</span>
                </a>
              </li>
              <li>
                <a className="m-link flex-column" href="#">
                  <img className="img-thumbnail img-fluid" src="../dist/assets/images/video-img/video8.jpg" alt="teching" />
                  <span className="small-xs text-start w-100 mt-2 color-400">Carte 4</span>
                  <span className="small-xs text-start w-100 color-600">description 4</span>
                </a>
              </li>
            </ul>

            {/* Menu: menu collepce btn */}

          </div>
        </div>


      </div>

    </div>
  )
}

export default TestPage