import React from "react";
import { Button, Card } from "react-bootstrap";

function handleClick(e) {
  alert("Clicked!");
}

export const ReusableCard = (props) => {
  return (
    <Card style={{ width: "25rem", margin: "0 auto" }} block>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
