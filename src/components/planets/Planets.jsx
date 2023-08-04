import React, { useEffect, useState } from "react";
import "./planets.scss";
import moon from "../../assets/destination/image-moon.png";
import rectangle from "../../assets/rectangle.png";
import destinationsList from "../..//services/data.json";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(destinationsList);
  });
  return (
    <>
      <main className="planets absolute bg-transparent lg:w-[1440px] lg:top-[136px] left-0 lg:h-[764px] flex">
        {planets.map((planet, index) => (
          <section className="sectionPlanet lg:top-[25px] bg-transparent lg:h-[678px] lg:w-[678px] lg:left-[111px] relative">
            <h2 className="text-stone-50 w-[382px] h-[34px] top-[76px] left-[166.5px] relative flex">
              <span className="text-stone-400 mr-2">01 </span> PICK YOUR
              DESTINATION
            </h2>
            <img
              src={moon}
              alt="planet"
              className="planetImage lg:top-[116px] lg:left-[119px] absolute"
            />
          </section>
        ))}

        <section className="infoPlanets bg-transparent lg:w-[445px] lg:h-[472px] absolute lg:left-[832px] lg:top-[174px]">
          <ul className="listPlanets flex text-white lg:w-[285.5px] lg:h-[34px]">
            <li>
              <a
                href=""
                className="linkPlanet border-b-white decoration-1 absolute lg:w-[39px] lg:h-[19px] lg:left-[0.5px] lg:font-normal"
              >
                MOON
              </a>
            </li>
            <li>
              <a
                href=""
                className="linkPlanet__mars border-b-white decoration-1 absolute lg:w-[37px] lg:h-[19px] lg:left-[74.5px] lg:font-normal"
              >
                MARS
              </a>
            </li>
            <li>
              <a
                href=""
                className="linkPlanet__mars border-b-white decoration-1 absolute lg:w-[56px] lg:h-[19px] lg:left-[147.5px] lg:font-normal"
              >
                EUROPA
              </a>
            </li>
            <li>
              <a
                href=""
                className="linkPlanet__mars border-b-white decoration-1 absolute lg:w-[42px] lg:h-[19px] lg:left-[239.5px] lg:font-normal"
              >
                TITAN
              </a>
            </li>
          </ul>
          <h1 className="titlePLanet text-white lg:w-[339px] lg:h-[115px] lg:top-[71px] lg:left-[0.5px] lg:font-normal absolute inline">
            MOON
          </h1>
          <p className="infoPlanet lg:w-[444px] lg:h-[128px] absolute inline lg:top-[200px] font-normal text-azul-grisáceo">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <img
            src={rectangle}
            className="lg:w-[444px] lg:h-[1px] lg:top-[382px] lg:left-[1px] lg:bg-white lg:absolute rectangle"
          />
          <div className="flex flex-col lg:w-[143px] lg:h-[61px] lg:top-[411px] absolute lg:left-[0.5px]">
            <p className="distance flex  lg:w-[100px] lg:h-[17px] font-normal text-azul-grisáceo">
              AVG. DISTANCE
            </p>
            <span className="distNumber lg:w-[143px] lg:h-[32px] lg:top-[29px] font-normal text-white absolute">
              384,400 km
            </span>
          </div>
          <div className="flex flex-col lg:w-[122px] lg:h-[61px] lg:top-[411px] absolute lg:left-[222.5px]">
            <p className="distance flex  lg:w-[121px] lg:h-[17px] font-normal text-azul-grisáceo">
              EST. TRAVEL TIME
            </p>
            <span className="distNumber lg:w-[91px] lg:h-[32px] lg:top-[29px] font-normal text-white absolute">
              3 DAYS
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Planets;
