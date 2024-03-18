import React from 'react'

const Courses = () => {
    return (
        <>
           
                
                {/* Body: Body */}
                <div className="body d-flex py-lg-3 py-md-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card border-0 mb-4 no-bg">
                                    <div className="card-header py-3 px-0 d-flex align-items-center justify-content-between border-bottom">
                                        <h3 className=" fw-bold flex-fill">Cours</h3>
                                        <div className="dropdown px-2">
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Catégorie
                                            </button>
                                            <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Mathématiques</a></li>
                                                <li><a className="dropdown-item" href="#">Physique-Chimie</a></li>
                                                <li><a className="dropdown-item" href="#">SVT</a></li>
                                                <li><a className="dropdown-item" href="#">Sciences techniques</a></li>
                                                <li><a className="dropdown-item" href="#">Sciences informatiques</a></li>
                                                <li><a className="dropdown-item" href="#">Anglais</a></li>
                                                <li><a className="dropdown-item" href="#">Français</a></li>
                                                <li><a className="dropdown-item" href="#">Arabe</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                Status
                                            </button>
                                            <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">All</a></li>
                                                <li><a className="dropdown-item" href="#">New Releases</a></li>
                                                <li><a className="dropdown-item" href="#">Popular</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 py-3">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video1.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Mathématiques</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">8 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">8 Heures</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$220</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video2.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Physique-Chimie</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">19 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">1 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$100</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video3.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">SVT</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">12 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">12 Heures</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$560</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video4.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Sciences techniques</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">12 Heures</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">1 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$80</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">3.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video5.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Sciences informatiques</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">21 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">3 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$160</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video6.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Anglais</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">9 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">9 Heures</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$460</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video7.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Français</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">8 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">1 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$60</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video9.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Arabe</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">22 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">3 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$180</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">3.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video10.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Philosophie</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">5 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">15 Jours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$80</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video8.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Économie</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">28 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">4 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$250</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card">
                                    <div className="lesson_name ">
                                        <div className="bg-primary d-flex justify-content-center align-items-center flex-column position-relative img-overlay">
                                            <img src="dist/assets/images/video-img/video11.jpg" alt="course-img" className="img-fluid" />
                                            <div className="position-absolute top-50 start-50 translate-middle">
                                                <div className="avatar lg rounded-circle img-thumbnail d-flex justify-content-center align-items-center m-auto">
                                                    <i className="icofont-read-book fs-3 " />
                                                </div>
                                                <h6 className="mb-0 fw-bold text-white fs-6 text-center mt-3">Gestion</h6>
                                            </div>
                                            <a href="purchase.html" className="btn bg-secondary btn-sm text-white top-0 position-absolute end-0 rounded-0" title="buy-button"><i className="icofont-cart-alt me-2" /> Acheter</a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-files-stack " />
                                                    <span className="ms-2">21 Cours</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-clock-time " />
                                                    <span className="ms-2">4 Mois</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-price " />
                                                    <span className="ms-2">$280</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-ui-rating " />
                                                    <span className="ms-2">4.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Members*/}
                <div className="modal fade" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  fw-bold" id="addUserLabel">Invite Friend's</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="inviteby_email">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Members Invite" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-dark" type="button" id="button-addon2">Inviter les membres</button>
                                    </div>
                                </div>
                                <div className="members_list">
                                    <h6 className="fw-bold ">Membres de EDPlatform</h6>
                                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="dist/assets/images/xs/avatar2.jpg" alt />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                                                    <span className="text-muted">rachel.carr@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <span className="members-role ">Admin</span>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="icofont-ui-settings  fs-6" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="dist/assets/images/xs/avatar3.jpg" alt />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Lucas Baker<a href="#" className="link-secondary ms-2">(Resend invitation)</a></h6>
                                                    <span className="text-muted">lucas.baker@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Membres
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icofont-check-circled" />
                                                                    Membre
                                                                    <span>Can view, edit, delete, comment on and save files</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fs-6 p-2 me-1" />
                                                                    Admin
                                                                    <span>Member, but can invite and manage team members</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="icofont-ui-settings  fs-6" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Delete Member</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar8.jpg" alt />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Una Coleman</h6>
                                                    <span className="text-muted">una.coleman@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Members
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icofont-check-circled" />
                                                                    Member
                                                                    <span>Can view, edit, delete, comment on and save files</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fs-6 p-2 me-1" />
                                                                    Admin
                                                                    <span>Member, but can invite and manage team members</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-group">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="icofont-ui-settings  fs-6" />
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Suspend member</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-not-allowed fs-6 me-2" />Delete Member</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           

        </>

    )
}

export default Courses
