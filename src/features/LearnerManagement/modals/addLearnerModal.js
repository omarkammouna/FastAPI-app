import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import useAddLearner from '../hooks/useAddLearner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'react-hook-form';
import { useForm } from 'react-hook-form';


function AddLearnerModal({ show, handleClose,edLevel,levelOrd,resfresh,setRefresh }) {

  const { register, onSubmit, handleSubmit, success, setValue,optionsByLevel,educationLevel,name,order,handleInputChangeFirstName,handleInputChangeLastName,handleLevelChange,handleSubLevelChange,errorFirstName,errorLastName } = useAddLearner(edLevel,levelOrd,resfresh,setRefresh);





  useEffect(() => {
    console.log(name, order, educationLevel)
    if (success) {
      handleClose()
     // window.location.reload()
    }
  }, [success, handleClose])
  return (
    <div>

      <ToastContainer />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouvel apprenant</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)} >

          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
             {...register('lastName')}
             onChange={handleInputChangeLastName}

              />
               {errorLastName &&
                              <small className="text-danger">
                                {errorLastName}
                              </small>
                            }
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prénom"
                {...register('firstName')}
                onChange={handleInputChangeFirstName}

              />
               {errorFirstName &&
                              <small className="text-danger">
                                {errorFirstName}
                              </small>
                            }
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                {...register('type')} >
                <option value="">Choisissez un type</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="C">Class</option>
              </Form.Control>
              <br />

              <Form.Group controlId="levelDropdown">
                <Form.Label>Niveau scolaire</Form.Label>
                <Form.Control as="select"
                  {...register('education_level')}
                  value={edLevel}
                  onChange={handleLevelChange}
                >
                  <option value="">Choisissez un niveau</option>
                  <option value="HS">Lycée</option>
                  <option value="MS">Collège</option>
                  <option value="PS">Primaire</option>
                </Form.Control>
              </Form.Group>
              <br />
              {(edLevel || educationLevel ) && (
                <Form.Group controlId="subLevelDropdown">
                  <Form.Label>Spécialité</Form.Label>
                  <Form.Control
                    as="select"
                    {...register('name')}
                    
                    onChange={handleSubLevelChange}
                    value={levelOrd}>
                    {/* <option value="">Choisissez une spécialité</option> */}
                    {optionsByLevel[edLevel || educationLevel].map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </Form.Control>
                  <Form.Control type="hidden" {...register('order')} value={order} />
                </Form.Group>
              )}
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="danger"  >
              Save Changes
            </Button>

          </Modal.Footer>
        </Form>
      </Modal>

    </div>
  )
}

export default AddLearnerModal