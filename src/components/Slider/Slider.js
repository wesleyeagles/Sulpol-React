import React, { useContext } from 'react'
import './Slidercss.css'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import Slide1 from '../../images/slide1Home.png'
import Slide2 from '../../images/slide1Home.png'
import Slide3 from '../../images/slide1Home.png'
import ContextProdutos from '../../contexts/ContextProdutos';

export default () => {


  const { menuMobile, ptLang, enLang, esLang } = useContext(ContextProdutos)

  return (
    <div>
    {ptLang? <Swiper className={`homeSwipe duration-1000`}
      modules={[Pagination, Autoplay]}
      autoPlay={true}
      pagination={{clickable: true}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide1} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>Soluções tecnológicas para poliuretanos</h1>
            <p className='text-base text-white mb-12 lg:w-[33%]'>Há mais de 30 anos entregando máquinas e equipamentos de alta produtividade, confiabilidade e eficiência.</p>
            <ButtonPrimary link="/Contato#header" text="Entrar em contato" />
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide2} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[60%] mb-7 pt-40'>Líder no mercado de fabricação de equipamentos para Poliuretano</h1>
            <p className='text-base text-white mb-12 lg:w-[33%]'>Conta com corpo técnico especializado nesse mercado para desenvolver produtos especiais.</p>
            <ButtonPrimary link="/Contato#header" text="Entrar em contato" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide3} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[60%] mb-7 pt-40'>Desenvolve produtos especiais que optimizem o processo de fabricação de peças</h1>
            <p className='text-base text-white mb-12 lg:w-[33%]'>Atendendo os diversos setores da indústria, agregando ainda mais qualidade ao seu produto final.</p>
            <ButtonPrimary link="/Contato#header" text="Entrar em contato" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
    
    :

    enLang? 


    <Swiper className={`homeSwipe duration-1000`}
      modules={[Pagination, Autoplay]}
      autoPlay={true}
      pagination={{clickable: true}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide1} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>Technological solutions for polyurethanes</h1>
            <p className='text-base text-white mb-12 lg:w-[33%]'>For over 30 years delivering machines and equipment of high reliability and efficiency.</p>
            <ButtonPrimary link="/Contato#header" text="Contact us" />
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide2} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[60%] mb-7 pt-40'>Market leader in the manufacture of equipment for Polyurethane</h1>
            <p className='text-base text-white mb-12 lg:w-[33%]'>For over 30 years delivering machines and equipment of high reliability and efficiency.</p>
            <ButtonPrimary link="/Contato#header" text="Contact us" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-[100vh] items-center flex z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={Slide3} />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[60%] mb-7 pt-40'>For over 30 years delivering machines and equipment of high reliability and efficiency.</h1>
            <ButtonPrimary link="/Contato#header" text="Contact us" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

    :

    null
  
  }






    </div>






  );
};








