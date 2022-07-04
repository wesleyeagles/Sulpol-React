import React, {useContext, useState} from 'react'

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import {motion} from "framer-motion"

function DosadoraBaixapressao()  {

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
            <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[50%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>ST-C</h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Equipamento de baixa pressão, com misturador dinâmico, desenvolvido para trabalhar com Poliuretano, Poliéter ou Poliéster, para a produção de espuma flexível, pele integral, rígida ou semirrígida. Atende as necessidades de diversos setores das indústrias: automobilísticas, refrigeração, moveleira, construção civil, ortopédica, esportiva entre outros.</p>
               <div className='flex w-[100%] md:w-autoflex-row gap-5 mt-10 md:mt-[20px] lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/095/full/Interse%C3%A7%C3%A3o_64.png?1656013300' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/096/full/Interse%C3%A7%C3%A3o_60.png?1656013339' />
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/097/full/Interse%C3%A7%C3%A3o_63.png?1656013375' />
                <img className='w-[100%] md:w-[15%]' src="https://uploaddeimagens.com.br/images/003/924/530/full/Interse%C3%A7%C3%A3o_63.png?1656674656" alt="" />
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
    </motion.div>
  )
}

export default DosadoraBaixapressao;