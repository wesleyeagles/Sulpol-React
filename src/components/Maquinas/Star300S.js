import React, {useState} from 'react'
import star300SBig from '../../images/star300sBIG.png'
import star300sThumb1 from '../../images/star300sthumb1.png'
import star300sThumb2 from '../../images/star300sthumb2.png'
import star300sThumb3 from '../../images/star300sthumb3.png'

import ButtonInteresse from '../ButtonInteresse/ButtonInteresse'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoArrowSmallDown } from 'react-icons/go'
import FormularioMaquinas from '../FormularioMaquinas/FormularioMaquinas'

function Star300S({toggleMaquinas})  {

  const [precision, setPrecision] = useState(0); 

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
    <div className={`lg:pl-[30%] 2xl:pl-[25%] overflow-y-scroll h-0 fixed w-full transition-all duration-1000 ${toggleMaquinas ? "h-[85vh]" : null}`}>
        <div className='h-[6500px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src={star300SBig} />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>
                <img className='w-[100%] md:w-[25%]' src={star300sThumb3} />
                <img className='w-[100%] md:w-[25%]' src={star300sThumb1} />
                <img className='w-[100%] md:w-[25%]' src={star300sThumb2} />
                </div>
            </div>

            <div className='md:w-[50%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>STAR <span className='text-sulpol-green font-black'>300S</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px]  md:mb-[60px] lg:mb-[25%] 2xl:mb-[34%]'>Dosadora de poliuretano estática, tipo banana, com sistema modular de porta-moldes, sendo cada módulo de 6 estações, podendo somar 36 estações. A Star 300 é um equipamento que oferece precisão na dosagem e flexibilidade no processo. Equipamento com um alto nível de tecnologia e durabilidade , feita para processar poliuretanos poliéter ou poliéster.</p>
               <ButtonInteresse />
            </div>
            </div>


        
    <div>
        <div className='flex flex-col mt-20'>
            <div className='flex flex-col sm:flex-col md:flex-row justify-between'>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] border-b pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openPrecision} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Precisão <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${precision ? "h-32" : null}`}>Como todo o equipamento foi projetado, dimensionado, fabricado e testado por SULPOL, possuindo todos os controles de temperatura e pressão necessários para o bom andamento do processo, a dosagem tem tolerância de 1%</p>
                </div>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
                    <h2 onClick={openTecnology} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Tecnologia <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${tecnology ? "h-32" : null}`}>Por sermos os maiores, trabalhamos com os melhores fornecedores, somando nossa engenharia e experiência, necessidades dos Clientes, sempre estamos fornecendo a melhor tecnologia atualizada.</p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-col md:flex-row justify-between sm:mt-10 md:mt-20'>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] border-b mt-2 pb-2 sm:pb-0 sm:border-none'>
                    <h2 onClick={openFlexibility} className='flex items-center gap-2 text-2xl mb-2'><BsFillCheckCircleFill size={20} color={'#81D742'} className="mr-2"/> Flexibilidade <GoArrowSmallDown className='block sm:hidden ml-auto' size={25} color={'#81D742'} /></h2>
                    <p className={`h-0 sm:h-auto overflow-hidden text-sm ml-9 transition-all ${flexibility ? "h-36" : null}`}>Como fazemos equipamentos para atualidade e futuro, neste equipamento podemos trabalhar as inúmeras aplicações do mercado, dosagem direta ao cabedal, solados, Cunhos e palmilhas, com a opção de fazer mono densidade, bi densidade ou bi componente.</p>
                </div>
                <div className='md:w-[45%] lg:w-[48%] 2xl:w-[45%] border-b mt-2 pb-2 sm:pb-0 sm:border-none sm:mt-10 md:mt-0'>
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

        <div className='mt-36'>

        <FormularioMaquinas />
            
        </div> 


        </div>
        </div>
    </div>
  )
}

export default Star300S;