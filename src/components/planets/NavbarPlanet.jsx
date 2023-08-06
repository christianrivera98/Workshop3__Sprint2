/* eslint-disable react/prop-types */

const NavbarPlanet = ( { current_planet, planet, index, handlePlanet } ) => {
  return (
    <li className="inline-flex mr-2">
      <button
        onClick={() => {
          handlePlanet(index);
        }}
        className={
            current_planet.name === planet.name
            ? "border-b-4 text-center sm:text-[14px] text-[20px] hover:text-slate-400 hover:border-slate-400 block py-2  text-white"
            : "text-center sm:text-[14px] text-[20px] hover:text-slate-400 hover:border-slate-400 block py-2  text-white"
        }
      >
        {planet.name}
      </button>
    </li>
  );
};

export default NavbarPlanet;
