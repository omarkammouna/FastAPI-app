import React from 'react'
import classes from '../assets/CartButton.module.css'

import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../store/ui-slice'

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  
    const toggleCartHandler = () => {
      dispatch(uiActions.toggle());
    };

  return (
    <div>
      <button className={classes.button} onClick={toggleCartHandler}>
      <span>Mon Panier</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
    </div>
  )
}

export default CartButton
