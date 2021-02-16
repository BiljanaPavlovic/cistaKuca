/** @format */

import React from "react";
import Cistacica from "./Cistacica";
import "./cistacice.css";

export default function ListaCistacica() {
  return (
    <div className="listaCistacica">
      <Cistacica
        name="Ceca"
        ocena="5"
        opis="divna jedna zena vredna vrh sve naj"
        slika="/cistaKuca/img/ckl.png"
      />
      <Cistacica
        name="Caca"
        ocena="5"
        opis="divna jedna zena vredna vrh sve naj"
        slika="/cistaKuca/img/ckl.png"
      />
      <Cistacica
        name="Cica"
        ocena="5"
        opis="divna jedna zena vredna vrh sve naj"
        slika="/cistaKuca/img/ckl.png"
      />
      <Cistacica
        name="Cuca"
        ocena="5"
        opis="divna jedna zena vredna vrh sve naj"
        slika="/cistaKuca/img/ckl.png"
      />
    </div>
  );
}
