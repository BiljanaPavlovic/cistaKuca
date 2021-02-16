/** @format */

import React from "react";
import UslugePrva from "../components/usluge/UslugePrva";
import Button from "react-bootstrap/Button";

import { Switch, Route, Link } from "react-router-dom";
import DodatneUsluge from "../components/usluge/DodatneUsluge";
import Stan from "../components/usluge/Stan";
import PoslovniProstor from "../components/usluge/PoslovniProstor";
import Angazman from "../components/cistacice/Angazman";
import ListaCistacica from "../components/cistacice/ListaCistacica";

export default function Content() {
  return (
    <div>
      <div class="content">
        <div class="status">
          <h1>Čista kuća</h1>
        </div>
        <div class="cards">
          <div class="card">
            <div class="card-info">
              <h2>Izaberite uslugu</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
                placeat.
              </p>
            </div>
            <div className="btn-section">
              <img
                src="/cistaKuca/img/zenaCisti.gif"
                className="lp-img"
                alt="zena cist"
              />
              <Link to="/usluge">
                <Button variant="primary" className="btn" size="lg">
                  Usluge Čišćenja
                </Button>{" "}
              </Link>
            </div>
          </div>

          <div className="card">
            <div class="card-info">
              <h2>Pridružite se timu</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
                placeat.
              </p>
            </div>
            <div className="btn-section">
              <Link to="/angazman">
                <Button variant="secondary" className="btn" size="lg">
                  Angažman
                </Button>
              </Link>
              <img
                src="/cistaKuca/img/potirePod.gif"
                className="lp-img"
                alt="ciscenje poslovnog prostora"
              />
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/usluge" component={UslugePrva} />
        <Route path="/dodatneUsluge" component={DodatneUsluge} />
        <Route path="/stan" component={Stan} />
        <Route path="/poslovniProstor" component={PoslovniProstor} />
        <Route path="/angazman" component={Angazman} />
        <Route path="/listaCistacica" component={ListaCistacica} />
      </Switch>
    </div>
  );
}
