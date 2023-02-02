import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'

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
      
  const { isEnglish, isPortuguese, isSpanish } = useContext(Context)
   
  if (isPortuguese) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
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
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Sabendo das dificuldades encontradas pelas empresas que
    processam Poliuretano em relação ao seu maquinário, principalmente quando eles são importados, a
    SULPOL fornece bombas dosadoras de alta e baixa pressão. Todas as bombas fornecidas pela
    SULPOL, foram desenvolvidas exclusivamente para trabalhar com Poliuretano, e contam com
    materiais de alta qualidade tornando o conjunto altamente durável e resistente, com proteção contra
    choques mecânicos e com ótima absorção de impacto, capaz de suportar variações de pressão e
    processos de corrosão. A SULPOL também presta serviços de manutenção e reparo de maneira ágil e
    rápida.</p>
                  
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
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
  } else if (isEnglish) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
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
                <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>PUMPS <span className='text-sulpol-green font-black'>PU</span></ h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Knowing the difficulties encountered by companies that
    process Polyurethane in relation to their machinery, mainly when they are imported, the
    SULPOL supplies high and low pressure metering pumps. All pumps supplied by
    SULPOL, were developed exclusively to work with Polyurethane, and have
    high quality materials making the set highly durable and resistant, with protection against
    mechanical shocks and with excellent impact absorption, capable of withstanding pressure variations and
    corrosion processes. SULPOL also provides maintenance and repair services in an agile and
    fast.</p>
                  
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
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
  } else if (isSpanish) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
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
                <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>PU BOMBAS <span className='text-sulpol-green font-black'>PU</span></ h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Conociendo las dificultades que encuentran las empresas que
    procesan Poliuretano en relación a su maquinaria, principalmente cuando son importadas, las
    SULPOL suministra bombas dosificadoras de alta y baja presión. Todas las bombas suministradas por
    SULPOL, fueron desarrollados exclusivamente para trabajar con Poliuretano, y tienen
    materiales de alta calidad que hacen que el conjunto sea muy duradero y resistente, con protección contra
    choques mecánicos y con excelente absorción de impacto, capaz de soportar variaciones de presión y
    procesos de corrosión. SULPOL también presta servicios de mantenimiento y reparación de forma ágil y
    rápido.</p>
                  
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
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
  }
 
}

export default Bombas;