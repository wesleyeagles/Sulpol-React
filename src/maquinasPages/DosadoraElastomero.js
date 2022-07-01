import React, {useContext, useState} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'

function DosadoraElastomero()  {

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
            <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex flex-col justify-between md:items-center'>
                <img className='w-[100%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' />
                <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px] mt-10  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                <img className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/039/full/Interse%C3%A7%C3%A3o_57.png?1656011877' />
                <img className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/040/full/Interse%C3%A7%C3%A3o_58.png?1656011901' />
                <img className='w-[25%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/914/042/full/Interse%C3%A7%C3%A3o_59.png?1656011919' />
                </div>
            </div>

            <div className='md:w-[45%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ELASTOMACH</h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>SULPOL ELASTOMACH é uma série de máquinas de baixa pressão, com configurações flexíveis e de fácil operação, para dosagem de diferentes tipos de poliuretanos elastoméricos disponíveis no mercado.
A cada ano o número de aplicações com poliuretanos elastoméricos aumentam. Propriedades mecânicas, tais como: dureza, resistência a abrasão e elasticidade, fornecem resultados como poucos materiais. O rígido controle necessário para processamento dessas matérias-primas, são encontrados na série SULPOL® ELASTOMACH. O equipamento cumpre com todos requisitos técnicos necessários para prover eficiência produtiva e qualidade no produto final.</p>
            <ButtonInteresse onClick={handleForm}/>
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
    </motion.div>
  )
}

export default DosadoraElastomero;