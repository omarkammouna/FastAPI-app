import React from 'react'
import classes from '../assets/LearnerPuchase.module.css'
import Card from '../../../components/ui/Card';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const LearnerPurchase = (props) => {

    const dispatch = useDispatch();
    const { title, price, description, id } = props;

    const addToCartHandler = () => {
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
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>{price.toFixed(2)}DT</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Ajouter au panier</button>
                </div>
            </Card>
        </li>
    )
}

export default LearnerPurchase
