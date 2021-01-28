/** @format */

import React from "react";
import "./usluge.css";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function PoslovniProstor() {
  return (
    <div className="dashboard">
      <h5>Ciscenje poslovnog prostora</h5>
      <Container className="table">
        <ListGroup>
          <ListGroup.Item action variant="light">
            Osnovni paket
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Pranje prozora
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Čišćenje prilaza
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Čišćenje kuhinje i WCa
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
