/** @format */

import React from "react";
import "./layout.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/decakUsisava.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/kuhinja.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/muskaracCisti.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/potirePod.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/usisavanje.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-img"
            src="/cistaKuca/img/zenaCisti.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Link to="/">
              <h3> Čista kuca</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p className="intro-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        distinctio! Nostrum laborum aliquam est illo debitis reiciendis quo ab
        quaerat ullam id magni repudiandae cumque officiis architecto, alias
        numquam modi adipisci tempora dolor consectetur? Excepturi, eius Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        distinctio! Nostrum laborum aliquam est illo debitis reiciendis quo ab
        quaerat ullam id magni repudiandae cumque officiis architecto, alias
        numquam modi adipisci tempora dolor consectetur? Excepturi, eius
      </p>
    </div>
  );
}
