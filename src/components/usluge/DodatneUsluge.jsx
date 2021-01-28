/** @format */

import React from "react";
import "./usluge.css";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function DodatneUsluge() {
  return (
    <div className="dashboard">
      <h5>Dodatne usluge</h5>
      <Container className="table">
        <ListGroup>
          <ListGroup.Item action variant="light">
            Čišćenje posle krečenja
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Pranje kola - spoljašnje
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Pranje kola - unutrašnje
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Čišćenje dvorišta
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Čišćenje podruma
            <Form.Check className="check-box" />
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Button variant="secondary">Submit</Button>{" "}
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}
