import React from 'react';
import {NavLink , Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/EdPlatformLogo2.png" alt="logo" />
                                </a>
                            </Link>

                            <p>Nous Travaillions pour apporter des changements significatifs dans l'apprentissage en ligne en faisant des recherches approfondies sur la préparation des programmes de cours, les engagements des étudiants et en attendant avec impatience l'éducation flexible !</p>
                            <div class="empty-div"></div>
                            <h3>Retrouvons-nous ici</h3>
                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Cycles</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Primaire</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-1">
                                        <a>Collège</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/courses-1">
                                        <a>Lycée</a>
                                    </Link>
                                </li>
                                
                            </ul>

                            <div class="empty-div"></div>
                            <h3>Examens</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Les épreuves corrigées du Baccalauréat</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-1">
                                        <a>Les épreuves corrigées du concours 9 ème</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/courses-1">
                                        <a>Les épreuves corrigées du concours 6 ème</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Matières</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="#">
                                        <a>Mathématiques</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Physique-Chimie</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>SVT</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Sciences techniques</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Sciences informatiques</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Anglais </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Français </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Arabe </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Philosophie </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Économie </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Gestion </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Histoire </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a> Géographie </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Nos cours par classe</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>1 ère Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-1">
                                        <a>2 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/courses-1">
                                        <a>3 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events">
                                        <a>4 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>5 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>6 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>7 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>8 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>8 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>9 ème Année</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>1 ère Année Secondaire</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>2 ème Année Secondaire</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>3 ème Année Secondaire</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Bac</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>À propos</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-1">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to="/Contact">
                                        <a>Contact</a>
                                    </NavLink>
                                </li>
                                
                            </ul>

                            <div class="empty-div"></div>

                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Av 14 Janvier 2011 à côté de la banque BIAT, Zaghouan 1100,  Zaghouan.
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">+216 98 000 000</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@edp.com">bmcaf.consulting@gmail.com</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+216 71 000 000</a>
                                </li>
                            </ul>


                        </div>
                    </div>

                    
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} EDPlatform is Proudly Powered by <a target="_blank" href="https://labs.baycii.com/">BAYCII Labs</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Politique de confidentialité</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Termes & conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;