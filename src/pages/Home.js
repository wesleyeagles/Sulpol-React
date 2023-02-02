import React, { useContext, useRef, useState } from 'react'
import {motion} from "framer-motion"
import Slider from '../components/Slider/Slider'
import ImgTecnologia from '../images/quem-somos.png'

import {ReactComponent as Element } from '../images/Element.svg'
import {ReactComponent as Octagone } from '../images/Octagone.svg'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import Equipamentos from '../components/Equipamentos/Equipamentos'

import {ReactComponent as PrevArrow} from '../images/prevArrow.svg'
import {ReactComponent as NextArrow} from '../images/nextArrow.svg'
import FAQ from '../components/FAQ'

import ContextProdutos from '../contexts/ContextProdutos'

import BasicModal from '../components/BasicModal'
import BasicModal2 from '../components/BasicModal2'
import BasicModal3 from '../components/BasicModal3'
import BasicModal4 from '../components/BasicModal4'
import BasicModal5 from '../components/BasicModal5'
import BasicModal6 from '../components/BasicModal6'


import { IoIosConstruct } from 'react-icons/io'
import { SiPolymerproject } from 'react-icons/si'
import { GiSlippers, GiGloves, GiFoamyDisc, GiElectric, GiSofa, GiRunningShoe } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import { ThermometerSimple } from 'phosphor-react'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { HashLink } from 'react-router-hash-link'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import Context from '../contexts/MainContext'







function Home() {

    const mobile = window.matchMedia("(max-width: 428px)")

    const [serviceMenu1, setServiceMenu1] = useState(false)
    const [serviceMenu2] = useState(false)
    const [serviceMenu3] = useState(false)
    const [serviceMenu4] = useState(false)
    const [serviceMenu5] = useState(false)
    const [serviceMenu6] = useState(false)

    const [useTenReasons, setUseTenReasons] = useState(0)

    const toggleTenReasons = () => {
      setUseTenReasons(!useTenReasons)
    }

    const { isPortuguese, isEnglish, isSpanish, handleOpen } = useContext(Context)
    



  const carouselx = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        if (mobile.matches) {
          carouselx.current.scrollLeft -= 354;

        } else {

          carouselx.current.scrollLeft -= 736;
          console.log("Teste")
        }
        

       
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
        if (mobile.matches) {
          carouselx.current.scrollLeft += 354;
        } else {
          carouselx.current.scrollLeft += 736;
          console.log("Teste")
        }
       

        
      };

  
  if (isPortuguese) {
    return (

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
      <TopNavBar />
      <Navbar />
      <div id='bg-hero'>
        <Slider></Slider>
  
        <section className="pt-40 pb-40">
          <div className="container mx-auto">
            <div className="lg:flex justify-between">
              <div className="lg:w-[40%]">
                <small className="text-sulpol-green text-base font-medium">
                  QUEM SOMOS
                </small>
                <h2 className="text-[#202124] text-4xl font-medium w-[100%] leading-tight">
                  Somos tecnologia em constante movimento
                </h2>
                <img className="mt-16" src={ImgTecnologia} alt=''/>
              </div>
  
              <div className="lg:w-[50%] mt-10 lg:mt-0">
                <Element className="mb-7" />
                <p className="text-lg font-medium">
                  Fundada em 1989, hoje somos líder no mercado brasileiro e latino
                  americano no desenvolvimento e fabricação de dosadoras e
                  injetoras de PU.
                </p>
                <h2 className="border-t border-gray-300 pt-7 mt-10 mb-10 text-2xl font-medium">
                  Projetos personalizados
                </h2>
                <p className="text-base font-light">
                  Temos capacidade tecnológica e fabril para desenvolver, fabricar
                  e entregar projetos especiais dos mais diversos portes.
                </p>
                <div className="lg:flex gap-20 mt-12 mb-12">
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Pequeno porte
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Médio porte
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Grande porte
                  </span>
                </div>
                <p className="text-basefont-light">
                  Oferecemos aos mais diversos setores da indústria os melhores
                  equipamentos com alta tecnologia, desempenho, qualidade,
                  eficiência e produtividade.
                </p>
                <h2 className="pt-8 mt-10 border-t border-gray-300 mb-8 text-2xl font-medium">
                  Tecnologia sulpol
                </h2>
                <p className="mb-16 text-base font-light">
                  Temos tecnologia própria na fabricação dos nossos equipamentos,
                  oferecendo soluções tecnológicas personalizadas para a
                  necessidade de cada cliente.
                </p>
                <ButtonPrimary link="/A-Sulpol#header" text="Ver história completa" />
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <Equipamentos className="pt-10 pb-10" />
        </section>
  
        <div className="py-36" id='services'>
          <div className="container mx-auto">
            <div className="flex flex-col justify-start mb-50">
              <span className="text-base text-[#81D742] font-medium">
                SERVIÇOS
              </span>
              <h2 className="text-4xl">Serviços que oferecemos</h2>
            </div>
            <div ref={carouselx} className="carouselE flex overflow-x-auto gap-9 scroll-smooth">
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/910/072/full/Grupo_111.png?1655812767' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu1? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Projetos especiais</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Com mais de 30 anos de atuação no mercado mundial do Poliuretano, a SULPOL já desenvolveu vários projetos para as diversas áreas que utilizam Poliuretano.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/591/full/IMG_4899_edited.png?1656332875' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu2? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Garantia</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Não se preocupe, com a SULPOL você tem garantia nos seus produtos​ e serviços</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/594/full/IMG_4944_edited.png?1656333050' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu3? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Treinamentos</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Capacitação técnica para melhor operação e durabilidade dos equipamentos.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/597/full/IMG_4862_edited.png?1656333138' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu4? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Assistência Técnica</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Equipe qualificada e atendimento ágil na solução de problemas​.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/605/full/IMG_4913_edited.png?1656333275' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu5? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Peças de Reposição</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Utilize peças originais SULPOL e prolongue a vida útil do seu equipamento​.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://static.wixstatic.com/media/0c951b_9d3c432d304048a8b897d497ea5da1e5~mv2.jpg/v1/fill/w_485,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4991%2520(1)_edited.jpg' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu6? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Upgrades e Retrofits</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>É possível prolongar a vida útil e atualizar equipamentos. </p>
                </div>
              </div>
            </div>
  
  
  
            <div className='flex justify-end items-center mt-7 lg:mt-70'>
            <div className='flex gap-2 lg:gap-4'>
              <PrevArrow className='cursor-pointer' onClick={handleLeftClick}/>
              <NextArrow className='cursor-pointer' onClick={handleRightClick}/>
            </div>
            </div>
          </div>
        </div>
  
        <div className='py-36' id='aplicacoes'>
          <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='w-full md:w-[45%]'>
              <span className='text-base text-[#81D742] font-medium'>APLICAÇÕES</span>
              <h2 className="text-4xl leading-tight mb-[40px]">Excelência que se destaca pelo mundo</h2>
              <img src='https://uploaddeimagens.com.br/images/003/910/159/full/Interse%C3%A7%C3%A3o_5.png?1655816485' alt='' />
              </div>
  
              <div className='w-full md:w-[50%] mt-8 lg:mt-0'>
              <div className="flex flex-wrap justify-between lg:gap-8">
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Construção civíl</h3>
                  <IoIosConstruct size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Automotiva</h3>
                  <AiFillCar size={40} color="#81D742"/>
                  
                </div>
  
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/cal%C3%A7ado#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Calçados</h3>
                  <GiSlippers size={40} color="#81D742"/>
                  </HashLink>
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>EPIS</h3>
                  <GiGloves size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Espumas</h3>
                  <GiFoamyDisc size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/filtros#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Filtros</h3>
                  <FiFilter size={40} color="#81D742"/>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Isolamento Térmico</h3>
                  <ThermometerSimple size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Materiais elétricos</h3>
                  <GiElectric size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Médico ortopédico</h3>
                  <GiRunningShoe size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Móveis</h3>
                  <GiSofa size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/refrigera%C3%A7%C3%A3o' smooth>
                  <h3 className='text-center h-20 flex items-end pb-3'>Refrigeração</h3>
                  <div className='flex justify-center'>
                  <CgSmartHomeRefrigerator size={40} color="#81D742" weight="duotone" />
                  </div>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Elastômeros</h3>
                  <SiPolymerproject size={40} color="#81D742" weight="duotone" />
                  
                </div>
              </div>
              </div>
            </div>
          </div>
  
        </div>
  
        <div className='py-36 bg-[#F8F8F8]' id='reasons'>
        <div className='container mx-auto'>
        <h2 className='text-4xl leading-tight lg:w-[45%]'>Separamos <span className='text-[#81D742] font-bold'>10 razões</span> para você escolher a SULPOL</h2>
        <div className='flex flex-wrap mt-100'>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Qualidade</h3></div>
        <p>Os produtos da SULPOL são desenvolvidos por uma equipe de engenheiros e produzidos com materiais de alta qualidade, sofrendo diversos testes antes da entrega final ser feita, garantindo assim um alto nível de excelência.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Equipe qualificada</h3></div>
        <p>A SULPOL conta com uma equipe altamente qualificada e com experiência de mercado, para oferecer ao mercado soluções tecnológicas em constante movimento, equipamentos de ponta e ótimo atendimento aos clientes e parceiros.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Inovação</h3></div>
        <p>A SULPOL está sempre em busca da inovação e aperfeiçoamento para seus produtos e necessidades do mercado, oferecendo soluções tecnológicas e de qualidade em forma de equipamentos e periféricos.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-gray-300 border-b lg:border-b-0 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Agilidade</h3></div>
        <p>A SULPOL preza pela eficácia e eficiência ao prestar um atendimento ágil, pois considera que este é um fator determinante para a rentabilidade do seu negócio.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] border-b lg:border-b-0 lg:border-r border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/034f1101df242d30300de997398a0360/raw/1613da279ec7eea542d33ca5df364b424fd3492d/tecnologia.svg' alt='' /><h3 className='text-xl font-medium'>Tecnologia</h3></div>
        <p>Sempre visando alta produtividade, qualidade e menor custo de manutenção para os clientes, a SULPOL utiliza e entrega equipamentos de tecnologias de ponta.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/848cb4f3af0e3fe7e46c55b16a4b84f7/raw/6c3acb18fe16c8bd94567172aeb4bd323d610610/produtividade.svg' alt='' /><h3 className='text-xl font-medium'>Produtividade</h3></div>
        <p>A SULPOL desenvolve e fabrica equipamentos altamente produtivos e estáveis, com elevada capacidade e resistência.</p>
        </div>
      
        </div>
  
        <div className={`flex flex-wrap mb-50 overflow-hidden duration-1000 ${useTenReasons? 'max-h-800' : 'max-h-0'}`}>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-b border-t pt-[40px] pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Parque Fabril</h3></div>
        <p>Nossa estrutura possibilita a produção e desenvolvimento de equipamentos com o máximo de precisão, bem como a construção de projetos otimizados para cada cliente, aliando capacidade fabril, tecnologia e equipe qualificada.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Tempo de Mercado</h3></div>
        <p>Somos a empresa líder na fabricação de equipamento para poliuretano na América Latina, com uma rica história envolvendo tecnologia, inovação e conhecimento ao longo dos nossos  mais de 30 anos, construímos um histórico de parcerias sólidas dentro do mercado, tornando-se sucesso e referência em diversos países.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Comprometindo</h3></div>
        <p>Trabalhamos incansavelmente  para que nossos clientes alcancem um alto nível de realização e sucesso, o nosso comprometimento é para que quando os clientes adquiram um dos nossos equipamentos também possam usufruir de uma equipe dedicada a realização do seu projeto do início ao fim.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-gray-300 border-t lg:border-b-0 pb-[40px] pt-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Solidez</h3></div>
        <p>Com mais de 30 anos de mercado, construímos uma marca sólida e robusta, que é uma autoridade  no mercado de dosadoras de PU, equipamentos e periféricos para produção em poliuretano.</p>
        </div>
      
        </div>
  
        <span className='ButtonPrimary cursor-pointer' onClick={toggleTenReasons}>Ver as 10 razões</span>
        </div>
        </div>
  
        <div className='lg:py-20'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center gap-4 lg:w-[65%] xl:w-[60%]'>
              <img src='https://gistcdn.githack.com/wesleyeagles/388fcbf87e2b8b2820b7dea80297c176/raw/8185f72379ef809d156fee7cfc7e5ea868ed7680/mail.svg' alt=''/>
              <h2 className='mt-2 text-base lg:text-2xl'>Deixe seu e-mail para receber novidades</h2>
            </div>
  
            <div className='lg:w-[45%] xl:w-[60%] mt-10 lg:mt-0'>
              <form className='flex items-center gap-8'>
                <input className='block border-b border-[#81D742] w-[100%] pb-[5px] outline-none' placeholder='email@exemplo.com.br' type='text'/>
                <button className='bg-[#81D742] text-white py-3 px-8 font-bold rounded-lg text-base' type='submit'>CADASTRAR</button>
              </form>
            </div>
          </div>
        </div>
        </div>
  
        <div className='py-36'>
        <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-[40%] xl:w-[35%]'>
        <form className='w-full form-shadow bg-white px-50 rounded-lg py-16'>
          <h2 className='text-xl font-medium mb-[40px]'>Preencha o <span className='text-[#81D742] font-bold'>formulário abaixo</span> e nossa equipe retornará o seu contato</h2>
          <div className='flex flex-col gap-4 items-end'>
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Nome' type='text' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Telefone' type='tel' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='E-mail' type='email' />
            <textarea  className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md h-100' placeholder='Mensagem' />
            <button className='bg-[#81D742] text-white py-3 px-8 font-bold text-base rounded-lg '>ENVIAR</button>
          </div>
        </form>
        </div>
  
        <div className='w-full lg:w-[55%] mt-20 lg:mt-0'>
        <FAQ text="Dúvidas frequentes" fontSize="text-4xl"/>
        </div>
        </div>
        </div>
        </div>
        
              <BasicModal />
              <BasicModal2 />
              <BasicModal3 />
              <BasicModal4 />
              <BasicModal5 />
              <BasicModal6 />
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  } else if (isEnglish) {
    return (

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
      <TopNavBar />
      <Navbar />
      <div id='bg-hero'>
        <Slider></Slider>
  
        <section className="pt-40 pb-40">
          <div className="container mx-auto">
            <div className="lg:flex justify-between">
              <div className="lg:w-[40%]">
                <small className="text-sulpol-green text-base font-medium">
                  WHO WE ARE
                </small>
                <h2 className="text-[#202124] text-4xl font-medium w-[100%] leading-tight">
                We are technology in constant motion
                </h2>
                <img className="mt-16" src={ImgTecnologia} alt=''/>
              </div>
  
              <div className="lg:w-[50%] mt-10 lg:mt-0">
                <Element className="mb-7" />
                <p className="text-lg font-medium">
                Founded in 1989, today we are leader in the Brazilian and Latin American market in the development and manufacture of PU dosing and injection machines.
                </p>
                <h2 className="border-t border-gray-300 pt-7 mt-10 mb-10 text-2xl font-medium">
                  Custom projects
                </h2>
                <p className="text-base font-light">
                We have the technological and manufacturing capacity to develop, manufacture and deliver special projects of the most diverse sizes.
                </p>
                <div className="lg:flex gap-20 mt-12 mb-12">
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Small size
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Mid Size
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Large Size
                  </span>
                </div>
                <p className="text-basefont-light">
                We offer the most diverse sectors of industry the best equipment with high technology, performance, quality, efficiency and productivity.
                </p>
                <h2 className="pt-8 mt-10 border-t border-gray-300 mb-8 text-2xl font-medium">
                  Sulpol technology
                </h2>
                <p className="mb-16 text-base font-light">
                We have our own technology in the manufacture of our equipment, offering customized technological solutions for the needs of each client.
                </p>
                <ButtonPrimary link="/A-Sulpol#header" text="See full story" />
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <Equipamentos className="pt-10 pb-10" />
        </section>
  
        <div className="py-36" id='services'>
          <div className="container mx-auto">
            <div className="flex flex-col justify-start mb-50">
              <span className="text-base text-[#81D742] font-medium">
                SERVICES
              </span>
              <h2 className="text-4xl">Services we offer</h2>
            </div>
            <div ref={carouselx} className="carouselE flex overflow-x-auto gap-9 scroll-smooth">
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/910/072/full/Grupo_111.png?1655812767' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu1? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Special Projects</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>With more than 30 years of experience in the polyurethane world market, SULPOL has already developed several projects for the different areas that use polyurethane.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/591/full/IMG_4899_edited.png?1656332875' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu2? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Guarantee</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Don't worry, with SULPOL you have a guarantee on your products and services</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/594/full/IMG_4944_edited.png?1656333050' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu3? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Trainings</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Technical training for better operation and durability of equipment.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/597/full/IMG_4862_edited.png?1656333138' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu4? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Technical Assistance</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Qualified team and quick service in solving problems.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/605/full/IMG_4913_edited.png?1656333275' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu5? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Spare Parts</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Use original SULPOL parts and extend the useful life of your equipment​.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://static.wixstatic.com/media/0c951b_9d3c432d304048a8b897d497ea5da1e5~mv2.jpg/v1/fill/w_485,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4991%2520(1)_edited.jpg' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu6? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Upgrades and Retrofits</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>It is possible to extend the service life and upgrade equipment. </p>
                </div>
              </div>
            </div>
  
  
  
            <div className='flex justify-end items-center mt-7 lg:mt-70'>
            <div className='flex gap-2 lg:gap-4'>
              <PrevArrow className='cursor-pointer' onClick={handleLeftClick}/>
              <NextArrow className='cursor-pointer' onClick={handleRightClick}/>
            </div>
            </div>
          </div>
        </div>
  
        <div className='py-36' id='aplicacoes'>
          <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='w-full md:w-[45%]'>
              <span className='text-base text-[#81D742] font-medium'>APLICATIONS</span>
              <h2 className="text-4xl leading-tight mb-[40px]">Excellence that stands out around the world</h2>
              <img src='https://uploaddeimagens.com.br/images/003/910/159/full/Interse%C3%A7%C3%A3o_5.png?1655816485' alt='' />
              </div>
  
              <div className='w-full md:w-[50%] mt-8 lg:mt-0'>
              <div className="flex flex-wrap justify-between lg:gap-8">
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Construction</h3>
                  <IoIosConstruct size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Automotive</h3>
                  <AiFillCar size={40} color="#81D742"/>
                  
                </div>
  
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/cal%C3%A7ado#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Shoes</h3>
                  <GiSlippers size={40} color="#81D742"/>
                  </HashLink>
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>PPE</h3>
                  <GiGloves size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Foams</h3>
                  <GiFoamyDisc size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/filtros#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Filters</h3>
                  <FiFilter size={40} color="#81D742"/>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Thermal insulation</h3>
                  <ThermometerSimple size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Electric materials</h3>
                  <GiElectric size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Orthopedic Doctor</h3>
                  <GiRunningShoe size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Furniture</h3>
                  <GiSofa size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/refrigera%C3%A7%C3%A3o' smooth>
                  <h3 className='text-center h-20 flex items-end pb-3'>Refrigeration</h3>
                  <div className='flex justify-center'>
                  <CgSmartHomeRefrigerator size={40} color="#81D742" weight="duotone" />
                  </div>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Elastomers</h3>
                  <SiPolymerproject size={40} color="#81D742" weight="duotone" />
                  
                </div>
              </div>
              </div>
            </div>
          </div>
  
        </div>
  
        <div className='py-36 bg-[#F8F8F8]' id='reasons'>
        <div className='container mx-auto'>
        <h2 className='text-4xl leading-tight lg:w-[45%]'>We separate <span className='text-[#81D742] font-bold'>10 reasons</span> for you to choose SULPOL</h2>
        <div className='flex flex-wrap mt-100'>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Quality</h3></div>
        <p>SULPOL's products are developed by a team of engineers and produced with high quality materials, undergoing several tests before the final delivery is made, thus guaranteeing a high level of excellence.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Qualified team</h3></div>
        <p>SULPOL has a highly qualified team with market experience to offer the market technological solutions in constant motion, state-of-the-art equipment and excellent service to customers and partners.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Inovation</h3></div>
        <p>SULPOL is always looking for innovation and improvement for its products and market needs, offering technological and quality solutions in the form of equipment and peripherals.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-gray-300 border-b lg:border-b-0 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Agility</h3></div>
        <p>SULPOL values ​​effectiveness and efficiency when providing a quick service, as it considers this to be a determining factor for the profitability of its business.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] border-b lg:border-b-0 lg:border-r border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/034f1101df242d30300de997398a0360/raw/1613da279ec7eea542d33ca5df364b424fd3492d/tecnologia.svg' alt='' /><h3 className='text-xl font-medium'>Technology</h3></div>
        <p>Always aiming at high productivity, quality and lower maintenance costs for customers, SULPOL uses and delivers state-of-the-art equipment.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/848cb4f3af0e3fe7e46c55b16a4b84f7/raw/6c3acb18fe16c8bd94567172aeb4bd323d610610/produtividade.svg' alt='' /><h3 className='text-xl font-medium'>Productivity</h3></div>
        <p>SULPOL develops and manufactures highly productive and stable equipment, with high capacity and resistance.</p>
        </div>
      
        </div>
  
        <div className={`flex flex-wrap mb-50 overflow-hidden duration-1000 ${useTenReasons? 'max-h-800' : 'max-h-0'}`}>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-b border-t pt-[40px] pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Industrial Park</h3></div>
        <p>Our structure enables the production and development of equipment with maximum precision, as well as the construction of optimized projects for each client, combining manufacturing capacity, technology and qualified staff.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Market Time</h3></div>
        <p>We are the leading company in the manufacture of polyurethane equipment in Latin America, with a rich history involving technology, innovation and knowledge over our more than 30 years, we have built a history of solid partnerships within the market, becoming a success and reference in several countries.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Compromising</h3></div>
        <p>We work tirelessly for our customers to reach a high level of achievement and success, our commitment is that when customers acquire one of our equipment they can also enjoy a dedicated team to carry out their project from start to finish.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-gray-300 border-t lg:border-b-0 pb-[40px] pt-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Solidity</h3></div>
        <p>With more than 30 years in the market, we have built a solid and robust brand, which is an authority in the market for PU dispensers, equipment and peripherals for polyurethane production.</p>
        </div>
      
        </div>
  
        <span className='ButtonPrimary cursor-pointer' onClick={toggleTenReasons}>See the 10 reasons</span>
        </div>
        </div>
  
        <div className='lg:py-20'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center gap-4 lg:w-[65%] xl:w-[60%]'>
              <img src='https://gistcdn.githack.com/wesleyeagles/388fcbf87e2b8b2820b7dea80297c176/raw/8185f72379ef809d156fee7cfc7e5ea868ed7680/mail.svg' alt=''/>
              <h2 className='mt-2 text-base lg:text-2xl'>Leave your email to receive news</h2>
            </div>
  
            <div className='lg:w-[45%] xl:w-[60%] mt-10 lg:mt-0'>
              <form className='flex items-center gap-8'>
                <input className='block border-b border-[#81D742] w-[100%] pb-[5px] outline-none' placeholder='mail@example.com' type='text'/>
                <button className='bg-[#81D742] text-white py-3 px-8 font-bold rounded-lg text-base' type='submit'>REGISTER</button>
              </form>
            </div>
          </div>
        </div>
        </div>
  
        <div className='py-36'>
        <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-[40%] xl:w-[35%]'>
        <form className='w-full form-shadow bg-white px-50 rounded-lg py-16'>
          <h2 className='text-xl font-medium mb-[40px]'>Fill out <span className='text-[#81D742] font-bold'>the form below</span> and our team will get back to you.</h2>
          <div className='flex flex-col gap-4 items-end'>
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Name' type='text' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Phone' type='tel' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Mail' type='email' />
            <textarea  className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md h-100' placeholder='Message' />
            <button className='bg-[#81D742] text-white py-3 px-8 font-bold text-base rounded-lg '>SEND</button>
          </div>
        </form>
        </div>
  
        <div className='w-full lg:w-[55%] mt-20 lg:mt-0'>
        <FAQ text="Frequently Asked Questions" fontSize="text-4xl"/>
        </div>
        </div>
        </div>
        </div>
        
              <BasicModal />
              <BasicModal2 />
              <BasicModal3 />
              <BasicModal4 />
              <BasicModal5 />
              <BasicModal6 />
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  } else if (isSpanish) {
    return (

      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
      <TopNavBar />
      <Navbar />
      <div id='bg-hero'>
        <Slider></Slider>
  
        <section className="pt-40 pb-40">
          <div className="container mx-auto">
            <div className="lg:flex justify-between">
              <div className="lg:w-[40%]">
                <small className="text-sulpol-green text-base font-medium">
                  QUIENES SOMOS
                </small>
                <h2 className="text-[#202124] text-4xl font-medium w-[100%] leading-tight">
                Somos tecnología en constante movimiento
                </h2>
                <img className="mt-16" src={ImgTecnologia} alt=''/>
              </div>
  
              <div className="lg:w-[50%] mt-10 lg:mt-0">
                <Element className="mb-7" />
                <p className="text-lg font-medium">
                  Fundada en 1989, hoy somos líderes en el mercado brasileño y latino
                  americana en el desarrollo y fabricación de dosificadores y
                  inyectores de PU.
                </p>
                <h2 className="border-t border-gray-300 pt-7 mt-10 mb-10 text-2xl font-medium">
                Diseños personalizados
                </h2>
                <p className="text-base font-light">
                Tenemos capacidad tecnológica y de fabricación para desarrollar, fabricar
                  y entregar proyectos especiales de los más diversos tamaños.
                </p>
                <div className="lg:flex gap-20 mt-12 mb-12">
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Talla pequeña
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Tamaño medio
                  </span>
                  <span className="flex gap-2 items-center text-base font-light">
                    <Octagone /> Gran porte
                  </span>
                </div>
                <p className="text-basefont-light">
                Ofrecemos a los más diversos sectores de la industria los mejores
                  equipos con alta tecnología, rendimiento, calidad,
                  eficiencia y productividad.
                </p>
                <h2 className="pt-8 mt-10 border-t border-gray-300 mb-8 text-2xl font-medium">
                Tecnología Sulpol
                </h2>
                <p className="mb-16 text-base font-light">
                  Disponemos de tecnología propia en la fabricación de nuestros equipos,
                  ofreciendo soluciones tecnológicas a medida para la
                  la necesidad de cada cliente.
                </p>
                <ButtonPrimary link="/A-Sulpol#header" text="Ver historia completa" />
              </div>
            </div>
          </div>
        </section>
  
        <section>
          <Equipamentos className="pt-10 pb-10" />
        </section>
  
        <div className="py-36" id='services'>
          <div className="container mx-auto">
            <div className="flex flex-col justify-start mb-50">
              <span className="text-base text-[#81D742] font-medium">
                SERVIÇOS
              </span>
              <h2 className="text-4xl">Servicios que ofrecemos</h2>
            </div>
            <div ref={carouselx} className="carouselE flex overflow-x-auto gap-9 scroll-smooth">
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/910/072/full/Grupo_111.png?1655812767' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu1? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Proyectos especiales</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Con más de 30 años de experiencia en el mercado mundial del poliuretano, SULPOL ya ha desarrollado varios proyectos para las diferentes áreas que utilizan poliuretano.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/591/full/IMG_4899_edited.png?1656332875' alt='' />
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu2? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Garantizar</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>No te preocupes, con SULPOL tienes garantía en tus productos y servicios</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/594/full/IMG_4944_edited.png?1656333050' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu3? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Entrenamientos</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Capacitación técnica para un mejor funcionamiento y durabilidad de los equipos.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/597/full/IMG_4862_edited.png?1656333138' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu4? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Asistencia técnica</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Equipo cualificado y rapidez en la resolución de problemas.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/605/full/IMG_4913_edited.png?1656333275' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu5? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Piezas de repuesto</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Utilice repuestos originales SULPOL y prolongue la vida útil de sus equipos​.</p>
                </div>
              </div>
  
              <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
                <img className='absolute -z-10 w-full h-full' src='https://static.wixstatic.com/media/0c951b_9d3c432d304048a8b897d497ea5da1e5~mv2.jpg/v1/fill/w_485,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4991%2520(1)_edited.jpg' alt='' />
  
                <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu6? 'h-0' : 'h-full pb-50'}`}>
                  <h3 className='text-xl text-white font-medium'>Actualizaciones y Modificaciones</h3>
                  <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Es posible extender la vida útil y actualizar el equipo. </p>
                </div>
              </div>
            </div>
  
  
  
            <div className='flex justify-end items-center mt-7 lg:mt-70'>
            <div className='flex gap-2 lg:gap-4'>
              <PrevArrow className='cursor-pointer' onClick={handleLeftClick}/>
              <NextArrow className='cursor-pointer' onClick={handleRightClick}/>
            </div>
            </div>
          </div>
        </div>
  
        <div className='py-36' id='aplicacoes'>
          <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='w-full md:w-[45%]'>
              <span className='text-base text-[#81D742] font-medium'>APLICACIONES</span>
              <h2 className="text-4xl leading-tight mb-[40px]">Excelencia que destaca en todo el mundo</h2>
              <img src='https://uploaddeimagens.com.br/images/003/910/159/full/Interse%C3%A7%C3%A3o_5.png?1655816485' alt='' />
              </div>
  
              <div className='w-full md:w-[50%] mt-8 lg:mt-0'>
              <div className="flex flex-wrap justify-between lg:gap-8">
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Construcción civil</h3>
                  <IoIosConstruct size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Automotor</h3>
                  <AiFillCar size={40} color="#81D742"/>
                  
                </div>
  
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/cal%C3%A7ado#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Zapatos</h3>
                  <GiSlippers size={40} color="#81D742"/>
                  </HashLink>
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>EPIS</h3>
                  <GiGloves size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Espumas</h3>
                  <GiFoamyDisc size={40} color="#81D742"/>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/filtros#header'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Filtros</h3>
                  <FiFilter size={40} color="#81D742"/>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Aislamiento térmico</h3>
                  <ThermometerSimple size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Materiales eléctricos</h3>
                  <GiElectric size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Medico ortopedista</h3>
                  <GiRunningShoe size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Mueble</h3>
                  <GiSofa size={40} color="#81D742" weight="duotone" />
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <HashLink to='/refrigera%C3%A7%C3%A3o' smooth>
                  <h3 className='text-center h-20 flex items-end pb-3'>Refrigeración</h3>
                  <div className='flex justify-center'>
                  <CgSmartHomeRefrigerator size={40} color="#81D742" weight="duotone" />
                  </div>
                  </HashLink>
                  
                </div>
  
                <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                  <h3 className='text-center h-20 flex items-end pb-3'>Elastómeros</h3>
                  <SiPolymerproject size={40} color="#81D742" weight="duotone" />
                  
                </div>
              </div>
              </div>
            </div>
          </div>
  
        </div>
  
        <div className='py-36 bg-[#F8F8F8]' id='reasons'>
        <div className='container mx-auto'>
        <h2 className='text-4xl leading-tight lg:w-[45%]'>Nos separamos <span className='text-[#81D742] font-bold'>10 razones</span> para que elijas SULPOL</h2>
        <div className='flex flex-wrap mt-100'>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Qualidade</h3></div>
        <p>Los productos de SULPOL son desarrollados por un equipo de ingenieros y producidos con materiales de alta calidad, pasando por varias pruebas antes de realizar la entrega final, garantizando así un alto nivel de excelencia.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Equipe qualificada</h3></div>
        <p>SULPOL cuenta con un equipo altamente calificado y con experiencia en el mercado para ofrecer al mercado soluciones tecnológicas en constante movimiento, equipos de última generación y excelente servicio a clientes y socios.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-b pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Inovação</h3></div>
        <p>SULPOL está siempre en la búsqueda de la innovación y mejora de sus productos y necesidades del mercado, ofreciendo soluciones tecnológicas y de calidad en forma de equipos y periféricos.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:border-r border-gray-300 border-b lg:border-b-0 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Agilidade</h3></div>
        <p>A SULPOL preza pela eficácia e eficiência ao prestar um atendimento ágil, pois considera que este é um fator determinante para a rentabilidade do seu negócio.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] border-b lg:border-b-0 lg:border-r border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/034f1101df242d30300de997398a0360/raw/1613da279ec7eea542d33ca5df364b424fd3492d/tecnologia.svg' alt='' /><h3 className='text-xl font-medium'>Tecnologia</h3></div>
        <p>SULPOL valora la eficacia y la eficiencia a la hora de prestar un servicio rápido, ya que considera que este es un factor determinante para la rentabilidad de su negocio.</p>
        </div>
  
        <div className='lg:w-[33%] pt-[40px] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-gray-300 pb-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/848cb4f3af0e3fe7e46c55b16a4b84f7/raw/6c3acb18fe16c8bd94567172aeb4bd323d610610/produtividade.svg' alt='' /><h3 className='text-xl font-medium'>Produtividade</h3></div>
        <p>SULPOL desarrolla y fabrica equipos altamente productivos y estables, con alta capacidad y resistencia.</p>
        </div>
      
        </div>
  
        <div className={`flex flex-wrap mb-50 overflow-hidden duration-1000 ${useTenReasons? 'max-h-800' : 'max-h-0'}`}>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-b border-t pt-[40px] pb-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/3b1ac3172e4fd4cd99f92e593056a8f6/raw/14d85911889e148492ccdd8daa2a4c1691aed99b/qualidade.svg' alt='' /><h3 className='text-xl font-medium'>Parque Fabril</h3></div>
        <p>Nuestra estructura permite la producción y desarrollo de equipos con la máxima precisión, así como la construcción de proyectos optimizados para cada cliente, combinando capacidad de fabricación, tecnología y un equipo cualificado.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:border-r border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/f34901d617f5770cb593709c020e708d/raw/34e13c6dae87ba5ddb13d8f79be654c6712ac879/equipe.svg' alt='' /><h3 className='text-xl font-medium'>Tempo de Mercado</h3></div>
        <p>Somos la empresa líder en la fabricación de equipos de poliuretano en América Latina, con una rica historia de tecnología, innovación y conocimiento a lo largo de nuestros más de 30 años, hemos construido una historia de alianzas sólidas en el mercado, convirtiéndonos en exitosos y referencia en varios países.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:px-[3.125rem] lg:pr-0 border-t pt-[40px] border-gray-300'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/da145182e8f2dadc10b18bdf2f3a8e19/raw/9147c74cbbb10fdd798976713032f23c39ef85e3/inovacao.svg' alt='' /><h3 className='text-xl font-medium'>Comprometindo</h3></div>
        <p>Trabajamos incansablemente para que nuestros clientes alcancen un alto nivel de logro y éxito, nuestro compromiso es que cuando los clientes adquieran uno de nuestros equipos también puedan disfrutar de un equipo dedicado a llevar a cabo su proyecto de principio a fin.</p>
        </div>
  
        <div className='lg:w-[33%] pr-[3.125rem] lg:border-r border-gray-300 border-t lg:border-b-0 pb-[40px] pt-[40px]'>
        <div className='flex items-center gap-[40px] mb-[30px]'><img src='https://gistcdn.githack.com/wesleyeagles/43c9bb30b1b2c9080e7f3fa2a4db13fc/raw/86c1e8ad9cfd946c93d5d07f1e4041fa4bbfdd55/agilidade.svg' alt='' /><h3 className='text-xl font-medium'>Solidez</h3></div>
        <p>Con más de 30 años en el mercado, hemos construido una marca sólida y robusta, que es una autoridad en el mercado de dosificadores de PU, equipos y periféricos para la producción de poliuretano.</p>
        </div>
      
        </div>
  
        <span className='ButtonPrimary cursor-pointer' onClick={toggleTenReasons}>Ver las 10 razones</span>
        </div>
        </div>
  
        <div className='lg:py-20'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center gap-4 lg:w-[65%] xl:w-[60%]'>
              <img src='https://gistcdn.githack.com/wesleyeagles/388fcbf87e2b8b2820b7dea80297c176/raw/8185f72379ef809d156fee7cfc7e5ea868ed7680/mail.svg' alt=''/>
              <h2 className='mt-2 text-base lg:text-2xl'>Deja tu email para recibir novedades</h2>
            </div>
  
            <div className='lg:w-[45%] xl:w-[60%] mt-10 lg:mt-0'>
              <form className='flex items-center gap-8'>
                <input className='block border-b border-[#81D742] w-[100%] pb-[5px] outline-none' placeholder='email@exemplo.com.br' type='text'/>
                <button className='bg-[#81D742] text-white py-3 px-8 font-bold rounded-lg text-base' type='submit'>REGISTRAR</button>
              </form>
            </div>
          </div>
        </div>
        </div>
  
        <div className='py-36'>
        <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-[40%] xl:w-[35%]'>
        <form className='w-full form-shadow bg-white px-50 rounded-lg py-16'>
          <h2 className='text-xl font-medium mb-[40px]'>Completa el <span className='text-[#81D742] font-bold'>formulario a continuación</span> y nuestro equipo se comunicará con usted</h2>
          <div className='flex flex-col gap-4 items-end'>
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Nombre' type='text' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='Teléfono' type='tel' />
            <input className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md' placeholder='E-mail' type='email' />
            <textarea  className='block w-full outline-none py-4 pl-5 border border-[#AAAAAA] rounded-md h-100' placeholder='Mensaje' />
            <button className='bg-[#81D742] text-white py-3 px-8 font-bold text-base rounded-lg '>MANDAR</button>
          </div>
        </form>
        </div>
  
        <div className='w-full lg:w-[55%] mt-20 lg:mt-0'>
        <FAQ text="Preguntas frecuentes" fontSize="text-4xl"/>
        </div>
        </div>
        </div>
        </div>
        
              <BasicModal />
              <BasicModal2 />
              <BasicModal3 />
              <BasicModal4 />
              <BasicModal5 />
              <BasicModal6 />
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  }
}

export default Home;