import React, { useRef } from "react";
import ButtonLP from "../components/LPComponents/ButtonLP";


import {motion} from "framer-motion"

import {ReactComponent as PrevArrow} from '../images/prevArrow.svg'
import {ReactComponent as NextArrow} from '../images/nextArrow.svg'
import {ReactComponent as ExplorarArrow} from '../images/Explorar.svg'

import EcologicaAP from '../images/ecologicaAP.png'
import { HashLink } from 'react-router-hash-link'
import TopNavBar from "../components/TopNavBar/TopNavBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton";
import { useContext } from "react";
import Context from "../contexts/MainContext";



function LPRefrigeracao() {
  setTimeout(() => {
    const topnavbar = document.getElementById("topbar");
    const navbar = document.getElementById("header");
    topnavbar.style.display = "none";
    navbar.style.display = "none";
  }, 100);

  
  const {isPortuguese, isEnglish, isSpanish, langToEnglish, langToPortuguese, langToSpanish} = useContext(Context)
  
  const mobile = window.matchMedia("(max-width: 428px)")


  const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();

        if (mobile.matches) {

          carousel.current.scrollLeft -= 340;

        } else {

          carousel.current.scrollLeft -= 736;
        }


        

  
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();

        if (mobile.matches) {

          carousel.current.scrollLeft += 340;

        } else {

          carousel.current.scrollLeft += 736;
        }


        

      };


      const nameInput = useRef(null)

      const handleFocusInput = (e) => {
        
        nameInput.current.focus()
        window.scrollTo(0, 0)
      
      }

  if (isPortuguese) {
    const links = [
      {
          "id": 1,
          "name": 'BENEFÍCIOS',
          "hash": '#beneficios'
      },
    
      {
          "id": 2,
          "name": 'APLICAÇÃO',
          "hash": '#aplicacao'
      },
    
      {
          "id": 3,
          "name": 'CABEÇOTES MISTURADORES',
          "hash": '#cabecote'
      },
    
      {
          "id": 4,
          "name": 'EQUIPAMENTOS',
          "hash": '#equipamentos'
      },
    ]

    return (
      <motion.div
      
      
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
        <TopNavBar />
      <Navbar />
      <div className="relative bg-[#202124]" id="lpheader">
        <img
          className="absolute w-full lg:h-auto 2xl:h-auto object-cover"
          src="https://uploaddeimagens.com.br/images/003/912/087/full/Grupo_583.png?1655921460"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[20%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[55%] 2xl:w-[55%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[18%]'>
               <button className='bg-transparent border border-[#81D742] text-white py-3 px-6 rounded-full text-sm font-bold'>TENHO INTERESSE</button>
                  
              </div>
              <div className="flex gap-2">
                        <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" alt="" />
                        </div>
                </div>
  
          </nav>
      </div>
        <div className="container mx-auto relative z-10" id="header">
          <div className="flex flex-col lg:flex-row justify-between mt-100 lg:mt-200 pb-20">
            <div className="lg:w-[38%] 2xl:w-[35%]">
              <h1 className="text-white text-lp-mobile lg:text-lp font-medium leading-tight mb-[40px]">
                SOLUÇÕES COMPLETAS PARA APLICAÇÕES DE POLIURETANO NA ÁREA DE{" "}
                <span className="text-[#81D742] font-extrabold">
                  REFRIGERAÇÃO
                </span>
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              A SULPOL fornece tecnologias inovadoras que reduzem fortemente o tempo de produção em linha. 
              Os Equipamentos são desenvolvidos especificamente para atender o mercado da refrigeração, 
              com expertise do mercado garantimos aos nossos clientes equipamentos com dosagem precisa 
              e com alta produtividade durante o processo de produção.
              </p>
              <ButtonLP onClick={handleFocusInput} text="QUERO MAIS PRODUTIVIDADE" />
            </div>
  
            <div className="lg:w-[60%] 2xl:w-[60%] relative">
              <img
                className="hidden lg:block absolute -top-36 -z-10"
                src="https://gistcdn.githack.com/wesleyeagles/305dfaad416e5bcd75dbeff0b792807c/raw/2d66ed98d64723c6464dd4a9b4d566a70bdcc230/octagone.svg"
                alt=""
              />
              <div className="flex justify-between">
                <div className="hidden lg:block lg:w-[35%] 2xl:w-auto">
                  <img
                    className="w-full"
                    src="https://uploaddeimagens.com.br/images/003/912/269/full/Grupo_885.png?1655926495"
                    alt=""
                  />
                </div>
  
                <div className="bg-[#2C2D2E] lg:w-[55%] 2xl:w-[50%] p-50 rounded-lg lpshadow mt-16 lg:mt-0">
                  <form action="" id="form">
                    <h2 className="text-white text-xl mb-5">Vamos conversar?</h2>
                    <p className="text-white text-tiny font-light mb-8">
                      Complete o formulário abaixo para saber como a Sulpol
                      contribuir para o desenvolvimento da sua empresa{" "}
                    </p>
                    <div className="flex flex-col gap-5">
                      <input
                        ref={nameInput}
                        placeholder="Nome"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg focus:outline focus:outline-sulpol-green"
                        type="text"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="Telefone"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                        type="tel"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="Seu melhor e-mail"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                        type="email"
                        name=""
                        id=""
                      />
                      <button
                        className="bg-[#81D742] hover:bg-black hover:text-white duration-700 py-4 rounded-lg font-semibold"
                        type="submit"
                      >
                        ENVIAR
                      </button>
                    </div>
                    <label className="flex items-center gap-2 mt-[35px]" htmlFor="privacity">
                      <input
                        className="block"
                        type="checkbox"
                        name="privacity"
                        id="privacity"
                      />
                      <span className="text-white">
                        Estou de acordo com a Política de Privacidade
                      </span>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="beneficios">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                  <div className="w-full h-[300px] lg:h-auto lg:w-[50%]"><iframe className="w-full h-full" src="https://www.youtube.com/embed/vO0GIlYXSwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                      <h2 className="text-2xl lg:text-3xl text-white leading-snug font-medium mb-50">VOCÊ SABIA QUE O POLIURETANO É UTILIZADO PARA ISOLAMENTO TÉRMICO NA <span className="text-[#81D742] font-extrabold">REFRIGERAÇÃO?</span></h2>
                      <p className="text-base text-white font-light mb-20">A Sulpol produz <span className="text-[#81D742] font-medium">dosadoras de Poliuretano, prensas, porta moldes e linhas completas, automáticas, semi-automáticas ou manuais</span>, de acordo com a necessidade de cada cliente, garantindo uma dosagem precisa e a densidade ideal para o seu produto!</p>
                      <ButtonLP onClick={handleFocusInput} text="QUERO SOLICITAR ORÇAMENTO"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
              <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px]">VANTAGENS DO USO DO <span className="text-[#81D742] font-extrabold">PU</span> NA CADEIA DO FRIO </h2>
              <span className="text-[#81D742] text-center font-medium text-base block">A Sulpol desenvolve dosadoras de PU com o melhor da tecnologia do mercado! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Economia e redução no consumo de energia</h3>
                  <p className="text-white text-sm font-light w-[90%]">Quando há muita troca de calor entre o ambiente externo e interno, o motor trabalha muito mais, e isso gera mais gasto energético. O revestimento em PU garante maior isolamento térmico e muito mais economia!</p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Resistência</h3>
                  <p className="text-white text-sm font-light w-[90%]">O PU não se fragmenta, e ainda possui alta capacidade de resistência a choques mecânicos, por isso, é perfeito para aplicação em câmaras frias, por se tratar de um local com concentração e estocagem de produtos, além de haver circulação de pessoas.</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="pt-20 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-[60%] lg:w-[30%]">
            <div><img className="absolute lg:max-w-max top-[100px] lg:top-[175px] left-[0px] lg:-left-[680px] 2xl:-left-[500px]" src="https://gistcdn.githack.com/wesleyeagles/fea557bd7ab7534d9e7464e9d3d48947/raw/0a8da4b8dc1339ce527621bda4127fa03738cdef/linegroup.svg" alt="" /></div>
            <img className="relative z-10" src='https://uploaddeimagens.com.br/images/003/913/008/full/Grupo_584.png?1655986398' alt='' />
            </div>
  
            <div className="w-full lg:w-[65%] mt-16 lg:mt-0">
              <h2 className="text-white text-2xl lg:text-lp font-medium lg:w-[85%] mb-[40px]">OTIMIZAÇÃO DE CUSTOS E <span className="text-[#81D742] font-extrabold">ISOLAMENTO TÉRMICO</span> DE QUALIDADE</h2>
              <p className="text-white text-base font-light">poliuretano é muito usado na cadeia do frio, especialmente por suas propriedades como isolante térmico!</p>
              <p className="text-[#81D742] text-base font-light my-[30px]">É aplicado em diversos produtos do segmento, como geladeiras, congeladores, câmaras frias, adegas, caixas térmicas e muitos outros.</p>
              <p className="text-white text-base font-light mb-[80px]">Ele impede a troca de temperatura entre o meio externo e interno, garantindo que os produtos não sofram oscilações, assim, o meio interno fica mais estável e demanda menos desempenho dos outros componentes responsáveis pela temperatura!</p>
              <ButtonLP onClick={handleFocusInput} text="QUERO OTIMIZAR MINHA PRODUÇÃO"/>
            </div>
          </div>
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="cabecote">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[60%]">
                <h2 className="text-white text-lp-mobile lg:text-lp font-medium lg:w-[85%] mb-[40px]">CABEÇOTES DE ALTA PRESSÃO PARA A INDÚSTRIA DE <span className="text-[#81D742] font-extrabold">REFRIGERAÇÃO</span></h2>
                <p className="text-white text-base mb-[30px] font-light w-[90%]"><span className="text-[#81D742] font-medium">Não importa se a espuma é rígida ou flexível, pele integral, isolamento térmico...</span>, se o assunto é aplicação e dosagem de PU, a SULPOL possui o cabeçote de alta pressão ideal para o seu equipamento!</p>
                <p className="text-white text-base font-light mb-70 w-[90%]">Os cabeçotes de alta pressão SULPOL são compatíveis com todos os equipamentos do mercado, são altamente duráveis e resistentes a corrosões. Não necessitam de solvente para limpeza e possuem fabricação 100% nacional!</p>
                <ButtonLP onClick={handleFocusInput} text='QUERO PEÇAS DE QUALIDADE'/>
              </div>
  
              <div className="w-[40%] hidden lg:block">
                <img src='https://gistcdn.githack.com/wesleyeagles/792b8f3a2be9b49b2e007c0dbb910508/raw/9d7d3e5a8450bdb92a0cab8f3d74f8c7c0efe8a0/image.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
        <div className="container mx-auto" id="equipamentos">
        <div className="flex justify-center">
          <h2 className="text-white text-lp-mobile lg:text-lp text-center lg:w-[90%] font-medium"><span className="text-[#81D742] font-extrabold">MAIS DE 30 ANOS</span> DESENVOLVENDO TECNOLOGIAS EM EQUIPAMENTOS E PERIFÉRICOS PARA PU</h2>
        </div>
        <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-8 lg:w-[65%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300  flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src={EcologicaAP} /></div>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ECOLÓGICA AP</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Injetora/Dosadora de alta pressão</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
              </div>
              </div>
          
   
           
                <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
                <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Injetora/Dosadora para elastômero</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
                  </div>
              
    
      
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
       
     
     
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[70%]' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
          
      </div>
      <div className="flex gap-4 lg:gap-0 lg:block mt-4 lg:mt-0">
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
       
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-100">
              <div className="bg-ground lg:w-[40%] py-20 lg:py-40">
                  <h2 className="text-white text-lp-mobile lg:text-lp text-center font-medium">SOMOS <span  className="text-[#81D742] font-extrabold">TECNOLOGIA</span> EM CONSTANTE MOVIMENTO</h2>
              </div>
  
              <div className="lg:w-[50%] mt-16 lg:mt-0">
                <p className="text-white text-base mb-[30px]">Fundada em <span className="text-[#81D742] font-medium">1989</span> pelo Sr. Gilberto Alves da Silva, a empresa iniciou as suas operações com o propósito principal a fabricação de injetoras para o poliuretano.</p>
                <p className="text-white text-base mb-[30px]">Hoje somos líderes no mercado brasileiro e latino americano na fabricação de dosadoras de PU, nossa capacidade tecnológica e fabril nos traz a possibilidade de  desenvolver e fabricar projetos especiais de pequeno, médio e grande porte.</p>
                <span className="text-[#81D742] font-medium text-base">Quero saber mais sobre a Sulpol</span>
              </div>
            </div>
            <div className="flex justify-center">
            <HashLink className="border border-[#81D742] text-white py-4 px-20 rounded-lg" to="/#bg-hero">VOLTAR PARA O SITE</HashLink>
            </div>
          </div>
        </div>
  
        <div className="bg-[#202124]">
          <div className="container mx-auto relative flex justify-center">
          <img className="absolute -top-24 z-0" src="https://uploaddeimagens.com.br/images/003/913/446/full/_DE30_ANOS.png?1655994362" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  } else if (isEnglish) {
    const links = [
      {
        "id": 1,
        "name": 'BENEFITS',
        "hash": '#beneficios'
    },
  
    {
        "id": 2,
        "name": 'APLICATION',
        "hash": '#aplicacao'
    },
    
      {
          "id": 3,
          "name": 'HEADER MIXERS',
          "hash": '#cabecote'
      },
    
      {
        "id": 4,
        "name": 'EQUIPMENTS',
        "hash": '#equipamentos'
    },
    ]

    return (
      <motion.div
      
      
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
        <TopNavBar />
      <Navbar />
      <div className="relative bg-[#202124]" id="lpheader">
        <img
          className="absolute w-full lg:h-auto 2xl:h-auto object-cover"
          src="https://uploaddeimagens.com.br/images/003/912/087/full/Grupo_583.png?1655921460"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[20%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[55%] 2xl:w-[55%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[18%]'>
               <button className='bg-transparent border border-[#81D742] text-white py-3 px-6 rounded-full text-sm font-bold'>I'M INTERESTED</button>
                  
              </div>
              <div className="flex gap-2">
                        <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" alt="" />
                        </div>
                </div>
  
          </nav>
      </div>
        <div className="container mx-auto relative z-10" id="header">
          <div className="flex flex-col lg:flex-row justify-between mt-100 lg:mt-200 pb-20">
            <div className="lg:w-[38%] 2xl:w-[35%]">
              <h1 className="text-white text-lp-mobile lg:text-lp font-medium leading-tight mb-[40px]">
              COMPLETE SOLUTIONS FOR POLYURETHANE APPLICATIONS IN THE AREA OF{" "}
                <span className="text-[#81D742] font-extrabold">
                REFRIGERATION
                </span>
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              SULPOL provides innovative technologies that greatly reduce in-line production time. The equipment is specifically developed to serve the refrigeration market, with market expertise we guarantee our customers equipment with precise dosage and high productivity during the production process.
              </p>
              <ButtonLP onClick={handleFocusInput} text="I WANT MORE PRODUCTIVITY" />
            </div>
  
            <div className="lg:w-[60%] 2xl:w-[60%] relative">
                  <img
                    className="hidden lg:block absolute -top-36 -z-10"
                    src="https://gistcdn.githack.com/wesleyeagles/305dfaad416e5bcd75dbeff0b792807c/raw/2d66ed98d64723c6464dd4a9b4d566a70bdcc230/octagone.svg"
                    alt=""
                  />
                  <div className="flex justify-between">
                    <div className="hidden lg:block lg:w-[35%] 2xl:w-auto">
                      <img
                        className="w-full"
                        src="https://uploaddeimagens.com.br/images/003/912/269/full/Grupo_885.png?1655926495"
                        alt=""
                      />
                    </div>
      
                    <div className="bg-[#2C2D2E] lg:w-[55%] 2xl:w-[50%] p-50 rounded-lg lpshadow mt-16 lg:mt-0">
                      <form action="" id="form">
                        <h2 className="text-white text-xl mb-5">Let's talk?</h2>
                        <p className="text-white text-tiny font-light mb-8">
                          Complete the form below to find out how Sulpol contributes to the development of your company{" "}
                        </p>
                        <div className="flex flex-col gap-5">
                          <input
                            ref={nameInput}
                            placeholder="Name"
                            className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg focus:outline focus:outline-sulpol-green"
                            type="text"
                            name=""
                            id=""
                          />
                          <input
                            placeholder="Phone"
                            className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                            type="tel"
                            name=""
                            id=""
                          />
                          <input
                            placeholder="Your best mail"
                            className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                            type="email"
                            name=""
                            id=""
                          />
                          <button
                            className="bg-[#81D742] hover:bg-black hover:text-white duration-700 py-4 rounded-lg font-semibold"
                            type="submit"
                          >
                            SEND
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="beneficios">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                  <div className="w-full h-[300px] lg:h-auto lg:w-[50%]"><iframe className="w-full h-full" src="https://www.youtube.com/embed/vO0GIlYXSwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                      <h2 className="text-2xl lg:text-3xl text-white leading-snug font-medium mb-50">DID YOU KNOW THAT POLYURETHANE IS USED FOR THERMAL INSULATION IN <span className="text-[#81D742] font-extrabold">REFRIGERATION?</span></h2>
                      <p className="text-base text-white font-light mb-20">Sulpol produces <span className="text-[#81D742] font-medium">Polyurethane dosing machines, presses, mold holders and complete lines, automatic, semi-automatic or manual</span>, according to the needs of each customer, guaranteeing accurate dosing and the ideal density for your product!</p>
                      <ButtonLP onClick={handleFocusInput} text="I WANT TO REQUEST A BUDGET"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
              <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px]">ADVANTAGES OF USING THE<span className="text-[#81D742] font-extrabold">PU</span> IN THE COLD CHAIN </h2>
              <span className="text-[#81D742] text-center font-medium text-base block">Sulpol develops PU dispensers with the best technology on the market! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Savings and reducing energy consumption</h3>
                  <p className="text-white text-sm font-light w-[90%]">When there is a lot of heat exchange between the external and internal environment, the engine works much harder, and this generates more energy expenditure. The PU coating ensures greater thermal insulation and much more savings!</p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Resistance</h3>
                  <p className="text-white text-sm font-light w-[90%]">The PU does not fragment, and still has a high resistance to mechanical shocks, so it is perfect for application in cold rooms, as it is a place with concentration and storage of products, in addition to the circulation of people.</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="pt-20 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-[60%] lg:w-[30%]">
            <div><img className="absolute lg:max-w-max top-[100px] lg:top-[175px] left-[0px] lg:-left-[680px] 2xl:-left-[500px]" src="https://gistcdn.githack.com/wesleyeagles/fea557bd7ab7534d9e7464e9d3d48947/raw/0a8da4b8dc1339ce527621bda4127fa03738cdef/linegroup.svg" alt="" /></div>
            <img className="relative z-10" src='https://uploaddeimagens.com.br/images/003/913/008/full/Grupo_584.png?1655986398' alt='' />
            </div>
  
            <div className="w-full lg:w-[65%] mt-16 lg:mt-0">
              <h2 className="text-white text-2xl lg:text-lp font-medium lg:w-[85%] mb-[40px]">OPTIMIZATION OF COSTS AND <span className="text-[#81D742] font-extrabold">THERMAL INSULATION</span> OF QUALITY</h2>
              <p className="text-white text-base font-light">polyurethane is widely used in the cold chain, especially for its properties as a thermal insulator!</p>
              <p className="text-[#81D742] text-base font-light my-[30px]">It is applied in several products of the segment, such as refrigerators, freezers, cold rooms, wine cellars, thermal boxes and many others.</p>
              <p className="text-white text-base font-light mb-[80px]">It prevents the exchange of temperature between the external and internal environment, ensuring that the products do not suffer fluctuations, thus, the internal environment is more stable and demands less performance from the other components responsible for the temperature!</p>
              <ButtonLP onClick={handleFocusInput} text="I WANT TO OPTIMIZE MY PRODUCTION"/>
            </div>
          </div>
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="cabecote">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[60%]">
                <h2 className="text-white text-lp-mobile lg:text-lp font-medium lg:w-[85%] mb-[40px]">HIGH PRESSURE HEADS FOR THE REFRIGERATION <span className="text-[#81D742] font-extrabold">INDUSTRY</span></h2>
                <p className="text-white text-base mb-[30px] font-light w-[90%]"><span className="text-[#81D742] font-medium">It doesn't matter if the foam is rigid or flexible, integral skin, thermal insulation...</span>, if the subject is application and dosage of PU, SULPOL has the ideal high pressure head for your equipment!</p>
                <p className="text-white text-base font-light mb-70 w-[90%]">SULPOL high pressure heads are compatible with all equipment on the market, are highly durable and resistant to corrosion. They do not require solvent for cleaning and are 100% nationally manufactured!</p>
                <ButtonLP onClick={handleFocusInput} text='I WANT QUALITY PARTS'/>
              </div>
  
              <div className="w-[40%] hidden lg:block">
                <img src='https://gistcdn.githack.com/wesleyeagles/792b8f3a2be9b49b2e007c0dbb910508/raw/9d7d3e5a8450bdb92a0cab8f3d74f8c7c0efe8a0/image.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
        <div className="container mx-auto" id="equipamentos">
        <div className="flex justify-center">
          <h2 className="text-white text-lp-mobile lg:text-lp text-center lg:w-[90%] font-medium"><span className="text-[#81D742] font-extrabold">MORE THAN 30 YEARS</span> DEVELOPING TECHNOLOGIES IN EQUIPMENT AND PERIPHERALS FOR PU</h2>
        </div>
        <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-8 lg:w-[65%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300  flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src={EcologicaAP} /></div>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>AP ECOLOGICAL</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>High pressure injector/doser</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>To Explore <ExplorarArrow className='mt-1' /> </a>
              </div>
              </div>
          
   
           
                <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
                <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Injector/Doser for elastomer</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>To Explore <ExplorarArrow className='mt-1' /> </a>
                  </div>
                  </div>
              
    
      
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Low Pressure Injector/Doser</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>To Explore <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
       
     
     
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[70%]' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Low Pressure Injector/Doser</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>To Explore <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
          
      </div>
      <div className="flex gap-4 lg:gap-0 lg:block mt-4 lg:mt-0">
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
       
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-100">
                  <div className="bg-ground lg:w-[40%] py-20 lg:py-40">
                      <h2 className="text-white text-lp-mobile lg:text-lp text-center font-medium">WE ARE  <span  className="text-[#81D742] font-extrabold">TECHNOLOGY</span> IN CONSTANT MOTION</h2>
                  </div>
      
                  <div className="lg:w-[50%] mt-16 lg:mt-0">
                    <p className="text-white text-base mb-[30px]">Founded in <span className="text-[#81D742] font-medium">1989</span> by Mr. Gilberto Alves da Silva, the company started its operations with the main purpose of manufacturing injectors for polyurethane.</p>
                    <p className="text-white text-base mb-[30px]">Today we are leaders in the Brazilian and Latin American market in the manufacture of PU dosing machines, our technological and manufacturing capacity gives us the possibility to develop and manufacture special small, medium and large projects.</p>
                    <span className="text-[#81D742] font-medium text-base">I want to know more about Sulpol</span>
                  </div>
                </div>
                <div className="flex justify-center">
                <HashLink className="border border-[#81D742] text-white py-4 px-20 rounded-lg" to="/#bg-hero">BACK TO WEBSITE</HashLink>
                </div>
              </div>
            </div>
  
        <div className="bg-[#202124]">
          <div className="container mx-auto relative flex justify-center">
          <img className="absolute -top-24 z-0" src="https://uploaddeimagens.com.br/images/003/913/446/full/_DE30_ANOS.png?1655994362" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  } else if (isSpanish) {
    const links = [
      {
        "id": 1,
        "name": 'BENEFICIOS',
        "hash": '#beneficios'
    },
  
    {
        "id": 2,
        "name": 'APLICACIÓN',
        "hash": '#aplicación'
    },
  
    {
        "id": 3,
        "name": 'CABEZALES DE MEZCLA',
        "hash": '#cabeza'
    },
  
    {
        "id": 4,
        "name": 'EQUIPO',
        "hash": '#equipo'
    },
    ]

    return (
      <motion.div
      
      
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.8}}}
      exit={{opacity: 0, transition: {duration: 0.1} }}
      >
        <TopNavBar />
      <Navbar />
      <div className="relative bg-[#202124]" id="lpheader">
        <img
          className="absolute w-full lg:h-auto 2xl:h-auto object-cover"
          src="https://uploaddeimagens.com.br/images/003/912/087/full/Grupo_583.png?1655921460"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[20%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[55%] 2xl:w-[55%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[18%]'>
              <button className='bg-transparent border border-[#81D742] text-white py-3 px-6 rounded-full text-sm font-bold'>ESTOY INTERESADO</button>
                  
              </div>
              <div className="flex gap-2">
                        <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/294/full/bandeiragrande.jpg?1674135923" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/304/314/full/Flag_of_the_United_Kingdom_%283-5%29.svg.png?1674136179" alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src="https://uploaddeimagens.com.br/images/004/312/280/full/significado-e-origem-da-bandeira-da-espanha-1-1200x675.jpg?1674670089" alt="" />
                        </div>
                </div>
  
          </nav>
      </div>
        <div className="container mx-auto relative z-10" id="header">
          <div className="flex flex-col lg:flex-row justify-between mt-100 lg:mt-200 pb-20">
            <div className="lg:w-[38%] 2xl:w-[35%]">
              <h1 className="text-white text-lp-mobile lg:text-lp font-medium leading-tight mb-[40px]">
              SOLUCIONES COMPLETAS PARA APLICACIONES DE POLIURETANO EN EL ÁREA DE{" "}
                <span className="text-[#81D742] font-extrabold">
                REFRIGERACIÓN
                </span>
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              SULPOL proporciona tecnologías innovadoras que reducen considerablemente el tiempo de producción en línea.
              El Equipo está específicamente desarrollado para atender el mercado de refrigeración,
              con experiencia en el mercado garantizamos a nuestros clientes equipos con dosificación precisa
              y con alta productividad durante el proceso de producción.
              </p>
              <ButtonLP onClick={handleFocusInput} text="QUIERO MÁS PRODUCTIVIDAD" />
            </div>
  
            <div className="lg:w-[60%] 2xl:w-[60%] relative">
              <img
                className="hidden lg:block absolute -top-36 -z-10"
                src="https://gistcdn.githack.com/wesleyeagles/305dfaad416e5bcd75dbeff0b792807c/raw/2d66ed98d64723c6464dd4a9b4d566a70bdcc230/octagone.svg"
                alt=""
              />
              <div className="flex justify-between">
                <div className="hidden lg:block lg:w-[35%] 2xl:w-auto">
                  <img
                    className="w-full"
                    src="https://uploaddeimagens.com.br/images/003/912/269/full/Grupo_885.png?1655926495"
                    alt=""
                  />
                </div>
  
                <div className="bg-[#2C2D2E] lg:w-[55%] 2xl:w-[50%] p-50 rounded-lg lpshadow mt-16 lg:mt-0">
                  <form action="" id="form">
                  <h2 className="text-white text-xl mb-5">Hablamos?</h2>
                    <p className="text-white text-tiny font-light mb-8">
                      Complete el siguiente formulario para saber cómo Sulpol
                      contribuir al desarrollo de su empresa{" "}
                    </p>
                    <div className="flex flex-col gap-5">
                      <input
                        ref={nameInput}
                        placeholder="Nombre"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg focus:outline focus:outline-sulpol-green"
                        type="text"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="Telefono"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                        type="tel"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="tu mejor correo electronico"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                        type="email"
                        name=""
                        id=""
                      />
                      <button
                        className="bg-[#81D742] hover:bg-black hover:text-white duration-700 py-4 rounded-lg font-semibold"
                        type="submit"
                      >
                        MANDAR
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="beneficios">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                  <div className="w-full h-[300px] lg:h-auto lg:w-[50%]"><iframe className="w-full h-full" src="https://www.youtube.com/embed/vO0GIlYXSwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                  <h2 className="text-2xl lg:text-3xl text-white lead-snug font-medium mb-50">SABÍAS QUE EL POLIURETANO SE UTILIZA PARA AISLAMIENTO TÉRMICO EN <span className="text-[#81D742] font -extrabold">REFRIGERACIÓN?</span></h2>                      <p className="text-base text-white font-light mb-20">A Sulpol produz <span className="text-[#81D742] font-medium">dosadoras de Poliuretano, prensas, porta moldes e linhas completas, automáticas, semi-automáticas ou manuais</span>, de acordo com a necessidade de cada cliente, garantindo uma dosagem precisa e a densidade ideal para o seu produto!</p>
                  <ButtonLP onClick={handleFocusInput} text="QUIERO SOLICITAR PRESUPUESTO"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
              <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px]">VENTAJAS DE UTILIZAR <span className="text-[#81D742] font-extrabold" > PU</span> EN LA CADENA DE FRÍO</h2>
              <span className="text-[#81D742] text-center font-medium text-base block">Sulpol desarrolla dosificadores de PU con la mejor tecnología del mercado! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Economía y reducción del consumo energético</h3>
                  <p className="text-white text-sm font-light w-[90%]">Cuando hay mucho intercambio de calor entre el ambiente externo e interno, el motor trabaja mucho más, y esto genera más gasto de energía. ¡El revestimiento de PU garantiza un mayor aislamiento térmico y mucho más ahorro!</p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <h3 className="text-white text-lg font-medium mb-[10px]">Resistencia</h3>
                  <p className="text-white text-sm font-light w-[90%]">El PU no se fragmenta y sigue teniendo una alta resistencia a los golpes mecánicos, por lo que es perfecto para su aplicación en cámaras frigoríficas, ya que es un lugar de concentración y almacenamiento de productos, además de la circulación de personas.</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="pt-20 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-[60%] lg:w-[30%]">
            <div><img className="absolute lg:max-w-max top-[100px] lg:top-[175px] left-[0px] lg:-left-[680px] 2xl:-left-[500px]" src="https://gistcdn.githack.com/wesleyeagles/fea557bd7ab7534d9e7464e9d3d48947/raw/0a8da4b8dc1339ce527621bda4127fa03738cdef/linegroup.svg" alt="" /></div>
            <img className="relative z-10" src='https://uploaddeimagens.com.br/images/003/913/008/full/Grupo_584.png?1655986398' alt='' />
            </div>
  
            <div className="w-full lg:w-[65%] mt-16 lg:mt-0">
            <h2 className="text-white text-2xl lg:text-lp font-medium lg:w-[85%] mb-[40px]">OPTIMIZACIÓN DE COSTOS Y <span className="text-[#81D742] fuente - extrabold">AISLAMIENTO TÉRMICO DE CALIDAD</span></h2>
            <p className="text-white text-base font-light">El poliuretano se usa a menudo en la cadena de frío, especialmente por sus propiedades como aislante térmico!</p>
            <p className="text-[#81D742] text-base font-light my-[30px]">Se aplica en varios productos del segmento, como refrigeradores, congeladores, cuartos fríos, cavas, cajas térmicas y muchos otros.</p>
            <p className="text-white text-base font-light mb-[80px]">Evita el intercambio de temperatura entre el ambiente externo e interno, asegurando que los productos no sufran oscilaciones, por lo que el ambiente interno es más estable y exige menos rendimiento de los otros componentes responsables de la temperatura!</p>
            <ButtonLP onClick={handleFocusInput} text="QUIERO OPTIMIZAR MI PRODUCCIÓN"/>
            </div>
          </div>
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]" id="cabecote">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[60%]">
              <h2 className="text-white text-lp-mobile lg:text-lp font-medium lg:w-[85%] mb-[40px]">CABEZALES DE ALTA PRESIÓN PARA LA INDUSTRIA DE LA CALEFACCIÓN <span className="text - [#81D742] font-extrabold">REFRIGERACIÓN</span></h2>
              <p className="text-white text-base mb-[30px] font-light w-[90%]"><span className="text-[#81D742] font-medium">No importa si el la espuma es rígida o flexible, piel integral, aislamiento térmico...</span>, si el tema es aplicación y dosificación de PU, ¡SULPOL tiene el cabezal de alta presión ideal para su equipo!</p>
              <p className="text-white text-base font-light mb-70 w-[90%]">Los cabezales de alta presión SULPOL son compatibles con todos los equipos del mercado, son de alta durabilidad y resistentes a la corrosión. ¡No requieren solvente para su limpieza y son de fabricación 100% nacional!</p>
              <ButtonLP onClick={handleFocusInput} text='QUIERO PIEZAS DE CALIDAD'/>
              </div>
  
              <div className="w-[40%] hidden lg:block">
                <img src='https://gistcdn.githack.com/wesleyeagles/792b8f3a2be9b49b2e007c0dbb910508/raw/9d7d3e5a8450bdb92a0cab8f3d74f8c7c0efe8a0/image.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
        <div className="container mx-auto" id="equipamentos">
        <div className="flex justify-center">
        <h2 className="text-white text-lp-mobile lg:text-lp text-center lg:w-[90%] font-medium"><span className="text-[#81D742] font-extrabold"> MÁS DE 30 AÑOS</span> DESARROLLANDO TECNOLOGÍAS EN EQUIPOS Y PERIFÉRICOS PARA PU</h2>
        </div>
        <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-8 lg:w-[65%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300  flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src={EcologicaAP} /></div>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ECOLÓGICA AP</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Inyector/dosificador de alta presión</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
              </div>
              </div>
          
   
           
                <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
                <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Inyector/Dosificador para elastómeros</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
                  </div>
              
    
      
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Inyector/dosificador de baja presión</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
       
     
     
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[70%]' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' /></div>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold text-white mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light text-white mb-3'>Inyector/dosificador de baja presión</p>
                  <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                  </div>
              </div>
          
      </div>
      <div className="flex gap-4 lg:gap-0 lg:block mt-4 lg:mt-0">
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
       
        </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-100">
              <div className="bg-ground lg:w-[40%] py-20 lg:py-40">
              <h2 className="text-white text-lp-mobile lg:text-lp text-center font-medium">SOMOS <span className="text-[#81D742] font-extrabold">TECNOLOGÍA CONSTANTE</span> MOVIMIENTO</h2>
              </div>
  
              <div className="lg:w-[50%] mt-16 lg:mt-0">
              <p className="text-white text-base mb-[30px]">Fundada en <span className="text-[#81D742] font-medium">1989</span> por el Sr. Gilberto Alves da Silva, la empresa inició sus operaciones con el objetivo principal de fabricar inyectoras para poliuretano.</p>
              <p className="text-white text-base mb-[30px]">Hoy somos líderes en el mercado brasileño y latinoamericano en la fabricación de dispensadores de PU, nuestra capacidad tecnológica y de fabricación nos da la posibilidad de desarrollar y fabricar especiales diseños de pequeño, mediano y gran tamaño.</p>
              <span className="text-[#81D742] font-medium text-base">Quiero saber más sobre Sulpol</span>
              </div>
            </div>
            <div className="flex justify-center">
            <HashLink className="border border-[#81D742] text-white py-4 px-20 rounded-lg" to="/#bg-hero">VOLVER AL SITIO</HashLink>
            </div>
          </div>
        </div>
  
        <div className="bg-[#202124]">
          <div className="container mx-auto relative flex justify-center">
          <img className="absolute -top-24 z-0" src="https://uploaddeimagens.com.br/images/003/913/446/full/_DE30_ANOS.png?1655994362" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsappButton />
      </motion.div>
    );
  }

  
}

export default LPRefrigeracao;
