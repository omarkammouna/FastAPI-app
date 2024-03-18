import React, { useState } from 'react'
import { useEffect } from 'react';
import useFetch from '../hooks/fetch-hook';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Learners from './Learners';
import StarterPage from '../components/StarterPage';
import AddLearnerModal from '../features/LearnerManagement/modals/addLearnerModal';
const Groups = () => {
  // const [subLevels,setSubLevels]=useState([])
  const [levelOrderOccurrences, setLevelOrderOccurrences] = useState({});
  const [showLearners, setShowLearners] = useState(false)
  const [levelOrder,setLevelOrder]=useState()
  const [learners, setLearners] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const educationLevel = queryParams.get('education_level');
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const { data: response, loading, error } = useFetch(`http://localhost:5000/Learners/getSubLevelsByLevel?education_level=${educationLevel}`,true);
  // const isDataEmpty = Object.keys(response).length > 0;
  const isDataEmpty =  response && Object.keys(response.levelOrderData).length === 0;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (!loading && response) {
      // // setSubLevels(response.distinctOrders);
      // setLevelOrderOccurrences(response.levelOrderOccurrences);
      // console.log(levelOrderOccurrences);
      setLevelOrderOccurrences(response.levelOrderData);
      // setLearners(response.levelOrderData.learners)
      console.log('Response:', response);
      console.log('levelOrderOccurrences:', response.levelOrderData);
      


    }
  }, [response, loading, setLevelOrderOccurrences]);

function getLearners(levelOrder)
{
  setShowLearners(true)
  setLevelOrder(levelOrder)

}


  return (
    <div>
            <AddLearnerModal show={show} handleClose={handleClose} edLevel={educationLevel} levelOrd={levelOrder} />

     
      
      {!showLearners &&(
        <div>
          {/* Body: Body */}
          <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
              <div className="row clearfix g-3">
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 order-lg-1  order-sm-2 order-2">
                  <div className="card shadow-sm">
                    <div className="card-header py-3">
                      <h6 className="mb-0 fw-bold ">Nom_Etablissement_Scolaire </h6>
                    </div>
                    <div className="card-body">
                      <div className="border-bottom px-lg-5 px-md-2 px-2 bg-primary" id="main-search">
                        <div className="py-4">
                          <div className="input-group">
                            <input type="text" className="form-control border-0 p-0 bg-transparent big-search" placeholder="Recherche " />
                            <div className="input-group-append ml-3">
                              <button className="btn btn-light" type="submit">Recherche</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {isDataEmpty &&(
        
        <StarterPage/>
      )}
                      <div className="row g-3 row-deck">
                        {/* {subLevels.map((sl)=>( */}
                        {Object.keys(levelOrderOccurrences)?.map((levelOrder) => (
                          <div key={levelOrder} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" style={{ border: '2px solid #e5e5e5' }}>

                            <div className="card text-center">

                              {/* Group Hover action */}
                              <div className="btn-group position-absolute top-0 end-0">
                                <a href="#" className="nav-link py-2 px-3 " data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                                  <li><a className="dropdown-item" href="#">Edit</a></li>
                                  <li><a className="dropdown-item" href="#">Share</a></li>
                                  <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                              </div>
                              <div className="card-body d-flex align-items-center justify-content-between flex-column">
                                <div className="me-auto ms-auto py-4">
                                  <img className="avatar rounded-circle m-1 lift" src="dist/assets/images/female.png" data-bs-toggle="tooltip" data-placement="top" title="Avatar Name" alt />
                                  <img className="avatar rounded-circle m-1 lift" src="dist/assets/images/male.png" data-bs-toggle="tooltip" data-placement="top" title="Avatar Name" alt />

                                </div>
                                <div className="mt-2">
                                  <h6 className="mb-0 ">
                                    {/* <Link to={`/Learners/${learners}`} className="mb-0 "> Add the Link */}
                                    {/* <Link to={{ pathname: '/Learners', state: { learners: levelOrderOccurrences[levelOrder].learners } }} className="text-decoration-none"> */}
                                    {/* <Link to={`/Learners?education_level=${encodeURIComponent(JSON.stringify(educationLevel))}&&levelOrder=${encodeURIComponent(JSON.stringify(levelOrder))}`} className="btn btn-primary">

                                      {/* ... your existing card content ... */} 
                                    {/* </Link>  */}
                                    
                                    
                                  </h6>

                                  <small className="text-muted">{levelOrderOccurrences[levelOrder].count} élèves</small>


                                </div>
                                <button onClick={()=>getLearners(levelOrder)} className="btn btn-primary">{levelOrder}</button>

                              </div>
                            </div> {/* .Card End */}
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 flex-lg-column  order-lg-2  order-sm-1 order-1">
                  <div className="sticky-lg-top">
                    <div className="row row-deck g-3">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                        <div className="card  bg-lightyellow">
                          <div className="card-body d-flex align-items-center justify-content-center flex-column">
                            <div className="preview-pane text-center">
                              <svg width={100} height={100} fill="currentColor" className="bi bi-app-indicator color-defult" viewBox="0 0 16 16">
                                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              </svg>
                              <span className="project-name display-5 fw-bold  d-flex justify-content-center color-defult">e-learn</span>
                              <p className="fw-bold  mt-2 color-defult">Dernière classe ajoutée: <span id="datetime" /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                        <div className="card  color-bg-200">
                          <div className="card-header py-3">
                            <h6 className="mb-0 fw-bold  pb-3">Nouvelles classes ici</h6>
                          </div>
                          <div className="card-body pt-0">
                            <button  onClick={handleShow} type="button" className="btn btn-dark w-100" ><i className="icofont-group me-2 fs-6" />Créer une classe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* Row End */}
            </div>
          </div>
          {/* Modal Members*/}
          <div className="modal fade" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  fw-bold" id="addUserLabel">Manage team members</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="inviteby_email">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Members Invite" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn btn-dark" type="button" id="button-addon2">Members Invite</button>
                    </div>
                  </div>
                  <div className="members_list">
                    <h6 className="fw-bold ">Members of e-learn</h6>
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img className="avatar lg rounded-circle" src="../assets/images/xs/avatar2.jpg" alt />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                            <span className="text-muted">rachel.carr@gmail.com</span>
                          </div>
                          <div className="members-action">
                            <span className="members-role ">Admin</span>
                            <div className="btn-group">
                              <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a></li>
                                <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img className="avatar lg rounded-circle" src="../assets/images/xs/avatar3.jpg" alt />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Lucas Baker<a href="#" className="link-secondary ms-2">(Resend invitation)</a></h6>
                            <span className="text-muted">lucas.baker@gmail.com</span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    Member
                                    <span>Can view, edit, delete, comment on and save files</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    Admin
                                    <span>Member, but can invite and manage team members</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="icofont-ui-settings  fs-6" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Delete Member</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item py-3 text-center text-md-start">
                        <div className="d-flex align-items-center flex-column flex-sm-column flex-md-row">
                          <div className="no-thumbnail mb-2 mb-md-0">
                            <img className="avatar lg rounded-circle" src="../assets/images/xs/avatar8.jpg" alt />
                          </div>
                          <div className="flex-fill ms-3 text-truncate">
                            <h6 className="mb-0  fw-bold">Una Coleman</h6>
                            <span className="text-muted">una.coleman@gmail.com</span>
                          </div>
                          <div className="members-action">
                            <div className="btn-group">
                              <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="icofont-check-circled" />
                                    Member
                                    <span>Can view, edit, delete, comment on and save files</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    <i className="fs-6 p-2 me-1" />
                                    Admin
                                    <span>Member, but can invite and manage team members</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="btn-group">
                              <div className="btn-group">
                                <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  <i className="icofont-ui-settings  fs-6" />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a></li>
                                  <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a></li>
                                  <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Suspend member</a></li>
                                  <li><a className="dropdown-item" href="#"><i className="icofont-not-allowed fs-6 me-2" />Delete Member</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     )}
     {showLearners && (
<Learners educationLevel={educationLevel} levelOrder={levelOrder}/>
     )}





    </div>
  )
}

export default Groups
