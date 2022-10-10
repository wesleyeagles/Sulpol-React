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

function LPRefrigeracao() {
  setTimeout(() => {
    const topnavbar = document.getElementById("topbar");
    const navbar = document.getElementById("header");
    topnavbar.style.display = "none";
    navbar.style.display = "none";
  }, 100);

  

  
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
}

export default LPRefrigeracao;
