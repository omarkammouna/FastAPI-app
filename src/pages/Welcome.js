import React from 'react'

const Welcome = () => {
  return (
    <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
                <div className="row clearfix g-3">
                    <div className="col-lg-8 col-md-12 flex-column">
                        <div className="row row-deck g-3">
                            <div className="col-12 col-xl-6 col-lg-12">
                                <div className="card mb-3 color-bg-200">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-5 order-lg-2">
                                                <div className="text-center p-4">
                                                    <img src="dist/assets/images/study.svg" alt="..." className="img-fluid set-md-img" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-7 order-lg-1">
                                                <h3 className=" mb-3">Welcome back, <span className="fw-bold">Molly</span></h3>
                                                <p className="line-height-custom mb-0">Your Study Completed <span className="secondary-color">72%</span> of the tasks.</p>
                                                <p className="line-height-custom">Progress is  <span className="secondary-color">Very good!</span></p>
                                                <a className="btn bg-secondary text-light btn-lg lift" href="http://pixelwibes.com/" target="_blank">Free Inquire</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 col-lg-12">
                                <div className="card mb-3 bg-secondary">
                                    <div className="card-body text-white d-flex flex-column">
                                        <div className="d-flex align-items-center mb-auto mt-3">
                                            <div><i className="icofont-license fs-1" /></div>
                                            <div className="flex-fill ms-3 text-truncate">
                                                <h5 className="mb-0">Advanced Learner</h5>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4>Level 3</h4>
                                            <span className="small"> 2 Course, 25 Point to reach Level 4</span>
                                        </div>
                                        <div className="progress" style={{ height: 10 }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-warning ms-1" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-warning ms-1" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 color-bg-200">
                            <div className="card-header py-3">
                                <h6 className="mb-0 fw-bold ">Time Spending on Learning</h6>
                            </div>
                            <div className="card-body">
                                <div id="apex-basic-column" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="card-header py-3 px-0 no-bg border-0 bg-transparent">
                                <h6 className="mb-0 fw-bold ">Other Courses </h6>
                                <span className="text-muted">some other courses to join now </span>
                            </div>
                            <div className="row row-deck">
                                <div className="col-md-12">
                                    <div className="owl-carousel owl-theme owl-carouseltwo">
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Environmental Engineering</h6>
                                                        </div>
                                                        <div className="btn-group dropup">
                                                            <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar"><img className="avatar rounded-circle" src="dist/assets/images/xs/avatar12.jpg" alt /></div>
                                                        <div className="flex-fill ms-2 text-truncate">
                                                            <div className>Diane Fisher</div>
                                                        </div>
                                                        <a href="courses.html" className="btn btn-primary btn-sm" alt="join">Join Now</a>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">15 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">3 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students " />
                                                                <span className="ms-2">320 Students</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-rating " />
                                                                <span className="ms-2">4.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Students Join</h4>
                                                        <span className="small">Student Bench 400</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Farm Management</h6>
                                                        </div>
                                                        <div className="btn-group dropup">
                                                            <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar"><img className="avatar rounded-circle" src="dist/assets/images/xs/avatar10.jpg" alt /></div>
                                                        <div className="flex-fill ms-2 text-truncate">
                                                            <div className>Andrea Gill</div>
                                                        </div>
                                                        <a href="courses.html" className="btn btn-primary btn-sm" alt="join">Join Now</a>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">52 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">4 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students " />
                                                                <span className="ms-2">120 Students</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-rating " />
                                                                <span className="ms-2">4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Students Join</h4>
                                                        <span className="small">Student Bench 150</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Oil &amp; Gas Operations</h6>
                                                        </div>
                                                        <div className="btn-group dropup">
                                                            <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar"><img className="avatar rounded-circle" src="dist/assets/images/xs/avatar5.jpg" alt /></div>
                                                        <div className="flex-fill ms-2 text-truncate">
                                                            <div className>Andrea Gill</div>
                                                        </div>
                                                        <a href="courses.html" className="btn btn-primary btn-sm" alt="join">Join Now</a>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">52 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">2 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students " />
                                                                <span className="ms-2">220 Students</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-rating " />
                                                                <span className="ms-2">4.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Students Join</h4>
                                                        <span className="small">Student Bench 350</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Telecommunications</h6>
                                                        </div>
                                                        <div className="btn-group dropup">
                                                            <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar"><img className="avatar rounded-circle" src="dist/assets/images/xs/avatar3.jpg" alt /></div>
                                                        <div className="flex-fill ms-2 text-truncate">
                                                            <div className>Karen Clark</div>
                                                        </div>
                                                        <a href="courses.html" className="btn btn-primary btn-sm" alt="join">Join Now</a>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">12 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">28 Days</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students " />
                                                                <span className="ms-2">78 Students</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-rating " />
                                                                <span className="ms-2">4.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Students Join</h4>
                                                        <span className="small">Student Bench 100</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Power and Energy Engineering</h6>
                                                        </div>
                                                        <div className="btn-group dropup">
                                                            <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                            <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                                <li><a className="dropdown-item" href="#">Share</a></li>
                                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar"><img className="avatar rounded-circle" src="dist/assets/images/xs/avatar3.jpg" alt /></div>
                                                        <div className="flex-fill ms-2 text-truncate">
                                                            <div className>Karen Clark</div>
                                                        </div>
                                                        <a href="courses.html" className="btn btn-primary btn-sm" alt="join">Join Now</a>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">52 Lessons</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">2 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students " />
                                                                <span className="ms-2">88 Students</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-rating " />
                                                                <span className="ms-2">4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Students Join</h4>
                                                        <span className="small">Student Bench 100</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '32%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card mb-3 color-bg-200">
                            <div className="card-body">
                                <div className="daily_practice">
                                    <h6 className="mb-3 fw-bold ">Daily Practice</h6>
                                    <div className="row g-2">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6">
                                            <div className="card bg-lightblue ">
                                                <div className="card-body">
                                                    <h6 className="fw-bold mb-0 color-defult color-defult">Online Talking</h6>
                                                    <small className="color-defult">#Listening</small>
                                                    <div className="duration d-flex align-items-center justify-content-between pt-5">
                                                        <span className="fw-bold color-defult">20Min</span>
                                                        <span className="fw-bold color-careys-pink"><i className="icofont-listening fs-2" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6">
                                            <div className="card bg-lightgreen ">
                                                <div className="card-body">
                                                    <h6 className="fw-bold mb-0 color-defult"> Lesson 3</h6>
                                                    <small className="color-defult">#Video Call</small>
                                                    <div className="duration d-flex align-items-center justify-content-between pt-5">
                                                        <span className="fw-bold color-defult">15Min</span>
                                                        <span className="fw-bold color-careys-pink"><i className="icofont-video-cam fs-2" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dividers-block" />
                                <div className="team_members">
                                    <h6 className="mb-3 fw-bold ">Your College Mates</h6>
                                    <div className="owl-carousel owl-theme owl-carouselone">
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar3.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Peter Bower</h6>
                                        </div>
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar5.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Joshu Turn</h6>
                                        </div>
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar8.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Ryan Bell</h6>
                                        </div>
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar9.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Sean	Jones</h6>
                                        </div>
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar11.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Max Morg</h6>
                                        </div>
                                        <div className="item text-center">
                                            <img src="dist/assets/images/sm/avatar10.jpg" alt className="rounded-3 img-thumbnail shadow-sm" />
                                            <h6 className="mb-0 rounded-3">Colin Rees</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="dividers-block" />
                                <div className="upcoming-lessons">
                                    <h6 className="mb-3 fw-bold ">Upcoming-Lessons</h6>
                                    <div className="card line-lightblue mb-3">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="lesson_name">
                                                    <h6 className="mb-0 fw-bold ">Civil Law</h6>
                                                    <small className="text-muted">Thu 15, 4 PM to 6 PM</small>
                                                </div>
                                                <div className="btn-group dropup">
                                                    <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                    <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                                        <li><a className="dropdown-item" href="#">Share</a></li>
                                                        <li><a className="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-5">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar2.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar1.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar3.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar4.jpg" alt />
                                                </div>
                                                <div className="add_lession_person avatar-list">
                                                    <span className="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i className="icofont-ui-add" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card line-lightgreen">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="lesson_name">
                                                    <h6 className="mb-0 fw-bold ">Arts and Design</h6>
                                                    <small className="text-muted">Thu 15, 2 PM to 4 PM</small>
                                                </div>
                                                <div className="btn-group dropup">
                                                    <a href="#" className="nav-link py-2 px-3 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                                    <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                                        <li><a className="dropdown-item" href="#">Share</a></li>
                                                        <li><a className="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mt-5">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar7.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar8.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar9.jpg" alt />
                                                    <img className="avatar rounded-circle" src="dist/assets/images/xs/avatar10.jpg" alt />
                                                </div>
                                                <div className="add_lession_person avatar-list">
                                                    <span className="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i className="icofont-ui-add" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-dark mb-3">
                            <div className="card-body">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold text-white">Are you ready next lessons </h6>
                                </div>
                                <div className="digital-clock d-flex justify-content-center align-items-center min-height-220">
                                    <figure>
                                        <div className="face top"><p id="s" /></div>
                                        <div className="face front"><p id="m" /></div>
                                        <div className="face left"><p id="h" /></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* Row End */}
            </div>
        </div>
  )
}

export default Welcome
