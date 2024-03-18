import React, { useState, useEffect } from 'react'
import { useSignup } from "../features/authentification/hooks/useSignup"
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import '../assets/SignupForm.css'
import Validators from '../utils/Validators';


const SubscribeForm = () => {


 // const [name, setName] = useState('')
 // const [familyName, setFamilyName] = useState('')
  //const [email, setEmail] = useState('')
  //const [phoneNumber, setPhoneNumber] = useState('')
  //const [password, setPassword] = useState('')
  //const [confirmPassword, setConfirmPassword] = useState('')
  //const [errors, setErrors] = useState({});


  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    familyName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [hasInteracted, setHasInteracted] = useState({
    name: false,
    familyName: false,
    phoneNumber: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    

  };

  useEffect(() => {
    if (hasInteracted.name) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: Validators.validateInput('name', formData.name),
      }));
    }
  }, [formData.name, hasInteracted.name]);

  useEffect(() => {
    if (hasInteracted.familyName) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        familyName: Validators.validateInput('familyName', formData.familyName),
      }));
    }
  }, [formData.familyName, hasInteracted.familyName]);

  useEffect(() => {
    if (hasInteracted.email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: Validators.validateInput('email', formData.email),
      }));
    }
  }, [formData.email, hasInteracted.email]);

  useEffect(() => {
    if (hasInteracted.phoneNumber) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: Validators.validateInput('phoneNumber', formData.phoneNumber),
      }));
    }
  }, [formData.phoneNumber, hasInteracted.phoneNumber]);

  useEffect(() => {
    if (hasInteracted.password) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: Validators.validateInput('password', formData.password),
      }));
    }
  }, [formData.password, hasInteracted.password]);

  useEffect(() => {
    if (hasInteracted.confirmPassword) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: formData.confirmPassword === formData.password ? '' : 'vérifier votre mot de passe: Pas de correspondance !',
      }));
    }
  }, [formData.confirmPassword, hasInteracted.confirmPassword]);



  const { signup, error, isLoading } = useSignup()


  const handleSubmit = async (e) => {
    e.preventDefault()

    // Set all hasInteracted flags to true on form submission to trigger error messages for all fields.
    setHasInteracted({
      name: true,
      familyName: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true
    });


    await signup(formData.name, formData.familyName, formData.email, formData.phoneNumber, formData.password)


  }



  return (
    <div id="elearn-layout" className="theme-black">
      {/* main body area */}
      <div className="main p-2 py-3 p-xl-5">
        {/* Body: Body */}
        <div className="body d-flex p-0 p-xl-5">
          <div className="container-xxl">
            <div className="row g-0">
              <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                <div style={{ maxWidth: '25rem' }}>
                  <div className="text-center mb-5">
                    <img
                      src="../images/EdPlatformLogo2.png"
                      alt="online-study"
                    />

                    {/*<svg width="4rem" fill="none" className="bi bi-app-indicator" viewBox="0 0 16 16">
                      <path className="fill-primary" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path className="fill-primary" d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>*/}
                  </div>
                  <div className="mb-5">
                    <h2 className="color-900 text-center">Plateforme d'apprentissage en ligne basée sur le cloud</h2>
                  </div>
                  {/* Image block */}
                  <div className>
                    <img src="../dist/assets/images/online-study.svg" alt="online-study" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100" style={{ height: '135vh' }}>
                <div className="w-100 p-4 p-md-5 card border-0 bg-dark text-light" style={{ maxWidth: '32rem' }}>
                  {/* Form */}
                  <form className="row g-1 p-0 p-4" onSubmit={handleSubmit}>
                    <div className="col-12 text-center mb-5">
                      <h1>Créez votre compte</h1>
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
                          S'inscrire avec Google
                        </span>
                      </a>
                      <span className="dividers text-muted mt-4">OU</span>
                    </div>
                    <div className="col-6">
                      <div className="mb-2">
                        <label className="form-label">Nom</label>
                        <input type="text" id="familyName" name="familyName" className="form-control form-control-lg"
                          placeholder="nom"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            familyName: true,
                          }))}
                          value={formData.familyName} />
                          {hasInteracted && formErrors.familyName && <span className="error">{formErrors.familyName}</span>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-2">
                        <label className="form-label">Prénom</label>
                        <input type="text" id="name" name="name" className="form-control form-control-lg"
                          placeholder="prénom"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            name: true,
                          }))}
                          value={formData.name} />
                          {hasInteracted && formErrors.name && <span className="error">{formErrors.name}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label">Adresse e-mail</label>
                        <input type="text" id="email" name="email" className="form-control form-control-lg"
                          placeholder="nom@exemple.com"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            email: true,
                          }))}
                          value={formData.email} />
                          {hasInteracted && formErrors.email && <span className="error">{formErrors.email}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label">Numéro de téléphone</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" className="form-control form-control-lg"
                          placeholder="+216"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            phoneNumber: true,
                          }))}
                          value={formData.phoneNumber} />
                          {hasInteracted && formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" id="password" name="password" className="form-control form-control-lg"
                          placeholder="8+ caractères requis"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            password: true,
                          }))}
                          value={formData.password} />
                          {hasInteracted && formErrors.password && <span className="error">{formErrors.password}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label">Confirmez le mot de passe</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="form-control form-control-lg"
                          placeholder="8+ caractères requis"
                          onChange={handleInputChange}
                          onBlur={() => setHasInteracted((prevHasInteracted) => ({
                            ...prevHasInteracted,
                            confirmPassword: true,
                          }))}
                          value={formData.confirmPassword} />
                          {hasInteracted && formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
                      </div>
                    </div>
                    {/* <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          J'accepte les <a href="#" title="Terms and Conditions" className="text-secondary">Termes et conditions</a>
                        </label>
                      </div>
                    </div> */}
                    <div className="col-12 text-center mt-4">
                      {error && <div className="error">{error}</div>}
                    </div>

                    <div className="col-12 text-center mt-4" >

                      <button disabled={isLoading} className="btn btn-lg btn-block btn-light lift text-uppercase" type='submit' alt="SIGNUP">S'inscrire</button>

                    </div>

                    <div className="col-12 text-center mt-4">
                      <span className="text-muted">Vous avez déjà un compte? <NavLink to="/Login-form"><a href="auth-signin.html" title="Sign in" className="text-secondary">Se connecter ici</a></NavLink></span>
                    </div>
                  </form>
                  {/* End Form */}
                  <div className="d-flex justify-content-between flex-wrap">
                    <div>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-facebook-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-github-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-linkedin-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-twitter-square fa-lg" /></a>
                    </div>
                    <div>
                      <a href="#" title="home" className="me-2 text-muted">Aceuil</a>
                      <a href="#" title="about" className="me-2 text-muted">A propos de nous</a>
                      <a href="#" title="faq" className="me-2 text-muted">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* End Row */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default SubscribeForm
