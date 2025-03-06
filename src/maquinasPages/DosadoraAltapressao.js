import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'

import dosadoraalta from '../images/new-images/dosadoraalta/dosadoraalta.png'
import octagone1 from '../images/new-images/dosadoraalta/octagone1.png'
import octagone2 from '../images/new-images/dosadoraalta/octagone2.png'
import octagone3 from '../images/new-images/dosadoraalta/octagone3.png'

function DosadoraAltapressao()  {

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
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
            <TopNavBar />
        <Navbar />
        <div className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[20%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
            <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                    <img className='w-[75%] md:w-[100%]' src={dosadoraalta} alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ECOLÓGICA <span className='text-sulpol-green font-black'>AP</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A Série Ecológica AP configura uma linha de equipamentos para mistura de poliuretano em alta pressão. São equipadas com cabeçote auto-limpante, livre do uso de solventes. Precisas, confiáveis e de fácil operação, descrevem bem as principais características técnicas deste produto. Possui diversas configurações, se adaptando aos requisitos técnicos e econômicos de cada cliente.</p>
                   <div className='flex w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img className='w-[100%] md:w-[15%]' src={octagone1} alt=''/>
                    <img className='w-[100%] md:w-[15%]' src={octagone2} alt=''/>
                    <img className='w-[100%] md:w-[15%]' src={octagone3} alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Limpeza sem solventes <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Cabeçote auto limpante, desenvolvido e fabricado por SULPOL com movimentos hidráulicos que dispensa o uso de solventes para a limpeza.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Sistem de recirculação <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Sistema de recirculação constante dos materiais, garantindo uma perfeita homogeneização.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha Técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanques encamisados com capacidade de até 250 litros</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador de baixa rotação nos tanques</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controle automático de temperatura</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Reabastecimento automático através de bombas pneumáticas.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Bombas rotativas de pistões axiais de alta precisão com controle independente de vazão.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras especiais para trabalhar com diversos agentes expansores.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Trocador de calor na linha de retorno dos materiais.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cabeçote auto limpante tipo “L”, dispensando o uso de solventes.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Botões de acionamento, estrategicamente posicionados, que permitem a operação sem tirar a mão do punho de movimentação do cabeçote.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CLP microprocessado com IHM digital touch screen.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Possibilidade de programação de até 40 tempos de dosagem.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tempos necessários para o processo, programáveis.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Controle automático de temperatura</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Unidade hidráulica completa, com válvulas de regulagem de pressão e direcional, visor de nível, trocador de calor e acumulador capaz de fechar o cabeçote em uma possível falta de energia.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Armário elétrico categoria IP 54, com vedação e fechos de segurança, completo e fixado na estrutura do equipamento.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras especiais para trabalhar com diversos agentes expansores.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Vazões disponíveis: 7, 15, 30, 40, 60, 100, 150 e 200 Kg/ minuto.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Medidor de vazão.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Acoplamento magnético.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Filtros auto limpante.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Carrossel, prensas, esteiras, porta moldes, unidade para aquecimento de moldes e dispositivos especiais para dosagem.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Secador de ar.</p>
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
                    <img className='w-[75%] md:w-[100%]' src={dosadoraalta} alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl 2xl:text-5xl mb-5 font-normal'>ECOLOGICAL <span className='text-sulpol-green font-black'>AP</span></h1 >
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>The AP Ecological Series configures a line of equipment for high pressure polyurethane mixing. They are equipped with a self-cleaning head, free of the use of solvents. Precise, reliable and easy to operate, they describe the main technical characteristics of this product well. It has several configurations, adapting to the technical and economic requirements of each customer.</p>
                   <div className='flex w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px] lg:mt-[20%] 2xl:mt-[10%] mb -16'>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3 %A3o_64.png?1656013300' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3 %A3o_60.png?1656013339' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3 %A3o_63.png?1656013375' alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border -none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Cleaning without solvents <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Self-cleaning head, developed and manufactured by SULPOL with hydraulic movements that eliminate the use of solvents for cleaning.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> System recirculation <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Constant material recirculation system, ensuring perfect homogenization.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha Técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Jacketed tanks with a capacity of up to 250 liters</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Low RPM Agitator on Tanks</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Automatic temperature control</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Automatic replenishment through pneumatic pumps.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>High precision axial piston rotary pumps with independent flow control.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Special hoses to work with different expanding agents.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Heat exchanger in the material return line.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Self-cleaning head type “L”, eliminating the use of solvents.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Strategically placed drive buttons allow operation without taking your hand off the head movement handle.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Microprocessed PLC with digital touch screen HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Possibility of programming up to 40 dosing times.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Times required for process, programmable.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Automatic temperature control</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Complete hydraulic unit, with pressure regulation and directional valves, level display, heat exchanger and capable accumulator to close the head in a possible power failure.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>IP 54 category electrical cabinet, with sealing and safety locks, complete and fixed to the equipment structure.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Special hoses to work with different expanding agents.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Available flow rates: 7, 15, 30, 40, 60, 100, 150 and 200 Kg/minute.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Options</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Flow meter.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Magnetic coupling.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Self-cleaning filters.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Carousel, presses, conveyors, mold holder, mold heating unit and special devices for dosing.</p >
                <p className='p-5 font-normal text-sm sm:text-base'>Air dryer.</p>
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
                    <img className='w-[75%] md:w-[100%]' src={dosadoraalta} alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ECOLÓGICA <span className='text-sulpol-green font-black'>AP</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>La Serie Ecológica AP configura una línea de equipos para mezcla de poliuretano a alta presión. Están equipados con un cabezal autolimpiante, libre del uso de solventes. Precisos, confiables y fáciles de operar, describen bien las principales características técnicas de este producto. Dispone de varias configuraciones, adaptándose a los requerimientos técnicos y económicos de cada cliente.</p>
                   <div className='flex w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img className='w-[100%] md:w-[15%]' src={octagone1} alt=''/>
                    <img className='w-[100%] md:w-[15%]' src={octagone2} alt=''/>
                    <img className='w-[100%] md:w-[15%]' src={octagone3} alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Limpieza sin disolventes <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Cabezal autolimpiante, desarrollado y fabricado por SULPOL con movimientos hidráulicos que no requieren el uso de solventes para la limpieza.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Sistema recirculación <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Sistema de recirculación constante de los materiales, garantizando una perfecta homogeneización.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha técnica</h2>
    
            <div>
            <p className='p-5 text-sm sm:text-base font-normal'>Depósitos encamisados ​​con capacidad de hasta 250 litros</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador de RPM bajas en tanques</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Control de temperatura automático</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Reposición automática mediante bombas neumáticas.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Bombas rotativas de pistones axiales de alta precisión con control de caudal independiente.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueras especiales para trabajar con diferentes agentes expansores.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Intercambiador de calor en la línea de retorno de material.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cabeza autolimpiante tipo “L”, eliminando el uso de solventes.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Los botones de manejo estratégicamente ubicados permiten la operación sin quitar la mano del mango de movimiento del cabezal.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>PLC microprocesado con pantalla táctil digital HMI.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Posibilidad de programar hasta 40 tiempos de dosificación.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tiempos necesarios para el proceso, programable.</p>
    
            <p className='p-5 font-normal text-sm sm:text-base'>Control de temperatura automático</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Grupo hidráulico completo, con regulación de presión y válvulas direccionales, indicador de nivel, intercambiador de calor y acumulador capaz de cerrar el cabezal en un posible corte de energía.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Cuadro eléctrico de categoría IP 54, con estanqueidad y cierres de seguridad, completo y fijado a la estructura del equipo.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueras especiales para trabajar con diferentes agentes expansores.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Caudales disponibles: 7, 15, 30, 40, 60, 100, 150 y 200 Kg/minuto.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opciones</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Medidor de caudal.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Acoplamiento magnético.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Filtros autolimpiables.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Carrusel, prensas, transportadores, portamoldes, unidad de calentamiento de moldes y dispositivos especiales para dosificación.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Secador de aire.</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="QUIERO SABER MÁS" link="/LPRefrigeracao#header"/>
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

export default DosadoraAltapressao;