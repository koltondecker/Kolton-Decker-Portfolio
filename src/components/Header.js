import React from "react";

function Header() {
    return (
        <nav className="blue-grey darken-4">
            <div className="nav-wrapper">
                <a href="./index.html" className="brand-logo">Kolton Decker</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="index.html">About</a></li>
                    <li><a href="./assets/html/portfolio.html">Portfolio</a></li>
                    <li><a href="./assets/html/contact.html">Contact</a></li>
                </ul>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <img className="circle" src="./assets/images/professional-headshot.jpeg" alt="Kolton Decker sitting at a wooden bar" />
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
                    <li><a href="#" className="subheader">Navigation</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="./assets/html/portfolio.html">Portfolio</a></li>
                    <li><a href="./assets/html/contact.html">Contact</a></li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    )
}

export default Header
