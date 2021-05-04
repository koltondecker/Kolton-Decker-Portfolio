import React from 'react'
import KSU from "../assets/images/Kansas_State_University-Logo.wine.png";
import KU from "../assets/images/KU_sig_2color.png";
import {} from "materialize-css";

function BackgroundInfo() {
    return (
        <div>
            <div id="about-me-container" className="col s12 m6">
                <div id="about-me">
                    <div className="row bg-info-row">
                        <div className="col l12">
                            <p className="left-align">
                                Welcome to my website. My name is Kolton Decker and I am a full stack web
                                developer. I grew up in a small town in Southwest Kansas. I enjoyed playing sports and video
                                games growing up as well as hanging with friends and going on outdoor adventures.
                            </p>
                        </div>
                    </div>
                    <div id="row2" className="row bg-info-row">
                        <div className="col l6">
                            <img src={KSU} alt="Kansas State University" width="80%" />
                        </div>
                        <div className="col l6">
                            <p>I attended and graduated from Kansas State University in 2017 with a Bachelors Degree in
                                Mechanical Engineering and have been working in the natural gas and power industry for the
                                last 3 years. I currently work as a Project Manager for Panhandle Eastern Pipeline Company
                                doing pipeline maintenance and infrastructure improvement projects.
                            </p>
                        </div>
                    </div>
                    <div className="row bg-info-row">
                        <div className="col l6">
                            <p className="left-align">I am scheduled to graduate KU Coding Bootcamp in May of this year and hope 
                                to land a position as a full stack webdeveloper where I can gain hands-on industry experience 
                                and continue to learn for with an ever-changing world; I must never stop learning. On this 
                                website you will find some of the projects I have built. I will continue to update this portfolio 
                                as I progress through my career.
                            </p>
                        </div>
                        <div className="col l6">
                            <img src={KU} alt="University of Kansas" width="80%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundInfo
