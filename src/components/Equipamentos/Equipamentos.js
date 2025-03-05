import React from 'react'
import { useContext } from 'react';
import Context from '../../contexts/MainContext';
import EquipamentosCaroussel from './EquipamentosCaroussel';


export default function Equipamentos() {

  const {isPortuguese, isEnglish, isSpanish} = useContext(Context)


  if (isPortuguese) {
    return (
      <div className='bg-[#F8F8F8] pt-28 pb-28'>
          <div className='container mx-auto'>
              <div className='flex justify-between items-center border-b border-gray-400 pb-8'>
                  <div className='w-full lg:w-[30%]'>
                      <small className='text-sulpol-green text-base font-medium'>EQUIPAMENTOS</small>
                      <h2 className='text-3xl leading-tight font-medium'>Tecnología para satisfazer todas as necessidades</h2>
                  </div>
              </div>
          </div>
  
          <div className='container mx-auto'>
          <EquipamentosCaroussel />
          
          </div>
      </div>
    )
  } else if (isEnglish) {
    return (
      <div className='bg-[#F8F8F8] pt-28 pb-28'>
          <div className='container mx-auto'>
              <div className='flex justify-between items-center border-b border-gray-400 pb-8'>
                  <div className='w-full lg:w-[30%]'>
                      <small className='text-sulpol-green text-base font-medium'>EQUIPMENTS</small>
                      <h2 className='text-3xl leading-tight font-medium'>Technology to meet every need</h2>
                  </div>
              </div>
          </div>
  
          <div className='container mx-auto'>
          <EquipamentosCaroussel />
          
          </div>
      </div>
    )
  } else if (isSpanish) {
    return (
      <div className='bg-[#F8F8F8] pt-28 pb-28'>
          <div className='container mx-auto'>
              <div className='flex justify-between items-center border-b border-gray-400 pb-8'>
                  <div className='w-full lg:w-[30%]'>
                      <small className='text-sulpol-green text-base font-medium'>EQUIPOS</small>
                      <h2 className='text-3xl leading-tight font-medium'>Tecnología para satisfacer todas las necesidades</h2>
                  </div>
              </div>
          </div>
  
          <div className='container mx-auto'>
          <EquipamentosCaroussel />
          
          </div>
      </div>
    )
  }

}
