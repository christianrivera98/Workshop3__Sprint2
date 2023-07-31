import React from "react";
import "./Mission.scss";
import {SwiperTecnologias, SwiperTecnologiasMT } from "../../components/Body/Tecnologias/swiperTecnologias/SwiperTecnologias";

const Mission = () => {
  return (
    <>
      <div className="body-conteiner">
        <div className="space-launch">
          <h1 className="space-launch__number">03</h1>
          <h1 className="space-launch__title">SPACE LAUNCH 101</h1>
        </div>

        <SwiperTecnologias />
      </div>
      <div className="body-conteiner-MT">
        <div className="space-launchMT">
          <h1 className="space-launchMT__number">03</h1>
          <h1 className="space-launchMT__title">SPACE LAUNCH 101</h1>
        </div>
        <SwiperTecnologiasMT/>
      </div>
    </>
  );
};

export default Mission;
