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
import { HashLink } from 'react-router-hash-link'
import FAQ from '../components/FAQ'

import ContextProdutos from '../contexts/ContextProdutos'

import BasicModal from '../components/BasicModal'
import BasicModal2 from '../components/BasicModal2'
import BasicModal3 from '../components/BasicModal3'
import BasicModal4 from '../components/BasicModal4'
import BasicModal5 from '../components/BasicModal5'
import BasicModal6 from '../components/BasicModal6'


import { IoIosConstruct } from 'react-icons/io'
import { MdOutlineSmartToy, MdCable } from 'react-icons/md'
import { GiSlippers, GiGloves, GiFoamyDisc, GiElectric, GiSofa } from 'react-icons/gi'
import { AiFillCar } from 'react-icons/ai'
import { FiPackage, FiFilter } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BsBag } from 'react-icons/bs'
import { ThermometerSimple } from 'phosphor-react'
import { FaTeethOpen } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'







function Home() {

    const services = useRef([])
    const mobile = window.matchMedia("(max-width: 428px)")

    const [serviceMenu1, setServiceMenu1] = useState(false)
    const [serviceMenu2, setServiceMenu2] = useState(false)
    const [serviceMenu3, setServiceMenu3] = useState(false)
    const [serviceMenu4, setServiceMenu4] = useState(false)
    const [serviceMenu5, setServiceMenu5] = useState(false)
    const [serviceMenu6, setServiceMenu6] = useState(false)

    const [useTenReasons, setUseTenReasons] = useState(0)

    const toggleTenReasons = () => {
      setUseTenReasons(!useTenReasons)
    }


    const { handleOpen, handleOpen2, handleOpen3, handleOpen4, handleOpen5, handleOpen6 } = useContext(ContextProdutos)


    const handleServiceMenu = (event) => {
      if (event.target.id == '1') {
        setServiceMenu1(!serviceMenu1)
      } 
      
      else if (event.target.id == '2') {
        setServiceMenu2(!serviceMenu2)
      } 
      
      else if (event.target.id == '3') {
        setServiceMenu3(!serviceMenu3)
      } 
      
      else if (event.target.id == '4') {
        setServiceMenu4(!serviceMenu4)
      }

      else if (event.target.id == '5') {
        setServiceMenu5(!serviceMenu5)
      }

      else if (event.target.id == '6') {
        setServiceMenu6(!serviceMenu6)
      }
    }
    

   
    setTimeout(() => {

      if (mobile.matches) {
        const topnavbar = document.getElementById("topbar");
        const navbar = document.getElementById("header");
        navbar.style.display = "block";
        console.log("Mobile")
      } else {

        const topnavbar = document.getElementById("topbar");
        const navbar = document.getElementById("header");
        topnavbar.style.display = "block";
        navbar.style.display = "block";
        console.log("Desktop")
      }


     
    }, 100);



  const carousel = useRef(null)
  const border = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        if (mobile.matches) {
          carousel.current.scrollLeft -= 354;

        } else {

          carousel.current.scrollLeft -= 736;
        }
        

        if (border.current.offsetWidth == 1224) {
          border.current.style.width = "66%"
        } else if (border.current.offsetWidth == 808) {
          border.current.style.width = "33%"
        }
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
        if (mobile.matches) {
          carousel.current.scrollLeft += 354;
        } else {
          carousel.current.scrollLeft -= 736;
        }
       

        if (border.current.offsetWidth ==
           404) {
          border.current.style.width = "66%"
        } else if (border.current.offsetWidth == 808) {
          border.current.style.width = "100%"
        }
      };

 
  return (

    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
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
              <img className="mt-16" src={ImgTecnologia} />
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
          <div ref={carousel} className="carouselE flex overflow-x-auto gap-9 scroll-smooth">
            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/910/072/full/Grupo_111.png?1655812767' alt='' />
  
              <BasicModal />
            <BasicModal2 />
            <BasicModal3 />
            <BasicModal4 />
            <BasicModal5 />
            <BasicModal6 />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu1? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Projetos especiais</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Com mais de 30 anos de atuação no mercado mundial do Poliuretano, a SULPOL já desenvolveu vários projetos para as diversas áreas que utilizam Poliuretano.</p>
                <a onClick={handleOpen} id='1' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
              </div>
            </div>

          


            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/591/full/IMG_4899_edited.png?1656332875' alt='' />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu2? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Garantia</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Não se preocupe, com a SULPOL você tem garantia nos seus produtos​ e serviços</p>
                <a onClick={handleOpen2} id='2' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
              </div>
            </div>

            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/594/full/IMG_4944_edited.png?1656333050' alt='' />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu3? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Treinamentos</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Capacitação técnica para melhor operação e durabilidade dos equipamentos.</p>
                <a onClick={handleOpen3} id='3' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
              </div>
            </div>

            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/597/full/IMG_4862_edited.png?1656333138' alt='' />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu4? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Assistência Técnica</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Equipe qualificada e atendimento ágil na solução de problemas​.</p>
                <a onClick={handleOpen4} id='4' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
              </div>
            </div>

            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://uploaddeimagens.com.br/images/003/917/605/full/IMG_4913_edited.png?1656333275' alt='' />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu5? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Peças de Reposição</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>Utilize peças originais SULPOL e prolongue a vida útil do seu equipamento​.</p>
                <a onClick={handleOpen5} id='5' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
              </div>
            </div>

            <div className='relative w-full lg:w-700 h-300 lg:h-400 flex-none'>
              <img className='absolute -z-10 w-full h-full' src='https://static.wixstatic.com/media/0c951b_9d3c432d304048a8b897d497ea5da1e5~mv2.jpg/v1/fill/w_485,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4991%2520(1)_edited.jpg' alt='' />

              <div className={`flex flex-col justify-end duration-1000 overflow-hidden pl-50 ${serviceMenu6? 'h-0' : 'h-full pb-50'}`}>
                <h3 className='text-xl text-white font-medium'>Upgrades e Retrofits</h3>
                <p className='text-sm text-white mt-[10px] mb-[15px] font-light w-[90%] lg:w-[65%]'>É possível prolongar a vida útil e atualizar equipamentos. </p>
                <a onClick={handleOpen6} id='6' className='text-sm text-white font-semibold cursor-pointer'>Ver mais</a>
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
                <h3 className='text-center h-20 flex items-end pb-3'>Acessórios para construção civíl</h3>
                <IoIosConstruct size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Automotiva</h3>
                <AiFillCar size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Brinquedos</h3>
                <MdOutlineSmartToy size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Calçado</h3>
                <GiSlippers size={40} color="#81D742"/>
                
              </div>


              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Embalagens</h3>
                <FiPackage size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>EPIS</h3>
                <GiGloves size={40} color="#81D742"/>
                
              </div>

              <div className='w-[30%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Equipamentos para informática</h3>
                <HiOutlineDesktopComputer size={40} color="#81D742" stroke='#81D742'/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Espumas</h3>
                <GiFoamyDisc size={40} color="#81D742"/>
                
              </div>


              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Tubos para elétrica</h3>
                <MdCable size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Filtros</h3>
                <FiFilter size={40} color="#81D742"/>
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Plástico</h3>
                <BsBag size={40} color="#81D742"/>
                
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
                <h3 className='text-center h-20 flex items-end pb-3'>Médico odontológica</h3>
                <FaTeethOpen size={40} color="#81D742" weight="duotone" />
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Móveis</h3>
                <GiSofa size={40} color="#81D742" weight="duotone" />
                
              </div>

              <div className='w-[29%] lg:w-[20%] flex flex-col items-center justify-center'>
                <h3 className='text-center h-20 flex items-end pb-3'>Refrigeração</h3>
                <CgSmartHomeRefrigerator size={40} color="#81D742" weight="duotone" />
                
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

      <div className={`flex flex-wrap mb-50 overflow-hidden duration-1000 ${useTenReasons? 'max-h-500' : 'max-h-0'}`}>

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

      <div className='py-36' id='blog'>
      <div className='container mx-auto'>
      <div className='flex justify-center items-center flex-col mb-[80px]'>
       <span className='text-base text-[#81D742] font-medium'>BLOG</span>
       <h2 className='text-4xl leading-tight text-center'>Ver nossas últimas publicações</h2>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap gap-10'>
      <div className='w-full lg:w-[32%]'>
      <img src='https://uploaddeimagens.com.br/images/003/910/269/full/Grupo_125.png?1655821063' alt='' />
      <div className='mt-50'>
      <span className='text-base font-medium'>POST1</span>
      <p className='text-sm font-light mt-[30px] mb-[20px] w-100%'>A SULPOL preza pela eficácia e eficiência ao prestar um atendimento ágil, pois considera que este é um fator determinante para a rentabilidade do seu negócio.</p>
      <a className='text-sm font-semibold text-[#81D742]' href='' rel='noreferrer'>Ver mais</a>
      </div>
      </div>
      <div className='w-full lg:w-[32%]'>
      <img src='https://uploaddeimagens.com.br/images/003/910/278/full/Grupo_126.png?1655821580' alt='' />
      <div className='mt-50'>
      <span className='text-base font-medium'>POST2</span>
      <p className='text-sm font-light mt-[30px] mb-[20px] w-100%'>A SULPOL preza pela eficácia e eficiência ao prestar um atendimento ágil, pois considera que este é um fator determinante para a rentabilidade do seu negócio.</p>
      <a className='text-sm font-semibold text-[#81D742]' href='' rel='noreferrer'>Ver mais</a>
      </div>
      </div>
      <div className='w-full lg:w-[32%]'>
      <img src='https://uploaddeimagens.com.br/images/003/910/281/full/Grupo_884.png?1655821649' alt='' />
      <div className='mt-50'>
      <span className='text-base font-medium'>POST3</span>
      <p className='text-sm font-light mt-[30px] mb-[20px] w-100%'>A SULPOL preza pela eficácia e eficiência ao prestar um atendimento ágil, pois considera que este é um fator determinante para a rentabilidade do seu negócio.</p>
      <a className='text-sm font-semibold text-[#81D742]' href='' rel='noreferrer'>Ver mais</a>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div className='lg:py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='flex items-center gap-4 lg:w-[65%] xl:w-[60%]'>
            <img src='https://gistcdn.githack.com/wesleyeagles/388fcbf87e2b8b2820b7dea80297c176/raw/8185f72379ef809d156fee7cfc7e5ea868ed7680/mail.svg' />
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
    </div>
    </motion.div>
  );
}

export default Home;