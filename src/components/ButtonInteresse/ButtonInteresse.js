import React from 'react'
import { HashLink } from 'react-router-hash-link';
import '../ButtonInteresse/ButtonInteresse.css'

const ButtonInteresse = ({onClick, link = ""}) => {
  return (
    <HashLink to={link} onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg'>TENHO INTERESSE</HashLink>
  )
}

export default ButtonInteresse;