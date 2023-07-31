import React from "react";
import "./CardTecnologias.scss";
export function CardTecnologias({ dates }) {
  const imageUrl = dates.images.portrait;
  return (
    <>
      <div className="card-conteiner">
        <div className="card-conteiner__info">
          <h3>THE TERMINOLOGY...</h3>
          <h1>{dates.name}</h1>
          <p>{dates.description}</p>
        </div>
        <img className="img-desktop" src={imageUrl} alt={dates.name} />
      </div>
    </>
  );
}

export function CardTecnologiasMT ({dates}){

  return (
    <>
      <div className="card-conteinerMT">
        <div className="card-conteinerMT__info">
          <h3>THE TERMINOLOGY...</h3>
          <h1>{dates.name}</h1>
          <p>{dates.description}</p>
        </div>
        
      </div>
    </>
  );
}

export function ImgTecnologiasMT ({dates}){
  const imageUrlMT = dates.images.landscape;
  return (
    <img className="img-MT" src={imageUrlMT} alt={dates.name} />
  )
}