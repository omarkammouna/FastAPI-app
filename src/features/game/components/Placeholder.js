import classes from '../../../assets/CreateGame.module.css'
import React, { useState, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from "react-dnd";

import Card from './Card';

export function Placeholder(props) {

  const [board, setBoard] = useState([]);
  const addCardToBoard = (id) => {
    const cardList = props.list.filter((card) => id === card.id);
    setBoard([cardList[0]]);
    console.log(id);
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addCardToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  



  return (
    <div className={`${classes.placeholder} ${isOver ? classes.isOver : ''}`} ref={drop}>
      {props.children}
      {board.map((card) => {
        return <Card id={card.id} cardText={card.cardText} cardImage={card.cardImage} />;
      })}
    </div>
  );
}
