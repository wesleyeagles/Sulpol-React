import React, {useContext, useState} from 'react'
import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'

function DosadoraBaixapressao()  {

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
                <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                    <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-C</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipamento de baixa pressão, com misturador dinâmico, desenvolvido para trabalhar com Poliuretano, Poliéter ou Poliéster, para a produção de espuma flexível, pele integral, rígida ou semirrígida. Atende as necessidades de diversos setores das indústrias: automobilísticas, refrigeração, moveleira, construção civil, ortopédica, esportiva entre outros.</p>
                   <div className='flex w-[100%] md:w-autoflex-row gap-5 mt-10 md:mt-[20px] lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3%A3o_64.png?1656013300' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3%A3o_60.png?1656013339' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3%A3o_63.png?1656013375' alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Cabeçote dosador <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Bombas de circulação e pistola de aplicação desenvolvidas e fabricadas por SULPOL para trabalhar com Poliuretano, garantindo relação e mistura perfeita.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Repetibilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Garantia de precisão desde a primeira até a última dosagem.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha Técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Bombas volumétricas de engrenagens de altíssima precisão.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques de 60 litros.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reabastecimento automático.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador nos tanques.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanque para solvente de limpeza em aço inox.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CLP microprocessado com IHM digital touch screen.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Ciclos e parâmetros para funcionamento do equipamento, programáveis via IHM.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle de vazão individual e regulagem de relação via CLP.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controle digital das pressões das linhas de circulação, com alarme.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limpeza do conjunto misturador é realizada de maneira manual ou automática.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de limpeza de emergência acionado pneumaticamente na falta energia elétrica.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cabeçote dosador compacto de alto desempenho.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Botões de acionamento, estrategicamente posicionados, que permitem a operação sem tirar a mão do punho de movimentação do cabeçote.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras especiais para trabalhar com diversos agentes expansores.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Armário elétrico categoria IP 54, com vedação e fechos de segurança, completo e fixado na estrutura do equipamento.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Vazões disponíveis de 1 a 300 Kg/ minuto.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>PRelação de trabalho entre 1:1 até 5:1</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de vazão</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Trocador de calor na linha de retorno dos materiais.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques com capacidade maior que 60 litros</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de limpeza do conjunto misturador por água quente</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Misturador com rotação variável entre 5.000 e 12.000 RPM</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Carrossel, prensas, esteiras, porta moldes, unidade para aquecimento de moldes e dispositivos especiais para dosagem</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Secador de ar</p>
                </div>
    
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
                    <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-C</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Low pressure equipment, with dynamic mixer, developed to work with Polyurethane, Polyether or Polyester, for the production of flexible foam, integral skin, rigid or semi-rigid. It meets the needs of various industrial sectors: automotive, refrigeration, furniture, civil construction, orthopedic, sports, among others.</p>
                   <div className='flex w-[100%] md:w-autoflex-row gap-5 mt-10 md:mt-[20px] lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3%A3o_64.png?1656013300' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3%A3o_60.png?1656013339' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3%A3o_63.png?1656013375' alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Dosing head <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Circulation pumps and application gun developed and manufactured by SULPOL to work with Polyurethane, guaranteeing perfect mixing and ratio.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Repeatability <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Precision guaranteed from the first to the last dose.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Datasheet</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>High precision volumetric gear pumps.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>60 liter tanks.</p>

                <p className='p-5 font-normal text-sm sm:text-base'>Auto replenishment.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitator in tanks.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Stainless steel cleaning solvent tank.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Microprocessed PLC with digital touch screen HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Cycles and parameters for equipment operation, programmable via HMI.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Individual flow control and ratio adjustment via PLC.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Digital control of circulation line pressures, with alarm.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cleaning of the mixer set is performed manually or automatically.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Emergency cleaning system activated pneumatically in the event of a power outage.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>High-performance compact dispensing head.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Strategically placed drive buttons allow operation without taking your hand off the head movement handle.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Special hoses to work with different expanding agents.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>IP 54 category electrical cabinet, with sealing and safety locks, complete and fixed to the equipment structure.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Available flow rates from 1 to 300 Kg/minute.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Options</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Working ratio between 1:1 to 5:1</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Flow meter</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Heat exchanger in the material return line.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanks with a capacity greater than 60 liters</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Hot water mixer assembly cleaning system</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mixer with variable speed between 5,000 and 12,000 RPM</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Carousel, presses, mats, mold holders, mold heating unit and special devices for dosing</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Air dryer</p>
                </div>
    
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
                    <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt=''/>
                    <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
    
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-C</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipo de baja presión, con mezclador dinámico, desarrollado para trabajar con Poliuretano, Poliéter o Poliéster, para la producción de espuma flexible, piel integral, rígida o semirrígida. Responde a las necesidades de diferentes sectores industriales: automoción, refrigeración, mueble, construcción civil, ortopedia, deportivo, entre otros.</p>
                   <div className='flex w-[100%] md:w-autoflex-row gap-5 mt-10 md:mt-[20px] lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3%A3o_64.png?1656013300' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3%A3o_60.png?1656013339' alt=''/>
                    <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3%A3o_63.png?1656013375' alt=''/>
                    </div>
                    <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Cabezal dosificador<GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Bombas de circulación y pistola de aplicación desarrolladas y fabricadas por SULPOL para trabajar con Poliuretano, garantizando una perfecta mezcla y proporción.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Repetibilidad <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Precisión garantizada desde la primera hasta la última dosis.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Bombas volumétricas de engranajes de muy alta precisión.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques de 60 litros.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reposición automática.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador en tanques.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Depósito de disolvente de limpieza de acero inoxidable.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>PLC microprocesado con pantalla táctil digital HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Ciclos y parámetros para el funcionamiento del equipo, programables vía HMI.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Control de flujo individual y ajuste de relación a través de PLC.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Control digital de presiones de línea de circulación, con alarma.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>La limpieza del conjunto mezclador se realiza de forma manual o automática.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de limpieza de emergencia activado neumáticamente en caso de corte de energía.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cabeza dosificadora compacta de alto rendimiento.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Los botones de manejo estratégicamente ubicados permiten la operación sin quitar la mano del mango de movimiento del cabezal.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueras especiales para trabajar con diferentes agentes expansores.</p>
    
                <p className='p-5 font-normal text-sm sm:text-base'>Cuadro eléctrico de categoría IP 54, con estanqueidad y cierres de seguridad, completo y fijado a la estructura del equipo.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Caudales disponibles de 1 a 300 Kg/minuto.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opciones</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Proporción de trabajo entre 1:1 y 5:1</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de flujo</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Intercambiador de calor en la línea de retorno de material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Depósitos con capacidad superior a 60 litros</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de limpieza del conjunto mezclador de agua caliente</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mezclador con velocidad variable entre 5.000 y 12.000 RPM</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Carrusel, prensas, esteras, portamoldes, unidad de calentamiento de moldes y dispositivos especiales para dosificación</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Secador de aire</p>
                </div>
    
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

export default DosadoraBaixapressao;