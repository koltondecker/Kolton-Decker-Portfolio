import React from 'react'

function Parallax({props}) {

    const technologies = props.technologies;
    const half = technologies.length / 2;
    const leftColumn = technologies.slice(0, half);
    const rightColumn = technologies.slice(half, technologies.length);

    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <a href={props.deployedURL}>
                        <img className="project-image" src={process.env.PUBLIC_URL + props.image} alt={props.alt} />
                    </a>
                </div>
            </div>
            <div className="section">
                <div className="row container">
                    <h2 className="header center-align">{props.title}</h2>
                    <div className="col s12 m6 center-align">
                        <h3 className="grey-text text-darken-3 lighten-3">About this project:</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="col s12 m6 center-align">
                        <h3 className="grey-text text-darken-3 lighten-3">Technologies Used:</h3>
                        <div className="row">
                            <div className="col s12 m6">
                                <ul className="tech-lists">
                                    {leftColumn.map(technology => {
                                        return <li key={technology}>{technology}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="col s12 m6">
                                <ul className="tech-lists">
                                    {rightColumn.map(technology => {
                                        return <li key={technology}>{technology}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 project-links">
                        <a id="github-icon" className="center-align project-link" name="source-code" href={props.github} target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i>
                            <span className="project-link-labels">Source Code</span>
                        </a>
                        <a id="deployed-icon" className="center-align project-link" href={props.deployedURL} target="_blank" rel="noreferrer"><i className={props.icon}></i>
                            <span className="project-link-labels">Deployed Project</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax
