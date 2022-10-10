import React, { useRef } from "react";
import ButtonLP from "../components/LPComponents/ButtonLP";
import {motion} from "framer-motion"

import { HashLink } from 'react-router-hash-link'

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

function LPFiltros() {
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

      const equipAnchor = (e) => {
        window.scrollTo(0,3700)
      }

  return (
    <motion.div
    
    
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
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
    </motion.div>
  );
}

export default LPFiltros;
