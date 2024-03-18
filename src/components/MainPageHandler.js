import React from 'react'
import classes from '../assets/MainPageHandler.module.css'
const MainPageHandler = () => {
  return (
    
            <div className={classes.mainPageHandler}>
                <div className="border-0 mb-4 align-items-center px-3">
                    <div className={`card-header py-3 no-bg bg-transparent d-flex align-items-center px-1 justify-content-between ${classes.blackborderbottom}`}>
                        <h5 className="fw-bold mb-0 ">Message</h5>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                choices
                            </button>
                            <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">choice1</a></li>
                                <li><a className="dropdown-item" href="#">choice1</a></li>
                                <li><a className="dropdown-item" href="#">choice1</a></li>
                                <li><a className="dropdown-item" href="#">choice1</a></li>
                                <li><a className="dropdown-item" href="#">choice1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div >
                    hey
                </div>
            </div>
            
  )
}

export default MainPageHandler