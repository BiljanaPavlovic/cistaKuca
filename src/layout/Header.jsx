/** @format */

import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="dashboard">
        <div className="logo">
          <Link to="/">
            <img src="/cistaKuca/img/ckl.png" alt="logo" className="logo" />
            <p> Čista kuca</p>
          </Link>
        </div>
        <div class="links">
          <div class="link">
            <img src="./images/twitch.png" alt="" />
            <h2>facebook</h2>
          </div>
          <div class="link">
            <img src="./images/steam.png" alt="" />
            <h2>insagram</h2>
          </div>
          <div class="link">
            <img src="./images/upcoming.png" alt="" />
            <h2>linkedin</h2>
          </div>
          <div class="link">
            <img src="./images/library.png" alt="" />
            <h2>mail</h2>
          </div>
        </div>
        <div class="pro">
          <h2>Akcija meseca, snizenje</h2>
          <img src="./images/controller.png" alt="" />
        </div>
      </div>
    </div>
  );
}
