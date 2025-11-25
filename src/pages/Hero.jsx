import React from 'react'
import hero1 from '../assets/images/hero1.svg'
import hero2 from '../assets/images/hero2.svg'




const Hero = () => {
  return (
    <div>
    <img src={hero1} alt=""  className='m-auto p-6'/>
    <img src={hero2} alt=""  className='m-auto p-3' />
    
    </div>
  )
}

export default Hero
