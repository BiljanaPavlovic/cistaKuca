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
            <Link to="/listaCistacica">
              <h2>Sve naše čistačice</h2>
            </Link>
          </div>
          <div class="link">
            <h2>insagram</h2>
          </div>
          <div class="link">
            <h2>facebook</h2>
          </div>
          <div class="link">
            <h2>mail</h2>
          </div>
        </div>
        <div class="pro">
          <h2>Akcija meseca, snizenje</h2>
        </div>
      </div>
    </div>
  );
}
