import React from 'react'
import EquipamentosCaroussel from './EquipamentosCaroussel';


export default function Equipamentos() {


  return (
    <div className='bg-[#F8F8F8] pt-28 pb-28'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center border-b border-gray-400 pb-8'>
                <div className='w-full lg:w-[30%]'>
                    <small className='text-sulpol-green text-base font-medium'>EQUIPAMENTOS</small>
                    <h2 className='text-3xl leading-tight font-medium'>Tecnologia para atender todas as necessidades</h2>
                </div>

              {/*   <div className='flex gap-3'>
                    <InputRadio labelText="Calçado" labelFor="Calçado" inputID="Calçado" />
                    <InputRadio labelText="Refrigeração" labelFor="Refrigeração" inputID="Refrigeração" />
                    <InputRadio labelText="Filtros automotivos" labelFor="Filtros automotivos" inputID="Filtros automotivos" />
                    <InputRadio labelText="Ver tudo" labelFor="Ver tudo" inputID="Ver tudo" checked />
                </div> */}
            </div>
        </div>

        <div className='container mx-auto'>
        <EquipamentosCaroussel />
        
        </div>
    </div>
  )
}
