import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import LearnerService from '../service/LearnerService'
import useFetch from '../hooks/fetch-hook'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddLearnerModal from '../features/LearnerManagement/modals/addLearnerModal';
import EditLearner from '../features/LearnerManagement/EditLearner';
import StarterPage from '../components/StarterPage';
import { useLocation } from 'react-router-dom';

function Learners({levelOrder,educationLevel}) {
 
  let url=""
  if(!levelOrder && !educationLevel){
    url=`http://localhost:5000/Learners/GetAllLearners`
  }
  else {
    url=`http://localhost:4001/E_AAAI?education_level=${educationLevel}&levelOrder=${levelOrder}`
  }

  // const { data: response, loading, error } = useFetch(url);
  const [resfresh,setRefresh]=useState(false)

  const { data: response, loading, error } = useFetch(url, resfresh,setRefresh); // Auto-refresh enabled

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [learner, setLearner] = useState();

 
  
// const learnersFromSchool = JSON.parse(queryParams.get('learners')) ; // Default to an empty object if not provided
const [learners, setLearners] = useState([]);

  // const learnersFromSchool = location.state?.learners;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showLearners=()=>{

  }



  const handleShowEdit = async (id) => {
    setShowEdit(true);
   
    console.log(id)
    try {
      const response = await fetch(`http://localhost:4001/E_AAAJ?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      setLearner(responseData)


    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(error.response.data.error);

      } else {
        console.log(error);
        toast.error('An error occurred');
      }
    }
  };

  useEffect(() => {
    console.log(resfresh)
    console.log(educationLevel,levelOrder)
    if (!loading && response) {
      console.log("dkhalna")
     setLearners(response);
     console.log(response)
    
     
    }
  console.log(error)
  
  }, [response, loading,error]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>
  //     <StarterPage/>
  //   </div>;
  // }


  return (
    <div>
      <ToastContainer />
      <AddLearnerModal show={show} handleClose={handleClose} edLevel={educationLevel} levelOrd={levelOrder}  resfresh={resfresh}
        setRefresh={setRefresh} />
      <EditLearner
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        learner={learner}
        resfresh={resfresh}
        setRefresh={setRefresh}
        
      />
      

      {/* Body: Body */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <div className="card border mb-4 no-bg">
                <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                  <h3 className=" fw-bold flex-fill mb-0">
                     Les étudiants {" "}
                    <button type="button" className="btn btn-danger">
                      <i className="icofont-ui-add color-defult-white" onClick={handleShow} /> {/* Change the icon here */}
                    </button>
                  </h3>
                
                </div>
              </div>
            </div>
          </div>

{!loading &&(
          <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-deck py-3">
            {learners.map((learner) => (
              
              <div className="col">

                <div className="card teacher-card " style={{ border: '2px solid #cccccc' }}>
                       
                        
                     
                  <div className="card-body p-4 d-flex">
                    <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                      
                      <a href="teachers-info.html">
                        {learner.type==='F' && <img
                          src="dist/assets/images/female.png"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        /> }
                         {learner.type==='M' && <img
                          src="dist/assets/images/male.png"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        /> }
                        {/* <img
                          src="dist/assets/images/female.png"
                          alt=""
                          className="avatar xl rounded-circle img-thumbnail shadow-sm"
                        /> */}
                      </a>
                     
                    </div>
                    <div className="teacher-info ps-xl-4 ps-md-2 ps-sm-4 ps-4 w-100" style={{ borderLeft: '2px solid #cccccc' }} >
                      <a
                        href="teachers-info.html"
                        className="mb-0 mt-2  fw-bold d-block fs-6"
                      >
                        {learner.last_name} {learner.first_name} {learner.level.name}
                      </a>
                      <span className="text-uppercase small text-muted ">
                        {learner.type === 'F' && <span>Female</span>}
                        {learner.type === 'M' && <span>Male</span>}
                        {learner.type === 'C' && <span>Class</span>}
                      </span>
                      
                      <div className="video-setting-icon mt-3 pt-3" style={{ borderTop: '2px solid #cccccc' }}>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic mixed styles example"
                        >
                        
                          <button type="button" className="btn btn-danger" onClick={() => handleShowEdit(learner._id)}>
                            <i className="icofont-ui-edit color-defult-white" /> {/* Change the icon here */}
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>





            ))}

          </div>
          )}
          {
            error &&(
              <StarterPage/>
            )
          }
        </div>
      </div>

      <div
        className="modal fade"
        id="addUser"
        tabIndex={-1}
        aria-labelledby="addUserLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="addUserLabel">
                Voir plus
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="inviteby_email">
                {/* <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Members Invite"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-dark"
                    type="button"
                    id="button-addon2"
                  >
                    Members Invite
                  </button>
                </div> */}
              </div>
             
                
             
              <div className="members_list">
                <h6 className="fw-bold ">Les apprentis de e-Learn</h6>
                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                {learners.map((learner)=>(
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="dist/assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">{learner.first_name}{learner.last_name} </h6>
                        <span className="text-muted">
                          {/* rachel.carr@gmail.com */}
                          {/* {learner.first_name}{learner.last_name} */}
                        </span>
                      </div>
                      <div className="members-action">
                        <span className="members-role ">
                          
                        {learner.type === 'F' && <span>Female</span>}
                        {learner.type === 'M' && <span>Male</span>}
                        {learner.type === 'C' && <span>Classe</span>}
                          
                          </span>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-ui-password fs-6 me-2" />
                                Suspendre
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-chart-line fs-6 me-2" />
                                ActivityReport
                              </a>
                            </li>
                            
                          </ul>
                          
                        </div>
                      </div>
                    </div>
                  </li>
                   ))}
                  {/* <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">
                          Lucas Baker
                          <a href="#" className="link-secondary ms-2">
                            (Resend invitation)
                          </a>
                        </h6>
                        <span className="text-muted">
                          lucas.baker@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                Member
                                <span>
                                  Can view, edit, delete, comment on and save
                                  files
                                </span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                Admin
                                <span>
                                  Member, but can invite and manage team members
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-delete-alt fs-6 me-2" />
                                Delete Member
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  {/* <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">Una Coleman</h6>
                        <span className="text-muted">
                          una.coleman@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                Member
                                <span>
                                  Can view, edit, delete, comment on and save
                                  files
                                </span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                Admin
                                <span>
                                  Member, but can invite and manage team members
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn bg-transparent dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="icofont-ui-settings  fs-6" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-ui-password fs-6 me-2" />
                                  ResetPassword
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-chart-line fs-6 me-2" />
                                  ActivityReport
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-delete-alt fs-6 me-2" />
                                  Suspend member
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-not-allowed fs-6 me-2" />
                                  Delete Member
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Learners