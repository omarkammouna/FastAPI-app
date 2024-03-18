import React from 'react';
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className="about-area bg-fef8ef ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img1.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img2.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img3.png" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img4.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">EDPlatform</span>
                            <h2>Avec EDPlatform, développez les compétences de vos enfants de n'importe et à n'importe quand!</h2>
                            <p>Nous comprenons mieux que l'apprentissage en ligne peut apporter un changement significatif pour atteindre des étudiants du monde entier ! Donner des options pour mieux apprendre peut toujours offrir les meilleurs résultats !</p>
                            
                            <ul className="features-list">
                                {/*<li><span><i className="flaticon-experience"></i> Améliorez sa moyenne générale !</span></li>*/}
                                <li><span><i className="flaticon-time-left"></i> Gagner le temps et l'argent </span></li>
                                <li><span><i className="flaticon-tutorials"></i> Accès facile </span></li>
                                <li><span><i className="flaticon-self-growth"></i> Améliorez sa moyenne générale !</span></li>
                            </ul>

                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Consultez Nos Offres <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="/images/shape1.png" alt="image" /></div>
            <div className="shape2"><img src="/images/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape4.png" alt="image" /></div>
        </div>
    )
}

export default AboutUs;