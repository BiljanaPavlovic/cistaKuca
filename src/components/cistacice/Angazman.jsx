/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Angazman() {
  return (
    <div>
      <h2>
        Ako želite da se prijavite za posao popunite sledeću formu i zakažite
        razgovor
      </h2>
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>dodatni posao</option>
              <option>puno zaposlenje</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
