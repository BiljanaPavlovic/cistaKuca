/** @format */

import React from "react";
import "./cistacice.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Cistacica({ name, ocena, slika, opis }) {
  return (
    <div className="profilCistacice">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={slika} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <p>Prosečna ocena:{ocena}</p>
          </Card.Subtitle>
          <Card.Text>{opis}</Card.Text>
        </Card.Body>
        <Button variant="primary" className="btn" size="lg">
          Angažuj
        </Button>{" "}
      </Card>
    </div>
  );
}
