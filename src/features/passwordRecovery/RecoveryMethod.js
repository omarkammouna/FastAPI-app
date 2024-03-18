import axios from 'axios';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { baseURL } from '../../utils/BaseUrl';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerificationCode from './VerificationCode';
import { useEffect } from 'react';
import "../../assets/RecoveryMethod.css"
import { useContext } from 'react';
import useRecoveryMethod from './hooks/useRecoveryMethod';

function RecoveryMethod({ user_id, method }) {
  const {
    resetCode,
    setResetCode,
    phone,
    setPhone,
    hid,
    setHid,
    code,
    setCode,
    retour,
    setRetour,
    register,
    handleSubmit,
    errors,
    verifyWithEmail,
    verifyWithPhone,
  } = useRecoveryMethod(baseURL, user_id);
  


  return (
    <div>
      <ToastContainer />
      {(!hid || retour) && (
        <div className="row g-1 p-0 p-4" >

          <div className="col-12 text-center mb-5">
            <img
              src="../assets/images/forgot-password.svg"
              className="w240 mb-4"
              alt=""
            />
            <h1>Mot de passe oublié?</h1>
            <br />
            <span>
              Choisissez la méthode qui vous convient
            </span>
          </div>

          <div className="col-12">




          </div>

       
          <div className="col-12 text-center mt-4">
            {(method === 1 || method === 3) && (
              <Button
                onClick={verifyWithEmail}
                className="btn btn-lg btn-block btn-light lift text-uppercase custom-button"
              >
                Verification avec email
              </Button>
            )}

            {(method === 2 || method === 3) && (
              <Button
                onClick={verifyWithPhone}
                className="btn btn-lg btn-block btn-light lift text-uppercase custom-button"
              >
                Verification avec téléphone
              </Button>
            )}
          </div>


        </div>

      )}
      {hid && (

        <VerificationCode user_id={user_id} />
      )}

    </div>




  )
}

export default RecoveryMethod;