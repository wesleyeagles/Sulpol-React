import React, { useRef } from "react";
import ButtonLP from "../components/LPComponents/ButtonLP";
import {motion} from "framer-motion"

import { HashLink } from 'react-router-hash-link'
import TopNavBar from "../components/TopNavBar/TopNavBar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton";
import { useContext } from "react";
import Context from "../contexts/MainContext";

function LPFiltros() {
  setTimeout(() => {
    const topnavbar = document.getElementById("topbar");
    const navbar = document.getElementById("header");
    topnavbar.style.display = "none";
    navbar.style.display = "none";
  }, 100);

    const {isPortuguese, isEnglish, isSpanish, langToEnglish, langToPortuguese, langToSpanish} = useContext(Context)
      


      const nameInput = useRef(null)

      const handleFocusInput = (e) => {
        
        nameInput.current.focus()
        window.scrollTo(0, 0)
      
      }

      const equipAnchor = (e) => {
        window.scrollTo(0,3700)
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
          src="https://uploaddeimagens.com.br/images/004/012/721/full/Grupo_882.png?1662489243"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[45%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[50%] 2xl:w-[30%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[15%]'>
               <button onClick={handleFocusInput} className='bg-transparent border border-[#81D742] hover:bg-[#81D742] text-white py-2 px-6 rounded-full text-sm font-bold duration-700'>TENHO INTERESSE</button>
                  
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
               <span className="text-[#81D742] font-extrabold"> POLIURETANO </span> PRESENTE ATÉ MESMO NO SEU CARRO
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              O PU é muito usado para a fabricação veículos. Ele está presente em painéis, teto, componentes da suspensão, filtros do ar condicionado, apoio de cabeça, volante, manopla de câmbio, assento, parachoque, revestimento de portas e muito mais. A Sulpol desenvolve continuamente novos equipamentos e sistemas com produtividade e automação aprimoradas, reduzindo as necessidades de recursos humanos, com o objetivo de diminuir os tempos  de ciclo produtivo.  
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
                    src="https://uploaddeimagens.com.br/images/004/012/734/full/Grupo_881.png?1662489768"
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
                  <div className="w-full h-[400px] lg:w-[50%]">
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/6z5iJPTyiAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                      <h2 className="text-2xl lg:text-3xl text-white leading-snug font-medium mb-50">LINHA DE DOSAGEM DE PU PARA <span className="text-[#81D742] font-extrabold">COMPONENTES AUTOMOTIVOS</span></h2>
                      <p className="text-base text-white font-light mb-20"><span className="text-[#81D742] font-medium">A Sulpol desenvolve soluções dedicadas de alta tecnologia, </span>de acordo com a necessidade de cada cliente, para a fabricação de filtros com PU expansivo ou adesivo. Projetamos e fabricamos linhas de produção sempre buscando aumentar a produtividade e reduzir os custos de produção.</p>
                      <ButtonLP onClick={handleFocusInput} text="QUERO SOLICITAR ORÇAMENTO"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
              <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px] uppercase"> <span className="text-[#81D742] font-extrabold">Melhor Performance</span> do seu filtro! </h2>
              <span className="text-[#81D742] text-center font-medium text-base block">A Sulpol desenvolve dosadoras de PU com o melhor da tecnologia do mercado! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute -bottom-[270px] -left-[80px] z-30" src="https://uploaddeimagens.com.br/images/004/012/752/full/Grupo_861.png?1662490561" alt="" />
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <p className="text-white text-sm font-light w-[90%]">Os filtros tem função importante no funcionamento do equipamento seja no setor automotivo ou industrial. Para isto é de extrema importância que sejam produzidos com equipamentos precisos para o alto desempenho deste componente.
                  </p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <p className="text-white text-sm font-light w-[90%]">O Poliuretano garante muitos benefícios, além de aumentar o desempenho do filtro, garantindo melhor vedação e resistência, desde que haja a dosagem correta!</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
            <div className="bg-gradient-180deg flex flex-col justify-center items-center w-full p-3 sm:p-0 sm:h-[25rem]">
                <h2 className="text-center text-white text-3xl text-bold mb-[40px] lg:w-[60%]">SOLUÇÕES PARA A APLICAÇÃO DE POLIURETANO EM <span className="text-[#81D742] font-extrabold">FILTROS AUTOMOTIVOS</span></h2>
                <p className="text-center text-white w-[95%] lg:w-[65%] text-base font-light mb-[50px]">
                  Para atender o mercado de filtros automotivos, a Sulpol desenvolve dosadoras de poliuretano (expansivo, compacto e adesivo) e automaçõesde acordo com a necessidade de cada cliente, visando o aumento de produtividade e as reduções nos custos de produção.
                </p>
                <ButtonLP onClick={equipAnchor} text="VER EQUIPAMENTOS"/>
            </div>
        </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="equipamentos">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <div>
                    <img src="https://uploaddeimagens.com.br/images/004/049/961/full/sasas.png?1664976649" alt="" />
                  </div>
                  <div className="pl-40">
                    <img src="https://uploaddeimagens.com.br/images/004/012/831/original/Grupo_870.png?1662492301" alt="" />
                  </div>
                </div>
  
                <div className="lg:w-[40%] mt-20 lg:mt-0">
                <h2 className="text-lp-mobile lg:text-lp font-medium text-white mb-[40px] uppercase"> Filtros <span className="text-[#81D742] font-extrabold">Planos</span> </h2>
                <p className="text-white font-light text-base">A SULPOL fabrica dosadoras de Poliuretano com mesas de coordenadas, e outros sistemas de aplicação tais como carrosséis e manipuladores. Cada equipamento é projetado de acordo com a necessidade do cliente sempre visando otimizar a produção.</p>
                <div>
                  <ul className="lp-ul ml-5 mt-10">
                    <li className="text-white my-3">Dosadoras de poliuretano multicomponentes</li>
                    <li className="text-white my-3">Sistema de pigmentação direta</li>
                    <li className="text-white my-3">Sistema cartesiano X,Y,Z</li>
                    <li className="text-white my-3">Sistemas automatizados de aplicação de desmoldante</li>
                    <li className="text-white my-3">Carrosséis automatizados com parada</li>
                    <li className="text-white my-3">Esteiras de condução e alimentação</li>
                    <li className="text-white my-3">Sistema de rebarbação</li>
                    <li className="text-white my-3">Outros projetos especiais</li>
                  </ul>
                </div>
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
          src="https://uploaddeimagens.com.br/images/004/012/721/full/Grupo_882.png?1662489243"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[45%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[50%] 2xl:w-[30%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[15%]'>
               <button onClick={handleFocusInput} className='bg-transparent border border-[#81D742] hover:bg-[#81D742] text-white py-2 px-6 rounded-full text-sm font-bold duration-700'>I'M INTERESTED</button>
                  
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
               <span className="text-[#81D742] font-extrabold"> POLYURETHANE</span> IS EVEN IN YOUR CAR
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              PU is widely used to manufacture vehicles. It is present in panels, roof, suspension components, air conditioning filters, headrest, steering wheel, shift knob, seat, bumper, door lining and much more. Sulpol continuously develops new equipment and systems with improved productivity and automation, reducing the need for human resources, with the aim of reducing production cycle times.
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
                        src="https://uploaddeimagens.com.br/images/004/012/734/full/Grupo_881.png?1662489768"
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
                  <div className="w-full h-[400px] lg:w-[50%]">
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/6z5iJPTyiAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                      <h2 className="text-2xl lg:text-3xl text-white leading-snug font-medium mb-50">PU DOSING LINE FOR <span className="text-[#81D742] font-extrabold">AUTOMOTIVE COMPONENTS</span></h2>
                      <p className="text-base text-white font-light mb-20"><span className="text-[#81D742] font-medium">Sulpol develops dedicated high-tech solutions, according to the needs of each client, </span>for the manufacture of filters with expansive PU or adhesive. We design and manufacture production lines always seeking to increase productivity and reduce production costs.</p>
                      <ButtonLP onClick={handleFocusInput} text="I WANT TO REQUEST A BUDGET"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
              <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px] uppercase"> <span className="text-[#81D742] font-extrabold">Best Performance</span> of your filter! </h2>
              <span className="text-[#81D742] text-center font-medium text-base block">Sulpol develops PU dispensers with the best technology on the market! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute -bottom-[270px] -left-[80px] z-30" src="https://uploaddeimagens.com.br/images/004/012/752/full/Grupo_861.png?1662490561" alt="" />
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <p className="text-white text-sm font-light w-[90%]">Filters play an important role in the operation of equipment whether in the automotive or industrial sector. For this, it is extremely important that they are produced with precise equipment for the high performance of this component.
                  </p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <p className="text-white text-sm font-light w-[90%]">Polyurethane ensures many benefits, in addition to increasing filter performance, ensuring better sealing and resistance, as long as there is the correct dosage!</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
            <div className="bg-gradient-180deg flex flex-col justify-center items-center w-full p-3 sm:p-0 sm:h-[25rem]">
                <h2 className="text-center text-white text-3xl text-bold mb-[40px] lg:w-[60%]">SOLUTIONS FOR THE APPLICATION OF POLYURETHANE IN <span className="text-[#81D742] font-extrabold">AUTOMOTIVE FILTERS</span></h2>
                <p className="text-center text-white w-[95%] lg:w-[65%] text-base font-light mb-[50px]">
                To serve the automotive filter market, Sulpol develops polyurethane dispensers (expansive, compact and adhesive) and automations according to the needs of each client, aiming at increasing productivity and reducing production costs.
                </p>
                <ButtonLP onClick={equipAnchor} text="SEE EQUIPMENT"/>
            </div>
        </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="equipamentos">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <div>
                    <img src="https://uploaddeimagens.com.br/images/004/049/961/full/sasas.png?1664976649" alt="" />
                  </div>
                  <div className="pl-40">
                    <img src="https://uploaddeimagens.com.br/images/004/012/831/original/Grupo_870.png?1662492301" alt="" />
                  </div>
                </div>
  
                <div className="lg:w-[40%] mt-20 lg:mt-0">
                <h2 className="text-lp-mobile lg:text-lp font-medium text-white mb-[40px] uppercase"> Flat <span className="text-[#81D742] font-extrabold">Filters</span> </h2>
                <p className="text-white font-light text-base">SULPOL manufactures Polyurethane dosers with coordinate tables, and other application systems such as carousels and manipulators. Each equipment is designed according to the customer's needs, always aiming to optimize production.</p>
                <div>
                  <ul className="lp-ul ml-5 mt-10">
                    <li className="text-white my-3">Multi-component polyurethane dispensers</li>
                    <li className="text-white my-3">Direct pigmentation system</li>
                    <li className="text-white my-3">Cartesian system X,Y,Z</li>
                    <li className="text-white my-3">Automated mold release application systems</li>
                    <li className="text-white my-3">Automated carousels with stop</li>
                    <li className="text-white my-3">Driving and feeding mats</li>
                    <li className="text-white my-3">Deburring system</li>
                    <li className="text-white my-3">Other special projects</li>
                  </ul>
                </div>
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
          "name": 'SOLICITUD',
          "hash": '#aplicacao'
      },
    
    
      {
          "id": 4,
          "name": 'EQUIPOS',
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
          src="https://uploaddeimagens.com.br/images/004/012/721/full/Grupo_882.png?1662489243"
          alt=""
        />
         <div className='container mx-auto relative z-20'>
          <nav className='flex justify-between items-center h-32'>
              <div className='w-[50%] lg:w-[15%] 2xl:w-[45%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>
  
              <ul className='hidden md:flex justify-center gap-5 lg:w-[50%] 2xl:w-[30%]' key={links.id}>
              {links.map((links) => (
               
                <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
               
              ))}
              </ul>
  
              <div className='hidden md:block lg:w-[17%] 2xl:w-[15%]'>
              <button onClick={handleFocusInput} className='bg-transparent border border-[#81D742] hover:bg-[#81D742] text-white py-2 px-6 redondeado-texto completo-sm fuente-negrita duración-700' >ESTOY INTERESADO</button>
                  
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
              <span className="text-[#81D742] font-extrabold"> POLIURETANO </span> INCLUSO PRESENTE EN TU COCHE
              </h1>
              <p className="text-white font-light text-base mb-[60px] w-[90%]">
              PU es ampliamente utilizado para la fabricación de vehículos. Está presente en paneles, techo, componentes de suspensión, filtros de aire acondicionado, reposacabezas, volante, palanca de cambios, asiento, parachoques, revestimiento de puertas y mucho más. Sulpol desarrolla continuamente nuevos equipos y sistemas con mayor productividad y automatización, reduciendo la necesidad de recursos humanos, con el objetivo de reducir los tiempos de ciclo de producción.
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
                    src="https://uploaddeimagens.com.br/images/004/012/734/full/Grupo_881.png?1662489768"
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
                        placeholder= "Nombre"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg focus:outline focus:outline-sulpol-green"
                        type="text"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="Teléfono"
                        className="block bg-transparent placeholder:text-white text-white border border-[#707070] px-6 py-3 rounded-lg"
                        type="tel"
                        name=""
                        id=""
                      />
                      <input
                        placeholder="Tu mejor correo electrónico"
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
                  <div className="w-full h-[400px] lg:w-[50%]">
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/6z5iJPTyiAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
  
                  <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                  <h2 className="text-2xl lg:text-3xl text-white lead-snug font-medium mb-50">LÍNEA DE DOSIFICACIÓN PU PARA <span className="text-[#81D742] font-extrabold">COMPONENTES AUTOMOCIÓN</span></h2>
                  <p className="text-base text-white font-light mb-20"><span className="text-[#81D742] font-medium">Sulpol desarrolla soluciones dedicadas de alta tecnología, </span>de acuerdo con la necesidades de cada cliente, para la fabricación de filtros con PU expansivo o adhesivo. Diseñamos y fabricamos líneas de producción buscando siempre aumentar la productividad y reducir los costos de producción.</p>
                  <ButtonLP onClick={handleFocusInput} text="QUIERO SOLICITAR PRESUPUESTO"/>
                  </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 bg-[#202124]">
          <div className="container mx-auto">
          <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px] uppercase"> <span className="text-[#81D742] font-extrabold">Mejor rendimiento </span> de su filtro! </h2>
          <span className="text-[#81D742] text-center font-medium text-base block">Sulpol desarrolla dosificadores de PU con la mejor tecnología del mercado! </span>
              <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
              <img className="hidden lg:block absolute -bottom-[270px] -left-[80px] z-30" src="https://uploaddeimagens.com.br/images/004/012/752/full/Grupo_861.png?1662490561" alt="" />
              <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
              <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
              <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                  <p className="text-white text-sm font-light w-[90%]">Los filtros juegan un papel importante en el funcionamiento de los equipos ya sea en el sector automotriz o industrial. Por eso, es de suma importancia que sean producidos con equipos precisos para el alto desempeño de este componente.
                  </p>
              </div>
              <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                  <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                  <p className="text-white text-sm font-light w-[90%]">El poliuretano asegura muchos beneficios, además de aumentar el rendimiento del filtro, asegurando un mejor sellado y resistencia, ¡siempre y cuando se dé la dosis correcta!</p>
              </div>
              </div>
          </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="aplicacao">
        <div className="container mx-auto">
            <div className="bg-gradient-180deg flex flex-col justify-center items-center w-full p-3 sm:p-0 sm:h-[25rem]">
            <h2 className="text-center text-white text-3xl text-bold mb-[40px] lg:w-[60%]">SOLUCIONES PARA LA APLICACIÓN DE POLIURETANO EN <span className="text-[#81D742] font-extrabold">FILTROS AUTOMOTRICES</span></h2>
                <p className="text-center text-white w-[95%] lg:w-[65%] text-base font-light mb-[50px]">
                Para atender el mercado de filtros automotrices, Sulpol desarrolla dispensadores de poliuretano (expansivo, compacto y adhesivo) y automatizaciones de acuerdo con las necesidades de cada cliente, con el objetivo de aumentar la productividad y reducir los costos de producción.
                </p>
                <ButtonLP onClick={equipAnchor} text="VER EQUIPAMENTOS"/>
            </div>
        </div>
        </div>
  
        <div className="py-36 lg:pt-80 bg-[#202124] relative" id="equipamentos">
          <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row justify-between">
                <div>
                  <div>
                    <img src="https://uploaddeimagens.com.br/images/004/049/961/full/sasas.png?1664976649" alt="" />
                  </div>
                  <div className="pl-40">
                    <img src="https://uploaddeimagens.com.br/images/004/012/831/original/Grupo_870.png?1662492301" alt="" />
                  </div>
                </div>
  
                <div className="lg:w-[40%] mt-20 lg:mt-0">
                <h2 className="text-lp-mobile lg:text-lp font-medium text-white mb-[40px] uppercase"> Filtros <span className="text-[#81D742] font-extrabold">Planes</span > </h2>
                <p className="text-white font-light text-base">SULPOL fabrica dosificadores de poliuretano con tablas de coordenadas, y otros sistemas de aplicación como carruseles y manipuladores. Cada equipo es diseñado de acuerdo a las necesidades del cliente, siempre con el objetivo de optimizar la producción.</p>
                <div>
                  <ul className="lp-ul ml-5 mt-10">
                  <li className="text-white my-3">Dispensadores de poliuretano multicomponente</li>
                    <li className="text-white my-3">Sistema de pigmento directo</li>
                    <li className="text-white my-3">Sistema cartesiano X,Y,Z</li>
                    <li className="text-white my-3">Sistemas de aplicación de agentes de liberación automatizados</li>
                    <li className="text-white my-3">Carruseles automatizados con parada</li>
                    <li className="text-white my-3">Alfombras para conducir y comer</li>
                    <li className="text-white my-3">Sistema de desbarbado</li>
                    <li className="text-white my-3">Otros proyectos especiales</li>
                  </ul>
                </div>
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

export default LPFiltros;
