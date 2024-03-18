


import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { baseURL } from '../utils/BaseUrl';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecoveryMethod from '../features/passwordRecovery/RecoveryMethod';
import "../assets/RecoveryMethod.css"
import usePasswordReset from '../features/passwordRecovery/hooks/usePasswordReset';
function PasswordReset() {
  const {
    handleSubmit,
    handleInputChange,
    errors,
    onSubmit, hidden, RecovMethod, method, error, inputValue, id
    // Destructure other variables and functions from the custom hook as needed
  } = usePasswordReset(baseURL);
 

  return (
    <div>
      <ToastContainer />
      <div id="elearn-layout" className="theme-black">
        <div className="main p-2 py-3 p-xl-5">
          <div className="body d-flex p-0 p-xl-5">
            <div className="container-xxl">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                <div className='max-width-25rem'>
                    <div className="text-center mb-5">
                      <svg
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
                      </svg>
                    </div>
                    <div className="mb-5">
                      <h2 className="color-900 text-center">
                        Cloud-Based E-Learning Platform
                      </h2>
                    </div>
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
                    style={{ maxWidth: '32rem' }}
                  >
                    {!hidden && (
                      <Form
                        className="row g-1 p-0 p-4"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <Form.Group className="col-12 text-center mb-5">
                          <img
                            src="../../assets/images/forgot-password.svg"
                            className="w240 mb-4"
                            alt=""
                          />
                          <h1>Mot de passe oublié?</h1>
                          <span>
                            Entrez l'adresse e-mail ou le nom d'utilisateur ou le numéro de téléphone que vous avez utilisé lors de
                            votre inscription et nous vous enverrons des instructions pour réinitialiser votre mot de passe.

                          </span>
                        </Form.Group>
                        <div className="col-12">
                          <div className="mb-2">
                            <label className="form-label">Coordonnées</label>
                            <Form.Control
                              type="text"
                              className="form-control form-control-lg"
                              value={inputValue}
                              onChange={handleInputChange}
                              placeholder="Adresse e-mail ou numéro de téléphone"

                            />
                            {/* {email && !isEmailValid && (
                              <small className="text-danger">
                                Donnez une adresse email valide.
                              </small>
                            )} */}
                            {error &&
                              <small className="text-danger">
                                {error}
                              </small>
                            }
                          </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                          <Button
                            type="submit"
                            // className="btn btn-lg btn-block btn-light lift text-uppercase"
                            className="btn btn-lg btn-block btn-light lift text-uppercase custom-button"
                          >
                            Envoyer
                          </Button>
                        </div>
                      
                      </Form>
                    )}
                    {RecovMethod && (
                      <RecoveryMethod method={method} user_id={id} />
                    )}
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
                          Home
                        </a>
                        <a href="#" title="about" className="me-2 text-muted">
                          About Us
                        </a>
                        <a href="#" title="faq" className="me-2 text-muted">
                          FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;