import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="edp-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">

                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/EdPlatformLogo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Rechercher" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Primaire <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">6 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/advisor" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">5 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">4 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">3 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">2 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">1 ère Année</a>
                                                </Link>
                                            </li>
                                        </ul>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Collège <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">9 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/advisor" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">8 ème Année</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">7 ème Année</a>
                                                </Link>
                                            </li>
                                        </ul>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Lycée <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Bac <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Mathématiques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Sciences expérimentales</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Sciences techniques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Sciences informatiques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Économie et gestion</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Littéraire</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Baccalauréat Sport</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        3 éme Année <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Mathématiques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Sciences expérimentales</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Sciences techniques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Sciences informatiques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Économie et gestion</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">3 ème Année Littéraire</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        2 éme Année <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">2 ème Année Sciences</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">2 ème Année Sciences informatiques</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">2 ème Année Économie et gestion</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">2 ème Année littéraire</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">1 ère Année</a>
                                                </Link>
                                            </li>
                                        </ul>


                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Contact <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <h5>Contactez-Nous:</h5>
                                                <Link to="/Contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                    Page de contact</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                            <h5>Adresse:</h5>
                                                <Link href="/purchase-guide" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">
                                                    Av 14 Janvier 2011 à côté de la banque BIAT, Zaghouan 1100, Zaghouan.</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                            <h5>Email:</h5>
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">bmcaf.consulting@gmail.com</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                            <h5>Numéro Fixe:</h5>
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">+216 71 000 000</a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">



                                    {/* <div className="option-item">
                                        <NavLink to="/Subscribe-form">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> S'inscrire <span></span>
                                            </a>
                                        </NavLink>
                                    </div> */}

                                    <div className="option-item">
                                        <NavLink to="/Login-form">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Se connecter <span></span>
                                            </a>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
