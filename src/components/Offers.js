import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
    return (
        <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Nos Offres</span>
                    <h2 className="playfair-display-font">Notre plan tarifaire flexible</h2>
                    <p>nous offrons une panoplies des plans à nos client.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                
                                <h3>1 mois</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                    <li>Créez un compte indépendant pour chaque enfant</li>
                                    <li>Accès illimité pour chaque compte avec tous les avantages de notre platforme pour chacun.</li>
                                
                                </ul>
                            </div>

                            <div className="price">
                               499.99 DT
                                <span>Abonnement Mensuel</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">j'en profite<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                
                                <h3>3 mois</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                <li>Créez un compte indépendant pour chaque enfant</li>
                                    <li>Accès illimité pour chaque compte avec tous les avantages de notre platforme pour chacun.</li>
                                </ul>
                            </div>

                            <div className="price">
                                599.99 DT
                                <span>Abonnement Trimestriel</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">j'en profite<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-pricing-box">
                            <div className="pricing-header">
                                
                                <h3>12 mois</h3>
                            </div>

                            <div className="pricing-features">
                                <ul>
                                <li>Créez un compte indépendant pour chaque enfant</li>
                                    <li>Accès illimité pour chaque compte avec tous les avantages de notre platforme pour chacun.</li>
                                </ul>
                            </div>

                            <div className="price">
                               699.99 DT
                                <span>Abonnement Annuel</span>
                            </div>

                            <Link href="#">
                                <a className="default-btn">j'en profite<span></span></a>
                            </Link>

                            <div className="pricing-shape1">
                                <img src="/images/pricing-shape1.png" alt="image" />
                            </div>
                            <div className="pricing-shape2">
                                <img src="/images/pricing-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers
