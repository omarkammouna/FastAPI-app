import React from 'react';
import { Link , NavLink } from 'react-router-dom'

const ViewAllCourses = () => {
    return (
        <div className="view-all-courses-area bg-fef8ef">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-content">
                            <span className="sub-title">Apprentissage à distance</span>
                            <h2>Sentez-vous que vous assistez physiquement à vos noms de classe !</h2>
                            <p>Les programmes de formation EDPlatform peuvent vous apporter une expérience d'apprentissage super excitante en ligne ! Vous ne faites jamais face à aucune expérience négative tout en profitant virtuellement de vos noms de classe en vous asseyant dans votre zone de confort. Nos initiatives d'apprentissage flexibles vous aideront à apprendre mieux et plus rapidement que les méthodes traditionnelles d'apprentissage des compétences.</p>

                            <NavLink to="/Courses">
                                <a className="default-btn">
                                    <i className="flaticon-agenda"></i> Voir les cours <span></span>
                                </a>
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-image">
                            <img src="/images/man-with-laptop.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1">
                <img src="/images/shape1.png" alt="image" />
            </div>
            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default ViewAllCourses;