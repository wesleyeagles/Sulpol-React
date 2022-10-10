import React, {useContext} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'

function PaineiseTelhas()  {


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
        <div>
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-36 border-b border-gray-400 pb-36'>
            <div className='w-[100%] md:w-[40%] lg:mt-[40px] flex md:flex-col justify-between md:items-center'>
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/578/full/termoacusticas-removebg-preview.png?1656679360' alt=''/>
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[55%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PAINÉIS E<span className='text-sulpol-green font-black'> TELHAS</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A espuma rígida de poliuretano tem a menor condutividade térmica de todos os materiais
                isolantes e, portanto, é muito usada na fabricação de elementos compostos metálicos para
                atender as demandas na construção civil e industrial, câmaras frigoríficas de caminhões e
                supermercados.
                A SULPOL desenvolve equipamentos para a produção de painéis ou telhas com isolamento em
                poliuretano de diversos tamanhos. Podem ser fabricadas na configuração 1+1 ou 2+2, com a
                movimentação dos carros e a força de fechamento de acordo com a necessidade de cada
                aplicação.
                </p>

               <ButtonInteresse link="#forms" onClick={handleForm}/>
            </div>
            </div>


        
    <div>
       
    </div>

          

    


        <div className='py-36'>

        <FormularioMaquinas />
            
        </div> 


        </div>
        </div>
    </motion.div>
  )
}

export default PaineiseTelhas;