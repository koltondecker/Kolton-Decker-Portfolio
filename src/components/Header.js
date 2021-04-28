import React from "react";

function Header() {
    return (
        <nav class="blue-grey darken-4">
            <div class="nav-wrapper">
                <a href="./index.html" class="brand-logo">Kolton Decker</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.html">About</a></li>
                    <li><a href="./assets/html/portfolio.html">Portfolio</a></li>
                    <li><a href="./assets/html/contact.html">Contact</a></li>
                </ul>
                <ul id="slide-out" class="sidenav">
                    <li>
                        <div class="user-view">
                            <img class="circle" src="./assets/images/professional-headshot.jpeg" alt="Kolton Decker sitting at a wooden bar" />
                            <span class="black-text name">Kolton Decker</span>
                        </div>
                    </li>
                    <li>
                        <a id="github-icon" class="sidenav-icon" href="https://github.com/koltondecker"><i class="fab fa-github fa-3x"></i>Check Out My Github</a>
                    </li>
                    <li>
                        <a id="linkedin-icon" class="sidenav-icon" href="https://www.linkedin.com/in/kolton-decker-01302b114/"><i class="fab fa-linkedin fa-3x"></i>Check Out My LinkedIn</a>
                    </li>
                    <li><div class="divider"></div></li>
                    <li><a href="#" className="subheader">Navigation</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="./assets/html/portfolio.html">Portfolio</a></li>
                    <li><a href="./assets/html/contact.html">Contact</a></li>
                </ul>
                <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </nav>
    )
}

export default Header
