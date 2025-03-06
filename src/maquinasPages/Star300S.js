import React, {useContext, useState} from 'react'
import star300sThumb1 from '../images/star300sthumb1.png'
import star300sThumb2 from '../images/star300sthumb2.png'
import star300sThumb3 from '../images/star300sthumb3.png'
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

import Star300SImage from '../images/new-images/star_300S_2.png'
import Star300SMRPImage from '../images/new-images/STAR_300S-MRP.png'
import Star300SPVImage from '../images/new-images/star300s-pv.png'
import Star300SSR24Image from '../images/new-images/star_300r24.png'
import Star300STGImage from '../images/new-images/star_300-tg.png'

function Star300S()  {

  const [precision, setPrecision] = useState(0); 

  const { menuProdutos, forms } = useContext(ContextProdutos)

  const {isPortuguese, isEnglish, isSpanish} = useContext(Context)
  

  const handleForm = () => {

    
    forms.current.focus()
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

  const openFlexibility = () => {
      setFlexibility(!flexibility)

      if (precision === true) {
          setPrecision(!precision) 
      } else if (tecnology === true) {
          setTecnology(!tecnology)
      } else if (durability === true) {
        setDurability(!durability)
    }


  }

  const [durability, setDurability] = useState(0);

  const openDurability = () => {
      setDurability(!durability)

      if (precision === true) {
          setPrecision(!precision)
      } else if (tecnology === true) {
          setTecnology(!tecnology)
      } else if (flexibility === true) {
          setFlexibility(!flexibility)
      }
  }
      
   
  if (isPortuguese) {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
            <TopNavBar />
        <Navbar />
            <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SImage} alt=''/>
                    <div className='flex flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px]'>Dosadora de poliuretano estática, tipo banana, com sistema modular de porta-moldes, sendo cada módulo de 6 estações, podendo somar 36 estações. A Star 300 é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SMRPImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-MRP</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px]'>Dosadora de poliuretano rotativa, de giro contínuo ou stop and go, sistema de dosagem manual ou automático, com porta moldes para pé ou par por estação, de 36 a 60 estações. A Star 300-MRP é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Por ser rotativa possui uma produtividade maior.  Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SPVImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-PV</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosadora de poliuretano estática, tipo banana, com sistema modular de porta-moldes com fechamento pneumático duplo sendo um para cada densidade. Cada módulo possui 6 estações, podendo somar 36 estações. O equipamento possui dois braços, cada um com um cabeçote dosador, sendo um para cada densidade. A Star 300 é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SSR24Image} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR 300S<span className='text-sulpol-green font-black'>-R24/36</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosadora de poliuretano rotativa,  de giro stop and go, sistema de dosagem automático, com 02 cabeçotes que dosam o par simultaneamente. Possui porta moldes para par por estação com giro da matriz para 02 densidades. Possui 24 com um carro dosador ou 36 estações com dois carros dosadores. A Star 300-R é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Por ser rotativa e dosadora de par, possui uma alta produtividade.  Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300STGImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-TG</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosadora de poliuretano estática, tipo banana, com sistema modular de porta-moldes, sendo cada módulo de 6 estações, podendo somar 36 estações. Possui torre giratória com acionamento pneumático para dosagem das duas densidades. Própria para solados, cunhos e palmilhas bi densidade. Este sistema de giro permite que o mesmo operador faça o fechamento das duas densidade, propiciando uma maior produtividade. A Star 300 é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisão <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Como todo o equipamento foi projetado, dimensionado, fabricado e testado por SULPOL, possuindo todos os controles de temperatura e pressão necessários para o bom andamento do processo, a dosagem tem tolerância de 1%</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Tecnologia <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Por sermos os maiores, trabalhamos com os melhores fornecedores, somando nossa engenharia e experiência, necessidades dos Clientes, sempre estamos fornecendo a melhor tecnologia atualizada.</p>
                    </div>
                </div>
    
                <div className='flex flex-col sm:flex-col md:flex-row justify-between sm:mt-10 md:mt-20'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openFlexibility} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Flexibilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${flexibility ? "h-36" : null}`}>Como fazemos equipamentos para atualidade e futuro, neste equipamento podemos trabalhar as inúmeras aplicações do mercado, dosagem direta ao cabedal, solados, Cunhos e palmilhas, com a opção de fazer mono densidade, bi densidade ou bi componente.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openDurability} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Durabilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${durability ? "h-36" : null}`}>Qualquer projeto inicia pela engenharia, passando pelos profissionais e equipamentos de ultima geração que possuímos, conseguimos obter o máximo possível de vida útil no processador e porta moldes.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha Técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanques de 250 litros cada, com aquecimento por circulação óleo térmico.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle automático de temperatura nos tanques e mangueiras programáveis via IHM.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reabastecimento Automático com controle de nível mínimo e máximo, com alarme sonoro e visual.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle de pressão digital das linhas de circulação de materiais, com pressão de segurança programável  que protege o equipamento em caso de excesso de pressão.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Seleção automática de cores para cada estação.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Possibilidade de aumentar ou diminuir a vazão automaticamente em cada estação.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Possui sistema automático de identificação da estação a ser dosada.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CPU microprocessada com IHM digital.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Totalizador de dosagens.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limitador de dosagens a ser realizadas nas estações.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Proteção na linha de ar comprimido, no caso de queda de pressão.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limpeza do conjunto misturador é feita de forma manual, automática ou de emergência que é acionado na falta de energia elétrica evitando a catalização dos componentes no misturador.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Porta moldes de até 36 estações.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de troca rápida de matrizes.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de abertura e fechamento automático.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Alimentação pneumática para pinças.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Aquecimento nos anéis ou tampas de matrizes.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Coloramas de até 04 cores.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanques de aquecimento de materiais para 2, 3 ou 4 tambores de matéria prima.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Troller</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Agitador de Coluna.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Afundímetro</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Carro para movimentação de tambores de material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Unidades de refrigeração</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="QUERO SABER MAIS" link="/LPCalcado#lpheader"/>
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
        exit={{opacity: 0, transition: {duration: 0.1} }}
        className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
            <TopNavBar />
        <Navbar />
            <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SImage} alt=''/>
                    <div className='flex flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Static polyurethane batcher, banana type, with a modular mold holder system, each module having 6 stations, with the possibility of adding up to 36 stations. The Star 300 is an equipment that offers precision in the dosage and flexibility in the process. Equipment with a high level of technology and durability, made to process polyether or polyester polyurethanes.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SMRPImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-MRP</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Rotating polyurethane dosing machine, with continuous rotation or stop and go, manual or automatic dosing system, with mold holder for foot or pair per station, from 36 to 60 stations. The Star 300-MRP is an equipment that offers precision in the dosage and flexibility in the process. As it rotates, it is more productive. Equipment with a high level of technology and durability, made to process polyether or polyester polyurethanes.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SPVImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-PV</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Static polyurethane batcher, banana type, with modular mold holder system with double pneumatic closure, one for each density. Each module has 6 stations, adding up to 36 stations. The equipment has two arms, each with a dosing head, one for each density. The Star 300 is an equipment that offers precision in the dosage and flexibility in the process. Equipment with a high level of technology and durability, made to process polyether or polyester polyurethanes.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SSR24Image} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR 300S<span className='text-sulpol-green font-black'>-R24/36</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Rotating polyurethane dosing machine, with stop and go rotation, automatic dosing system, with 02 heads that dose the pair simultaneously. It has mold holder for pair per station with matrix rotation for 02 densities. It has 24 stations with one dosing car or 36 stations with two dosing cars. The Star 300-R is an equipment that offers precision in the dosage and flexibility in the process. As it is rotary and pair doser, it has a high productivity. Equipment with a high level of technology and durability, made to process polyether or polyester polyurethanes.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300STGImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-TG</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Static polyurethane batcher, banana type, with a modular mold holder system, each module having 6 stations, with the possibility of adding up to 36 stations. It has a rotating tower with pneumatic activation for dosing the two densities. Suitable for bi-density soles, cleats and insoles. This turning system allows the same operator to close both densities, providing greater productivity. The Star 300 is an equipment that offers precision in the dosage and flexibility in the process. Equipment with a high level of technology and durability, made to process polyether or polyester polyurethanes.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precision <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>As all the equipment was designed, sized, manufactured and tested by SULPOL, having all the necessary temperature and pressure controls for the smooth running of the process, the dosage has a tolerance of 1%</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Technology <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Because we are the biggest, we work with the best suppliers, adding our engineering and experience, Customer needs, we are always providing the best up-to-date technology.</p>
                    </div>
                </div>
    
                <div className='flex flex-col sm:flex-col md:flex-row justify-between sm:mt-10 md:mt-20'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none'>
                        <h2 onClick={openFlexibility} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Flexibility <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${flexibility ? "h-36" : null}`}>As we make equipment for the present and the future, we can use this equipment to work with the numerous applications on the market, directly dosing the upper, soles, cleats and insoles, with the option of making mono-density, bi-density or bi-component.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                        <h2 onClick={openDurability} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Durability <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${durability ? "h-36" : null}`}>Any project starts with engineering, going through the professionals and state-of-the-art equipment we have, we manage to obtain the maximum possible useful life in the processor and mold base.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Datasheet</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanks of 250 liters each, heated by thermal oil circulation.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Automatic temperature control in tanks and programmable hoses via HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Automatic replenishment with minimum and maximum level control, with audible and visual alarm.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Digital pressure control of material circulation lines, with programmable safety pressure that protects the equipment in case of excess pressure.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Automatic selection of colors for each station.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Possibility of automatically increasing or decreasing the flow at each station.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>It has an automatic identification system of the station to be dosed.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Microprocessed CPU with digital HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Dosage totalizer.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Dosage limiter to be carried out at the stations.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Compressed air line protection in case of pressure drop.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cleaning of the mixing set is done manually, automatically or in an emergency that is triggered in the absence of electricity, preventing the catalysis of the components in the mixer.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Optional</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Mold holder with up to 36 stations.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Quick die exchange system.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Automatic opening and closing system.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Pneumatic feed for grippers.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Heating on die rings or covers.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Coloramas of up to 04 colors.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Material heating tanks for 2, 3 or 4 raw material drums.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Troller</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Column Agitator.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Depth gauge</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Cart for moving drums of material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Refrigeration units</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="I WANT TO KNOW MORE" link="/LPCalcado#lpheader"/>
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
        exit={{opacity: 0, transition: {duration: 0.1} }}
        className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
            <TopNavBar />
        <Navbar />
            <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SImage} alt=''/>
                    <div className='flex flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[50%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosificador estático de poliuretano, tipo banana, con sistema portamoldes modular, siendo cada módulo de 6 estaciones , con un total de 36 estaciones. Star 300 es un dispositivo que ofrece precisión en la dosificación y flexibilidad en el proceso. Equipos de alto nivel tecnológico y durabilidad, fabricados para procesar poliuretanos poliéter o poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SMRPImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/888/full/Interse%C3%A7%C3%A3o_51.png?1656009020' alt=''/>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/890/full/Interse%C3%A7%C3%A3o_52.png?1656009037' alt=''/>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/892/full/Interse%C3%A7%C3%A3o_53.png?1656009056' alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-MRP</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosificadora rotativa de poliuretano, continua o stop and go, sistema dosificador manual o automático, con molde soporte para pie o par por estación, de 36 a 60 estaciones. El Star 300-MRP es un equipo que ofrece precisión en la dosificación y flexibilidad en el proceso. A medida que gira, es más productivo. Equipos de alto nivel tecnológico y durabilidad, fabricados para procesar poliuretanos poliéter o poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SPVImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/007/full/Interse%C3%A7%C3%A3o_54.png?1656010953' alt=''/>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/008/full/Interse%C3%A7%C3%A3o_55.png?1656010971' alt=''/>
                    <img className='w-[28%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/009/full/Interse%C3%A7%C3%A3o_56.png?1656010991' alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-PV</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosificador estático de poliuretano, tipo banana, con sistema modular portamoldes con doble cierre neumático uno para cada densidad. Cada módulo tiene 6 estaciones, sumando hasta 36 estaciones. El equipo tiene dos brazos, cada uno con un cabezal dosificador, uno para cada densidad. Star 300 es un dispositivo que ofrece precisión en la dosificación y flexibilidad en el proceso. Equipos de alto nivel tecnológico y durabilidad, fabricados para procesar poliuretanos poliéter o poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300SSR24Image} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR 300S<span className='text-sulpol-green font-black'>-R24/36</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosificadora rotativa de poliuretano, con giro stop and go, sistema dosificador automático, con 02 cabezales que dosifique el par simultáneamente. Posee portamoldes por par por estación con rotación de matriz para 02 densidades. Dispone de 24 estaciones con un carro dosificador o 36 estaciones con dos carros dosificadores. El Star 300-R es un equipo que ofrece precisión en la dosificación y flexibilidad en el proceso. Al ser dosificador rotativo y par, tiene una alta productividad. Equipos de alto nivel tecnológico y durabilidad, fabricados para procesar poliuretanos poliéter o poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img className='w-[100%] md:w-[100%]' src={Star300STGImage} alt=''/>
                    <div className='flex  flex-wrap lg:flex-nowrap w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb3} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb1} alt=''/>
                    <img className='w-[28%] md:w-[25%]' src={star300sThumb2} alt=''/>
                    </div>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-TG</span></h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosificador estático de poliuretano, tipo banana, con sistema portamoldes modular, siendo cada módulo de 6 estaciones , con un total de 36 estaciones. Dispone de una torre giratoria con accionamiento neumático para la dosificación de las dos densidades. Apto para suelas, tacos y plantillas bidensidad. Este sistema de volteo permite que un mismo operario cierre ambas densidades, proporcionando una mayor productividad. Star 300 es un dispositivo que ofrece precisión en la dosificación y flexibilidad en el proceso. Equipos de alto nivel tecnológico y durabilidad, fabricados para procesar poliuretanos poliéter o poliéster.</p>
                   <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisión <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Como todos los equipos fueron diseñados, dimensionados, fabricados y probados por SULPOL, contando con todos los controles de temperatura y presión necesarios para el buen desarrollo del proceso, la dosificación tiene una tolerancia del 1%. </p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Tecnología <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Porque somos los más grandes, trabajamos con los mejores proveedores, sumando nuestra ingeniería y experiencia, las necesidades del Cliente, siempre estamos brindando la mejor tecnología actualizada.</p>
                    </div>
                </div>
    
                <div className='flex flex-col sm:flex-col md:flex-row justify-between sm:mt-10 md:mt-20'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openFlexibility} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Flexibilidad <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${flexibility ? "h-36" : null}`}>Como fabricamos equipos para el presente y el futuro, podemos utilizar estos equipos para trabajar con las numerosas aplicaciones del mercado, dosificando directamente la parte superior, suelas, tacos y plantillas, con la opción de hacer monodensidad, bidensidad o bicomponente.</p>
                    </div>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openDurability} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Durabilidad <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                        <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${durability ? "h-36" : null}`}>Todo proyecto comienza con la ingeniería, pasando por los profesionales y equipos de última generación con los que contamos, logramos obtener la máxima vida útil posible en el procesador y la base del molde.</p>
                    </div>
                </div>
            </div>
        </div>
    
            <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha técnica</h2>
    
                <div>
                <p className='p-5 text-sm sm:text-base font-normal'>Tanques de 250 litros cada uno, calentados por circulación de aceite térmico.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Control automático de temperatura en tanques y mangueras programables vía HMI.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reposición automática con control de nivel mínimo y máximo, con alarma sonora y visual.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Control digital de presión de líneas de circulación de material, con presión de seguridad programable que protege el equipo en caso de exceso de presión.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Selección de color automática para cada temporada.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Posibilidad de aumentar o disminuir automáticamente el caudal en cada estación.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Dispone de un sistema automático de identificación de la estación a dosificar.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CPU de microprocesador con HMI digital.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Totalizador de dosis.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limitador de dosis a realizar en estaciones.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Protección en la línea de aire comprimido, en caso de caída de presión.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>La limpieza del conjunto mezclador se realiza de forma manual, automática o en caso de emergencia que se activa en caso de corte de corriente. corte, evitando la catalización de los componentes en el mezclador.</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opciones</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Plantillas para hasta 36 estaciones.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de conmutación de matriz rápida.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Sistema de apertura y cierre automático.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Alimentación neumática para pinzas.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Calentamiento en anillos de troquel o tapas.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Coloramas de hasta 04 colores.</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Depósitos de calentamiento de material para 2, 3 o 4 bidones de materia prima.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Troller</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Agitador de columnas.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de profundidad</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Carro para mover bidones de material.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Unidades de refrigeración</p>
                </div>
    
            </div>   
    
            <div className='flex w-full justify-center mt-20'>
            <ButtonPrimary text="QUIERO SABER MÁS" link="/LPCalcado#lpheader"/>
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

export default Star300S;