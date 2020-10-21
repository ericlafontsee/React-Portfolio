import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card margin-top mx-auto ">
      <a to={props.Deployed} target="_blank">
        <img
          src={props.image}
          className="cardimg rounded d-block w-100 p-0 m-0"
          alt={props.name}
        />
      </a>
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <a href={props.GitHub} target="_blank" rel="noopener noreferrer" className="btn m-3">
          GitHub Repo
        </a>
        <a href={props.Deployed} target="_blank" rel="noopener noreferrer" className="btn m-3">
          Deployed App
        </a>
      </div>
    </div>
  );
}
export default Card
