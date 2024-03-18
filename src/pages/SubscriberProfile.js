import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../assets/Purchase.module.css'

const SubscriberProfile = () => {
  return (
    <div className={classes.purchase} >
    <div className="body d-flex py-lg-3 py-md-2">
      <div className="container-xxl">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="card color-bg-200">
              <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Renseignements sur le plan actuel</h6>
              </div>
              <div className="card-body">
                <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2">
                  <div className="col">
                    <div className="d-flex align-items-center">
                      <div className="lesson_name flex-fill ">
                        <h6 className="mb-0 fw-bold fs-6 mb-2 text-success">Annuel</h6>
                      </div>
                      <div className="avatar"><img className="avatar rounded-circle" src="../images/profile-icon.jpg" alt /></div>
                      <div className="ms-2 text-truncate">
                        <div className>Nom Prénom</div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-mastercard-alt" />
                          <span className="ms-2">XXXXXXXXXXXXX123</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-calendar" />
                          <span className="ms-2">22 Mar 2023 (Date d'inscription)</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">3 Utilisateurs</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="icofont-group-students " />
                          <span className="ms-2">1 utilisateur non actif</span>
                        </div>
                      </div>
                    </div>
                    <div className="dividers-block" />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="small fw-bold mb-0">Date d'expiration</h4>
                      <span className="small text-danger">21 Mars 2024</span>
                    </div>
                    <div className="progress plan-active" style={{ height: 8 }}>
                      <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                      <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                      <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-body mb-0 bg-dark">
                      <ul className="list-unstyled text-white ms-1 mb-0">
                        <li className="d-flex align-items-center pb-1"><i className="bi bi-check2-circle me-2" /> 799.900 DT (1 Année)</li>

                        <li className="d-flex align-items-center pb-1"><i className="bi bi-check2-circle me-2" /> Utilisateurs (3 Utilisateurs)</li>
                        <li className="d-flex align-items-center pb-1"><i className="bi bi-check2-circle me-2" /> Utilisateurs Actifs (2 Utilisateurs)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row clearfix row-deck g-3">
          <div className="col-lg-8 col-md-12 flex-column">
            <div className="row g-3 pb-3">
              <div className="col-md-6">
                <div className="card color-bg-200">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult"><i className="bi bi-people-fill fs-4" /></div>
                      <div className="flex-fill ms-3 text-truncate">
                        <div className>Les Abonnés</div>
                        <h5 className="mb-0 ">3</h5>
                      </div>
                      <Link to="/SubscriberProfile/Learners" title="view-members" className="btn btn-link text-decoration-none  rounded-1"><i className="icofont-dotted-right fs-2 " /></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="card color-bg-200">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightblue color-defult"><i className="bi bi-hdd-network-fill fs-4" /></div>
                      <div className="flex-fill ms-3 text-truncate">
                        <div className>Team Members</div>
                        <h5 className="mb-0 ">1.1 MB / 5 TB</h5>
                      </div>
                      <a href="groups.html" title="space-used" className="btn btn-link text-decoration-none  rounded-1"><i className="icofont-dotted-right fs-2 " /></a>
                    </div>
                  </div>
                </div>
              </div>*/}
              <div className="col-md-6">
                <div className="card color-bg-200">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightgreen color-defult"><i className="bi bi-calendar3-range-fill fs-4" /></div>
                      <div className="flex-fill ms-3 text-truncate">
                        <div className>Renouveler l'abonnement</div>
                        <h5 className="mb-0 ">avant le 31 Mar 2024</h5>
                      </div>
                      <Link to="/SubscriberProfile/Purchase" title="renewal-date" className="btn btn-link text-decoration-none  rounded-1"><i className="icofont-dotted-right fs-2 " /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 color-bg-200">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-5 order-lg-2 ">
                    <div className="text-center p-4">
                      <img src="../images/profile-icon.jpg" alt="..." className="img-fluid" style={{ maxWidth: 220 }} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 order-lg-1 px-4">
                    <h3 className="fw-bold ">Nom_Prénom</h3>
                    <p className="line-height-custom">Bienvenue Mr Nom_Prénom!</p>
                    <a className="btn bg-secondary text-light btn-lg lift" href="" target="_blank">Editer </a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card mb-3 color-bg-200">
              <div className="card-body">
                
                <div className="licences_used">
                  <h6 className="mb-3 fw-bold ">Votre Activitées</h6>
                  <div id="apex-circle-gradient" />
                  <div className="dividers-block" />
                  <div className="card mb-4 shadow-sm overflow-hidden border-0">
                    <div className="card-body overflow-hidden pb-0">
                      <div className="d-flex align-items-center">
                        <div className="avatar lg  rounded-1 no-thumbnail bg-primary text-white"><i className="bi bi-handbag-fill fs-4" /></div>
                        <div className="flex-fill ms-3 text-truncate">
                          <div className>Purchased</div>
                          <h5 className="mb-0 ">15</h5>
                        </div>
                        <button type="button" className="btn btn-link text-decoration-none  rounded-1" data-bs-toggle="tooltip" data-bs-placement="left" title="The percentage of memebrs in your team out of the Licences you purchased">
                          <i className="bi bi-info-circle-fill " />
                        </button>
                      </div>
                    </div>
                    <div id="apexspark1" />
                  </div>
                  <div className="card mb-4 shadow-sm overflow-hidden border-0">
                    <div className="card-body overflow-hidden pb-0">
                      <div className="d-flex align-items-center">
                        <div className="avatar lg  rounded-1 no-thumbnail bg-primary text-white"><i className="bi bi-person-check-fill fs-4" /></div>
                        <div className="flex-fill ms-3 text-truncate">
                          <div className>Utilisateurs Actifs</div>
                          <h5 className="mb-0 ">2</h5>
                        </div>
                        <button type="button" className="btn btn-link text-decoration-none  rounded-1" data-bs-toggle="tooltip" data-bs-placement="left" title="The percentage of memebrs in your team out of the Active members">
                          <i className="bi bi-info-circle-fill " />
                        </button>
                      </div>
                    </div>
                    <div id="apexspark2" />
                  </div>
                  
                </div>
                
                
              </div>
            </div>
          </div>
        </div>{/* Row End */}
      </div>
    </div>
    </div>

  )
}

export default SubscriberProfile
