import React from 'react'
import { ReactComponent as Logo } from '../../images/logo.svg';


import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

import '../Navbar/Navbar.css'


import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react';
import ContextProdutos from '../../contexts/ContextProdutos';
import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import Context from '../../contexts/MainContext';

import brazil from '../../images/new-images/brazil.jpg'
import english from '../../images/new-images/usa.png'
import espanol from '../../images/new-images/spain.jpg'
import EcologicaAP from '../../images/ecologicaAP.png'
import ElastomachImage from '../../images/Elastomach.png'
import STCImage from '../../images/STC.png'
import STP15Image from '../../images/ST-15.png'
import Star300SImage from '../../images/new-images/star_300S_2.png'
import logicaap from '../../images/new-images/logica-ap.png'
import cabecotes from '../../images/new-images/cabecotes.png'
import pu from '../../images/new-images/pu.png'
import moldes from '../../images/new-images/moldes.png'
import telhas from '../../images/new-images/telhas.png'
import especiais from '../../images/new-images/especiais.png'

function Navbar() {

  const { menuMobile, setMenuMobile, menuProdutos, setProdutos } = useContext(ContextProdutos)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { isPortuguese, isEnglish, isSpanish, langToEnglish, langToPortuguese, langToSpanish } = useContext(Context)



  const openMenu = () => {

    if (menuProdutos === true) {
      setProdutos(!menuProdutos)
    }


    setMenuMobile(!menuMobile);
  }

  const closeMenu = () => {
    setProdutos(false)
  }

  if (isPortuguese) {
    return (

      <>
        <div>
          <div id='header'>
            <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
              <div className='container mx-auto h-full'>
                <div className='flex justify-between items-center h-full'>
                  <HashLink onClick={closeMenu} to={'/#header'}><div> <Logo className="w-48 logo" /> </div></HashLink>
                  <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/#header'}>Inicio</HashLink>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
                    <li onClick={onOpen} className="nav-HashLink text-base flex items-center cursor-pointer">Produtos <IoMdArrowDropdown className='mt-1' /></li>
                    <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-base cursor-pointer">Serviços</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-base cursor-pointer">Aplicação</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-base cursor-pointer">FAQ</li></HashLink>
  
                    <div className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
                      <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                    </div>
                  </ul>
  
  
                  <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
                </div>
  
              </div>
            </nav>
  
            <div className={`w-full fixed z-40 h-[450px] pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
              <ul className='flex flex-col items-center gap-5'>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/#header'}>Inicio</HashLink>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>A Sulpol</HashLink>
                <li onClick={onOpen} className="nav-HashLink text-xl flex items-center text-white">Produtos <IoMdArrowDropdown className='mt-1' /></li>
                <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-xl text-white">Serviços</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-xl text-white">Aplicação</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-xl text-white">FAQ</li></HashLink>
                <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EM CONTATO</HashLink>
                <div className="flex gap-2">
                        <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                  </div>
              </ul>
  
            </div>
  
            <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'}`}>
  
  
              <div className={`flex flex-wrap lg:flex-nowrap styled-scroll lg:flex-col lg:pt-8 lg:mt-0 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[85vh] overflow-y-scroll" : null}`}>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORAS DE <span className='text-sulpol-green font-bold'>CALÇADO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={Star300SImage} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={ElastomachImage} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={STP15Image} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE<br /><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={EcologicaAP} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={STCImage} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DCPD#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DCPD <span className='text-sulpol-green font-bold'>LÓGICA AP</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={logicaap} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Cabecote#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>CABEÇOTES <span className='text-sulpol-green font-bold'>MISTURADORES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={cabecotes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Bombas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>BOMBAS DE <span className='text-sulpol-green font-bold'>PU</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[60px] md:w-[70px] h-full' src={pu} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Porta-Moldes#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PORTA <span className='text-sulpol-green font-bold'>MOLDES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[55px] h-full' src={moldes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Paineis-e-Telhas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>PAINÉIS / <span className='text-sulpol-green font-bold'>TELHAS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={telhas} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Projetos-Especiais#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PROJETOS <span className='text-sulpol-green font-bold'>ESPECIAIS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[80px] h-full' src={especiais} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
  
              </div>
  
  
  
            </div>
  
            <div>
            </div>
  
          </div>
        </div>
  
  
        <Drawer
  
          size='md'
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader boxShadow='0px 4px 15px 0px #00000020'>Produtos</DrawerHeader>
  
            <DrawerBody className='styled-scrollbar-menu'>
              <Stack>
                <HashLink to='/Star300S#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='60px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Injetoras / Dosadoras de <Text color='#81d742' as='span'>CALÇADO</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='80px' src={Star300SImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraElastomero#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Injetora / Dosadora <Text color='#81d742' as='span'>Elastômero</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='80px' src={ElastomachImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraPortatil#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Injetora / Dosadora <Text color='#81d742' as='span'>Portátil</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='50px' marginRight='20px' src={STP15Image} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraAltapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Injetora / Dosadora de <Text color='#81d742' as='span'>Alta Pressão</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='80px' marginRight='10px' src={EcologicaAP} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraBaixapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Injetora / Dosadora de <Text color='#81d742' as='span'>Baixa Pressão</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='80px' src={STCImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DCPD#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        DCPD <Text color='#81d742' as='span'>Lógica AP</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='70px' marginRight='10px' src={logicaap}/>
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Cabecote#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Cabeçotes <Text color='#81d742' as='span'>Misturadores</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='40px' marginRight='20px' src={cabecotes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Bombas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Bombas de <Text color='#81d742' as='span'>PU</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='80px' src={pu} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Porta-Moldes#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Porta <Text color='#81d742' as='span'>Moldes</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='60px' marginRight='10px' src={moldes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Paineis-e-Telhas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Painéis / <Text color='#81d742' as='span'>Telhas</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='60px' marginRight='10px' src={telhas} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Projetos-Especiais#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Projetos / <Text color='#81d742' as='span'>Especiais</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                      <Image w='60px' marginRight='10px' src={especiais} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
      </>
    )
  } else if (isEnglish) {
    return (

      <>
        <div>
          <div id='header'>
            <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
              <div className='container mx-auto h-full'>
                <div className='flex justify-between items-center h-full'>
                  <HashLink onClick={closeMenu} to={'/#header'}><div> <Logo className="w-48 logo" /> </div></HashLink>
                  <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/#header'}>Home</HashLink>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/A-Sulpol#header'}>Sulpol</HashLink>
                    <li onClick={onOpen} className="nav-HashLink text-base flex items-center cursor-pointer">Products <IoMdArrowDropdown className='mt-1' /></li>
                    <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-base cursor-pointer">Services</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-base cursor-pointer">Aplication</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-base cursor-pointer">FAQ</li></HashLink>
  
                    <div className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
                      <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>CONTACT US</HashLink>
                    </div>
                    <div className="flex gap-2">
                    <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                    </div>
                  </ul>
  
  
                  <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
                </div>
  
              </div>
            </nav>
  
            <div className={`w-full fixed z-40 h-[450px] pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
              <ul className='flex flex-col items-center gap-5'>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/#header'}>Home</HashLink>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>Sulpol</HashLink>
                <li onClick={onOpen} className="nav-HashLink text-xl flex items-center text-white">Products <IoMdArrowDropdown className='mt-1' /></li>
                <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-xl text-white">Services</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-xl text-white">Aplication</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-xl text-white">FAQ</li></HashLink>
                <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>CONTACT US</HashLink>
                <div className="flex gap-2">
                <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                  </div>
              </ul>
  
            </div>
  
            <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'}`}>
  
  
              <div className={`flex flex-wrap lg:flex-nowrap styled-scroll lg:flex-col lg:pt-8 lg:mt-0 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[85vh] overflow-y-scroll" : null}`}>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSING <span className='text-sulpol-green font-bold'>fOOTWEAR</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={Star300SImage} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSING <span className='text-sulpol-green font-bold'>ELASTOMER</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={ElastomachImage}  alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSING <span className='text-sulpol-green font-bold'>PORTABLE</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={STP15Image} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSING<br /><span className='text-sulpol-green font-bold'>HIGH PRESSURE</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={EcologicaAP} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSING <span className='text-sulpol-green font-bold'>LOW PRESSURE</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={STCImage} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DCPD#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DCPD <span className='text-sulpol-green font-bold'>LÓGICA AP</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={logicaap} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Cabecote#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>HEADERS <span className='text-sulpol-green font-bold'>MIXERS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={cabecotes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Bombas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>PU<span className='text-sulpol-green font-bold'>BOMBS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[60px] md:w-[70px] h-full' src={pu} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Porta-Moldes#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>MOLD <span className='text-sulpol-green font-bold'>HOLDER</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[55px] h-full' src={moldes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Paineis-e-Telhas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>PANELS / <span className='text-sulpol-green font-bold'>ROOF TILES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={telhas} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Projetos-Especiais#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>SPECIALS <span className='text-sulpol-green font-bold'>PROJECTS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[80px] h-full' src={especiais} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
  
              </div>
  
  
  
            </div>
  
            <div>
            </div>
  
          </div>
        </div>
  
  
        <Drawer
  
          size='md'
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader boxShadow='0px 4px 15px 0px #00000020'>Products</DrawerHeader>
  
            <DrawerBody className='styled-scrollbar-menu'>
              <Stack>
                <HashLink to='/Star300S#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='60px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Dosing <Text color='#81d742' as='span'>FOOTWEAR</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={Star300SImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraElastomero#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Dosing <Text color='#81d742' as='span'>Elastomer</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={ElastomachImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraPortatil#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Dosing <Text color='#81d742' as='span'>Portable</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='50px' marginRight='20px' src={STP15Image} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraAltapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        High Pressure<Text color='#81d742' as='span'> Dosing</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' marginRight='10px' src={EcologicaAP} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraBaixapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Low Pressure <Text color='#81d742' as='span'>Dosing</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={STCImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DCPD#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        DCPD <Text color='#81d742' as='span'>Lógica AP</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='70px' marginRight='10px' src={logicaap}/>
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Cabecote#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Headers <Text color='#81d742' as='span'>Mixers</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='40px' marginRight='20px' src={cabecotes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Bombas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        PU <Text color='#81d742' as='span'>Pumps</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={pu} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Porta-Moldes#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Mold <Text color='#81d742' as='span'>Base</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={moldes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Paineis-e-Telhas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Panels / <Text color='#81d742' as='span'>Roof tiles</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={telhas} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Projetos-Especiais#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Special / <Text color='#81d742' as='span'>Projects</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={especiais} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
      </>
  
    )
  } else if (isSpanish) {
    return (

      <>
        <div>
          <div id='header'>
            <nav className={`bg-white h-28 shadow-md w-full top-0 lg:top-[2.5rem] z-50 fixed duration-500`}>
              <div className='container mx-auto h-full'>
                <div className='flex justify-between items-center h-full'>
                  <HashLink onClick={closeMenu} to={'/#header'}><div> <Logo className="w-48 logo" /> </div></HashLink>
                  <ul className='hidden lg:flex gap-7 nav-HashLinks items-center'>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/#header'}>Comienzo</HashLink>
                    <HashLink onClick={closeMenu} className="nav-HashLink text-base" to={'/A-Sulpol#header'}>Sulpol</HashLink>
                    <li onClick={onOpen} className="nav-HashLink text-base flex items-center cursor-pointer">Productos <IoMdArrowDropdown className='mt-1' /></li>
                    <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-base cursor-pointer">Servicios</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-base cursor-pointer">Solicitud</li></HashLink>
                    <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-base cursor-pointer">FAQ</li></HashLink>
  
                    <div className="ml-10 flex items-center lg:flex-row lg:gap-1 xl:gap-4">
                      <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EN CONTACTO</HashLink>
                    </div>
                    <div className="flex gap-2">
                    <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                    </div>
                  </ul>
  
  
                  <div onClick={openMenu} className='Toggler lg:hidden'> <RiMenu3Fill size={30} /></div>
                </div>
  
              </div>
            </nav>
  
            <div className={`w-full fixed z-40 h-[450px] pt-36 lg:hidden bg-gray-800 transitio duration-700 transition-all ${menuMobile ? "top-[0]" : '-top-[550px]'}`}>
              <ul className='flex flex-col items-center gap-5'>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/#header'}>Comienzo</HashLink>
                <HashLink onClick={closeMenu} className="nav-HashLink text-xl text-white" to={'/A-Sulpol#header'}>Sulpol</HashLink>
                <li onClick={onOpen} className="nav-HashLink text-xl flex items-center text-white">Productos <IoMdArrowDropdown className='mt-1' /></li>
                <HashLink onClick={closeMenu} to={'/#services'}><li className="nav-HashLink text-xl text-white">Servicios</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#aplicacoes'}><li className="nav-HashLink text-xl text-white">Solicitud</li></HashLink>
                <HashLink onClick={closeMenu} to={'/#faq'}><li className="nav-HashLink text-xl text-white">FAQ</li></HashLink>
                <HashLink onClick={closeMenu} className='text-white rounded-full bg-[#81D742] py-3 px-6 lg:hidden xl:block text-tiny font-bold' to='/Contato#header'>ENTRAR EN CONTACTO</HashLink>
                <div className="flex gap-2">
                <div className="w-[30px] h-[20px]" onClick={langToPortuguese}> 
                          <img className="w-[100%] h-[100%] cursor-pointer" src={brazil} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToEnglish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={english} alt="" />
                        </div>
                        <div className="w-[30px] h-[20px]" onClick={langToSpanish}>
                          <img className="w-[100%] h-[100%] cursor-pointer" src={espanol} alt="" />
                        </div>
                  </div>
              </ul>
  
            </div>
  
            <div className={`bg-white shadow-md h-0 overflow-hidden w-full lg:w-[30%] 2xl:w-1/4 transition-all duration-1000 fixed z-40 ${menuProdutos ? "h-[300px] lg:h-screen  pt-36" : 'pt-0'}`}>
  
  
              <div className={`flex flex-wrap lg:flex-nowrap styled-scroll lg:flex-col lg:pt-8 lg:mt-0 gap-4 sm:gap-4 lg:gap-3 productsMenu relative overflow-x-hidden ${menuProdutos ? "h-[20vh] lg:h-[85vh] overflow-y-scroll" : null}`}>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Star300S#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORAS DE <span className='text-sulpol-green font-bold'>CALÇADO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'><img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={Star300SImage} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraElastomero#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>ELASTÔMERO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[70px] h-full' src={ElastomachImage} alt='' /></div> <MdKeyboardArrowRight color='#81D741' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraPortatil#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA <span className='text-sulpol-green font-bold'>PORTÁTIL</span> </h2> <div className='flex items-center md:gap-5'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={STP15Image} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraAltapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE<br /><span className='text-sulpol-green font-bold'>ALTA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'><div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={EcologicaAP} alt='' /></div> <MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DosadoraBaixapressao#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DOSADORA DE <span className='text-sulpol-green font-bold'>BAIXA PRESSÃO</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={STCImage} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
                <HashLink onClick={closeMenu} className='w-[100%]' to='/DCPD#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>DCPD <span className='text-sulpol-green font-bold'>LÓGICA AP</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={logicaap} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Cabecote#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>CABEÇOTES <span className='text-sulpol-green font-bold'>MISTURADORES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[50px] h-full' src={cabecotes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Bombas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>BOMBAS DE <span className='text-sulpol-green font-bold'>PU</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[60px] md:w-[70px] h-full' src={pu} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Porta-Moldes#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PORTA <span className='text-sulpol-green font-bold'>MOLDES</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[55px] h-full' src={moldes} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Paineis-e-Telhas#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[110px]'>PAINÉIS / <span className='text-sulpol-green font-bold'>TELHAS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[60px] h-full' src={telhas} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
                <HashLink onClick={closeMenu} className='w-[100%]' to='/Projetos-Especiais#header'><div className='flex w-[100%] sm:w-[31%] md:w-[33%] h-20 lg:w-full lg:h-auto items-center justify-between border-b border-gray-300 lg:pb-3 cursor-pointer'> <h2 className='machine-name text-sm w-full lg:w-[160px]'>PROJETOS <span className='text-sulpol-green font-bold'>ESPECIAIS</span> </h2> <div className='flex items-center md:gap-5 w-[50%] lg:w-auto'> <div className='w-[70px]'> <img className='hidden sm:block w-[50px] md:w-[80px] h-full' src={especiais} alt='' /> </div><MdKeyboardArrowRight color='#81D742' size={20} />  </div> </div></HashLink>
  
  
              </div>
  
  
  
            </div>
  
            <div>
            </div>
  
          </div>
        </div>
  
  
        <Drawer
  
          size='md'
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader boxShadow='0px 4px 15px 0px #00000020'>Productos</DrawerHeader>
  
            <DrawerBody className='styled-scrollbar-menu'>
              <Stack>
                <HashLink to='/Star300S#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='60px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Maquinas dosificadoras<Text color='#81d742' as='span'> ZAPATO</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={Star300SImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraElastomero#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Maquinas dosificadoras <Text color='#81d742' as='span'>Elastómero</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={ElastomachImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraPortatil#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Maquinas dosificadoras <Text color='#81d742' as='span'>Portátil</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='50px' marginRight='20px' src={STP15Image} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraAltapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Maquinas dosificadoras <Text color='#81d742' as='span'>Alta presión</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' marginRight='10px' src={EcologicaAP} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DosadoraBaixapressao#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Maquinas dosificadoras <Text color='#81d742' as='span'>Baja presión</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={STCImage} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/DCPD#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Punto de acceso lógico <Text color='#81d742' as='span'>DCPD</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='70px' marginRight='10px' src={logicaap}/>
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Cabecote#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Cabezales  <Text color='#81d742' as='span'>Mezcladores</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='40px' marginRight='20px' src={cabecotes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Bombas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Bombas de <Text color='#81d742' as='span'>PU</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='80px' src={pu} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Porta-Moldes#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Base Del <Text color='#81d742' as='span'>Molde</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={moldes} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Paineis-e-Telhas#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                        Paneles / <Text color='#81d742' as='span'>Azulejos</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={telhas} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
  
                <HashLink to='/Projetos-Especiais#header' onClick={() => { onClose(); openMenu(); }}>
                  <Box display='flex' justifyContent='space-between' h='70px' alignItems='center'>
                    <Box>
                      <Heading fontSize='16px' textTransform='uppercase'>
                      Proyectos  / <Text color='#81d742' as='span'>Especiales</Text>
                      </Heading>
                    </Box>
  
                    <Box>
                    <Image w='60px' marginRight='10px' src={especiais} />
                    </Box>
                  </Box>
                </HashLink>
                <Divider />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
      </>
    )
  }

  
}

export default Navbar