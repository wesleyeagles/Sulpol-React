import React, {useContext, useState} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'

function Star300SMRP()  {

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
    className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
        <div>
        <div className='container mx-auto pt-10'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[45%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/756/full/STAR_300S-MRP.png?1656006258' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                <img className='w-[100%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/888/full/Interse%C3%A7%C3%A3o_51.png?1656009020' />
                <img className='w-[100%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/890/full/Interse%C3%A7%C3%A3o_52.png?1656009037' />
                <img className='w-[100%] md:w-[25%]' src='https://uploaddeimagens.com.br/images/003/913/892/full/Interse%C3%A7%C3%A3o_53.png?1656009056' />
                </div>
            </div>

            <div className='md:w-[45%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S-MRP</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Dosadora de poliuretano rotativa,  de giro cont??nuo ou stop and go, sistema de dosagem manual ou autom??tico, com porta moldes para p?? ou par por esta????o, de 36 a 60 esta????es. A Star 300-MRP ?? um equipamento que oferece precis??o na dosagem e flexibilidade no processo. Por ser rotativa possui uma produtividade maior.  Equipamento com um alto n??vel de tecnologia e durabilidade , feita para processar poliuretanos poli??ter ou poli??ster.</p>
               <ButtonInteresse onClick={handleForm}/>
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
            <p className='p-5 text-sm sm:text-base font-normal'>Tanques de 250 litros cada, com aquecimento por circula????o ??leo t??rmico.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle autom??tico de temperatura nos tanques e mangueiras program??veis via IHM.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Reabastecimento Autom??tico com controle de n??vel m??nimo e m??ximo, com alarme sonoro e visual.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Controle de press??o digital das linhas de circula????o de materiais, com press??o de seguran??a program??vel  que protege o equipamento em caso de excesso de press??o.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Sele????o autom??tica de cores para cada esta????o.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Possibilidade de aumentar ou diminuir a vaz??o automaticamente em cada esta????o.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Possui sistema autom??tico de identifica????o da esta????o a ser dosada.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>CPU microprocessada com IHM digital.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Totalizador de dosagens.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limitador de dosagens a ser realizadas nas esta????es.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Prote????o na linha de ar comprimido, no caso de queda de press??o.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Limpeza do conjunto misturador ?? feita de forma manual, autom??tica ou de emerg??ncia que ?? acionado na falta de energia el??trica evitando a cataliza????o dos componentes no misturador.</p>
            </div>


            <h2 className='border-b border-gray-400 pb-11 text-3xl font-normal text-[#202124] mt-24'>Opcionais</h2>
            <div>
            <p className='p-5 font-normal text-sm sm:text-base'>Porta moldes de at?? 36 esta????es.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Sistema de troca r??pida de matrizes.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Sistema de abertura e fechamento autom??tico.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Alimenta????o pneum??tica para pin??as.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Aquecimento nos an??is ou tampas de matrizes.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Coloramas de at?? 04 cores.</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Tanques de aquecimento de materiais para 2, 3 ou 4 tambores de mat??ria prima.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Troller</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Agitador de Coluna.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Afund??metro</p>
            <p className='p-5 font-normal text-sm sm:text-base'>Carro para movimenta????o de tambores de material.</p>
            <p className='bg-[#F8F8F8] p-5 font-normal text-sm sm:text-base'>Unidades de refrigera????o</p>
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

export default Star300SMRP;