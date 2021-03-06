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
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>SULPOL ELASTOMACH ?? uma s??rie de m??quinas de baixa press??o, com configura????es flex??veis e de f??cil opera????o, para dosagem de diferentes tipos de poliuretanos elastom??ricos dispon??veis no mercado.
A cada ano o n??mero de aplica????es com poliuretanos elastom??ricos aumentam. Propriedades mec??nicas, tais como: dureza, resist??ncia a abras??o e elasticidade, fornecem resultados como poucos materiais. O r??gido controle necess??rio para processamento dessas mat??rias-primas, s??o encontrados na s??rie SULPOL?? ELASTOMACH. O equipamento cumpre com todos requisitos t??cnicos necess??rios para prover efici??ncia produtiva e qualidade no produto final.</p>
            <ButtonInteresse link="#forms" onClick={handleForm}/>
            </div>
            </div>


        
    <div>
        <div className='flex flex-col mt-20 items-center'>
            <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precis??o <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Como todo o equipamento foi projetado, dimensionado, fabricado e testado por SULPOL, possuindo todos os controles de temperatura e press??o necess??rios para o bom andamento do processo, a dosagem tem toler??ncia de 1%</p>
                </div>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Tecnologia <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Por sermos os maiores, trabalhamos com os melhores fornecedores, somando nossa engenharia e experi??ncia, necessidades dos Clientes, sempre estamos fornecendo a melhor tecnologia atualizada.</p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-col md:flex-row justify-between sm:mt-10 md:mt-20'>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openFlexibility} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Flexibilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${flexibility ? "h-36" : null}`}>Como fazemos equipamentos para atualidade e futuro, neste equipamento podemos trabalhar as in??meras aplica????es do mercado, dosagem direta ao cabedal, solados, Cunhos e palmilhas, com a op????o de fazer mono densidade, bi densidade ou bi componente.</p>
                </div>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openDurability} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Durabilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${durability ? "h-36" : null}`}>Qualquer projeto inicia pela engenharia, passando pelos profissionais e equipamentos de ultima gera????o que possu??mos, conseguimos obter o m??ximo poss??vel de vida ??til no processador e porta moldes.</p>
                </div>
            </div>
        </div>
    </div>

        <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha T??cnica</h2>

            <div>
            <p className='p-5 text-sm sm:text-base font-normal'>Vaz??es de 7 ?? 150 L/min </p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Dispon??vel em 2, 3 ou 4 tanques</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Tanques com capacidade de at?? 1000 litros </p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores no tanque de pr??-pol??mero</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Temperaturas de at?? 150??C</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de reposi????o a v??cuo</p>
            <p className='p-5 font-normal text-sm sm:text-base'>At?? 4 componentes adicionais (Pigmentos/Aditivos/Catalisadores)</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanque de solvente</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Cabe??ote de mistura din??mica</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Bombas de engrenagens de precis??o</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Controle de aquecimento eletr??nico</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle eletr??nico de press??o</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Tudo controlado por CLP</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tela colorida sens??vel ao toque</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Bomba de v??cuo</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Desgaseifica????o autom??tica</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Configura????o para pr??-aquecimento</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gerenciamento de alarme</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Programa????o de derramamento </p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Gerenciamento de alarme </p>
            </div>


            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
            <div>
            <p className='p-5 font-normal text-sm sm:text-base'>Linha de inje????o direta de pigmento</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Linha de inje????o direta de aditivos/catalisadores</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Controle eletr??nico digital da inser????o de nitrog??nio</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tanques de a??o inoxid??vel</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Velocidade do misturador ajust??vel</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Medidor de fluxo volum??trico</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Mais componentes nas cabe??as de mistura.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitadores especiais </p>
            <p className='p-5 font-normal text-sm sm:text-base'>Reatores </p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Afund??metro</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Esta????es de pr??-mistura</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de automa????o para cabe??a de mistura</p>
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