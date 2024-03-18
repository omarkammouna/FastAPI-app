import React from 'react';
import { NavLink , Link } from 'react-router-dom'
import Features from './Features';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="container-fluid">
                
                    {/*  <div className="col-lg-6 col-md-12">
                        <div className="main-banner-content">
                            <h1>Avec EDPlatform, apportons l'avenir à nos enfants</h1>
                            <p>Un accès facile à l'education !
                                edp vous fera profiter de la beauté du eLearning !
                                Nous donnons vie à votre carrière !</p>

                            <NavLink to="/Subscribe-form">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> S'inscrire <span></span>
                                </a>
                            </NavLink>
                        </div>
                    </div>*/}
                    <Features/>

                    


                    
                        
                            
                                
                        
                    
                
            </div>



        </div>
    )
}

export default MainBanner;