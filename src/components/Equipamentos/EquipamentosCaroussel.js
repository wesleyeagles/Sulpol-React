import React, { useRef } from 'react'
import {ReactComponent as PrevArrow} from '../../images/prevArrow.svg'
import {ReactComponent as NextArrow} from '../../images/nextArrow.svg'
import {ReactComponent as ExplorarArrow} from '../../images/Explorar.svg'


import EcologicaAP from '../../images/ecologicaAP.png'
import ElastomachImage from '../../images/Elastomach.png'
import STCImage from '../../images/STC.png'
import STP15Image from '../../images/ST-15.png'
import Star300SImage from '../../images/new-images/star_300S_2.png'
import Star300SMRPImage from '../../images/new-images/STAR_300S-MRP.png'
import Star300SPVImage from '../../images/new-images/star300s-pv.png'
import Star300SSR24Image from '../../images/new-images/star_300r24.png'
import Star300STGImage from '../../images/new-images/star_300-tg.png'
import { HashLink } from 'react-router-hash-link'
import Context from '../../contexts/MainContext'
import { useContext } from 'react'



const EquipamentosCaroussel = () => {

  const {isPortuguese, isEnglish, isSpanish} = useContext(Context)
    
    const carousel = useRef(null)

    const responsive = window.matchMedia("(max-width: 1280px)")

    const handleLeftClick = (e) => {
        e.preventDefault();
        if (responsive.matches) {
          carousel.current.scrollLeft -= 340 + 20;
        } else {
          carousel.current.scrollLeft -= 432;
        }
        
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();

        if (responsive.matches) {
          carousel.current.scrollLeft += 340 + 20;
          console.log("Matched")
        } else {
          carousel.current.scrollLeft += 432;
        }


        
      };

  if (isPortuguese) {
    return (
      <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-5 w-full lg:w-[66%] xl:w-[87%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[50px]' src={EcologicaAP} alt='ecologica ap'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ECOLÓGICA AP</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de alta pressão</p>
                  <HashLink to='/DosadoraAltapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
              </div>
              </div>
          
   
           
                <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[280px] absolute -top-[40px]' src={ElastomachImage}  alt='elastomach'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora para elastômero</p>
                  <HashLink to='/DosadoraElastomero#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
                  </div>
              
    
      
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[220px] absolute -top-[70px]' src={STCImage} alt='st-c'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/DosadoraBaixapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar<ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
       
     
     
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[150px] absolute -top-[50px]' src={STP15Image} alt='stp15a'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/DosadoraPortatil#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[220px] absolute -top-[20px]' src={Star300SImage} alt='star300s'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/Star300S#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[300px] absolute -top-[20px]' src={Star300SMRPImage} alt='star300smrp'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-MRP</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/Star300SMRP#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[220px] absolute -top-[20px]' src={Star300SPVImage} alt='star300spv'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-PV</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/Star300SPV#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[300px] absolute -top-[0px]' src={Star300SSR24Image} alt='star300sr2436'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-R24/36</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/Star300SR2436#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[220px] absolute -top-[20px]' src={Star300STGImage} alt='star300stg'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-TG</h3>
                  <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                  <HashLink to='/Star300STG#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
          
      </div>
      <div className='flex gap-2'>
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
    )
  } else if (isEnglish) {
    return (
      <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-5 w-full lg:w-[66%] xl:w-[87%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[50px]' src={EcologicaAP} alt='ecologica ap'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>AP ECOLOGICAL</h3>
                  <p className='text-center text-lg font-light mb-3'>High pressure injector/doser</p>
                  <HashLink to='/DosadoraAltapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
              </div>
              </div>
          
   
           
                <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                  <img className='w-[280px] absolute -top-[40px]' src={ElastomachImage} alt='elastomach'/>
                  <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light mb-3'>Injector/Doser for elastomer</p>
                  <HashLink to='/DosadoraElastomero#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
                  </div>
              
    
      
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[70px]' src={STCImage} alt='st-c'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/DosadoraBaixapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
       
     
     
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[150px] absolute -top-[50px]' src={STP15Image} alt='stp15a'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/DosadoraPortatil#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300SImage} alt='star300s'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/Star300S#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[300px] absolute -top-[20px]' src={Star300SMRPImage} alt='star300smrp'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-MRP</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/Star300SMRP#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300SPVImage} alt='star300spv'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-PV</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/Star300SPV#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[300px] absolute -top-[0px]' src={Star300SSR24Image} alt='star300sr2436'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-R24/36</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/Star300SR2436#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300STGImage} alt='star300stg'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-TG</h3>
                  <p className='text-center text-lg font-light mb-3'>Low pressure injector/doser</p>
                  <HashLink to='/Star300STG#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>To explore <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
          
      </div>
      <div className='flex gap-2'>
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
    )
  } else if (isSpanish) {
    return (
      <div className='wrapper flex flex-col lg:flex-row justify-center w-full relative mt-16'>
      <div ref={carousel} className='flex items-center overflow-x-auto gap-5 w-full lg:w-[66%] xl:w-[87%] 2xl:w-[87%] scroll-smooth h-[450px] carouselE'>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[50px]' src={EcologicaAP} alt='ecologica ap'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>AP ECOLÓGICO</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de alta presión</p>
                  <HashLink to='/DosadoraAltapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
              </div>
              </div>
          
   
           
                <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[280px] absolute -top-[40px]' src={ElastomachImage}  alt='elastomach'/>
                <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ELASTOMACH</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/Dosificador para elastómero</p>
                  <HashLink to='/DosadoraElastomero#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
                  </div>
              
    
      
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[70px]' src={STCImage} alt='st-c'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-C</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/DosadoraBaixapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar<ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
       
     
     
         
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[150px] absolute -top-[50px]' src={STP15Image} alt='stp15a'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>ST-P15A</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/DosadoraPortatil#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300SImage} alt='star300s'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/Star300S#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[300px] absolute -top-[20px]' src={Star300SMRPImage} alt='star300smrp'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-MRP</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/Star300SMRP#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300SPVImage} alt='star300spv'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-PV</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/Star300SPV#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar<ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[300px] absolute -top-[0px]' src={Star300SSR24Image} alt='star300sr2436'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-R24/36</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/Star300SR2436#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
  
              <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
              <img className='w-[220px] absolute -top-[20px]' src={Star300STGImage} alt='star300stg'/>
              <div className='mb-10'>
                  <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-TG</h3>
                  <p className='text-center text-lg font-light mb-3'>Inyector/dosificador de baja presión</p>
                  <HashLink to='/Star300STG#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Para Explorar <ExplorarArrow className='mt-1' /></HashLink>
                  </div>
              </div>
          
      </div>
      <div className='flex gap-2'>
      <PrevArrow onClick={handleLeftClick} className='lg:absolute left-0 lg:translate-y-[200px] cursor-pointer'/>
      <NextArrow onClick={handleRightClick} className='lg:absolute right-0 lg:translate-y-[200px] cursor-pointer'/>
      </div>
      </div>
    )
  }

  
}

export default EquipamentosCaroussel