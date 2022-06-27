import React from 'react'
import '../Flags/Flags.css'

import  BrazilFlag  from '../../images/flagBrazil.png';
import  USAFlag  from '../../images/flagUSA.png';
import  SpainFlag  from '../../images/flagSpain.png';

const Flags = () => {
  return (
    <div className='flex items-center gap-1 Flags'>
        <button> <img src={BrazilFlag}/> </button>
        <button> <img className='grayscale' src={USAFlag}/></button>
        <button> <img className='grayscale' src={SpainFlag}/></button>
    </div>
  )
}

export default Flags;