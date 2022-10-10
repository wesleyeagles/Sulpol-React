import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import ContextProdutos from '../../contexts/ContextProdutos'
import '../ButtonPrimary/ButtonPrimary.css'

const ButtonPrimary = ({text, link = ''}) => {


  return (
  <HashLink className='ButtonPrimary' smooth to={link} >{text}</HashLink>  
  )
}

export default ButtonPrimary