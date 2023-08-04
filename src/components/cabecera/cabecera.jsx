import React from "react";
import "./cabecera.scss";
import logo from "../../assets/shared/logo.svg";
import rectangle from "../../assets/rectangle.png";

const Cabecera = () => {
  return (
    <>
      <header className="header lg:w-[1385px] lg:h-[96px] lg:top-[40px] lg:left-[55px] bg-transparent relative">
        <img
          src={logo}
          alt="logo"
          className="lg:w-[48px] lg:h-[48px] lg:top-[24px] absolute logo"
        />
        <img
          src={rectangle}
          className="lg:w-[473px] lg:h-[1px] lg:top-[48px] lg:left-[112px] lg:bg-white lg:absolute rectangle"
        />
        <section className="links-ol absolute w-[830px] h-[96px] top-[0px] left-[555px] bg-white/40">
          <ul className=" bg-transparent flex text-white h-[19px] top-[39px] left-[123px] relative">
            <li>
              <a
                href=""
                className="lg:w-[70px] lg:left-[0px] lg:top-[0px] absolute lg:hover:active:decoration-solid"
              >
                00 HOME
              </a>
            </li>
            <li>
              <a href="" className="lg:w-[130px] lg:left-[118px] absolute">
                01 DESTINATION
              </a>
            </li>
            <li>
              <a href="" className="lg:w-[71px] lg:left-[296px] absolute">
                02 CREW
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:w-[127px] lg:h-[19px] lg:left-[415px] absolute"
              >
                03 TECHNOLOGY
              </a>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Cabecera;
