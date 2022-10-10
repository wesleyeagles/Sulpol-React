import React, {useContext} from 'react'
import {motion} from "framer-motion"

import ButtonInteresse from '../components/ButtonInteresse/ButtonInteresse'

import FormularioMaquinas from '../components/FormularioMaquinas/FormularioMaquinas'
import ContextProdutos from '../contexts/ContextProdutos'

function PortaMoldes()  {


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
                <img className='w-[75%] md:w-[100%]' src='https://uploaddeimagens.com.br/images/003/924/570/full/Ativo_2.png?1656678952' alt=''/>
                <div className='flex w-[18%] md:w-auto flex-col md:flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] justify-center'>

                </div>
            </div>

            <div className='md:w-[55%] mt-16'>
               <h1 className='text-gray-800 text-4xl  2xl:text-5xl mb-5 font-normal'>PORTA<span className='text-sulpol-green font-black'> MOLDES</span></h1>
               <p className='text-sm 2xl:text-base font-light md:w-[97%] mb-[50px] '>A Sulpol possui em suas linhas de produtos, sistemas de porta moldes para produção
                de gabinetes. Os sistemas porta-moldes são automatizados, com a possibilidade de
                instalação de um sistema que leva o gabinete para a posição de injeção e também com
                a movimentação da contenção interna da expansão do poliuretano. Os porta moldes
                podem ser usados individualmente para trabalhar com um plugue (sistema de
                contenção interna dos gabinetes) por vez, ou combiná-lo com outros porta-moldes
                que ficam dispostos em linha. Desta forma o cabeçote de injeção se desloca para
                atender mais de um porta molde, gerando assim uma maior produtividade.
                </p>
               <div className='flex w-[100%] md:w-auto flex-row gap-5 md:mt-[20px]  lg:mt-[20%] 2xl:mt-[10%] mb-16'>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/086/full/Interse%C3%A7%C3%A3o_60.png?1656013055' alt=''/>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/087/full/Interse%C3%A7%C3%A3o_61.png?1656013071' alt=''/>
                <img className='w-[100%] md:w-[15%]' src='https://uploaddeimagens.com.br/images/003/914/088/full/Interse%C3%A7%C3%A3o_62.png?1656013087' alt=''/>
                </div>
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

export default PortaMoldes;