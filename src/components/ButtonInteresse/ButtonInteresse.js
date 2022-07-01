import React from 'react'
import '../ButtonInteresse/ButtonInteresse.css'

const ButtonInteresse = ({onClick}) => {
  return (
    <button onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg'>TENHO INTERESSE</button>
  )
}

export default ButtonInteresse;