import React from 'react'
import { useLogout } from '../features/authentification/hooks/useLogout';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Header = () => {

    //const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    //const isLoggedIn = authCtx.isLoggedIn;
    /*const logoutHandler = () => {
        authCtx.logout();
        navigate('/');
    };*/
    const { logout } = useLogout()

    const handleClick = () => {
        logout();
        navigate('/');
       
    }
    return (
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
                    {/* header rightbar icon */}
                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                        <div className="d-flex">
                            <a className="nav-link text-primary collapsed" href="help.html" title="Get Help">
                                <i className="icofont-info-square fs-5" />
                            </a>
                            
                        </div>
                        <div className="dropdown notifications zindex-popover">
                            <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="icofont-alarm fs-5" />
                                <span className="pulse-ring" />
                            </a>
                            <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                                <div className="card border-0 w380">
                                    <div className="card-header border-0 p-3">
                                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                            <span>Notifications</span>
                                            <span className="badge text-white">14</span>
                                        </h5>
                                    </div>
                                    <div className="tab-content card-body">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-unstyled list mb-0">
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar1.jpg" alt />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Molly Cornish</span> <small>2MIN</small></p>
                                                            <span className>Added  2021-02-19 e-learn links_no_expiration_report.csv <span className="badge bg-success">Review</span></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <div className="avatar rounded-circle no-thumbnail">DF</div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className>Server added Get Started with e-learn.pdf</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar3.jpg" alt />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className>Server added Document.docx</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar5.jpg" alt />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                            <span className>Add folder on Server</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar6.jpg" alt />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                            <span className>Delete folder on Server</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar7.jpg" alt />
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className>1DAY</small></p>
                                                            <span className>The generated Lorem Ipsum</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">Nom Prénom</span></p>
                                <small>Abonné</small>
                            </div>
                            <a className="nav-link dropdown-toggle pulse p-0" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                <img className="avatar lg rounded-circle img-thumbnail" src="../images/profile-icon.jpg" alt="profile" />
                            </a>
                            <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                <div className="card border-0 w280">
                                    <div className="card-body pb-0">
                                        <div className="d-flex py-1">
                                            <img className="avatar rounded-circle" src="../images/profile-icon.jpg" alt="profile" />
                                            <div className="flex-fill ms-3">
                                                <p className="mb-0"><span className="font-weight-bold">Nom Prénom</span></p>
                                                <small className>prénom.nom@gmaill.com</small>
                                            </div>
                                        </div>
                                        <div><hr className="dropdown-divider border-dark" /></div>
                                    </div>
                                    <div className="list-group m-2 ">
                                        <Link href="students.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-graduate-alt fs-6 me-3" />Niveau Scolaire</Link>
                                        <Link href="video-class.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-black-board fs-6 me-3" />Video Class</Link>
                                        <button className="list-group-item list-group-item-action border-0" onClick={handleClick}><i  className="icofont-logout fs-6 me-3" />Déconnexion</button>
                                        <div><hr className="dropdown-divider border-dark" /></div>
                                        <Link href="../dist/ui-elements/auth-signup.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-contact-add fs-5 me-3" />Add personal account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* menu toggler */}
                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                        <span className="fa fa-bars" />
                    </button>
                    {/* main menu Search*/}
                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                        <div className="input-group flex-nowrap input-group-lg">
                            <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search" /></button>
                            <input type="search" className="form-control" placeholder="Rechercher" aria-label="search" aria-describedby="addon-wrapping" />
                            <button type="button" className="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i className="fa fa-plus" /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header
