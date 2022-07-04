import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"

function Bombas()  {

  const [precision, setPrecision] = useState(0); 

  const { menuProdutos, forms } = useContext(ContextProdutos)
  

  const handleForm = () => {

    forms.current.focus()
    console.log("Debug")
    
    window.scrollTo(0, 6900)
  }

  const openPrecision = () => {
    setPrecision(!precision)
    
    if (tecnology == true) {
        setTecnology(!tecnology)
    } else if (flexibility == true) {
        setFlexibility(!flexibility)
    } else if (durability == true) {
        setDurability(!durability)
    }
  }  

  const [tecnology, setTecnology] = useState(0);

  const openTecnology = () => {
      setTecnology(!tecnology)
      
      if (precision == true) {
          setPrecision(!precision)
      } else if (flexibility == true) {
          setFlexibility(!flexibility)
      } else if (durability == true) {
        setDurability(!durability)
    }
  }

  const [flexibility, setFlexibility] = useState(0);

  const openFlexibility = () => {
      setFlexibility(!flexibility)

      if (precision == true) {
          setPrecision(!precision) 
      } else if (tecnology == true) {
          setTecnology(!tecnology)
      } else if (durability == true) {
        setDurability(!durability)
    }


  }

  const [durability, setDurability] = useState(0);

  const openDurability = () => {
      setDurability(!durability)

      if (precision == true) {
          setPrecision(!precision)
      } else if (tecnology == true) {
          setTecnology(!tecnology)
      } else if (flexibility == true) {
          setFlexibility(!flexibility)
      }
  }
      
   

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
    <div className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[20%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[70%]' src='https://uploaddeimagens.com.br/images/003/924/560/full/WhatsApp_Image_2022-07-01_at_09.21.51-removebg-preview.png?1656678154' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[50%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>BOMBAS DE <span className='text-sulpol-green font-black'>PU</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Conjunto de Bombeamento dosador de PU para equipamentos de alta pressão</p>
              
               <ButtonInteresse link="#forms" onClick={handleForm}/>
            </div>
            </div>


        
    <div>
        
    </div>

         

     

        <div className='py-36'>

        <FormularioMaquinas />
            
        </div> 


        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Bombas;