import React from 'react'
import classes from '../assets/CartElement.module.css'

import { cartActions } from '../store/cart-slice'

import { useDispatch } from 'react-redux';

const CartElement = (props) => {
    
    const dispatch = useDispatch();
    const { title, quantity, total, price, id } = props.item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id));
      };
    
      const addItemHandler = () => {
        dispatch(
          cartActions.addItemToCart({
            id,
            title,
            price,
          })
        );
      };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {total.toFixed(2)}DT{' '}
          <span className={classes.itemprice}>({price.toFixed(2)}DT/mois)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity} mois</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartElement
