import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Card,
  Container,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { json, useParams } from "react-router-dom";
import Learners from "../../pages/Learners";
const EditLearner = ({ showEdit, setShowEdit, learner,resfresh,setRefresh}) => {
  const handleClose = () => setShowEdit(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [msg, setMsg] = useState("");

  const [ev, setEv] = useState();
  const [learnerr, setLearner] = useState();

  const optionsByLevel = {
    HS: ['Baccalauréat', '3ème Année', '2ème Année', '1ère Année'],
    MS: ['9ème Année', '8ème Année', '7ème Année'],
    PS: ['1ère année', '2ème Année', '3ème Année', '4ème Année', '5ème Année', '6ème Année']
  };
  const [educationLevel, setEducationLevel] = useState('');
  // const [name, setName] = useState('');
  const [order, setOrder] = useState()
  const [name, setName] = useState(""); // Initialize with learner's name
  const [firstName, setFirstName] = useState(""); // Initialize with learner's name
  const [lastName, setLastName] = useState(""); // Initialize with learner's name
  const [selectedType, setSelectedType] = useState(learner?.type || ''); // Initialize with learner's type


  useEffect(() => {
    console.log("Received new learner prop:", learner);
    // Rest of your code...
  }, [learner]);


  const handleLevelChange = (e) => {
    const level = e.target.value;
    setEducationLevel(level);
    setName('');
  };

  const handleSubLevelChange = (e) => {
    setName(e.target.value);
    let newOrder = 0;

    if (e.target.value === 'Baccalauréat') {
      newOrder = 4;
    } else {
      newOrder = parseInt(e.target.value.charAt(0));
    }

    setOrder(newOrder);

    // Set the 'order' value in the form using setValue from useForm
    setValue('order', newOrder);

  };
  //   useEffect(() => {
  //     // Update the selected name when educationLevel changes
  //     setName('');
  // }, [educationLevel]);
  useEffect(() => {
    if (learner) {
      setName(learner?.level?.name || ''); // Set the name based on learner's level

      setEducationLevel(learner?.level?.education_level || '');
      console.log('Received learner prop:', learner);
      console.log('Education level state:', educationLevel);


    }
    setFirstName(learner?.first_name)
    setLastName(learner?.last_name)
  }, [learner, educationLevel, showEdit]);

  const onSubmit = async (data) => {
    data.education_level = educationLevel;

    data.id = learner?._id;
    try {
      const response = await fetch(`http://localhost:4001/E_AAAK`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData)
      setLearner(responseData)
      toast.success(responseData.message)
      setRefresh(true)
      console.log("pares update"+resfresh)

      setShowEdit(false)
      //  window.location.reload()
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(error.response.data.error);

      } else {
        console.log(error);
        toast.error('An error occurred');
      }
    }
  };

  return (
    <>
      <Modal show={showEdit} onHide={handleClose} size="lg">
        <Modal.Header >
          <Modal.Title>Modifier le profil </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)} >






          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                {...register('lastName')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prénom"
                {...register('firstName')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                {...register('type')}
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {/* <option value="">{learner?.type}</option> */}
                {learner?.type === 'M' && <option value="">Male</option>}
                {learner?.type === 'F' && <option value="">Female</option>}
                {learner?.type === 'C' && <option value="">Classe</option>}


                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="C">Class</option>
              </Form.Control>
              <br />

              <Form.Group controlId="levelDropdown">
                <Form.Label>Niveau scolaire</Form.Label>
                <Form.Control as="select"
                  {...register('education_level')}
                  value={educationLevel}
                  onChange={handleLevelChange}
                //  defaultValue={learner?.level.education_level}
                >
                  {/* <option value="">{learner?.level.education_level}</option> */}
                  {learner?.level.educationLevel === 'HS' && <option value="">Lycée</option>}
                  {learner?.level.educationLevel === 'MS' && <option value="">Collège</option>}
                  {learner?.level.educationLevel === 'PS' && <option value="">Primaire</option>}

                  <option value="HS">Lycée</option>
                  <option value="MS">Collège</option>
                  <option value="PS">Primaire</option>
                </Form.Control>
              </Form.Group>
              <br />

              <Form.Group controlId="subLevelDropdown">
                <Form.Label>Spécialité</Form.Label>
                <Form.Control
                  as="select"
                  {...register('name')}
                  value={name}
                  onChange={handleSubLevelChange}
                // defaultValue={learner?.level.name}
                >
                  {name && <option value={name}>{name}</option>}
                  {optionsByLevel[educationLevel]?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </Form.Control>
                <Form.Control type="hidden" {...register('order')} value={order} />
              </Form.Group>

            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="btn btn-danger"  >
              Save Changes
            </Button>

          </Modal.Footer>
        </Form>

      </Modal >
    </>
  );
};

export default EditLearner;
