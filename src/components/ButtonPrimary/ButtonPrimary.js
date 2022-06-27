import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../ButtonPrimary/ButtonPrimary.css'

const ButtonPrimary = ({text, link = ''}) => {
  return (
  <HashLink className='ButtonPrimary' smooth to={link} >{text}</HashLink>  
  )
}

export default ButtonPrimary