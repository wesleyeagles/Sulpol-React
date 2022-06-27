import React, { useEffect, useState } from 'react'
import {ReactComponent as Logo } from '../../images/logo.svg';


import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

import '../Navbar/Navbar.css'


import { HashLink } from 'react-router-hash-link'
import Flags from '../Flags/Flags';

import Star300S from '../Maquinas/Star300S';
import { useContext } from 'react';
import ContextProdutos from '../../contexts/ContextProdutos';

function Navbar() {

  const { menuMobile, setMenuMobile, menuProdutos, setProdutos } = useContext(ContextProdutos)


 

  const openMenu = () => {

    if (menuProdutos == true) {
      setProdutos(!menuProdutos)
    }


    setMenuMobile(!menuMobile);
  }


  const openProdutos = () => {
    setProdutos(!menuProdutos);

    if (data == true) {
      setData(!data)
    }
  }

  const openProdutosMobile = () => {
    openProdutos();
    openMenu();
  }

  const [hideMenu, setHideMenu] = useState(0);

  const toggleHideMenu = () => {
    setHideMenu(!hideMenu)
  }

  const [data, setData] = useState(0)

  const toggleMaquinas = () => {
    setData(!data)
    
  }

 




  return (
    <div id='header'>
    <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
      <div className='container mx-auto h-full'>
        <div className='flex justify-between items-center h-full'>
        <HashLink to={'/#header'}><div> <Logo className="w-48 logo"/> </div></HashLink>
        <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
          <HashLink className="nav-HashLink text-base" to={'/#header'}>Inicio</HashLink>   
          <HashLink className="nav-HashLink text-base" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
          <li onClick={openProdutos} className="nav-HashLink text-base flex items-center">Produtos <IoMdArrowDropdown className='mt-1' /></li>
          <li className="nav-HashLink text-base">Serviços</li>
          <li className="nav-HashLink text-base">Aplicação</li>
          <li className="nav-HashLink text-base">FAQ</li>

          <div  className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
          <HashLink className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink> 
          <Flags></Flags>
          </div>
        </ul>

        
        <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
        </div>
        
      </div>
    </nav>

    <div className={`w-full absolute h-550 pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
        <ul className='flex flex-col items-center gap-5'>
        <HashLink className="nav-HashLink text-xl text-white" to={'/#header'}>Inicio</HashLink>   
        <HashLink className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
        <li onClick={openProdutosMobile} className="nav-HashLink text-xl flex items-center text-white">Produtos <IoMdArrowDropdown className='mt-1' /></li>
        <li className="nav-HashLink text-xl text-white">Serviços</li>
        <li className="nav-HashLink text-xl text-white">Aplicação</li>
        <li className="nav-HashLink text-xl text-white">FAQ</li>
        <HashLink className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink> 
        </ul>

    </div>

    <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'} ${hideMenu ? "-translate-y-[170px]" : '-translate-y-[0px]'}`}>
      <div className='container mx-auto h-full'>

      <div className={`flex flex-wrap lg:flex-nowrap lg:flex-col lg:mt-5 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[75vh] overflow-y-scroll" : null}`}>

      <HashLink className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/725/full/star_300S_2.png?1656005199'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300SPV#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-PV</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/769/full/star300s-pv.png?1656006655'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300SR2436#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR 300S-<span className='text-sulpol-green font-bold'>R24/36</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/796/full/1123dfd.png?1656007347'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/Star300STG#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>STAR <span className='text-sulpol-green font-bold'>300S-TG</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/802/full/star_300-tg.png?1656007443'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src='https://uploaddeimagens.com.br/images/003/913/806/full/ST-ce9.png?1656007569'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src='https://uploaddeimagens.com.br/images/003/913/809/full/ST-P15A-768x1024.png?1656007646'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE<br/><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/816/full/ECOLOGICA-AP-100-A_sem_piso.png?1656007765'/></div> <MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink> 
       <HashLink className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src='https://uploaddeimagens.com.br/images/003/913/817/full/ST-C4A-scaled.png?1656007852'/> </div><MdKeyboardArrowRight color='#81D742' size={20}/>  </div> </div></HashLink>
      
      </div>

      </div>
      
    </div>
    
    <div>
    </div>
      
    </div>
    

    
    
  )
}

export default Navbar