import React from 'react'
import CartElement from './CartElement'
import Card from '../../../components/ui/Card'
import classes from '../assets/Cart.module.css'
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className = {classes.cart}>
      <h2>Mon Panier</h2>
      <ul>
      {cartItems.map((item) => (
        <CartElement
           key={item.id}
           item={{
             id: item.id,
             title: item.name,
             quantity: item.quantity,
             total: item.totalPrice,
             price: item.price,
           }}
        />
        ))}
      </ul>
      <div className='text-center'><button type="button" className="btn btn-primary btn-lg">Confirmer L'Achat</button></div>
    </Card>
  )
}

export default Cart
