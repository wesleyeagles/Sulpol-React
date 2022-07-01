import React, { useContext } from 'react'
import '../Flags/Flags.css'

import  BrazilFlag  from '../../images/flagBrazil.png';
import  USAFlag  from '../../images/flagUSA.png';
import  SpainFlag  from '../../images/flagSpain.png';
import ContextProdutos from '../../contexts/ContextProdutos';

const Flags = () => {

  const { handlePtLangChange, handleEnLangChange, ptLang, enLang, esLang } = useContext(ContextProdutos)


  return (
    <div className='flex items-center gap-1 Flags'>
        <button onClick={handlePtLangChange}> <img className={`${ptLang? 'grayscale-0' : 'grayscale'}`} src={BrazilFlag}/> </button>
        <button onClick={handleEnLangChange}> <img className={`${enLang? 'grayscale-0' : 'grayscale'}`} src={USAFlag}/></button>
        <button> <img className={`${esLang? 'grayscale-0' : 'grayscale'}`} src={SpainFlag}/></button>
    </div>
  )
}

export default Flags;