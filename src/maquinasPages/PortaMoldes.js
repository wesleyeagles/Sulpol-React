import React, {useContext} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'

import moldes from '../images/new-images/moldes.png'
import octagone1 from '../images/new-images/dosadoraportatil/octagone1.png'
import octagone2 from '../images/new-images/dosadoraportatil/octagone2.png'
import octagone3 from '../images/new-images/dosadoraportatil/octagone3.png'

function PortaMoldes()  {


  const { menuProdutos, forms } = useContext(ContextProdutos)
  

  const handleForm = () => {

    forms.current.focus()
    console.log("Debug")
    
    window.scrollTo(0, 6900)
  }




  const { isEnglish, isPortuguese, isSpanish } = useContext(Context)
   

  if (isPortuguese) {
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <TopNavBar />
      <Navbar />
          <div>
          <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
              <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                  <img className='w-[75%] md:w-[100%]' src={moldes} alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
                 <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PORTA<span className='text-sulpol-green font-black'> MOLDES</span></h1>
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A Sulpol possui em suas linhas de produtos, sistemas de porta moldes para produção
                  de gabinetes. Os sistemas porta-moldes são automatizados, com a possibilidade de
                  instalação de um sistema que leva o gabinete para a posição de injeção e também com
                  a movimentação da contenção interna da expansão do poliuretano. Os porta moldes
                  podem ser usados individualmente para trabalhar com um plugue (sistema de
                  contenção interna dos gabinetes) por vez, ou combiná-lo com outros porta-moldes
                  que ficam dispostos em linha. Desta forma o cabeçote de injeção se desloca para
                  atender mais de um porta molde, gerando assim uma maior produtividade.
                  </p>
                 <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                  <img className='w-[100%] md:w-[15%]' src={octagone1} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone2} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone3} alt=''/>
                  </div>
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
          <Footer />
      <WhatsappButton />
      </motion.div>
    )
  } else if (isEnglish) {
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <TopNavBar />
      <Navbar />
          <div>
          <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
              <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                  <img className='w-[75%] md:w-[100%]' src={moldes} alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
              <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>MOLD<span className='text-sulpol-green font-black'> TEMPLATES</span></h1 >
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Sulpol has in its product lines mold holder systems for production
                  of cabinets. The mold holder systems are automated, with the possibility of
                  installation of a system that takes the cabinet to the injection position and also with
                  the movement of the internal containment of the expansion of the polyurethane. the mold holders
                  can be used individually to work with a plug (system of
                  internal containment of cabinets) at a time, or combine it with other mold holders
                  which are arranged in line. In this way, the injection head moves to
                  serve more than one mold holder, thus generating greater productivity.
                  </p>
                 <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                  <img className='w-[100%] md:w-[15%]' src={octagone1} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone2} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone3} alt=''/>
                  </div>
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
          <Footer />
      <WhatsappButton />
      </motion.div>
    )
  } else if (isSpanish) {
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <TopNavBar />
      <Navbar />
          <div>
          <div className='container mx-auto'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
              <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                  <img className='w-[75%] md:w-[100%]' src={moldes} alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
               <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>PUERTA<span className='text-sulpol-green font-black'> PLANTILLAS</span></h1 >
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Sulpol tiene en sus líneas de productos sistemas portamoldes para producción
                  de gabinetes Los sistemas portamoldes están automatizados, con posibilidad de
                  instalación de un sistema que lleva el armario a la posición de inyección y también con
                  el movimiento de la contención interna de la expansión del poliuretano. los portamoldes
                  se puede utilizar individualmente para trabajar con un enchufe (sistema de
                  contención interna de gabinetes) a la vez, o combínelo con otros portamoldes
                  que están dispuestos en línea. De esta manera, el cabezal de inyección se desplaza a
                  atender a más de un portamoldes, generando así una mayor productividad.
                  </p>
                 <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                  <img className='w-[100%] md:w-[15%]' src={octagone1} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone2} alt=''/>
                  <img className='w-[100%] md:w-[15%]' src={octagone3} alt=''/>
                  </div>
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
          <Footer />
      <WhatsappButton />
      </motion.div>
    )
  }
  
}

export default PortaMoldes;