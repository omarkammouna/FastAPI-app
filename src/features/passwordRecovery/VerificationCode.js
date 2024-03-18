import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import PasswordRecovery from './PasswordRecovery';
import { useContext } from 'react';
import useVerificationCode from './hooks/useVerificationCode';

function VerificationCode({ user_id }) {
  const {
    handleSubmit,
    register,
    verifcode,
    setVerifCode,
    hidden,
    setHidden,
    validcode,
    setValidCode,
    retour,
    setRetour,
    resendCode,
    returnToMethods,
    onSubmit,
  } = useVerificationCode(baseURL, user_id);



  return (

    <div>
      <ToastContainer />
      {!hidden && !retour && (

        <Form className="row g-1 p-0 p-4" onSubmit={handleSubmit(onSubmit)} >

          <div className="col-12 text-center mb-5">
            <h1>Verification</h1>
            <img
              src="../assets/images/verify.svg"
              className="w240 mb-4"
              alt=""
            />
            <br />
            <span>
              Nous avons envoyé un code de vérification.<br />
              Entrer le code dans le champ ci-dessous.
            </span>
          </div>
          <div className="col">
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                {...register('input1')}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <Form.Control
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                {...register('input2')}
              />

            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <Form.Control
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                {...register('input3')}
              />

            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <Form.Control
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                {...register('input4')}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-2">
              <Form.Control
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="-"
                {...register('input5')}
              />
            </div>
          </div>
          <div className="col-12 text-center mt-4">

            {validcode && (
              <small className="text-danger">
                Le code n'est pas le meme .
              </small>
            )}
          </div>
          <div className="col-12 text-center mt-4">
            <Button
              type="submit"
              
              title=""
              className="btn btn-lg btn-block btn-light lift text-uppercase"
              style={{ backgroundColor: 'white', color: 'black' }}
            >
              Verifier le code
            </Button>
          </div>
          <div className="col-12 text-center mt-4">
            <span className="text-muted">
              Vous ne l'avez pas reçu ? {" "}
              <Button href="#" className="text-secondary" onClick={resendCode}>
                Renvoyer le code.
              </Button>
            </span>
          </div>
          <div className="col-12 text-center mt-4">
            <span className="text-muted">

              <Button href="#" className="text-secondary" onClick={returnToMethods}>
                Retour
              </Button>
            </span>
          </div>
        </Form>
      )}

      {hidden && (
        <PasswordRecovery user_id={user_id} verifcode={verifcode} />
      )}


    </div>




  )
}

export default VerificationCode;