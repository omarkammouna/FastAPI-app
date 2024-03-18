import React from 'react'

const LearnerProfile = () => {
    return (
        <div>

            {/* Body: Body */}
            <div className="body d-flex py-lg-3 py-md-2">
                <div className="container-xxl">
                     {/*<div className="row clearfix mb-5 g-3 row-deck">
                       <div className="col-md-12 col-lg-8">
                            <div className="card">
                                <div className="card-body p-4 d-flex align-items-center">
                                    <div className="d-flex align-items-center flex-column flex-md-row flex-fill">
                                        <img src="assets/images/profile_av.png" alt className="rounded-circle" />
                                        <div className="media-body ms-md-5 m-0 mt-4 mt-md-0 text-md-start text-center">
                                            <h5 className="font-weight-bold ">Molly Cornish</h5>
                                            <div className="text-muted">Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.</div>
                                            <div className="color-light-success mb-2">Achievement Level 6</div>
                                            <a href="javascript:void(0)" className="d-inline-block text-primary"> <strong>234</strong> <span className="text-muted">followers</span> </a>
                                            <a href="javascript:void(0)" className="d-inline-block text-primary ms-3"> <strong>111</strong> <span className="text-muted">following</span> </a>
                                            <ul className="social mb-0 list-inline mt-3">
                                                <li className="list-inline-item"><a href="#" className="d-flex align-items-center justify-content-center avatar rounded-circle btn btn-primary"><i className="fa fa-facebook-f" /></a></li>
                                                <li className="list-inline-item"><a href="#" className="d-flex align-items-center justify-content-center avatar rounded-circle btn btn-primary"><i className="fa fa-twitter" /></a></li>
                                                <li className="list-inline-item"><a href="#" className="d-flex align-items-center justify-content-center avatar rounded-circle btn btn-primary"><i className="fa fa-instagram" /></a></li>
                                                <li className="list-inline-item"><a href="#" className="d-flex align-items-center justify-content-center avatar rounded-circle btn btn-primary"><i className="fa fa-linkedin" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card bg-lightblue  ">
                                <div className="card-body text-center d-flex align-items-center justify-content-center flex-column">
                                    <h6 className="fw-bold mb-0 fs-4 color-defult ">85</h6>
                                    <span className="fs-6 color-defult ">Code</span>
                                </div>
                            </div>
                            <div className="card bg-lightblue ">
                                <div className="card-body text-center d-flex align-items-center justify-content-center flex-column">
                                    <h6 className="fw-bold mb-0 fs-4 color-defult ">15</h6>
                                    <span className="fs-6 color-defult ">Skills</span>
                                </div>
                            </div>
                            <div className="card bg-lightblue ">
                                <div className="card-body text-center d-flex align-items-center justify-content-center flex-column">
                                    <h6 className="fw-bold mb-0 fs-4 color-defult ">85</h6>
                                    <span className="fs-6 color-defult ">Posts</span>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div className="row clearfix row-deck g-3 mb-3">
                        <div className="col-xxl-4 col-xl-3 col-lg-12">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold">Your Skill</h6>
                                </div>
                                <div className="card-body">
                                    <div id="apex-basic-radar" className="line-color" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold ">My Task</h6>
                                </div>
                                <div className="card-body">
                                    <div className="upcoming-lessons">
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between bunch_list">
                                                    <div className="task_status">
                                                        <span className="rounded-circle light-success-bg" />
                                                    </div>
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Civil Law</h6>
                                                        <small className="text-muted">Lesson 1</small>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Daily Task 1</h6>
                                                        <small className="text-muted">Write Answer</small>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0 fw-bold  small-14">12:45 PM</h6>
                                                        <small className="text-muted">Today</small>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0 fw-bold  color-light-success small-14">Finised</h6>
                                                        <small className="text-muted">Yesterdar</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between bunch_list">
                                                    <div className="task_status">
                                                        <span className="rounded-circle light-orange-bg" />
                                                    </div>
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                        <small className="text-muted">Lesson 6</small>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Daily Task 2</h6>
                                                        <small className="text-muted">Read News</small>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0 fw-bold  small-14">10:11 AM</h6>
                                                        <small className="text-muted">Tuesday</small>
                                                    </div>
                                                    <div className="complited_time">
                                                        <button type="button" className="btn  btn-sm light-orange-bg text-white">Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between  bunch_list">
                                                    <div className="task_status">
                                                        <span className="rounded-circle light-orange-bg" />
                                                    </div>
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                        <small className="text-muted">Lesson 4</small>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Daily Task 1</h6>
                                                        <small className="text-muted">page 18</small>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0 fw-bold  small-14">9:11 AM</h6>
                                                        <small className="text-muted">Friday</small>
                                                    </div>
                                                    <div className="complited_time">
                                                        <button type="button" className="btn  btn-sm light-orange-bg text-white">Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between bunch_list">
                                                    <div className="task_status">
                                                        <span className="rounded-circle light-orange-bg" />
                                                    </div>
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                        <small className="text-muted">Lesson 6</small>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Daily Task 2</h6>
                                                        <small className="text-muted">Read News</small>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0 fw-bold  small-14">10:11 AM</h6>
                                                        <small className="text-muted">Tuesday</small>
                                                    </div>
                                                    <div className="complited_time">
                                                        <button type="button" className="btn  btn-sm light-orange-bg text-white">Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between bunch_list">
                                                    <div className="task_status">
                                                        <span className="rounded-circle light-orange-bg" />
                                                    </div>
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                        <small className="text-muted">Lesson 6</small>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Daily Task 2</h6>
                                                        <small className="text-muted">page 19</small>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0 fw-bold  small-14">10:11 AM</h6>
                                                        <small className="text-muted">Tuesday</small>
                                                    </div>
                                                    <div className="complited_time">
                                                        <button type="button" className="btn  btn-sm light-orange-bg text-white">Done</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold ">Exam Schedule</h6>
                                </div>
                                <div className="card-body">
                                    <div className="upcoming-lessons">
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Legaladvice</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 1</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Mon</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">10:11 AM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 2</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Tue</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">10:10 AM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Civil-Law's</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 3</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Wed</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">1:00 PM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Marketing</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 7</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Thu</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">3:00 PM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Hospitality</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 3</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Tue</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">11:00 AM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Civil-Law's</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 4</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Wed</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">2:00 PM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="lesson_name">
                                                        <h6 className="mb-0 fw-bold  small-14">Operation</h6>
                                                    </div>
                                                    <div className="assignment_name">
                                                        <h6 className="mb-0  small-14">Lesson 7</h6>
                                                    </div>
                                                    <div className="submit_time">
                                                        <h6 className="mb-0  small-14">Fri</h6>
                                                    </div>
                                                    <div className="complited_time">
                                                        <h6 className="mb-0  small-14">3:00 PM</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix g-3">
                        <div className="col-xl-8 col-lg-7">
                            <div className="card mb-3">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold ">Point Summary</h6>
                                </div>
                                <div className="card-body">
                                    <div id="apex-stacked-area" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className="card mb-3 border-0">
                                <div className="card-header py-3 ">
                                    <h6 className="mb-0 fw-bold ">My Courses </h6>
                                </div>
                                <div className="row row-deck">
                                    <div className="owl-carousel owl-theme owl-carouselfour">
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
                                                    <div className="row g-2">
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">08Lessons</span>
                                                                <span className="ms-1 color-light-success">/ 06 Completed</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">3 Month</span>
                                                                <span className="ms-1 text-danger">/ 22 Days Left</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Level 3</h4>
                                                        <span className="small">2 Lessons Complete to reach Level 4</span>
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
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Civil Law</h6>
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
                                                    <div className="row g-2">
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">09 Lessons</span>
                                                                <span className="ms-1 color-light-success">/ 07 Completed</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">1 Month</span>
                                                                <span className="ms-1 text-danger">/ 12 Days Left</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Level 2</h4>
                                                        <span className="small">2 Lessons Complete to reach Level 3</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="lesson_name">
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Hospitality</h6>
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
                                                    <div className="row g-2">
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-files-stack " />
                                                                <span className="ms-2">09 Lessons</span>
                                                                <span className="ms-1 color-light-success">/ 07 Completed</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-timer " />
                                                                <span className="ms-2">2 Month</span>
                                                                <span className="ms-1 text-danger">/ 20 Days Left</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block" />
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Level 3</h4>
                                                        <span className="small">2 Lessons Complete to reach Level 4</span>
                                                    </div>
                                                    <div className="progress" style={{ height: 8 }}>
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                        <div className="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '28%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="card mb-3">
                                <div className="card-header py-3">
                                    <h6 className="mb-0 fw-bold ">Today Schedule</h6>
                                </div>
                                <div className="card-body">
                                    <div className="timeline-item ti-danger border-bottom ms-2">
                                        <div className="d-flex">
                                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">EE</span>
                                            <div className="flex-fill ms-3">
                                                <div className="mb-1"><strong>Environmental Engineering</strong></div>
                                                <span className="d-flex text-muted mb-3">Lessons 3 - Class</span>
                                                <div className="p-3 border rounded">
                                                    Today Lessons 3 Characteristics of Wastewater topic discussion.
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots" />
                                                </button>
                                                <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Add Note</a></li>
                                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                                    <li><a className="dropdown-item" href="#">Notify Me</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* timeline item end  */}
                                    <div className="timeline-item ti-info border-bottom ms-2">
                                        <div className="d-flex">
                                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">CL</span>
                                            <div className="flex-fill ms-3">
                                                <div className="mb-1"><strong>Obligations and Contracts</strong></div>
                                                <span className="d-flex text-muted mb-3">Lessons 4 - Class</span>
                                                <div className="p-3 border rounded">
                                                    Today Lessons 4 Obligations and Contracts topic discussion.
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots" />
                                                </button>
                                                <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Add Note</a></li>
                                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                                    <li><a className="dropdown-item" href="#">Notify Me</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> {/* timeline item end  */}
                                    <div className="timeline-item ti-success  ms-2">
                                        <div className="d-flex">
                                            <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">HS</span>
                                            <div className="flex-fill ms-3">
                                                <div className="mb-1"><strong>Introduction to hygiene</strong></div>
                                                <span className="d-flex text-muted mb-3">Lessons 9 - Class</span>
                                                <div className="p-3 border rounded">
                                                    Today Lessons 9 Introduction to hygiene topic discussion.
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-three-dots" />
                                                </button>
                                                <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Add Note</a></li>
                                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                                    <li><a className="dropdown-item" href="#">Notify Me</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* .card: My Timeline */}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default LearnerProfile
