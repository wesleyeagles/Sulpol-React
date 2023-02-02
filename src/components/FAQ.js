import React, { useState } from 'react'
import { useContext } from 'react'
import Context from '../contexts/MainContext'

function FAQ({text, fontSize}) {

  const {isPortuguese, isEnglish, isSpanish} = useContext(Context)

    const [useEmpresa] = useState(true)
    const [useServicos] = useState(false)
    const [useEquipamentos] = useState(false)
  
    const [useFAQEmpresa1, setUseFAQEmpresa1 ] = useState(false)
    const [useFAQEmpresa2, setUseFAQEmpresa2 ] = useState(false)
    const [useFAQEmpresa3, setUseFAQEmpresa3 ] = useState(false)
    const [useFAQEmpresa4, setUseFAQEmpresa4 ] = useState(false)
  
    const handleClickFaq1 = () => {
      setUseFAQEmpresa1(!useFAQEmpresa1)
  
      if (useFAQEmpresa2 === true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa3 === true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa4 === true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
  
    }
  
    const handleClickFaq2 = () => {
      setUseFAQEmpresa2(!useFAQEmpresa2)
  
      if (useFAQEmpresa1 === true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      } else if (useFAQEmpresa3 === true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa4 === true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
    }
  
    const handleClickFaq3 = () => {
      setUseFAQEmpresa3(!useFAQEmpresa3)
  
      if (useFAQEmpresa2 === true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa1 === true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      } else if (useFAQEmpresa4 === true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
    }
  
    const handleClickFaq4 = () => {
      setUseFAQEmpresa4(!useFAQEmpresa4)
  
      if (useFAQEmpresa2 === true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa3 === true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa1 === true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      }
    }

  if (isPortuguese) {
    return (
      <div id='faq'>
          <img src='https://gistcdn.githack.com/wesleyeagles/c6a95ea8c84246971191e10d516d21ae/raw/0c01a0d7482df69aa0503afba02486f5982be33a/faq.svg' alt='' />
        <h2 className={`${fontSize} font-medium mt-5 w-full lg:w-[70%]`}>{text}</h2>
        <div className='flex justify-between mt-[30px] mb-[30px]'>
        </div>
        <div className='relative'>
        <span className='border-b border-gray-400 w-full flex'></span>
        <span className={`border-b absolute duration-700 border-4 border-[#81D742] flex ${useEmpresa? 'w-[100%]' : null} ${useServicos? 'w-[58%]' : null} ${useEquipamentos? 'w-full' : null}`}></span>
        </div>
    
    
        <div className='flex flex-col gap-5 mt-11'>
        <span className='bg-[#F8F8F8] py-5 px-10'>
        <span onClick={handleClickFaq1} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Quais equipamentos a Sulpol fabrica <img className={`duration-500 ${useFAQEmpresa1? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa1? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>A Sulpol é responsável pela fabricação de Dosadoras de PU de alta e baixa pressão, Dosadores de Elastômeros, cabeçotes misturadores de alta e baixa pressão, bombas hidráulicas e porta molde para refrigeração. </p>
        </span>
    
        <span className='bg-[#F8F8F8] py-5 px-10'>
        <span onClick={handleClickFaq2} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>A Sulpol oferece garantia em seus produtos e serviços? <img className={`duration-500 ${useFAQEmpresa2? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Oferecemos ao mercado equipamentos e serviços de alta qualidade. Todo processo iniciado pela engenharia passa por análise de elementos finitos 3D, garantindo a resistência apropriada para cada design criado. </p>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Os insumos são selecionados criteriosamente, junto a fornecedores mundialmente reconhecidos e que respaldam o trabalho formando um único time. </p>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Fornecemos garantia tanto em produtos quanto em serviços. Consulte o manual técnico do equipamento e verifique a garantia exercida pela SULPOL. </p>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Nossa obrigação é atender bem todas as empresas e estar comprometido com todo processo. </p>
        </span>
    
        <span className='bg-[#F8F8F8] py-5 px-10'>
        <span onClick={handleClickFaq3} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Os produtos da Sulpol são fabricados pra quais aplicações? <img className={`duration-500 ${useFAQEmpresa3? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa3? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Os insumos são selecionados criteriosamente, junto a fornecedores mundialmente reconhecidos e que respaldam o trabalho formando um único time. </p>
        </span>
    
        <span className='bg-[#F8F8F8] py-5 px-10'>
        <span onClick={handleClickFaq4} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>O que esperar dos produtos da Sulpol? <img className={`duration-500 ${useFAQEmpresa4? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
        <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa4? 'h-140 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Os equipamentos Sulpol entregam para os clientes o melhor em produtividade, eficiência e baixo custo de manutenção.
    
    Sempre atenta aos movimentos do mercado, e comprometida com o seu desenvolvimento, a SULPOL oferece soluções tecnológicas para dosagem de PU em baixa e alta pressão, PU elastômeros, termoplásticos, termofixos, e possibilita a automação do processo de acordo com a necessidade de cada cliente.  </p>
        </span>
    
        </div>
      </div>
    )
  }
     else if (isEnglish) {
      return (
        <div id='faq'>
            <img src='https://gistcdn.githack.com/wesleyeagles/c6a95ea8c84246971191e10d516d21ae/raw/0c01a0d7482df69aa0503afba02486f5982be33a/faq.svg' alt='' />
          <h2 className={`${fontSize} font-medium mt-5 w-full lg:w-[70%]`}>{text}</h2>
          <div className='flex justify-between mt-[30px] mb-[30px]'>
          </div>
          <div className='relative'>
          <span className='border-b border-gray-400 w-full flex'></span>
          <span className={`border-b absolute duration-700 border-4 border-[#81D742] flex ${useEmpresa? 'w-[100%]' : null} ${useServicos? 'w-[58%]' : null} ${useEquipamentos? 'w-full' : null}`}></span>
          </div>
    
    
          <div className='flex flex-col gap-5 mt-11'>
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq1} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Which equipment Sulpol manufactures <img className={`duration-500 ${useFAQEmpresa1? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa1? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Sulpol is responsible for manufacturing high and low pressure PU dosing machines, elastomer dosing machines, high and low pressure mixing heads, hydraulic pumps and mold holders for cooling. </p>
          </span>
    
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq2} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Does Sulpol offer guarantees on its products and services? <img className={`duration-500 ${useFAQEmpresa2? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>We offer the market high quality equipment and services. Every process initiated by engineering goes through 3D finite element analysis, ensuring the appropriate strength for each design created. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>The inputs are carefully selected, together with world-renowned suppliers that support the work forming a single team. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>We provide warranty on both products and services. Consult the technical manual of the equipment and check the guarantee exercised by SULPOL. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Our obligation is to serve all companies well and be committed to the entire process. </p>
          </span>
    
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq3} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Which Sulpol products are manufactured for which applications? <img className={`duration-500 ${useFAQEmpresa3? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa3? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>The inputs are carefully selected, together with world-renowned suppliers that support the work forming a single team. </p>
          </span>
    
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq4} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>What to expect from Sulpol products? <img className={`duration-500 ${useFAQEmpresa4? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa4? 'h-140 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Sulpol equipment delivers the best in productivity, efficiency and low maintenance costs to customers.
    
          Always attentive to market movements, and committed to its development, SULPOL offers technological solutions for dosing PU at low and high pressure, PU elastomers, thermoplastics, thermosets, and enables the automation of the process according to the needs of each client.  </p>
          </span>
    
          </div>
        </div>
      )
    } else if (isSpanish) {
      return (
        <div id='faq'>
            <img src='https://gistcdn.githack.com/wesleyeagles/c6a95ea8c84246971191e10d516d21ae/raw/0c01a0d7482df69aa0503afba02486f5982be33a/faq.svg' alt='' />
          <h2 className={`${fontSize} font-medium mt-5 w-full lg:w-[70%]`}>{text}</h2>
          <div className='flex justify-between mt-[30px] mb-[30px]'>
          </div>
          <div className='relative'>
          <span className='border-b border-gray-400 w-full flex'></span>
          <span className={`border-b absolute duration-700 border-4 border-[#81D742] flex ${useEmpresa? 'w-[100%]' : null} ${useServicos? 'w-[58%]' : null} ${useEquipamentos? 'w-full' : null}`}></span>
          </div>
      
      
          <div className='flex flex-col gap-5 mt-11'>
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq1} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Qué equipos fabrica Sulpol <img className={`duration-500 ${useFAQEmpresa1? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa1? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Sulpol es responsable por la fabricación de dosificadores de PU de alta y baja presión, dosificadores de elastómeros, cabezales mezcladores de alta y baja presión, bombas hidráulicas y portamoldes para refrigeración. </p>
          </span>
      
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq2} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Sulpol ofrece garantías en sus productos y servicios?<img className={`duration-500 ${useFAQEmpresa2? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Ofrecemos al mercado equipos y servicios de alta calidad. Cada proceso iniciado por la ingeniería pasa por un análisis de elementos finitos en 3D, lo que garantiza la resistencia adecuada para cada diseño creado. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Los insumos son cuidadosamente seleccionados, junto a proveedores de renombre mundial que respaldan el trabajo formando un solo equipo. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Brindamos garantía tanto en productos como en servicios. Consulte el manual técnico del equipo y compruebe la garantía ejercida por SULPOL. </p>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa2? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Nuestra obligación es servir bien a todas las empresas y estar comprometidos con todo el proceso. </p>
          </span>
      
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq3} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Qué productos Sulpol se fabrican para qué aplicaciones? <img className={`duration-500 ${useFAQEmpresa3? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa3? 'h-100 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Los insumos son cuidadosamente seleccionados, junto a proveedores de renombre mundial que respaldan el trabajo formando un solo equipo. </p>
          </span>
      
          <span className='bg-[#F8F8F8] py-5 px-10'>
          <span onClick={handleClickFaq4} className='text-base text-[#505050] flex items-center justify-between cursor-pointer'>Qué esperar de los productos Sulpol? <img className={`duration-500 ${useFAQEmpresa4? 'rotate-180' : 'rotate-0'}`} src='https://gistcdn.githack.com/wesleyeagles/4c10a58e36248c5c63cf0d2551f3d08b/raw/8bd6cb4fdab03a2438939dcfeeeccb5d8412774e/arrowdown.svg' alt='' /></span>
          <p className={`text-[#828282] duration-500 font-light ${useFAQEmpresa4? 'h-140 py-5' : 'h-0 py-0'}  overflow-y-hidden`}>Los equipos de Sulpol ofrecen lo mejor en productividad, eficiencia y bajos costos de mantenimiento a los clientes.
      
          Siempre atenta a los movimientos del mercado, y comprometida con su desarrollo, SULPOL ofrece soluciones tecnológicas para la dosificación de PU a baja y alta presión, elastómeros de PU, termoplásticos, termoestables, y posibilita la automatización del proceso de acuerdo a las necesidades de cada cliente.  </p>
          </span>
      
          </div>
        </div>
      )
    }

  
}

export default FAQ














