import React from 'react'

export default function Projects(props) {
    return (
        <div className="col-6 px-4 d-flex flex-column align-items-center text-white " >
    <h5>{props.name}</h5>
    <p className=" text-white " >{props.description}</p>
    <img src={props.imgSrc} alt="projectimage" />
    <br/>
    <a className=" text-white " href={props.githubLink}>Link to the github</a>
    <br/>
    <a className=" text-white " href={props.deployedLink}>Link to the deployed website</a>
        </div>
    )
}
