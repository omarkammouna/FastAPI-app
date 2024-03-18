import React from 'react';
import {Link} from 'react-router-dom'

const Features = () => {
    return (
        
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Education pour tous</span>
                    <h2>Avec EDPlatform, apportons l'avenir à nos enfants</h2>
                    <p>Un accès facile à l'education ! EDPlatform vous fera profiter de la beauté du eLearning ! Nous donnons vie à votre carrière !</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Apprenez les dernières compétences</h3>
                            <p>Le développement des compétences peut se faire via différents biais, via les événements formels ou informels ainsi que dans toutes les situations propices aux échanges de bonnes pratiques.</p>

                            <Link href="/profile-authentication">
                                <a className="link-btn">Commencez maintenant!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                            </div>
                            <h3>Allez à votre rythme</h3>
                            <p>Tout l'enjeu est donc de connaître vos leviers de motivations et votre rythme de travail pour pouvoir personnaliser votre méthode d'apprentissage.</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Commencez maintenant!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-features-box without-padding">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Apprenez des experts de l'industrie</h3>
                            <p>Apprenez-en davantage sur l'espace numérique, les étapes du succès et la façon dont les gens pensent aux marques.</p>
                            
                            <Link href="/profile-authentication">
                                <a className="link-btn">Commencez maintenant!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Features;