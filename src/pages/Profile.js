import React from 'react'

const Profile = () => {
  return (
    <div>

      {/* Body: Body */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row clearfix g-3">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 order-lg-1 order-sm-2 order-2">
              <div className="card shadow-sm">
                <div className="card-header py-3">
                  <h6 className="mb-0 fw-bold ">Nom Prénom parent</h6>
                </div>
                <div className="card-body">
                  <div className="border-bottom px-lg-5 px-md-2 px-2 bg-primary" id="main-search">
                    <div className="py-4">
                      <div className="input-group">
                        <input type="text" className="form-control border-0 p-0 bg-transparent big-search" placeholder="Recherche. Nom, e-mail" />
                        <div className="input-group-append ml-3">
                          <button className="btn btn-light" type="submit">Recherche</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th>Nom_Prénom</th>
                          <th>Status</th>
                          <th>Niveau</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <div className="no-thumbnail">
                                <img className="avatar rounded-circle" src="../assets/images/xs/avatar1.jpg" alt />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="mb-0 ">Enfant1_Nom_Prénom</h6>
                                <p className="mb-0 text-muted small">Enfant1_Nom_Prénom@gmail.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 ms-1 d-inline-block">Team admin</p>
                          </td>
                          <td>
                            <span className="mb-used">5ème Année</span>
                          </td>
                          <td className="text-center text-truncate">
                            <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                              <i className="icofont-ui-password fs-6 me-2" /> Réinitialiser le mot de passe
                            </button>
                            <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                              <i className="icofont-chart-line fs-6 me-2" /> Rapport d'activité</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-truncate">
                            <div className="d-flex align-items-center">
                              <div className="no-thumbnail">
                                <img className="avatar rounded-circle" src="../assets/images/xs/avatar3.jpg" alt />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <h6 className="mb-0 ">Enfant2_Nom_Prénom</h6>
                                <p className="mb-0 text-muted small">Enfant2_Nom_Prénom@gmail.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 ms-1 d-inline-block">User</p>
                          </td>
                          <td>
                            <span className="mb-used">3ème Année</span>
                          </td>
                          <td className="text-center text-truncate">
                            <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                              <i className="icofont-ui-password fs-6 me-2" /> Réinitialiser le mot de passe
                            </button>
                            <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                              <i className="icofont-chart-line fs-6 me-2" /> Rapport d'activité</button>
                          </td>
                        </tr>
                        {/*<tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar8.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Andrea Gill</h6>
                          <p className="mb-0 text-muted small">andreagill@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">User</p>
                    </td>
                    <td>
                      <span className="mb-used">18.16 MB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar7.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Zoe Wright</h6>
                          <p className="mb-0 text-muted small">zoewright@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">User</p>
                    </td>
                    <td>
                      <span className="mb-used">8.16 MB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar5.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Karen Clark</h6>
                          <p className="mb-0 text-muted small">karenclark@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">Admin</p>
                    </td>
                    <td>
                      <span className="mb-used">58.68 MB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar4.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Gavin Bell</h6>
                          <p className="mb-0 text-muted small">gavinbell@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">Admin</p>
                    </td>
                    <td>
                      <span className="mb-used">88.88 MB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar3.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Avery Bond</h6>
                          <p className="mb-0 text-muted small">averybond@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">User</p>
                    </td>
                    <td>
                      <span className="mb-used">588.18 MB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-truncate">
                      <div className="d-flex align-items-center">
                        <div className="no-thumbnail">
                          <img className="avatar rounded-circle" src="../assets/images/xs/avatar2.jpg" alt />
                        </div>
                        <div className="flex-fill ms-3 text-truncate">
                          <h6 className="mb-0 ">Sophie Glover</h6>
                          <p className="mb-0 text-muted small">sophieglover@gmail.com</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 ms-1 d-inline-block">User</p>
                    </td>
                    <td>
                      <span className="mb-used">1.2 GB</span>
                    </td>                                   
                    <td className="text-center text-truncate">  
                      <button type="button" className="btn text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#resetpassword">
                        <i className="icofont-ui-password fs-6 me-2" /> ResetPassword
                      </button>                                     
                      <button type="button" className="btn  text-decoration-none rounded-1 " data-bs-toggle="modal" data-bs-target="#activityreport">
                        <i className="icofont-chart-line fs-6 me-2" /> ActivityReport</button>
                    </td>
  </tr>*/}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 flex-lg-column  order-lg-2  order-sm-1 order-1">
              <div className="sticky-lg-top">
                <div className="row row-deck g-3">
                  {/*<div className="col-12 col-sm-6 col-md-6 col-lg-12">
              <div className="card  bg-lightyellow">
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                  <div className="preview-pane text-center">
                    <svg width={100} height={100} fill="currentColor" className="bi bi-app-indicator color-defult" viewBox="0 0 16 16">
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <span className="project-name display-5 fw-bold  d-flex justify-content-center color-defult">e-learn</span>
                    <p className="fw-bold  fs-6 mt-2 color-defult">Modified: <span id="datetime" /></p>
                  </div>
                </div>
              </div>
            </div>*/}
                  <div className="col-12 col-sm-6 col-md-6 col-lg-12">
                    <div className="card  color-bg-200">
                      <div className="card-header py-3">
                        <h6 className="mb-0 fw-bold ">Etat Abonné</h6>
                      </div>
                      <div className="card-body">
                        <div className="team-filter pb-3">
                          <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle w-100" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                              Abonné Actif
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark w-100" aria-labelledby="dropdownMenuButton2">
                              <li><a className="dropdown-item d-flex justify-content-between" href="#">All User<span>15</span></a></li>
                              <li><a className="dropdown-item active d-flex justify-content-between" href="#">Active <span>2</span></a></li>
                              <li><a className="dropdown-item d-flex justify-content-between" href="#">Invited <span>8</span></a></li>
                              <li><a className="dropdown-item d-flex justify-content-between" href="#">Suspended <span>0</span></a></li>
                              <li><a className="dropdown-item d-flex justify-content-between" href="#">Deleted <span>5</span></a></li>
                              <li><a className="dropdown-item d-flex justify-content-between" href="#">Disconnected <span>0</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
        </div>
      </div>



    </div>
  )
}

export default Profile
