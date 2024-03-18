import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Learners from './Learners'
function FirstGroupPage() {
    const [userType, setUserType] = useState("SC")
    const [education_level, setEducationLevel] = useState()


    return (

        <div>

            {/* <div className="pricing-area bg-f9f9f9 pt-100 pb-70"> */}
                <div className="container">
                    <div className="section-title">
{userType==='FM' &&(                        <h2 className="playfair-display-font">Les etudiants inscrits </h2>
)}             
{userType==='SC' &&(                        <h2 className="playfair-display-font">Les classes disponibles </h2>
)}    

       </div>
                    {userType === 'SC' && (
                        <div className="row">

                            <div className="col-lg-4 col-md-6" >
                                <div className="single-pricing-box">


                                    <div className="pricing-features">
                                        <img className="card-img-top" src="dist/assets/images/school.jpg" alt="" />

                                    </div>

                                    {/* <div className="price">
                                        Primaire
                                    </div> */}
                                    <h2>Primaire</h2>

                                    <Link to={`/Groups?education_level=${encodeURIComponent('PS')}`} >
                                        <a className="default-btn">Voir plus<span></span></a>
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


                                    <div className="pricing-features">
                                        <img class="card-img-top" src="dist/assets/images/college.png" alt="" width="50" height="150" />

                                    </div>

                                    {/* <div className="price">
                                        Collège

                                    </div> */}
                                    <h2>Collège</h2>

                                    <Link to={`/Groups?education_level=${encodeURIComponent('MS')}`}>
                                        <a className="default-btn">Voir plus<span></span></a>
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


                                    <div className="pricing-features">
                                        <img className="card-img-top" src="dist/assets/images/high_school.jpg" alt="" />

                                    </div>

                                    {/* <div className="price">
                                        Lycée
                                    </div> */}
                                    <h2>Lycée</h2>

                                    <Link to={`/Groups?education_level=${encodeURIComponent('HS')}`}>
                                        <a className="default-btn">Voir plus<span></span></a>
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
                    )}
                    {userType === 'FM' && (
                        <Learners />
                    )}
                {/* </div> */}
            </div>
















{/* 
            {userType === 'SC' && (
                <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-deck py-3">

                    <div classname="col">
                        <div className="card" style={{ width: "18rem", border: '2px solid black' }}>
                            <img className="card-img-top" src="dist/assets/images/school.jpg" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Primaire</h5>
                                <Link to={`/Groups?education_level=${encodeURIComponent('PS')}`} className="btn btn-primary">
                                    Voir plus
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div classname="col">
                        <div className="card" style={{ width: "18rem", border: '2px solid black' }}>
                            <img class="card-img-top" src="dist/assets/images/college.png" alt="" width="50" height="150" />

                            <div className="card-body">
                                <h5 className="card-title">Collège</h5>
                                {/* <Link to="/Groups" className="btn btn-primary">

                                    Voir plus
                                </Link> */}
                                {/* <Link to={`/Groups?education_level=${encodeURIComponent('MS')}`} className="btn btn-primary">
                                    Voir plus
                                </Link>



                            </div>
                        </div>
                    </div>
                    <div classname="col">
                        <div className="card" style={{ width: "18rem", border: '2px solid black' }}>
                            <img className="card-img-top" src="dist/assets/images/high_school.jpg" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Lycée</h5>
                                <Link to={`/Groups?education_level=${encodeURIComponent('HS')}`} className="btn btn-primary">
                                    Voir plus
                                </Link>


                            </div>
                        </div>
                    </div> */}







{/* 
                </div>
            )}

            {userType === 'FM' && (
                <Learners />
            )} */} 
        </div>
    )
}

export default FirstGroupPage