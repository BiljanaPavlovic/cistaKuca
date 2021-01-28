/** @format */

import React from "react";
import "./usluge.css";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Stan() {
  return (
    <div className="dashboard">
      <h4>Ciscenje stana</h4>
      <Container className="table">
        <ListGroup>
          <ListGroup.Item action variant="light">
            Osnovni paket: podovi i prašina
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Kuhinja: čišćenje rerne i frižidera
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Kupatilo - osnovno
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Kupatilo - dodatno
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Peglanje po satu
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Čišćenje terase
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Preslaganje ormana
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            Light
            <Form.Check className="check-box" />
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dark
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
