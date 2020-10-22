import React from "react";
import "./style.css";
import { Button, Card, CardGroup } from "react-bootstrap";

function PortCard(props) {
  return (
    <CardGroup className="mx-auto">
      <Card
        className="card margin-top mx-auto border-dark"
        style={{ width: "30rem" }}
      >
        <a href={props.Deployed} target="_blank" rel="noopener noreferrer">
          <Card.Img
            className="cardimg rounded d-block w-100 p-0 m-0"
            variant="top"
            src={process.env.PUBLIC_URL + props.image}
            alt={props.name}
          />
        </a>
        <Card.Title className="text-center p-2">{props.name}</Card.Title>
        <Card.Body className="mx-auto">
          <Button className="btn m-1" href={props.GitHub} target="_blank" style={{ background: "#556270", border: "2px outset white ", width: "150px"}}>
            GitHub Repo
          </Button>
          <Button className="btn m-1"  style={{ background: "#556270", border: "2px outset white ", width: "150px"}} href={props.Deployed} target="_blank">
            Deployed App
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
export default PortCard;
