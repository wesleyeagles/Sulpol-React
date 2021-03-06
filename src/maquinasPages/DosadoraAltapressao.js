import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'

function DosadoraAltapressao()  {

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
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
    <div className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[20%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/816/full/ECOLOGICA-AP-100-A_sem_piso.png?1656007765' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[50%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ECOL??GICA <span className='text-sulpol-green font-black'>AP</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A S??rie Ecol??gica AP configura uma linha de equipamentos para mistura de poliuretano em alta press??o. S??o equipadas com cabe??ote auto-limpante, livre do uso de solventes. Precisas, confi??veis e de f??cil opera????o, descrevem bem as principais caracter??sticas t??cnicas deste produto. Possui diversas configura????es, se adaptando aos requisitos t??cnicos e econ??micos de cada cliente.</p>
               <div className='flex w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3%A3o_64.png?1656013300' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3%A3o_60.png?1656013339' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3%A3o_63.png?1656013375' />
                <img className='w-[100%] md:w-[15%]' src="https://uploaddeimagens.com.br/images/003/924/525/full/Interse%C3%A7%C3%A3o_63.png?1656674167" alt="" />
                </div>
                <ButtonInteresse link="#forms" onClick={handleForm}/>
            </div>
            </div>


        
    <div>
        <div className='flex flex-col mt-20 items-center'>
            <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Limpeza sem solventes <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Cabe??ote auto limpante, desenvolvido e fabricado por SULPOL com movimentos hidr??ulicos que dispensa o uso de solventes para a limpeza.</p>
                </div>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] lg:h-[190px] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Sistem de recircula????o <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Sistema de recircula????o constante dos materiais, garantindo uma perfeita homogeneiza????o.</p>
                </div>
            </div>
        </div>
    </div>

        <div className='mt-36'>
            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124]'>Ficha T??cnica</h2>

            <div>
            <p className='p-5 text-sm sm:text-base font-normal'>Tanques encamisados com capacidade de at?? 250 litros</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Agitador de baixa rota????o nos tanques</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Controle autom??tico de temperatura</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Reabastecimento autom??tico atrav??s de bombas pneum??ticas.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Bombas rotativas de pist??es axiais de alta precis??o com controle independente de vaz??o.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras especiais para trabalhar com diversos agentes expansores.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Trocador de calor na linha de retorno dos materiais.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Cabe??ote auto limpante tipo ???L???, dispensando o uso de solventes.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Bot??es de acionamento, estrategicamente posicionados, que permitem a opera????o sem tirar a m??o do punho de movimenta????o do cabe??ote.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CLP microprocessado com IHM digital touch screen.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Possibilidade de programa????o de at?? 40 tempos de dosagem.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Tempos necess??rios para o processo, program??veis.</p>

            <p className='p-5 font-normal text-sm sm:text-base'>Controle autom??tico de temperatura</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Unidade hidr??ulica completa, com v??lvulas de regulagem de press??o e direcional, visor de n??vel, trocador de calor e acumulador capaz de fechar o cabe??ote em uma poss??vel falta de energia.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Arm??rio el??trico categoria IP 54, com veda????o e fechos de seguran??a, completo e fixado na estrutura do equipamento.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Mangueiras especiais para trabalhar com diversos agentes expansores.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Vaz??es dispon??veis: 7, 15, 30, 40, 60, 100, 150 e 200 Kg/ minuto.</p>
            </div>


            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
            <div>
            <p className='p-5 font-normal text-sm sm:text-base'>Medidor de vaz??o.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Acoplamento magn??tico.</p>
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
    </motion.div>
  )
}

export default DosadoraAltapressao;