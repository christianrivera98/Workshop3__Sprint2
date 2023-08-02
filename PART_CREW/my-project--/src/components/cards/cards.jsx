import React from 'react'
import Card from '../card/card' 
import anousheAnsariImage from '../../assets/image-anousheh-ansari.webp'
import douglasHourleyImage from '../../assets/image-douglas-hurley.png'
import victorImage from '../../assets/image-victor-glover.webp'
import markImage from '../../assets/image-mark-shuttleworth.webp'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Cards = () => {
  return ( 
        <Carousel>
            <Card name='ANAUSHE ANSARI' job='FLIGHT ENGINEER'img={anousheAnsariImage} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card name='DOUGLAS HOURLEY' job='COMMANDER'img={douglasHourleyImage} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card name='VICTOR GLOBER' job='PILOT' img={victorImage} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
            <Card name='MARK SHUTTLEWORTH' job='MISSION SPECIALIST' img={markImage} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        </Carousel>
    // <div>
    //   
    // </div>
  )
}

export default Cards
