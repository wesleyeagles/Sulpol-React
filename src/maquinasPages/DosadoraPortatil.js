import React, {useContext, useState} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'

import dosadoraportatil from '../images/new-images/dosadoraportatil/dosadoraportatil.png'
import octagone1 from '../images/new-images/dosadoraportatil/octagone1.png'
import octagone2 from '../images/new-images/dosadoraportatil/octagone2.png'
import octagone3 from '../images/new-images/dosadoraportatil/octagone3.png'

function DosadoraPortatil()  {

  const [precision, setPrecision] = useState(0); 

  const { menuProdutos, forms } = useContext(ContextProdutos)

  const { isPortuguese, isEnglish, isSpanish } = useContext(Context)
  

  const handleForm = () => {

    forms.current.focus()
    console.log("Debug")
    
    window.scrollTo(0, 6900)
  }

  const openPrecision = () => {
    setPrecision(!precision)
    
    if (tecnology === true) {
        setTecnology(!tecnology)
    } else if (flexibility === true) {
        setFlexibility(!flexibility)
    } else if (durability === true) {
        setDurability(!durability)
    }
  }  

  const [tecnology, setTecnology] = useState(0);

  const openTecnology = () => {
      setTecnology(!tecnology)
      
      if (precision === true) {
          setPrecision(!precision)
      } else if (flexibility === true) {
          setFlexibility(!flexibility)
      } else if (durability === true) {
        setDurability(!durability)
    }
  }

  const [flexibility, setFlexibility] = useState(0);
  const [durability, setDurability] = useState(0);


      
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
                <div className='w-[100%] md:w-[30%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                    <img alt='' className='w-[75%] md:w-[100%]' src={dosadoraportatil} />
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[60%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-<span className='text-sulpol-green font-black'>P15A</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipamento de baixa pressão, com Pistola Dosadora, Misturador estático e de fácil movimentação, montado sobre rodízios. Foi desenvolvido exclusivamente para poliuretano Poliéter, para a espuma rígida ou semirrígida. Atende as necessidades de diversos setores da indústria, tais como: refrigeração, moveleira, construção civil entre outros. </p>
                   <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone1} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone2} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone3} />
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisão de dosagem <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Bombas de circulação e pistola de aplicação desenvolvidas e fabricadas por SULPOL para trabalhar com Poliuretano, garantindo relação e mistura perfeita.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Compacto <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Equipamento compacto e portátil,  montado sobre rodízios que facilita o transporte até o local da aplicação.</p>
                    </div>
                </div>
    
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha Técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanques de 30 litros.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Bombas de engrenagem de alta precisão.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de circulação constante dos materiais.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Timer de dosagem eletrônico.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controle digital de pressão que desarmam em caso de pressão excessiva nas linhas de material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Vazão de 8 a 16 Kg/ minuto.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanques com 45 a 100 litros cada.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras de circulação com até 25 metros de comprimento.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Aquecimento nas mangueiras.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador nos tanques de materiais.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de aplicação por spray.</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="QUERO SABER MAIS" link="/LPRefrigeracao#header"/>
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
                <div className='w-[100%] md:w-[30%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                    <img alt='' className='w-[75%] md:w-[100%]' src={dosadoraportatil} />
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[60%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-<span className='text-sulpol-green font-black'>P15A</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Low pressure equipment, with Dosing Pistol, Static and easy-to-handle mixer, mounted on casters. It was developed exclusively for Polyether polyurethane, for rigid or semi-rigid foam. It meets the needs of various sectors of industry, such as: refrigeration, furniture, civil construction, among others. </p>
                   <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone1} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone2} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone3} />
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/>Dosing accuracy <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Circulation pumps and application gun developed and manufactured by SULPOL to work with Polyurethane, guaranteeing perfect mixing and ratio.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Compact <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Compact and portable equipment, mounted on casters that facilitate transport to the application site.</p>
                    </div>
                </div>
    
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Datasheet</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>30 Liter tanks.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>High precision gear pumps.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>System of constant circulation of materials.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Electronic dosing timer.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Digital pressure control that trips in case of excessive pressure in the material lines.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Flow from 8 to 16 Kg/minute.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Optional</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanks with 45 to 100 liters each.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Circulation hoses up to 25 meters long.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Hose heating.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitator in material tanks.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Spray application system.</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="I WANT TO KNOW MORE" link="/LPRefrigeracao#header"/>
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
                <div className='w-[100%] md:w-[30%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                    <img alt='' className='w-[75%] md:w-[100%]' src={dosadoraportatil} />
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[60%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-<span className='text-sulpol-green font-black'>P15A</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipo de baja presión, con Pistola Dosificadora, Mezclador Estático y fácil de mover, montado sobre ruedas Fue desarrollado exclusivamente para poliuretano Poliéter, para espuma rígida o semirrígida. Atiende las necesidades de diversos sectores de la industria, tales como: refrigeración, muebles, construcción civil, entre otros. </p>                   <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone1} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone2} />
                    <img alt='' className='w-[100%] md:w-[15%]' src={octagone3} />
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisión <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Bombas de circulación y pistola de aplicación desarrolladas y fabricadas por SULPOL para trabajar con Poliuretano, garantizando una perfecta mezcla y proporción.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Compacto <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Equipo compacto y portátil, montado sobre ruedas que facilitan el transporte al sitio de aplicación.</p>
                    </div>
                </div>
    
            </div>
        </div>
    
            <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanques de 30 litros.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Bombas de engranajes de alta precisión.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de circulación constante de materiales.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Temporizador de dosificación electrónica.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controles de presión digitales que se disparan en caso de presión excesiva en las líneas de material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Flujo de 8 a 16 Kg/minuto.</p>
                </div>


                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opciones</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanques de 45 a 100 litros cada uno.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueras de circulación de hasta 25 metros de largo.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Calefacción en mangueras.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador en tanques de material.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de aplicación por pulverización.</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="QUERO SABER MAIS" link="/LPRefrigeracao#header"/>
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

export default DosadoraPortatil;