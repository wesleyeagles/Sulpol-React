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

function DosadoraElastomero()  {

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
        exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
            <TopNavBar />
        <Navbar />
            <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img alt='' className='w-[100%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' />
                    <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/237/full/Interse%C3%A7%C3%A3o_58.png?1660163096' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/214/full/Interse%C3%A7%C3%A3o_59.png?1660162255' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/221/full/Interse%C3%A7%C3%A3o_58.png?1660162661' />
                    </div>
                    <strong className='mt-10'>As principais características do equipamento são:</strong>
                    <ul className='p-0'>
                        <li>•Interface amigável com o usuário;</li>
                        <li>•Configuração flexível do equipamento;</li>
                        <li>•Reduzida e fácil manutenção;</li>
                        <li>•Precisão na dosagem;</li>
                        <li>•Unidades de cor;</li>
                        <li>•Sistema de aquecimento eficiente;</li>
                        <li>••Sistema de vácuo;</li>
                        <li>•Mesas aquecidas para moldes;</li>
                        <li>•Estufas para cura de peças.</li>
    
                    </ul>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ELASTOMACH</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A cada ano o número de aplicações com poliuretanos elastoméricos aumentam.
                    Propriedades mecânicas, tais como: dureza, resistência a abrasão e elasticidade, são as
                    algumas características deste material.
                    Como solução para o processamento dos Elastômeros, a SULPOL apresenta a linha
                    ELASTOMACH que é uma série de máquinas de baixa pressão para sistemas de
                    elastômero multicomponentes (MDI e/ou TDI), poliéter ou poliéster, com configurações
                    flexíveis e de fácil operação, O equipamento cumpre com todos requisitos técnicos
                    necessários para prover eficiência produtiva e qualidade no produto final.
                    </p>
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
                <p className='p-5 text-sm sm:text-base font-normal'>Vazões de 7 à 150 L/min </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Disponível em 2, 3 ou 4 tanques</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanques com capacidade de até 1000 litros </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores no tanque de pré-polímero</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Temperaturas de até 150°C</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de reposição a vácuo</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Até 4 componentes adicionais (Pigmentos/Aditivos/Catalisadores)</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanque de solvente</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Cabeçote de mistura dinâmica</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Bombas de engrenagens de precisão</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controle de aquecimento eletrônico</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle eletrônico de pressão</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tudo controlado por CLP</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tela colorida sensível ao toque</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Bomba de vácuo</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Desgaseificação automática</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Configuração para pré-aquecimento</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gerenciamento de alarme</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Programação de derramamento </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gerenciamento de alarme </p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Linha de injeção direta de pigmento</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Linha de injeção direta de aditivos/catalisadores</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Controle eletrônico digital da inserção de nitrogênio</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques de aço inoxidável</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Velocidade do misturador ajustável</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de fluxo volumétrico</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Mais componentes nas cabeças de mistura.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores especiais </p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reatores </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Afundímetro</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Estações de pré-mistura</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de automação para cabeça de mistura</p>
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
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img alt='' className='w-[100%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' />
                    <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/237/full/Interse%C3%A7%C3%A3o_58.png?1660163096' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/214/full/Interse%C3%A7%C3%A3o_59.png?1660162255' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/221/full/Interse%C3%A7%C3%A3o_58.png?1660162661' />
                    </div>
                    <strong className='mt-10'>The main features of the equipment are:</strong>
                    <ul className='p-0'>
                        <li>• User-friendly interface;</li>
                        <li>• Flexible equipment configuration;</li>
                        <li>• Reduced and easy maintenance;</li>
                        <li>• Precision in dosing;</li>
                        <li>• Color units;</li>
                        <li>• Efficient heating system;</li>
                        <li>• Vacuum system;</li>
                        <li>• Heated tables for molds;</li>
                        <li>• Ovens for curing parts.</li>
    
                    </ul>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ELASTOMACH</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Each year the number of applications with elastomeric polyurethanes increases.
                   Mechanical properties, such as: hardness, resistance to abrasion and elasticity, are some characteristics of this material. As a solution for processing Elastomers, SULPOL presents the ELASTOMACH line, which is a series of low pressure machines for multi-component elastomer systems (MDI and/or TDI), polyether or polyester, with flexible configurations and easy operation. complies with all technical requirements necessary to provide productive efficiency and quality in the final product.
                    </p>
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
                <p className='p-5 text-sm sm:text-base font-normal'>Flow rates from 7 to 150 L/min</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Available in 2, 3 or 4 tanks</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanks with a capacity of up to 1000 liters</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitators in the prepolymer tank</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Temperatures up to 150°C</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Vacuum replenishment system</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Up to 4 additional components (Pigments/Additives/Catalysts)</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Solvent tank</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Dynamic mixing head</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Precision gear pumps</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Electronic heating control</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Electronic pressure control</p>
                <p className='p-5 font-normal text-sm sm:text-base'>All controlled by PLC</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Color touch screen</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Pump vacuum</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Automatic Degassing</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Preheat setting</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Alarm management</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Spill schedule </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Alarm management </p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Optional</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Direct pigment injection line</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Direct injection line of additives/catalysts</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Digital electronic control of nitrogen insertion</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Stainless steel tanks</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Adjustable mixer speed</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Volumetric flow meter</p>
                <p className='p-5 font-normal text-sm sm:text-base'>More components in the mixing heads</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Special stirrers </p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reactors </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Depth gauge</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Pre-mix stations</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mixing head automation system</p>
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
                <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                    <img alt='' className='w-[100%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' />
                    <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/237/full/Interse%C3%A7%C3%A3o_58.png?1660163096' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/214/full/Interse%C3%A7%C3%A3o_59.png?1660162255' />
                    <img alt='' className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/976/221/full/Interse%C3%A7%C3%A3o_58.png?1660162661' />
                    </div>
                    <strong className='mt-10'>Las principales características del equipo son:</strong>
                    <ul className='p-0'>
                        <li>•Interfaz fácil de usar;</li>
                        <li>•Configuración flexible del equipo;</li>
                        <li>•Mantenimiento reducido y fácil;</li>
                        <li>•Precisión en la dosificación;</li>
                        <li>•Unidades de color;</li>
                        <li>•Sistema de calefacción eficiente;</li>
                        <li>••Sistema de vacío;</li>
                        <li>•Mesas calientes para moldes;</li>
                        <li>•Hornos para curar piezas.</li>
    
                    </ul>
                </div>
    
                <div className='md:w-[45%] mt-16'>
                   <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ELASTOMACH</h1>
                   <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Cada año aumenta el número de aplicaciones con poliuretanos elastoméricos.
                    Las propiedades mecánicas, tales como: dureza, resistencia a la abrasión y elasticidad, son las
                    algunas características de este material.
                    Como solución para el procesamiento de Elastómeros, SULPOL presenta la línea
                    ELASTOMACH que es una serie de máquinas de baja presión para
                    elastómero multicomponente (MDI y/o TDI), poliéter o poliéster, con configuraciones
                    flexible y fácil de operar, el equipo cumple con todos los requisitos técnicos
                    necesaria para proporcionar eficiencia productiva y calidad en el producto final.
                    </p>
                <ButtonInteresse link="#forms" onClick={handleForm}/>
                </div>
                </div>
    
    
            
        <div>
            <div className='flex flex-col mt-20 items-center'>
                <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                    <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisión <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                     <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Como todos los equipos fueron diseñados, dimensionados, fabricados y probados por SULPOL, contando con todos los controles de temperatura y presión necesarios para el buen desarrollo del proceso, la dosificación tiene una tolerancia del 1%</p>
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
                <p className='p-5 text-sm sm:text-base font-normal'>Caudales de 7 a 150 L/min </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Disponible en 2, 3 o 4 tanques</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Tanques con capacidad de hasta 1000 litros</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores en el tanque de prepolímero</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Temperaturas de hasta 150 °C</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de reemplazo de vacío</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Hasta 4 componentes adicionales (Pigmentos/Aditivos/Catalizadores)</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Depósito de disolvente</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Cabeza de mezcla dinámica</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Bombas de engranajes de precisión</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Control electrónico de calefacción</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Control electrónico de presión</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Todo controlado por PLC</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Pantalla táctil a color</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Bomba de vacío</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Desgasificación automática</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Configuración para precalentamiento</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gestión de alarmas</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Desbordamiento de programación </p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gestión de alarmas</p>
                </div>
    
    
                <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opciones</h2>
                <div>
                <p className='p-5 font-normal text-sm sm:text-base'>Línea de inyección directa de pigmento</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Línea de inyección directa de aditivos/catalizadores</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Control electrónico digital de inserción de nitrógeno</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques de acero inoxidable</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Velocidad del mezclador ajustable</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de flujo volumétrico</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Más componentes en los cabezales mezcladores.</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores especiales </p>
                <p className='p-5 font-normal text-sm sm:text-base'>Reactores</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de profundidad</p>
                <p className='p-5 font-normal text-sm sm:text-base'>Estaciones de premezcla</p>
                <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de automatización para cabezal mezclador</p>
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
            <Footer />
        <WhatsappButton />
        </motion.div>
      )
  }
}

export default DosadoraElastomero;