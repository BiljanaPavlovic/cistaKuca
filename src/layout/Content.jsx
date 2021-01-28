/** @format */

import React from "react";
import UslugePrva from "../components/usluge/UslugePrva";
import Button from "react-bootstrap/Button";

import { Switch, Route, Link } from "react-router-dom";
import DodatneUsluge from "../components/usluge/DodatneUsluge";
import Stan from "../components/usluge/Stan";
import PoslovniProstor from "../components/usluge/PoslovniProstor";
import Angazman from "../components/cistacice/Angazman";

export default function Content() {
  return (
    <div>
      <div className="mb-2 header-btn">
        <Link to="/usluge">
          <Button variant="primary" size="lg">
            Usluge Čišćenja
          </Button>{" "}
        </Link>
        <Link to="/angazman">
          <Button variant="secondary" size="lg">
            Angažman
          </Button>
        </Link>
        <p className="content-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nemo
          blanditiis eaque rerum fugiat corrupti! Voluptatibus ducimus inventore
          minima eaque, impedit doloremque dolorum voluptates? Impedit iusto
          ipsa quo voluptate nisi.
        </p>
        <hr />
      </div>

      <Switch>
        <Route path="/usluge" component={UslugePrva} />
        <Route path="/dodatneUsluge" component={DodatneUsluge} />
        <Route path="/stan" component={Stan} />
        <Route path="/poslovniProstor" component={PoslovniProstor} />
        <Route path="/angazman" component={Angazman} />
      </Switch>
    </div>
  );
}
