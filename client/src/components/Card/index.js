import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card margin-top mx-auto border-dark">
      <a to={props.Deployed} target="_blank"  rel="noopener noreferrer">
        <img
          src={props.image}
          className="cardimg rounded d-block w-100 p-0 m-0"
          alt={props.name}
        />
      </a>
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <button className="m-3">
          <a
            href={props.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            GitHub Repo
          </a>
        </button>
        <button>
        <a
          href={props.Deployed}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          Deployed App
        </a>
        </button>
      </div>
    </div>
  );
}
export default Card;
