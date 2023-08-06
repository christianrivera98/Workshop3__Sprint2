import { useState } from "react";
import "./planets.scss";
import data from "../../services/data";
import PlanetDetail from "./PlanetDetail";

const ListPlanets = () => {
  const [planets] = useState(data.destinations);
  const [planet, setplanet] = useState(data.destinations[0]);

  const handlePlanet = (index) => {
    setplanet(data.destinations[index]);
  };

  return (
    <div className="planets">
      <div className="flex sm:mx-auto sm:items-center sm:content-center sm:justify-center 
          md:w-full md:ml-[70px] md:mx-auto
          lg:w-[376px] lg:h-[34px] md:h-[24px] lg:ml-[190px] lg:mt-[76px]">
        <h1 className="text-[28px] sm:h-auto sm:w-full sm:mx-auto sm:text-center sm:text-[16px] text-white tracking-[4.725px] lg:gap-[28px] ">
          <span  className="text-white/[0.25] font-[700] tracking-[4.72]">01</span> PICK YOUR DESTINATION  
        </h1>
      </div>

      <div
        className="bg-gray-100 md:block lg:py-[91px] lg:flex lg:justify-center text-white"
        id="planet-carousel"
      >
        <PlanetDetail
          planet={planet}
          planets={planets}
          handlePlanet={handlePlanet}
        />
      </div>
    </div>
  );
};

export default ListPlanets;
