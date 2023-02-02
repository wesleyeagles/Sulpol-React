import React from 'react'
import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import Context from '../../contexts/MainContext';
import '../ButtonInteresse/ButtonInteresse.css'

const ButtonInteresse = ({onClick, link = ""}) => {

  const {isPortuguese, isEnglish, isSpanish} = useContext(Context)

  if (isPortuguese) {
    return (
      <HashLink to={link} onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg'>TENHO INTERESSE</HashLink>
    )
  } else if (isEnglish) {
    return (
      <HashLink to={link} onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg'>I'M INTERESTED</HashLink>
    )
  } else if (isSpanish) {
    return (
    <HashLink to={link} onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg'>ME INTERESA</HashLink>
    )
  }


}

export default ButtonInteresse;