

import React, { useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { baseURL } from '../../utils/BaseUrl';
import usePasswordRecovery from './hooks/usePasswordRecovery';
function PasswordRecovery({ user_id, verifcode }) {
 
    const {
      handleSubmit,
      register,
      errors,
      passwordMatchError,
      passwordLengthError,
      passwordStrengthError,
      onSubmit,
    } = usePasswordRecovery(user_id, verifcode);


    
  return (
    <div>
      <Form className="row g-1 p-0 p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 text-center mb-5">
          <img src="../assets/images/forgot-password.svg" className="w240 mb-4" alt="" />
          <h1>Dernière étape</h1>
          <span>Entrez votre nouveau mot de passe</span>
        </div>

        <Form.Group className="col-12">
          <div className="mb-2">
          <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              id="password"
              type="password"
              className="form-control form-control-lg"
              placeholder="***************"
              isInvalid={!!errors.password || passwordLengthError || passwordStrengthError}
              {...register('password')}
            />
            {errors.password && (
              <small className="text-danger">
                Veuillez saisir un mot de passe d'au moins 8 caractères.
              </small>
            )}
            {passwordLengthError && (
              <small className="text-danger">
                Veuillez saisir un mot de passe d'au moins 8 caractères.
              </small>
            )}
            <br/>
             {passwordStrengthError && (
              <small className="text-danger">
                Le mot de passe doit contenir des caractères spéciaux et des lettres majuscules.
              </small>
            )}
          </div>
        </Form.Group>
        <Form.Group className="col-12">
          <div className="mb-2">
          <Form.Label>Confirmer mot de passe</Form.Label>
            <Form.Control
              id="verifpassword"
              type="password"
              className="form-control form-control-lg"
              placeholder="***************"
              isInvalid={!!errors.verifpassword || passwordMatchError}
              {...register('verifpassword')}
            />
            {errors.verifpassword && (
              <small className="text-danger">
                Veuillez saisir à nouveau votre mot de passe.
              </small>
            )}
            {passwordMatchError && (
              <small className="text-danger">Les mots de passe ne sont pas compatibles.</small>
            )}
          </div>
        </Form.Group>
        <div className="col-12 text-center mt-4">
          <Button
            className="btn btn-lg btn-block btn-light lift text-uppercase"
            atl="signin"
            type="submit"
            disabled={passwordMatchError || passwordLengthError}
          >
            Confirmer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PasswordRecovery;
