import React, { useState } from 'react'

function FAQ({text, fontSize}) {

    const [useEmpresa, setUseEmpresa] = useState(true)
    const [useServicos, setUseServicos] = useState(false)
    const [useEquipamentos, setUseEquipamentos] = useState(false)
  
    const handleEmpresaClick = () => {
      if (useServicos == true) {
        setUseServicos(!useServicos)
        setUseEmpresa(!useEmpresa)
  
      } else if (useEquipamentos == true) {
        setUseEquipamentos(!useEquipamentos)
        setUseEmpresa(!useEmpresa)
  
  
      } else { setUseEmpresa(!useEmpresa) }
  
    }
  
    const handleServicosClick = () => {
      if (useEmpresa == true) {
        setUseEmpresa(!useEmpresa)
        setUseServicos(!useServicos)
  
  
      } else if (useEquipamentos == true) {
        setUseEquipamentos(!useEquipamentos)
        setUseServicos(!useServicos)
  
      } else { setUseServicos(!useServicos) }
    }
  
    const handleEquipamentosClick = () => {
      if (useServicos == true) {
        setUseServicos(!useServicos)
        setUseEquipamentos(!useEquipamentos)
  
  
      } else if (useEmpresa == true) {
        setUseEmpresa(!useEmpresa)
        setUseEquipamentos(!useEquipamentos)
  
  
      } else { setUseEquipamentos(!useEquipamentos) }
    }
  
  
  
  
    const [useFAQEmpresa1, setUseFAQEmpresa1 ] = useState(false)
    const [useFAQEmpresa2, setUseFAQEmpresa2 ] = useState(false)
    const [useFAQEmpresa3, setUseFAQEmpresa3 ] = useState(false)
    const [useFAQEmpresa4, setUseFAQEmpresa4 ] = useState(false)
  
    const handleClickFaq1 = () => {
      setUseFAQEmpresa1(!useFAQEmpresa1)
  
      if (useFAQEmpresa2 == true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa3 == true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa4 == true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
  
    }
  
    const handleClickFaq2 = () => {
      setUseFAQEmpresa2(!useFAQEmpresa2)
  
      if (useFAQEmpresa1 == true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      } else if (useFAQEmpresa3 == true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa4 == true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
    }
  
    const handleClickFaq3 = () => {
      setUseFAQEmpresa3(!useFAQEmpresa3)
  
      if (useFAQEmpresa2 == true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa1 == true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      } else if (useFAQEmpresa4 == true) {
        setUseFAQEmpresa4(!useFAQEmpresa4)
      }
  
    }
  
    const handleClickFaq4 = () => {
      setUseFAQEmpresa4(!useFAQEmpresa4)
  
      if (useFAQEmpresa2 == true) {
        setUseFAQEmpresa2(!useFAQEmpresa2)
      } else if (useFAQEmpresa3 == true) {
        setUseFAQEmpresa3(!useFAQEmpresa3)
      } else if (useFAQEmpresa1 == true) {
        setUseFAQEmpresa1(!useFAQEmpresa1)
      }
    }

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

export default FAQ