/** @format */

import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="/cistaKuca/img/ckl.png" alt="logo" className="logo" />
        <h1> Čista kuca</h1>
      </Link>
      <br />
    </div>
  );
}
