import React, {useContext} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'

function ProjetosEspeciais()  {


  const { menuProdutos, forms } = useContext(ContextProdutos)
  

  const handleForm = () => {

    forms.current.focus()
    console.log("Debug")
    
    window.scrollTo(0, 6900)
  }


      
   

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }} className={` w-full transition-all duration-1000 ${menuProdutos? 'lg:pl-[30%] 2xl:pl-[25%]' : 'lg:pl-[0%] 2xl:pl-[0%]'}`}>
      <TopNavBar />
    <Navbar />
        <div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36'>
            <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img alt='' className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/593/full/Ativo_3-removebg-preview.png?1656680249' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[55%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PROJETOS<span className='text-sulpol-green font-black'> ESPECIAIS</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A Sulpol tem capacidade de desenvolver projetos mais específicos
alterando o conceito básico de produção desses produtos. Podemos 
criar novos conceitos com base em troca de ideias com os clientes, 
seja para sistemas mais simplificados ou mais complexos, assim se 
adequando a necessidade de um.</p>

            <ButtonInteresse link="#forms" onClick={handleForm}/>
            </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse md:justify-between md:items-center mt-10 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[50%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img alt='' className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/617/full/Ativo_4-removebg-preview%281%29.png?1656680836' />
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[42%] mt-16'>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>Linha semi-automática especial para dosagem de poliuretano em gabinetes de freezer e geladeiras com moldes fixos, configuração para dosagem 
de PU na vertical ou horizontal, podendo ser montadas com 01, 02 ou 
mais cabeçotes dosadores.
</p>

            </div>
            </div>


        
    <div>
       
    </div>

          

    


        <div className='py-36'>

        <FormularioMaquinas />
            
        </div> 


        </div>
        </div>
        <Footer />
    <WhatsappButton />
    </motion.div>
  )
}

export default ProjetosEspeciais;