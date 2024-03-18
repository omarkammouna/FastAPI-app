import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar px-4 py-4 py-md-4  me-0">
            <div className="d-flex flex-column h-100">
                <Link to ="/" className="mb-0 brand-icon">
                    <span className="logo-icon">
                        <img
                            src="../images/EdPlatformLogo.png"
                            alt="online-study"
                        />
                    </span>
                    <span className="logo-text">EDPlatform</span>
                </Link>
                {/* Menu: main ul */}
                <ul className="menu-list flex-grow-1 mt-3">
                    <li><Link className="m-link" to="/SubscriberProfile"><i className="icofont-ui-home" /><span>Gérer Les Abonnements</span></Link></li>
                    <li><Link className="m-link" to="/Learners"><i className="icofont-read-book-alt" /> <span>Gérer Les Etudiants</span></Link></li>             
                </ul>
                {/* Theme: Switch Theme */}
                <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-center">
                        <div className="form-check form-switch theme-switch">
                            <input className="form-check-input" type="checkbox" id="theme-switch" />
                            <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                        </div>
                    </li>
                    <li className="d-flex align-items-center justify-content-center">
                        <div className="form-check form-switch theme-rtl">
                            <input className="form-check-input" type="checkbox" id="theme-rtl" />
                            <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                        </div>
                    </li>
                </ul>
                {/* Menu: menu collepce btn */}
                <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><i className="icofont-bubble-right" /></span>
                </button>
            </div>
        </div>

    )
}

export default Sidebar
