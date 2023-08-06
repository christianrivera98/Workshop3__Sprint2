/* eslint-disable react/prop-types */

import NavbarPlanet from "./NavbarPlanet";
import rectangle from "../../assets/rectangle.png";

const PlanetDetail = ({ planet, planets, handlePlanet }) => {
  return (
    <div className="bg-white sm:w-auto sm:h-auto sm:flex lg:mx-8 md:flex-col md:items-center md:justify-center lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
      <div className="lg:w-1/2 sm:w-auto sm:h-auto md:w-[457px] md:h-[475px]">
        <div className=" bg-cover  md:items-center lg:rounded-lg lg:h-full">
          <img src={planet.images.png} alt="" />
        </div>
      </div>

      <div className="sm:flex-col  sm:content-center sm:h-auto sm:w-full sm:mx-auto md:block lg:py-1 md:w-[573px] md:mx-auto lg:px-6 lg:max-w-5xl lg:w-1/2">
        <ul className="sm:mx-auto sm:items-center sm:justify-center sm:w-auto sm:h-auto md:w-[286px] md:content-center md:justify-center md:items-center md:mx-auto lg:space-x-[35px]">
          {planets.map((element, index) => (
            <NavbarPlanet
              key={index}
              index={index}
              planet={element}
              current_planet={planet}
              handlePlanet={handlePlanet}
            />
          ))}
        </ul>
        <h2 className="text-[100px] sm:text-[56px] sm:w-full sm:mx-auto font-[400] mt-[37px] uppercase text-center text-white font-bellefair">
          {planet.name}
        </h2>
        <p className="text-[#d0d6f9] sm:w-auto sm:text-[15px] sm:mx-auto sm:leading-[25px] md:self-center md:mx-auto lg:w-[444px] lg:leading-[32px] font-b mt-[14px] font-[400] text-[18px]">{planet.description}</p>
        <img
          src={rectangle}
          className="h-[1px] md:mx-auto w-[440px] mt-[54px] mb-[28px]"
          alt="space Logo"
        />
        <div className="flex
         sm:flex-col sm:items-center sm:mx-auto sm:content-center sm:justify-center sm:space-x-0
         md:mx-auto md:items-center md:content-center md:justify-center 
         lg:justify-stretch lg:space-x-[79px] md:space-x-[39px] ">
          <div>
            <h3 className="lg:h-[14px] sm:h-auto sm:w-auto lg:mb-[12px]">AVG. DISTANCE</h3>
            <h2 className="lg:h-[28px] sm:h-auto sm:w-auto font-bellefair uppercase">
              {planet.distance}
            </h2>
          </div>
          <div className="sm:flex-col sm:text-center sm:mt-[32px]">
            <h3 className="h-[14px] sm:h-auto sm:w-auto lg:mb-[12px]">EST. TRAVEL TIME</h3>
            <h2 className="h-[28px] sm:h-auto sm:w-auto font-bellefair uppercase">
              {planet.travel}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
