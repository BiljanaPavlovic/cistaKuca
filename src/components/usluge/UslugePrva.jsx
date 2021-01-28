/** @format */

import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function UslugePrva() {
  return (
    <div>
      <h2>Nudimo različite vrste čišćenja proverite naš kalkulator cena</h2>
      <DropdownButton id="dropdown-basic-button" title="izaberite vrstu usluge">
        <Dropdown.Item>
          <Link to="/stan">Čišćenje stana</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/poslovniProstor">Čišćenje poslovnog prostora</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/dodatneUsluge">Dodatne usluge</Link>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
