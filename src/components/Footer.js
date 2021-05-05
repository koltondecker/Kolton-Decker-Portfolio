import React from 'react'
import Resume from "../assets/images/Resume-Kolton-Decker.pdf";

function Footer() {
    return (
        <div>
            <footer className="page-footer blue-grey darken-4">
                <div className="black-text container">
                    <div className="center-align">
                        <a id="github-icon" className="footer-icon middle" href="https://github.com/koltondecker" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i></a>
                        <a id="linkedin-icon" className="footer-icon middle" href="https://www.linkedin.com/in/kolton-decker-01302b114/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                        <a id="resume-icon" className="footer-icon middle" href={Resume} target="_blank" rel="noreferrer"><i className="fas fa-file fa-3x"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
