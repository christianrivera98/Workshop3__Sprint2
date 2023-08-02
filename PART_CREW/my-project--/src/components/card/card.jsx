import React from 'react'
import scss from "./card.scss";

const Card = ({name, text, job, img}) => {
  return (
    <div className='card'>
      <div className="card-body">
        <h4>02 MEET YOUR CREW</h4>
        <h3>{job}</h3>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>{text}</p>

        
      </div>
      <div className='card-image'>
        <img src={img} alt="Anousheh" className='card__image-Anoushe'/>
      </div>

      
    </div>
  )
}

export default Card
