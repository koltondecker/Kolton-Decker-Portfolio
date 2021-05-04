import React from 'react'
import Parallax from "../components/Parallax";
import projects from "../projects-data";

function Portfolio() {
    return (
        <div>
            {projects.map((project, index) => (
            <Parallax key={index} props={project} />
          ))}
        </div>
    )
}

export default Portfolio
