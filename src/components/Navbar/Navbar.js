import React, { useState } from 'react'
import {ReactComponent as Logo } from '../../images/logo.svg';


import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

import '../Navbar/Navbar.css'


import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react';
import ContextProdutos from '../../contexts/ContextProdutos';

function Navbar() {

  const { menuMobile, setMenuMobile, menuProdutos, setProdutos, ptLang, enLang } = useContext(ContextProdutos)


 

  const openMenu = () => {

    if (menuProdutos === true) {
      setProdutos(!menuProdutos)
    }


    setMenuMobile(!menuMobile);
  }

  const closeMenu = () => {
    setProdutos(false)
  }


  const openProdutos = () => {
    setProdutos(!menuProdutos);

    if (data === true) {
      setData(!data)
    }
  }

  const openProdutosMobile = () => {
    openProdutos();
    openMenu();
  }

  const [hideMenu] = useState(0);


  const [data, setData] = useState(0)


 




  return (


    <div>
    {ptLang? <div id='header'>
    <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
        <HashLink onClick={closeMenu} to={'/#header'}><div> <Logo className="w-48 logo"/> </div></HashLink>
        <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
          <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/#header'}>Inicio</HashLink>   
          <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
          <li onClick={openProdutos} className="nav-HashLink text-base flex items-center cursor-pointer">Produtos <IoMdArrowDropdown className='mt-1' /></li>
          <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-base cursor-pointer">Serviços</li></HashLink>
          <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-base cursor-pointer">Aplicação</li></HashLink>
          <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-base cursor-pointer">FAQ</li></HashLink>

          <div  className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
          <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink> 
          {/* 
          <Flags></Flags>
          */}
          </div>
        </ul>

        
        <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
        </div>
        
      </div>
    </nav>

    <div className={`w-full fixed z-40 h-550 pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
        <ul className='flex flex-col items-center gap-5'>
        <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/#header'}>Inicio</HashLink>   
        <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
        <li onClick={openProdutosMobile} className="nav-HashLink text-xl flex items-center text-white">Produtos <IoMdArrowDropdown className='mt-1' /></li>
        <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-xl text-white">Serviços</li></HashLink>
        <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-xl text-white">Aplicação</li></HashLink>
        <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-xl text-white">FAQ</li></HashLink>
        <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink> 
        </ul>

    </div>

    <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'} ${hideMenu ? "-translate-y-[170px]" : '-translate-y-[0px]'}`}>
 

      <div className={`flex flex-wrap lg:flex-nowrap styled-scroll lg:flex-col lg:pt-8 lg:mt-0 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[85vh] overflow-y-scroll" : null}`}>

      <HashLink onClick={closeMenu} className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORAS DE <span className='text-sulpol-green font-bold'>CALÇADO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/725/full/star_300S_2.png?1656005199' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
     {/*   <HashLink className='w-[100%]' to='/Star300SPV#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-PV</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/769/full/star300s-pv.png?1656006655' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300SR2436#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR 300S-<span className='text-sulpol-green font-bold'>R24/36</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/796/full/1123dfd.png?1656007347' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300STG#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-TG</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/802/full/star_300-tg.png?1656007443' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> */}
       <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE<br/><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/816/full/ECOLOGICA-AP-100-A_sem_piso.png?1656007765' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>

       <HashLink onClick={closeMenu} className='w-[100%]' to='/DCPD#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DCPD <span className='text-sulpol-green font-bold'>LÓGICA AP</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/924/542/full/Ativo_1.png?1656676377' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
       <HashLink onClick={closeMenu} className='w-[100%]' to='/Cabecote#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>CABEÇOTES <span className='text-sulpol-green font-bold'>MISTURADORES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src='https://uploaddeimagens.com.br/images/003/924/552/full/Ativo_1.png?1656677238' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
       <HashLink onClick={closeMenu} className='w-[100%]' to='/Bombas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>BOMBAS DE <span className='text-sulpol-green font-bold'>PU</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[60px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/924/560/full/WhatsApp_Image_2022-07-01_at_09.21.51-removebg-preview.png?1656678154' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
       <HashLink onClick={closeMenu} className='w-[100%]' to='/Porta-Moldes#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PORTA <span className='text-sulpol-green font-bold'>MOLDES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[55px] h-full' src='https://uploaddeimagens.com.br/images/003/924/570/full/Ativo_2.png?1656678952' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
       <HashLink onClick={closeMenu} className='w-[100%]' to='/Paineis-e-Telhas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>PAINÉIS / <span className='text-sulpol-green font-bold'>TELHAS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/924/578/full/termoacusticas-removebg-preview.png?1656679360' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
       <HashLink onClick={closeMenu} className='w-[100%]' to='/Projetos-Especiais#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PROJETOS <span className='text-sulpol-green font-bold'>ESPECIAIS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[80px] h-full' src='https://uploaddeimagens.com.br/images/003/924/593/full/Ativo_3-removebg-preview.png?1656680249' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>

      
      </div>

    
      
    </div>
    
    <div>
    </div>
      
    </div>
    
    
    : enLang?
  
  
  
    <div id='header'>
    <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
        <HashLink to={'/#header'}><div> <Logo className="w-48 logo"/> </div></HashLink>
        <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
          <HashLink className="nav-HashLink text-base" to={'/#header'}>Home</HashLink>   
          <HashLink className="nav-HashLink text-base" to={'/A-Sulpol#header'}>Sulpol</HashLink>
          <li onClick={openProdutos} className="nav-HashLink text-base flex items-center cursor-pointer">Products <IoMdArrowDropdown className='mt-1' /></li>
          <HashLink to={'/#services'}><li className="nav-HashLink text-base cursor-pointer">Services</li></HashLink>
          <HashLink to={'/#aplicacoes'}><li className="nav-HashLink text-base cursor-pointer">Aplication</li></HashLink>
          <HashLink to={'/#faq'}><li className="nav-HashLink text-base cursor-pointer">FAQ</li></HashLink>

          <div  className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
          <HashLink className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>CONTACT US</HashLink> 
          {/* 
          <Flags></Flags>
          */}
          </div>
        </ul>

        
        <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
        </div>
        
      </div>
    </nav>

    <div className={`w-full fixed z-40 h-550 pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
        <ul className='flex flex-col items-center gap-5'>
        <HashLink className="nav-HashLink text-xl text-white" to={'/#header'}>Home</HashLink>   
        <HashLink className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>Sulpol</HashLink>
        <li onClick={openProdutosMobile} className="nav-HashLink text-xl flex items-center text-white">Products <IoMdArrowDropdown className='mt-1' /></li>
        <HashLink to={'/#services'}><li className="nav-HashLink text-xl text-white">Services</li></HashLink>
        <HashLink to={'/#aplicacoes'}><li className="nav-HashLink text-xl text-white">Aplication</li></HashLink>
        <HashLink to={'/#faq'}><li className="nav-HashLink text-xl text-white">FAQ</li></HashLink>
        <HashLink className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>CONTACT US</HashLink> 
        </ul>

    </div>

    <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'} ${hideMenu ? "-translate-y-[170px]" : '-translate-y-[0px]'}`}>
      <div className='container mx-auto h-full'>

      <div className={`flex flex-wrap styled-scroll lg:flex-nowrap lg:flex-col lg:mt-5 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[75vh] overflow-y-scroll" : null}`}>

      <HashLink className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>SHOE <span className='text-sulpol-green font-bold'>METERING</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/725/full/star_300S_2.png?1656005199' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
     {/*   <HashLink className='w-[100%]' to='/Star300SPV#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-PV</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/769/full/star300s-pv.png?1656006655'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300SR2436#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR 300S-<span className='text-sulpol-green font-bold'>R24/36</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/796/full/1123dfd.png?1656007347'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300STG#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-TG</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/802/full/star_300-tg.png?1656007443'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> */}
       <HashLink className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>ELASTOMERS <span className='text-sulpol-green font-bold'>CASTING MACHINE</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PORTABLE <span className='text-sulpol-green font-bold'>METERING</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>HIGH PRESSURE<br/><span className='text-sulpol-green font-bold'>METERING</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/816/full/ECOLOGICA-AP-100-A_sem_piso.png?1656007765' alt=''/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>LOW PRESSURE <span className='text-sulpol-green font-bold'>METERING</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852' alt=''/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
      
      </div>

      </div>
      
    </div>
    
    <div>
    </div>
      
    </div>
    
  
    :
    
    null

    }




    </div>
    

    
    
  )
}

export default Navbar