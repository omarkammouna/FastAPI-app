import React from 'react'
import { useLogin } from '../features/authentification/hooks/useLogin';
import { useState, useContext } from 'react';
import { Link, NavLink, json } from 'react-router-dom';


const LoginForm = () => {

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Determine if the input is an email or phoneNumber
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)
        const loginInfo = isEmail ? { email: identifier, password } : { phoneNumber: identifier, password }

        //console.log(identifier, password)
        await login(loginInfo)
        
    }
    const handleIdentifierChange = (e) => {
        const inputValue = e.target.value
        setIdentifier(inputValue)
      }
    return (
        <div id="elearn-layout" className="theme-black">
            {/* main body area */}
            <div className="main p-2 py-3 p-xl-5 ">
                {/* Body: Body */}
                <div className="body d-flex p-0 p-xl-5">
                    <div className="container-xxl">
                        <div className="row g-0">
                            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                                <div style={{ maxWidth: "25rem" }}>
                                    <div className="text-center mb-5">

                                        <img
                                            src="../images/EdPlatformLogo2.png"
                                            alt="online-study"
                                        />

                                        {/*<svg
                                            width="4rem"
                                            fill="none"
                                            className="bi bi-app-indicator"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                className="fill-primary"
                                                d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                                            />
                                            <path
                                                className="fill-primary"
                                                d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                            />
                                        </svg>*/}
                                    </div>
                                    <div className="mb-5">
                                        <h2 className="color-900 text-center">
                                            Plateforme d'apprentissage en ligne basée sur le cloud
                                        </h2>
                                    </div>
                                    {/* Image block */}
                                    <div className="">
                                        <img
                                            src="../dist/assets/images/online-study.svg"
                                            alt="online-study"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                                <div
                                    className="w-100 p-4 p-md-5 card border-0 bg-dark text-light"
                                    style={{ maxWidth: "32rem" }}
                                >
                                    {/* Form */}
                                    <form className="row g-1 p-0 p-4" onSubmit={handleSubmit}>
                                        <div className="col-12 text-center mb-5">
                                            <h1>Se Connecter</h1>
                                            {/*<span>Accès gratuit à notre tableau de bord.</span>*/}
                                        </div>
                                        <div className="col-12 text-center mb-4">
                                            <a
                                                className="btn btn-lg btn-outline-secondary btn-block"
                                                href="#"
                                            >
                                                <span className="d-flex justify-content-center align-items-center">
                                                    <img
                                                        className="avatar xs me-2"
                                                        src="../dist/assets/images/google.svg"
                                                        alt="Image Description"
                                                    />
                                                    S'identifier avec Google
                                                </span>
                                            </a>
                                            <span className="dividers text-muted mt-4">OU</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-2">
                                                <label className="form-label">Adresse e-mail ou Numéro téléphone </label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="e-mail / num téléphone"
                                                    onChange={handleIdentifierChange}
                                                    value={identifier}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-2">
                                                <div className="form-label">
                                                    <span className="d-flex justify-content-between align-items-center">
                                                        Mot de passe
                                                        <Link to="/ResetPassword" title="reset password" className="text-secondary">
                                                            Mot de passe oublié?
                                                        </Link>
                                                    </span>
                                                </div>
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="********"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    value={password}
                                                />
                                            </div>
                                        </div>
                                        {/*<div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    Restez connecté
                                                </label>
                                            </div>
                                        </div> */}
                                        <div className="col-12 text-center mt-4">
                                            {error && <div className="error">{error}</div>}
                                        </div>
                                        <div className="col-12 text-center mt-4">

                                            <button
                                                disabled={isLoading}
                                                className="btn btn-lg btn-block btn-light lift text-uppercase"
                                                atl="signin"
                                                type='submit'
                                            >
                                                Se connecter
                                            </button>

                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <span className="text-muted">
                                                Vous n'avez pas encore de compte?{" "}
                                                <NavLink to="/Subscribe-form">
                                                    <a className="text-secondary">
                                                        S'inscrire ici
                                                    </a>
                                                </NavLink>
                                            </span>
                                        </div>
                                    </form>
                                    {/* End Form */}
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div>
                                            <a href="#" className="me-2 text-muted">
                                                <i className="fa fa-facebook-square fa-lg" />
                                            </a>
                                            <a href="#" className="me-2 text-muted">
                                                <i className="fa fa-github-square fa-lg" />
                                            </a>
                                            <a href="#" className="me-2 text-muted">
                                                <i className="fa fa-linkedin-square fa-lg" />
                                            </a>
                                            <a href="#" className="me-2 text-muted">
                                                <i className="fa fa-twitter-square fa-lg" />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" title="home" className="me-2 text-muted">
                                                Aceuil
                                            </a>
                                            <a href="#" title="about" className="me-2 text-muted">
                                                A propos de nous
                                            </a>
                                            <a href="#" title="faq" className="me-2 text-muted">
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        {/* End Row */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginForm
