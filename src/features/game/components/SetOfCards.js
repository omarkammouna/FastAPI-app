import React, { useState } from 'react'
import classes from '../../../assets/TestPage.module.css'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'
import CardPlaceHolder from './CardPlaceHolder';
import { SortableContext, arrayMove  } from '@dnd-kit/sortable';
const placeHolder = [];
/*const Id = 'string' || 'number';

  const row = {
    id: Id,
    title: 'string'
  };*/
const SetOfCards = (props) => {
  const { row, deleteRow } = props;
  
  const [rows, setRows] = useState([]);
  console.log(rows);
  
  const { setNodeRef,
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
  };

  /*if (isDragging) {
      return (
        <tr ref={setNodeRef} style={style} className='bg-color-gray'/>
    ); ;
  }*/

  

  return (
    
    <tr ref={setNodeRef} style={style} >
      
      
      <CardPlaceHolder placeHolder={placeHolder}/>
      <CardPlaceHolder placeHolder={placeHolder}/>
      <CardPlaceHolder placeHolder={placeHolder}/>
      <CardPlaceHolder placeHolder={placeHolder}/>
      <td className="text-center text-truncate">
        <button type="button" className="btn text-decoration-none rounded-1" title="close" onClick={() => deleteRow(row.id)}><i className="icofont-close-circled" /></button>
      </td>
      <td className="text-center text-truncate">
        <div {...attributes} {...listeners}><span className="fa fa-bars"></span></div>
      </td>

    
    </tr>
  )
}

export default SetOfCards