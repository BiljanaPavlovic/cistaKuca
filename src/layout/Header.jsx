/** @format */

import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1> Čista kuca</h1>
      </Link>
      <br />
    </div>
  );
}
