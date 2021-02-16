/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Angazman() {
  return (
    <div className="dashboard">
      <h2>
        Ako želite da se prijavite za posao popunite sledeću formu i zakažite
        razgovor
      </h2>
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Recite nam nešto o sebi</Form.Label>
            <Form.Control as="select">
              <option>dodatni posao</option>
              <option>puno zaposlenje</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" className="btn" size="lg">
            Pošalji
          </Button>
        </Form>
      </Container>
    </div>
  );
}
