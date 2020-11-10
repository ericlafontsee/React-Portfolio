import React from "react";
import "./style.css";
import { Button, Card } from "react-bootstrap";

function PortCard(props) {
  return (
    <Card className="card margin-top mx-auto border-dark">
      <a href={props.Deployed} target="_blank" rel="noopener noreferrer">
        <Card.Img
          className="img-thumbnail img-max-width"
          variant="top"
          src={process.env.PUBLIC_URL + props.image}
          alt={props.name}
        />
      </a>
      <Card.Title className="text-center pt-2">{props.name}</Card.Title>
      <Card.Body className="mx-auto pb-5 text-center">
        <Card.Text className="description">{props.description}</Card.Text>
      </Card.Body>
      <Card.Body className="mx-auto pb-5">
        <Button
          className="btn m-1"
          href={props.GitHub}
          target="_blank"
          style={{
            background: "#556270",
            border: "2px outset white ",
            width: "150px"
          }}
        >
          GitHub Repo
        </Button>
        <Button
          className="btn m-1"
          style={{
            background: "#556270",
            border: "2px outset white ",
            width: "150px"
          }}
          href={props.Deployed}
          target="_blank"
        >
          Deployed App
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PortCard;
