import React, { useRef } from 'react'
import {ReactComponent as PrevArrow} from '../../images/prevArrow.svg'
import {ReactComponent as NextArrow} from '../../images/nextArrow.svg'
import {ReactComponent as ExplorarArrow} from '../../images/Explorar.svg'


import EcologicaAP from '../../images/ecologicaAP.png'
import { HashLink } from 'react-router-hash-link'



const EquipamentosCaroussel = () => {
    
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
                <img className='w-[280px] absolute -top-[40px]' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' alt='elastomach'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>ELASTOMACH</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora para elastômero</p>
                <HashLink to='/DosadoraElastomero#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
                </div>
            
  
    
       
            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[220px] absolute -top-[70px]' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt='st-c'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>ST-C</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/DosadoraBaixapressao#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>
     
   
   
       
            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[150px] absolute -top-[50px]' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' alt='stp15a'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>ST-P15A</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/DosadoraPortatil#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>

            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[220px] absolute -top-[20px]' src='https://uploaddeimagens.com.br/images/003/913/725/full/star_300S_2.png?1656005199' alt='star300s'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>Star 300S</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/Star300S#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>

            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[300px] absolute -top-[20px]' src='https://uploaddeimagens.com.br/images/003/913/756/full/STAR_300S-MRP.png?1656006258' alt='star300smrp'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-MRP</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/Star300SMRP#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>

            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[220px] absolute -top-[20px]' src='https://uploaddeimagens.com.br/images/003/913/769/full/star300s-pv.png?1656006655' alt='star300spv'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-PV</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/Star300SPV#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>

            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[300px] absolute -top-[0px]' src='https://uploaddeimagens.com.br/images/003/913/796/full/1123dfd.png?1656007347' alt='star300sr2436'/>
                <div className='mb-10'>
                <h3 className='text-center text-xl font-semibold mb-3'>Star 300S-R24/36</h3>
                <p className='text-center text-lg font-light mb-3'>Injetora/Dosadora de baixa pressão</p>
                <HashLink to='/Star300SR2436#header' className='flex items-center gap-2 text-center justify-center text-lg font-semibold text-sulpol-green'>Explorar <ExplorarArrow className='mt-1' /></HashLink>
                </div>
            </div>

            <div className='lg:max-w-[25rem] w-full lg:min-w-[320px] xl:min-w-[300px] lg:w-[49%] xl:w-[32%] h-[345px] bg-white overflow-visible flex flex-none flex-col items-center justify-end relative mx-auto shadow-xl'>
                <img className='w-[220px] absolute -top-[20px]' src='https://uploaddeimagens.com.br/images/003/913/802/full/star_300-tg.png?1656007443' alt='star300stg'/>
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
}

export default EquipamentosCaroussel