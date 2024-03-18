import React, { Fragment, useEffect } from 'react'
//import Modal from '../components/ui/Modal'
import PurchseSummary from '../components/PurchseSummary'
import Cart from '../features/purchase/components/Cart'
import LearnerPurchaseList from '../features/purchase/components/LearnerPurchaseList'
import Layout from '../features/purchase/layout/Layout'
import { useSelector, useDispatch } from 'react-redux';
//import AuxProps from '../components/hoc/AuxProps'
import Notification from '../features/purchase/components/Notification'
import { uiActions } from '../features/purchase/store/ui-slice'
import classes from '../assets/Purchase.module.css'

let isInitial = true;

const Purchase = () => {

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart )
    const notification = useSelector((state) => state.ui.notification);
    const dispatch = useDispatch();

    useEffect(() => {
        const sendCartData = async () => {
          dispatch(
            uiActions.showNotification({
              status: 'pending',
              title: 'Envoi...',
              message: 'Patientez-vous SVP!',
            })
          );
          const response = await fetch(
            'https://dumb-back-default-rtdb.firebaseio.com/cart.json',
            {
              method: 'PUT',
              body: JSON.stringify(cart),
            }
          );
    
          if (!response.ok) {
            throw new Error('Sending cart data failed.');
          }
    
          dispatch(
            uiActions.showNotification({
              status: 'success',
              title: 'Succès!',
              message: 'Votre opération est réussie!',
            })
          );
        };
    
        if (isInitial) {
          isInitial = false;
          return;
        }
    
        sendCartData().catch((error) => {
          dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Echou!',
              message: 'Opération échouée! SVP réessayez ultérieurement ',
            })
          );
        });
      }, [cart, dispatch]);

    return (
      <div className={classes.purchase}>
         <Fragment>
        {notification && (
            <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
          )}
        <Layout>
            {showCart && <Cart />}
            <LearnerPurchaseList/>
        </Layout>
       
        </Fragment>   </div>
    )
}

export default Purchase
