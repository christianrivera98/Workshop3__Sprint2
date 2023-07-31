import React, { useState } from 'react';
import { technology } from './Tecnologias.js';
import {CardTecnologias, CardTecnologiasMT, ImgTecnologiasMT } from '../cardTecnologias/CardTecnologias.jsx';
import './SwiperTecnologias.scss'

export function SwiperTecnologias() {
    const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);
    const selectedTechnology = technology[selectedTechnologyIndex];


    const handleButtonClick = (index) => {
        setSelectedTechnologyIndex(index);
    };
        return (
            <div className='swiper-conteiner'>
              <div className="button-container">
                <button onClick={() => handleButtonClick(0)}>1</button>
                <button onClick={() => handleButtonClick(1)}>2</button>
                <button onClick={() => handleButtonClick(2)}>3</button>
              </div>
              <section className="section-tecnologias">
                <CardTecnologias dates={selectedTechnology} />
              </section>
            </div>
          );
}



export function SwiperTecnologiasMT () {
  console.log(technology)
    const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);
    const selectedTechnology = technology[selectedTechnologyIndex];


    const handleButtonClick = (index) => {
        setSelectedTechnologyIndex(index);
    };
        return (
            <div className='swiperMT-conteiner'>
              <div>
                <ImgTecnologiasMT dates={selectedTechnology}/>
              </div>
              <div className="buttonMT-container">
                <button onClick={() => handleButtonClick(0)}>1</button>
                <button onClick={() => handleButtonClick(1)}>2</button>
                <button onClick={() => handleButtonClick(2)}>3</button>
              </div>
              <section className="sectionMT-tecnologias">
                <CardTecnologiasMT dates={selectedTechnology} />
              </section>
            </div>
          );
}