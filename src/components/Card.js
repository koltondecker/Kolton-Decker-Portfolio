import React from 'react'
import jessekolton from "../assets/images/jessekolton-5.jpg";
import professionalHeadshot from "../assets/images/professional-headshot.jpeg";

function Card() {
    return (
        <div className="col m6 s12">
            <div id="picture-column">
                <div id="picture-and-contact" className="card z-depth-4">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={jessekolton} alt="Kolton sitting at a wooden bar drinking a soda with his fiance." />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Kolton Decker<i className="material-icons right">more_vert</i></span>
                        <p>Full Stack Web Developer</p>
                    </div>
                    <div className="card-reveal">
                        <h2 className="card-title grey-text text-darken-4">Contact Information<i className="material-icons right">close</i></h2>
                        <img className="circle" src={professionalHeadshot} width="30%" alt="Professional Headshot of Kolton" />
                        <p>Age: 26</p>
                        <p>Email: <a href="mailto:kolton.c.decker@gmail.com">kolton.c.decker@gmail.com</a></p>
                        <p>Phone Number: <a href="tel:620-428-5132">620-428-5132</a></p>
                        <br />
                        <p><em>Undergrad</em></p>
                        <hr />
                        <p>School: Kansas State University</p>
                        <p>Degree: Bachelor's</p>
                        <p>Discipline: Mechanical Engineering</p>
                        <br/>
                        <p><em>Certificate</em></p>
                        <hr />
                        <p>School: University of Kansas</p>
                        <p>Degree: Certificate</p>
                        <p>Discipline: Full Stack Web Development</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card
