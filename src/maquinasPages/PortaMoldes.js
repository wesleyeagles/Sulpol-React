import React, {useContext, useState} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'

function PortaMoldes()  {

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
    exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/570/full/Ativo_2.png?1656678952' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[55%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PORTA<span className='text-sulpol-green font-black'> MOLDES</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A Sulpol possui em suas linhas de produtos, sistemas de porta moldes para produção de 
gabinetes. Os porta-moldes, são sistemas automatizados para contenção da expansão do 
poliuretano durante seu processo de aplicação. Os porta moldes podem ser utilizados individualmente para trabalhar com um plug (sistema de contenção interna dos gabinetes) 
por vez, ou combiná-lo com outros porta-moldes em linha, com deslocamento automatizado do cabeçote de injeção para trabalhar com múltiplos plugs, assim obtendo maior 
produtividade.</p>
               <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/086/full/Interse%C3%A7%C3%A3o_60.png?1656013055' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/087/full/Interse%C3%A7%C3%A3o_61.png?1656013071' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/088/full/Interse%C3%A7%C3%A3o_62.png?1656013087' />
                <img className='w-[100%] md:w-[15%]'  src="https://uploaddeimagens.com.br/images/003/924/519/full/Interse%C3%A7%C3%A3o_62.png?1656673194" alt="" />
                </div>
                <ButtonInteresse onClick={handleForm}/>
            </div>
            </div>


        
    <div>
       
    </div>

          

    


        <div className='py-36'>

        <FormularioMaquinas />
            
        </div> 


        </div>
        </div>
    </motion.div>
  )
}

export default PortaMoldes;