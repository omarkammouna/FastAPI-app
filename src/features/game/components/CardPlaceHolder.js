import React, { useState } from 'react'
import classes from '../../../assets/TestPage.module.css'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'
const CardPlaceHolder = ({placeHolder}) => {

    //const { placeHolder } = props;

    const { setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging } = useSortable({
          id: placeHolder.id,
          data: { type: "placeHolder", placeHolder }
        });
    
      const style = {
        transition,
        transform: CSS.Transform.toString(transform),
      };

  return (
    <td className="text-center text-truncate">
        <div className={classes.droppedCard}></div>
      </td>
  )
}

export default CardPlaceHolder