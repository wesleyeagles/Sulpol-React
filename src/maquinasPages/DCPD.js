import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'

function DCPD()  {

  const [precision, setPrecision] = useState(0); 

  const { menuProdutos, forms } = useContext(ContextProdutos)
  

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
                <img className='w-[75%] md:w-[80%]' src='https://uploaddeimagens.com.br/images/003/924/542/full/Ativo_1.png?1656676377' alt=''/>
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[50%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>DCPD <span className='text-sulpol-green font-black'>LÓGICA AP</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipamento ecologicamente correto, visando à 
proteção do meio ambiente. Desenvolvido para trabalhar com Poliuretano, Poliéter, para a produção 
de espuma flexível, pele integral, rígida ou semirrígida. Atende as necessidades de diversos setores 
das indústrias: automobilísticas, refrigeração, moveleira, ortopédica, esportiva entre outros.</p>
               <div className='flex w-[100%] md:w-auto flex-row gap-5 mt-10 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
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
    </motion.div>
  )
}

export default DCPD;