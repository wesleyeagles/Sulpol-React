import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import ContextProdutos from '../../contexts/ContextProdutos'
import Context from '../../contexts/MainContext'

function Footer() {

  const { handleOpen, handleOpen2, handleOpen3, handleOpen4, handleOpen5, handleOpen6 } = useContext(ContextProdutos)
  const { isPortuguese, isEnglish, isSpanish } = useContext(Context)


  if (isPortuguese) {
    return (
      <footer className='bg-[#222427] pt-32 relative z-10'>
       <div className='container mx-auto'>
       <div className='flex flex-wrap justify-between border-b border-gray-600 pb-100'>
       <div className='flex flex-col gap-10 lg:w-[16%]'>
       <img className='w-[200px]' src='https://uploaddeimagens.com.br/images/003/927/023/full/Ativo_1.png?1656938385' alt='' />
       <p className='text-white text-tiny font-light'>Fundada em 1989, hoje somos líder no mercado brasileiro e latino americano no desenvolvimento e  fabricação de dosadoras e injetoras de PU.</p>
       </div>
       
       <div className='flex flex-col gap-5 w-[49%] lg:w-[16%] mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Aonde estamos?</h3>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://www.google.com/maps/place/R.+S%C3%A3o+Paulo,+247+-+Mathias+Velho,+Canoas+-+RS,+92340-180/data=!4m2!3m1!1s0x95196557d820fb27:0xd4551155adaedb1c?sa=X&ved=2ahUKEwirkLu3p874AhVWu5UCHS7fB54Q8gF6BAgXEAE' rel='noreferrer'>Rua São Paulo, n° 247, Canoas (RS) CEP: 92340-180 - Brasil</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='mailto:comercial@sulpol.com.br' rel='noreferrer'>E-mail: comercial@sulpol.com.br</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='tel:555130756565' rel='noreferrer'>Telefone: +55 51 3075-6565</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://wa.me/5551995283277' rel='noreferrer'>WhatsApp: +55 51 9 9528-3277</a>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Institucional</h3>
       <HashLink to='/#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Início</HashLink>
       <HashLink to='/A-Sulpol#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>A Sulpol</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#aplicacoes' rel='noreferrer'>Aplicações</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#reasons' rel='noreferrer'>10 Razões</HashLink>
       <HashLink to='/Contato#header' className='text-[#CECECE] text-tiny' rel='noreferrer'>Contato/FAQ</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#blog' rel='noreferrer'>Blog</HashLink>
       </div>
   
       <div className='flex flex-col gap-5 w-[49%] lg:w-auto  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Produtos</h3>
       <HashLink to='/DosadoraElastomero#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Injetora P/Elastômero</HashLink>
       <HashLink to='/DosadoraPortatil#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Injetora Portátil</HashLink>
       <HashLink to='/DosadoraAltapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Injetora Alta pressão</HashLink>
       <HashLink to='/DosadoraBaixapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Injetora Baixa Pressão</HashLink>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Serviços</h3>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Garantia</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Treinamentos</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Assistência técnica</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Peças de reposição</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Upgrades e retrofits</HashLink>
       <HashLink to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Projetos especiais</HashLink>
       </div>
   
       <div className='flex flex-col gap-5'>
       <h3 className='text-white text-lg font-medium'>Siga a Sulpol</h3>
       <div className='flex gap-4'>
       <a href='https://www.facebook.com/sulpolPU' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/5be8266e693cf909992d9cde0f11b06d/raw/6a016070454c1d652b4cb39a55c96ff46c1cd481/facebook.svg' alt=''/></a>
       <a href='https://www.instagram.com/sulpol/' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/28bb34d8905e99973840a2ebbd24f12a/raw/50c7228d16e4298c58e1008457b98fff308b3886/instagram.svg' alt='' /></a>
       <a href='https://www.youtube.com/c/SulpolBr' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ebb7e6f227cbd4d620365d4ed7d4196e/raw/77473b997dca43063f1170cea9342871d00a01f0/youtube.svg' alt='' /></a>
       <a href='https://www.linkedin.com/company/36020533' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ed4051d92685166151dce48986cfac8f/raw/74716949b1018eab8cbf35c3a66d2c2b8168ef20/linkedin.svg' alt='' /></a>
       </div>
       </div>
   
   
       </div>
   
       <div className='flex flex-col lg:flex-row justify-center lg:justify-between mt-8 pb-8 gap-5 lg:gap-0'>
       <span className='text-white text-sm font-light flex lg:block justify-center'>2022 Todos os direitos reservados - SULPOL </span>
       <a href='#header' className='text-white font-light text-sm items-center gap-3 hidden lg:flex'>Voltar ao topo <img src='https://gistcdn.githack.com/wesleyeagles/017ff789af5bcd3bf86740e3005d98fc/raw/49e3c3ae42af54040c201b89da0ec3d929b51693/arrowfooter.svg' alt='' /></a>
       <span className='text-white font-light text-sm flex justify-center lg:justify-start items-center gap-2'>Desenvolvido por: <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/74737a30e75c25033c2da2b4175b6adc/raw/b7707e407845b36af4728e0ebf254b1a7cc8efb4/eagleslogo.svg' alt='' /></span>
       </div>
   
   
       </div>
      </footer>
     )
  } else if (isEnglish) {
    return (
      <footer className='bg-[#222427] pt-32 relative z-10'>
       <div className='container mx-auto'>
       <div className='flex flex-wrap justify-between border-b border-gray-600 pb-100'>
       <div className='flex flex-col gap-10 lg:w-[16%]'>
       <img className='w-[200px]' src='https://uploaddeimagens.com.br/images/003/927/023/full/Ativo_1.png?1656938385' alt='' />
       <p className='text-white text-tiny font-light'>Founded in 1989, today we are leader in the Brazilian and Latin American market in the development and manufacture of PU dosing and injection machines.</p>
       </div>
       
       <div className='flex flex-col gap-5 w-[49%] lg:w-[16%] mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Where are we?</h3>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://www.google.com/maps/place/R.+S%C3%A3o+Paulo,+247+-+Mathias+Velho,+Canoas+-+RS,+92340-180/data=!4m2!3m1!1s0x95196557d820fb27:0xd4551155adaedb1c?sa=X&ved=2ahUKEwirkLu3p874AhVWu5UCHS7fB54Q8gF6BAgXEAE' rel='noreferrer'>Rua São Paulo, n° 247, Canoas (RS) CEP: 92340-180 - Brasil</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='mailto:comercial@sulpol.com.br' rel='noreferrer'>Mail: comercial@sulpol.com.br</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='tel:555130756565' rel='noreferrer'>Phone: +55 51 3075-6565</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://wa.me/5551995283277' rel='noreferrer'>WhatsApp: +55 51 9 9528-3277</a>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Institutional</h3>
       <HashLink to='/#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Home</HashLink>
       <HashLink to='/A-Sulpol#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Sulpol</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#aplicacoes' rel='noreferrer'>Aplications</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#reasons' rel='noreferrer'>10 Reasons</HashLink>
       <HashLink to='/Contato#header' className='text-[#CECECE] text-tiny' rel='noreferrer'>Contact/FAQ</HashLink>
       </div>
   
       <div className='flex flex-col gap-5 w-[49%] lg:w-auto  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Products</h3>
       <HashLink to='/DosadoraElastomero#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Injector for Elastomer</HashLink>
       <HashLink to='/DosadoraPortatil#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Portable Injector</HashLink>
       <HashLink to='/DosadoraAltapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>High pressure injector</HashLink>
       <HashLink to='/DosadoraBaixapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Low Pressure Injector</HashLink>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Serviços</h3>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Guarantee</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Trainings</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Technical assistance</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Spare parts</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Upgrades and retrofits</HashLink>
       <HashLink to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Special projects</HashLink>
       </div>
   
       <div className='flex flex-col gap-5'>
       <h3 className='text-white text-lg font-medium'>Follow Sulpol</h3>
       <div className='flex gap-4'>
       <a href='https://www.facebook.com/sulpolPU' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/5be8266e693cf909992d9cde0f11b06d/raw/6a016070454c1d652b4cb39a55c96ff46c1cd481/facebook.svg' alt=''/></a>
       <a href='https://www.instagram.com/sulpol/' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/28bb34d8905e99973840a2ebbd24f12a/raw/50c7228d16e4298c58e1008457b98fff308b3886/instagram.svg' alt='' /></a>
       <a href='https://www.youtube.com/c/SulpolBr' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ebb7e6f227cbd4d620365d4ed7d4196e/raw/77473b997dca43063f1170cea9342871d00a01f0/youtube.svg' alt='' /></a>
       <a href='https://www.linkedin.com/company/36020533' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ed4051d92685166151dce48986cfac8f/raw/74716949b1018eab8cbf35c3a66d2c2b8168ef20/linkedin.svg' alt='' /></a>
       </div>
       </div>
   
   
       </div>
   
       <div className='flex flex-col lg:flex-row justify-center lg:justify-between mt-8 pb-8 gap-5 lg:gap-0'>
       <span className='text-white text-sm font-light flex lg:block justify-center'>2023 All rights reserved - SULPOL </span>
       <a href='#header' className='text-white font-light text-sm items-center gap-3 hidden lg:flex'>Back to top <img src='https://gistcdn.githack.com/wesleyeagles/017ff789af5bcd3bf86740e3005d98fc/raw/49e3c3ae42af54040c201b89da0ec3d929b51693/arrowfooter.svg' alt='' /></a>
       <span className='text-white font-light text-sm flex justify-center lg:justify-start items-center gap-2'>Made by: <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/74737a30e75c25033c2da2b4175b6adc/raw/b7707e407845b36af4728e0ebf254b1a7cc8efb4/eagleslogo.svg' alt='' /></span>
       </div>
   
   
       </div>
      </footer>
     )
  } else if (isSpanish) {
    return (
      <footer className='bg-[#222427] pt-32 relative z-10'>
       <div className='container mx-auto'>
       <div className='flex flex-wrap justify-between border-b border-gray-600 pb-100'>
       <div className='flex flex-col gap-10 lg:w-[16%]'>
       <img className='w-[200px]' src='https://uploaddeimagens.com.br/images/003/927/023/full/Ativo_1.png?1656938385' alt='' />
       <p className='text-white text-tiny font-light'>Fundada en 1989, hoy somos líderes en el mercado brasileño y latinoamericano en el desarrollo y fabricación de máquinas dosificadoras e inyectoras de PU.</p>
       </div>
       
       <div className='flex flex-col gap-5 w-[49%] lg:w-[16%] mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Dónde estamos?</h3>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://www.google.com/maps/place/R.+S%C3%A3o+Paulo,+247+-+Mathias+Velho,+Canoas+-+RS,+92340-180/data=!4m2!3m1!1s0x95196557d820fb27:0xd4551155adaedb1c?sa=X&ved=2ahUKEwirkLu3p874AhVWu5UCHS7fB54Q8gF6BAgXEAE' rel='noreferrer'>Rua São Paulo, n° 247, Canoas (RS) CEP: 92340-180 - Brasil</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='mailto:comercial@sulpol.com.br' rel='noreferrer'>E-mail: comercial@sulpol.com.br</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='tel:555130756565' rel='noreferrer'>Telefono: +55 51 3075-6565</a>
       <a target='_blank' className='text-[#CECECE] text-tiny' href='https://wa.me/5551995283277' rel='noreferrer'>WhatsApp: +55 51 9 9528-3277</a>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Institucional</h3>
       <HashLink to='/#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Comienzo</HashLink>
       <HashLink to='/A-Sulpol#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Sulpol</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#aplicacoes' rel='noreferrer'>Aplicaciones</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#reasons' rel='noreferrer'>10 Razones</HashLink>
       <HashLink to='/Contato#header' className='text-[#CECECE] text-tiny' rel='noreferrer'>Contacto/Preguntas Frecuentes</HashLink>
       <HashLink className='text-[#CECECE] text-tiny' to='/#blog' rel='noreferrer'>Blog</HashLink>
       </div>
   
       <div className='flex flex-col gap-5 w-[49%] lg:w-auto  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Productos</h3>
       <HashLink to='/DosadoraElastomero#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Inyector/Dosificador para Elastómero</HashLink>
       <HashLink to='/DosadoraPortatil#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Inyector/Dosificador Portátil</HashLink>
       <HashLink to='/DosadoraAltapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Inyector/Dosificador de Alta Presión</HashLink>
       <HashLink to='/DosadoraBaixapressao#header' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Inyector/Dosificador de Baja Presión</HashLink>
       </div>
   
       <div className='flex flex-col gap-5  mt-10 lg:mt-0'>
       <h3 className='text-white text-lg font-medium'>Servicios</h3>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Garantizar</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Entrenamientos</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Asistencia técnica</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Piezas de repuesto</HashLink>
       <HashLink  to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Actualizaciones y Retrofits</HashLink>
       <HashLink to='/#services' className='text-[#CECECE] text-tiny' href='' rel='noreferrer'>Proyectos Especiales</HashLink>
       </div>
   
       <div className='flex flex-col gap-5'>
       <h3 className='text-white text-lg font-medium'>Seguir Sulpol</h3>
       <div className='flex gap-4'>
       <a href='https://www.facebook.com/sulpolPU' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/5be8266e693cf909992d9cde0f11b06d/raw/6a016070454c1d652b4cb39a55c96ff46c1cd481/facebook.svg' alt=''/></a>
       <a href='https://www.instagram.com/sulpol/' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/28bb34d8905e99973840a2ebbd24f12a/raw/50c7228d16e4298c58e1008457b98fff308b3886/instagram.svg' alt='' /></a>
       <a href='https://www.youtube.com/c/SulpolBr' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ebb7e6f227cbd4d620365d4ed7d4196e/raw/77473b997dca43063f1170cea9342871d00a01f0/youtube.svg' alt='' /></a>
       <a href='https://www.linkedin.com/company/36020533' target='_blank' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ed4051d92685166151dce48986cfac8f/raw/74716949b1018eab8cbf35c3a66d2c2b8168ef20/linkedin.svg' alt='' /></a>
       </div>
       </div>
   
   
       </div>
   
       <div className='flex flex-col lg:flex-row justify-center lg:justify-between mt-8 pb-8 gap-5 lg:gap-0'>
       <span className='text-white text-sm font-light flex lg:block justify-center'>2022 Todos los derechos reservados - SULPOL </span>
       <a href='#header' className='text-white font-light text-sm items-center gap-3 hidden lg:flex'>Volver a la cima<img src='https://gistcdn.githack.com/wesleyeagles/017ff789af5bcd3bf86740e3005d98fc/raw/49e3c3ae42af54040c201b89da0ec3d929b51693/arrowfooter.svg' alt='' /></a>
       <span className='text-white font-light text-sm flex justify-center lg:justify-start items-center gap-2'>Desarrollado por: <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/74737a30e75c25033c2da2b4175b6adc/raw/b7707e407845b36af4728e0ebf254b1a7cc8efb4/eagleslogo.svg' alt='' /></span>
       </div>
   
   
       </div>
      </footer>
     )
  }
  
}

export default Footer