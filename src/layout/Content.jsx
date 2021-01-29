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
      <div className="dashboard">
        <div className="one-section">
          <img
            src="/cistaKuca/img/zenaCisti.gif"
            className="lp-img"
            alt="zena cist"
          />
          <div className="btn-p">
            <p className="content-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              nemo blanditiis eaque rerum fugiat corrupti! Voluptatibus ducimus
            </p>
            <Link to="/usluge">
              <Button variant="primary" className="btn" size="lg">
                Usluge Čišćenja
              </Button>{" "}
            </Link>
          </div>
        </div>
        <div className="dashboard">
          <div className="one-section">
            <div className="btn-p">
              <Link to="/angazman">
                <Button variant="secondary" className="btn" size="lg">
                  Angažman
                </Button>
              </Link>
              <p className="content-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores nemo blanditiis eaque rerum fugiat corrupti!
                Voluptatibus ducimus
              </p>
            </div>
            <img
              src="/cistaKuca/img/potirePod.gif"
              className="lp-img"
              alt="ciscenje poslovnog prostora"
            />
          </div>
        </div>
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
