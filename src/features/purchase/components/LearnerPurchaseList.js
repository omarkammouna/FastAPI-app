import React from 'react'
import LearnerPurchase from './LearnerPurchase'
import classes from '../assets/LearnerPurchaseList.module.css'

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'Nom1_Prénom1 (9éme Année)',
        description: 'Abonnement actuel expire en 8 jours',
    },
    {
        id: 'p2',
        price: 5,
        title: 'Nom2_Prénom2 (4éme Année)',
        description: 'Abonnement actuel expiré',
    },
];

const LearnerPurchaseList = () => {
    return (
        <section className= {classes.learners}>
            <h2>Liste des Abonnements à renouveler</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <LearnerPurchase

                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>

        </section>
    )
}

export default LearnerPurchaseList
