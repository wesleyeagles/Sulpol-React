import React, { useRef } from "react";
import ButtonLP from "../components/LPComponents/ButtonLP";

import  BrazilFlag  from '../images/flagBrazil.png';
import  USAFlag  from '../images/flagUSA.png';
import  SpainFlag  from '../images/flagSpain.png';


import {motion} from "framer-motion"

import {ReactComponent as PrevArrow} from '../images/prevArrow.svg'
import {ReactComponent as NextArrow} from '../images/nextArrow.svg'
import {ReactComponent as ExplorarArrow} from '../images/Explorar.svg'

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

function LPCalcado() {
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
        src="https://uploaddeimagens.com.br/images/003/912/087/full/Grupo_583.png?1655921460"
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
            <div className='flex items-center gap-1 Flags md:w-[10%]'>
            <button> <img src={BrazilFlag}/> </button>
            <button> <img className='grayscale' src={USAFlag}/></button>
            <button> <img className='grayscale' src={SpainFlag}/></button>
            </div>

        </nav>
    </div>
      <div className="container mx-auto relative z-10" id="header">
        <div className="flex flex-col lg:flex-row justify-between mt-100 lg:mt-200 pb-20">
          <div className="lg:w-[38%] 2xl:w-[35%]">
            <h1 className="text-white text-lp-mobile lg:text-lp font-medium leading-tight mb-[40px]">
              SOLUÇÕES PARA O <span className="text-[#81D742] font-extrabold"> SETOR CALÇADISTA </span>
            </h1>
            <p className="text-white font-light text-base mb-[60px] w-[90%]">
            Tem uma indústria de calçados e quer inovar? A tecnologia de PU pode ser uma grande aliada! Invista em dosadoras de poliuretano e conquiste o consumidor! Tendo como características <span className="text-[#81D742] font-extrabold">versatilidade e alto desempenho</span>, o material garante vantagens como conforto, <span className="text-[#81D742] font-extrabold">performance e resistência</span>, além de poder substituir diversos outros materiais com perfeição e menor custo. 
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
                  src="https://uploaddeimagens.com.br/images/003/923/321/full/Grupo_849.png?1656597512"
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
                <div className="w-full h-[300px] lg:h-auto lg:w-[50%]">
                  <img src="https://uploaddeimagens.com.br/images/003/923/324/full/Grupo_855.png?1656597618" alt="" />
                </div>

                <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
                    <h2 className="text-2xl lg:text-3xl text-white leading-snug font-medium mb-50">SOLUÇÕES PARA APLICAÇÕES DE PU EM <span className="text-[#81D742] font-extrabold">BOTAS, PALMILHAS E CALÇADOS DE SEGURANÇA</span></h2>
                    <p className="text-base text-white font-light mb-20">A Sulpol produz <span className="text-[#81D742] font-medium">dosadoras de Poliuretano, prensas, porta moldes e linhas completas, automáticas, semi-automáticas ou manuais</span>, de acordo com a necessidade de cada cliente, garantindo uma dosagem precisa e a densidade ideal para o seu produto!</p>
                    <ButtonLP onClick={handleFocusInput} text="QUERO SOLICITAR ORÇAMENTO"/>
                </div>
            </div>
        </div>
      </div>

      <div className="py-36 bg-[#202124]">
        <div className="container mx-auto">
            <h2 className="text-lp-mobile lg:text-lp font-medium text-white text-center mb-[40px]">VANTAGENS DO USO DO <span className="text-[#81D742] font-extrabold">PU</span> FABRICAÇÃO DE CALÇADOS </h2>
            <span className="text-[#81D742] text-center font-medium text-base block">A Sulpol desenvolve dosadoras de PU com o melhor da tecnologia do mercado! </span>
            <div className="flex flex-col lg:flex-row justify-between mt-100 relative">
            <img className="hidden lg:block absolute -bottom-[270px] -left-[80px] z-30" src="https://uploaddeimagens.com.br/images/003/923/589/full/Grupo_850.png?1656605800" alt="" />
            <img className="hidden lg:block absolute right-72 top-20" src='https://gistcdn.githack.com/wesleyeagles/d4308663e7b90444d3da9580e577844e/raw/ac33c8bd8a7e6230d02875247810d21280983626/linegroup.svg' alt='' />
            <img className="hidden lg:block absolute z-50 lg:right-[270px] 2xl:right-[295px] lg:-bottom-[300px] 2xl:-bottom-[368px] w-[36%]" src='https://gistcdn.githack.com/wesleyeagles/3ead0ceee6e38fb8d2d0af3df7e67b5e/raw/50409fe51272287f73c2b32fe8502194d6af587d/linegroup.svg' alt='' />
            <div className="w-full lg:w-[680px] h-[240px] bg-gradient py-50 px-8 relative z-10">
                <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">01</span>
                <h3 className="text-white text-lg font-medium mb-[10px]">Conforto Extremo</h3>
                <p className="text-white text-sm font-light w-[90%]">Uma das principais vantagens é o <span className="text-[#81D742] font-extrabold">conforto extremo</span> que ele proporciona, tanto para linhas de segurança, calçados esportivos ou para modelos casuais.
A tecnologia do PU <span className="text-[#81D742] font-extrabold">reduz a fadiga</span> nos pés e nas pernas, através da absorção
de impacto, evitando atritos em excesso com o solo!
</p>
            </div>
            <div className="w-full lg:w-[680px] relative h-[240px] bg-gradient py-50 px-8 mt-20  lg:mt-[290px]">
                <span className="absolute -top-20 text-[70px] lg:text-[100px] text-[#81D742] font-extrabold flex num-shadow">02</span>
                <h3 className="text-white text-lg font-medium mb-[10px]">Flexibilidade</h3>
                <p className="text-white text-sm font-light w-[90%]">Por suas características, os poliuretanos são aproveitados em <span className="text-[#81D742] font-extrabold">várias aplicações</span> nos calçados. Eles apresentam <span className="text-[#81D742] font-extrabold">excelente resistência mecânica</span>, densidades compatíveis para diferentes funções e outras propriedades bastante apropriadas para a indústria. </p>
            </div>
            </div>
        </div>
      </div>

      <div className="py-36 lg:pt-80 bg-[#202124] relative" id="aplicacao">
      <div className="container mx-auto">
          <div className="bg-gradient-180deg flex flex-col justify-center items-center w-full h-[25rem]">
              <h2 className="text-center text-white text-3xl text-bold mb-[40px]">PRODUZA <span className="text-[#81D742] font-extrabold">CALÇADOS</span> COM O MÁXIMO CONFORTO</h2>
              <p className="text-center text-white w-[95%] lg:w-[65%] text-base font-light mb-[50px]">Se você busca produzir calçados com foco no conforto, como calçados de segurança e tênis esportivos, a tecnologia do PU pode ser sua aliada. Solados desenvolvidos com este material absorvem o impacto da pisada, evitando atritos excessivos e reduzindo a fadiga nas pernas e pés.</p>
              <ButtonLP onClick={equipAnchor} text="VER EQUIPAMENTOS"/>
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
            <div className="w-[250px] h-300  flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/725/full/star_300S_2.png?1656005199' /></div>
            <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold text-white mb-3'>STAR 300S</h3>
                <p className='text-center text-lg font-light text-white mb-3'>Dosadora estática</p>
                <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
            </div>
            </div>
        
 
         
              <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
              <div className="w-[250px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/769/full/star300s-pv.png?1656006655' /></div>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold text-white mb-3'>STAR 300S - PV</h3>
                <p className='text-center text-lg font-light text-white mb-3'>Dosadora estática</p>
                <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                </div>
                </div>
            
  
    
       
            <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
            <div className="w-[300px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[100%]' src='https://uploaddeimagens.com.br/images/003/913/796/full/1123dfd.png?1656007347' /></div>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold text-white mb-3'>STAR 300S - R24/36</h3>
                <p className='text-center text-lg font-light text-white mb-3'>Dosadora rotativa</p>
                <a className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green cursor-pointer' onClick={handleFocusInput}>Explorar <ExplorarArrow className='mt-1' /> </a>
                </div>
            </div>
     
   
   
       
            <div className='w-full lg:w-[25rem] h-[430px] bg-[#2C2D2E] overflow-visible flex flex-none flex-col items-center justify-center relative rounded-lg'>
            <div className="w-[350px] h-300 flex justify-center items-center"><img className='lg:w-[70%] 2xl:w-[70%]' src='https://uploaddeimagens.com.br/images/003/913/802/full/star_300-tg.png?1656007443' /></div>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold text-white mb-3'>STAR 300S-TG</h3>
                <p className='text-center text-lg font-light text-white mb-3'>Dosadora rotativa</p>
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
    </motion.div>
  );
}

export default LPCalcado;
