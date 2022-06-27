import React from 'react'
import  BrazilFlag  from '../../images/flagBrazil.png';
import  USAFlag  from '../../images/flagUSA.png';
import  SpainFlag  from '../../images/flagSpain.png';

function Navbar() {

 const links = [
    {
        "id": 1,
        "name": 'BENEFÍCIOS',
        "hash": ''
    },

    {
        "id": 2,
        "name": 'APLICAÇÃO',
        "hash": ''
    },

    {
        "id": 3,
        "name": 'CABEÇOTES MISTURADORES',
        "hash": ''
    },

    {
        "id": 4,
        "name": 'EQUIPAMENTOS',
        "hash": ''
    },
 ]


  return (
    <div className='container mx-auto relative z-20'>
        <nav className='flex justify-between items-center h-32'>
            <div className='w-[50%] lg:w-[15%] 2xl:w-[20%]'><img className='w-[200px]' src='https://gistcdn.githack.com/wesleyeagles/5fa5f6b109b96123098345215f5cca30/raw/d5b08c4b3e36a69acdaae73ca04b0fbb662adb98/logoBranca.svg' alt='' /></div>

            <ul className='hidden md:flex justify-center gap-5 lg:w-[55%] 2xl:w-[55%]' key={links.id}>
            {links.map((links) => (
             
              <a href={links.hash}><li className='text-white'>{links.name}</li></a>  
             
            ))}
            </ul>

            <div className='hidden md:block lg:w-[17%] 2xl:w-[15%]'>
             <button className='bg-transparent border border-[#81D742] text-white py-3 px-6 rounded-full text-sm font-bold'>TENHO INTERESSE</button>
                
            </div>
            <div className='flex items-center gap-1 Flags md:w-[10%]'>
            <button> <img src={BrazilFlag}/> </button>
            <button> <img className='grayscale' src={USAFlag}/></button>
            <button> <img className='grayscale' src={SpainFlag}/></button>
            </div>

        </nav>
    </div>
  )
}

export default Navbar