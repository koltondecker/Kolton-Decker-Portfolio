import React from "react";
import { Link } from "react-router-dom";
import professionalHeadshot from "../assets/images/professional-headshot.jpeg";
import M from "materialize-css";

function Header() {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });

    return (
        <div>
            <nav className="blue-grey darken-4">
                <div className="nav-wrapper">
                    <div className="brand-logo">
                        <Link to="/">Kolton Decker</Link>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                        <Link to="/">About</Link>
                        </li>
                        {/* <li>
                        <Link to="/skills">Skills</Link>
                        </li> */}
                        <li>
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul id="slide-out" className="sidenav">
                        <li>
                            <div className="user-view">
                                <img className="circle" src={professionalHeadshot} alt="Kolton Decker sitting at a wooden bar" />
                                <span className="black-text name">Kolton Decker</span>
                            </div>
                        </li>
                        <li>
                            <a id="github-icon" className="sidenav-icon" href="https://github.com/koltondecker"><i className="fab fa-github fa-3x"></i>Check Out My Github</a>
                        </li>
                        <li>
                            <a id="linkedin-icon" className="sidenav-icon" href="https://www.linkedin.com/in/kolton-decker-01302b114/"><i className="fab fa-linkedin fa-3x"></i>Check Out My LinkedIn</a>
                        </li>
                        <li><div className="divider"></div></li>
                        <li><a href="/" className="subheader">Navigation</a></li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        {/* <li>
                            <Link to="/skills">Skills</Link>
                        </li> */}
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button id="hamburger" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></button>
                </div>
            </nav>
        </div>
    )
}

export default Header
