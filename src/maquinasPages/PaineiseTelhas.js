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

function PaineiseTelhas()  {


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
                  <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/578/full/termoacusticas-removebg-preview.png?1656679360' alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
                 <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PAINÉIS E<span className='text-sulpol-green font-black'> TELHAS</span></h1>
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A espuma rígida de poliuretano tem a menor condutividade térmica de todos os materiais
                  isolantes e, portanto, é muito usada na fabricação de elementos compostos metálicos para
                  atender as demandas na construção civil e industrial, câmaras frigoríficas de caminhões e
                  supermercados.
                  A SULPOL desenvolve equipamentos para a produção de painéis ou telhas com isolamento em
                  poliuretano de diversos tamanhos. Podem ser fabricadas na configuração 1+1 ou 2+2, com a
                  movimentação dos carros e a força de fechamento de acordo com a necessidade de cada
                  aplicação.
                  </p>
  
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
                  <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/578/full/termoacusticas-removebg-preview.png?1656679360' alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
              <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>PANELS E<span className='text-sulpol-green font-black'> TILES</span></ h1>
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Rigid polyurethane foam has the lowest thermal conductivity of all materials
                  insulators and, therefore, is widely used in the manufacture of metallic composite elements for
                  meet the demands in civil and industrial construction, refrigerated chambers for trucks and
                  supermarkets.
                  SULPOL develops equipment for the production of panels or tiles with insulation in
                  polyurethane of different sizes. They can be manufactured in a 1+1 or 2+2 configuration, with the
                  movement of the cars and the closing force according to the needs of each
                  application.
                  </p>
  
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
                  <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/578/full/termoacusticas-removebg-preview.png?1656679360' alt=''/>
                  <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
  
                  </div>
              </div>
  
              <div className='md:w-[55%] mt-16'>
                <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>PANELS E<span className='text-sulpol-green font-black'> BALDOSAS</span></ h1>
                 <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>La espuma rígida de poliuretano tiene la conductividad térmica más baja de todos los materiales
                  aisladores y, por lo tanto, es ampliamente utilizado en la fabricación de elementos compuestos metálicos para
                  satisfacer las demandas en construcción civil e industrial, cámaras frigoríficas para camiones y
                  supermercados
                  SULPOL desarrolla equipos para la producción de paneles o tejas con aislamiento en
                  poliuretano de diferentes tamaños. Se pueden fabricar en configuración 1+1 o 2+2, con la
                  movimiento de los carros y la fuerza de cierre de acuerdo a las necesidades de cada uno
                  solicitud.
                  </p>
  
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

export default PaineiseTelhas;