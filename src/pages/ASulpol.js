import React, { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import {ReactComponent as Element } from '../images/Element.svg'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import {motion} from "framer-motion"

const ASulpol = () => {


  const carousel = useRef(null)
  const border = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= 490;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += 490;

      };


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
    <div>
      <div className='relative w-full h-[100vh] flex items-center z-10'>
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src='https://uploaddeimagens.com.br/images/003/910/884/full/Grupo_141.png?1655839430' />
          <div className='container mx-auto'>
            <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>Somos tecnologia em constante movimento</h1>
            <p className='text-base text-white mb-12 lg:w-[35%]'>Fundada em 1989, hoje somos líder no mercado brasileiro e latino americano no desenvolvimento e  fabricação de dosadoras e injetoras de PU.</p>
            <ButtonPrimary link="/Contato#header" text="Entrar em contato" />
          </div>
        </div>

        <div className='pt-36'>
        <div className='container mx-auto  border-b border-gray-400 pb-100'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-[42%]'>
            <img src='https://uploaddeimagens.com.br/images/003/910/911/full/Grupo_886.png?1655839880' alt='' />
          </div>

          <div className='lg:w-[48%] mt-10 lg:mt-0'>
            <h2 className='text-3xl lg:text-4xl font-medium text-[#202124] mb-[30px]'>30 anos de uma jornada de conhecimento e evolução</h2>
            <p className='text-base text-[#373737] font-light pb-[40px] border-b border-gray-400'>Fundada em 1989 pelo Sr. Gilberto Alves da Silva, a empresa iniciou as suas operações com o propósito principal a fabricação de injetoras para o poliuretano</p>
            <p className='text-base text-[#373737] font-light mt-[30px]'>Hoje somos líderes no mercado brasileiro e latino americano na fabricação de dosadoras de PU, nossa capacidade tecnológica e fabril nos traz a possibilidade de  desenvolver e fabricar projetos especiais de pequeno, médio e grande porte</p>
            <div className='flex flex-wrap lg:flex-nowrap gap-16 mt-[50px]'>
            <div>
              <h3 className='text-3xl text-[#81D742] font-medium'>+30 anos</h3>
              <span className='text-base text-[#202124]'>de Experiência</span>
            </div>

            <div>
              <h3 className='text-3xl text-[#81D742] font-medium'>+50</h3>
              <span className='text-base text-[#202124]'>Colaboradores</span>
            </div>

            <div>
              <h3 className='text-3xl text-[#81D742] font-medium'>+1000</h3>
              <span className='text-base text-[#202124]'>Equipamentos</span>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className='py-36'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-[40%]'>
              <h2 className='text-4xl font-medium text-[#202124] mb-[30px]'>Tecnologia para inovar</h2>
              <p className='text-[#373737] font-light text-base'>Desenvolvemos equipamentos industriais com alta tecnologia de PU aos mais diversos setores da indústria, sempre buscando entregar aos nossos clientes  máquinas de alto desempenho, qualidade e produtividade.</p>
              <p className='text-[#373737] font-light text-base mt-[30px] mb-[50px]'>Aliando o suporte industrial de sua outra empresa (Fratec – Indústria de componentes para equipamentos importados) com o “know-how” técnico mecânico, foi possível criar tecnologia própria para produzir injetoras para PU. </p>
              <ButtonPrimary link='/A-Sulpol#journey' text='Continue explorando'/>
            </div>

            <div className='lg:w-[50%] relative mt-10 h-400 lg:h-auto'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/nw8qLxoEHyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        </div>

        <div className='py-36 bg-[#202124]'  id='journey'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <h2 className='text-white font-medium text-4xl lg:w-[60%]'>Nossa jornada</h2>

            <div className='flex justify-between items-center w-[35%]'>
              <div className='w-[70%] relative hidden lg:block'>
                <div className='bg-gray-600 w-full h-1'></div>
                <div className='absolute top-0 bg-[#81D742] w-[100%] h-1'></div>
              </div>
              <div className='flex gap-3 mt-5 lg:mt-0'>
                <img onClick={handleLeftClick } className='cursor-pointer' src='https://gistcdn.githack.com/wesleyeagles/669cb3210e4750510f7a39efc7aa561a/raw/2e66ec2d8343ffc2e49a345f49c942a2171708c6/arrowleft.svg' alt='' />
                <img onClick={handleRightClick } className='cursor-pointer' src='https://gistcdn.githack.com/wesleyeagles/cc8d37dff5a318617a27001ba69c8b45/raw/69ee73c56cf67bd6509a3d9820d90c8a01a3d4ce/arrowright.svg' alt='' />
              </div>
            </div>
          </div>

          <div className='wrapper'>
          <div ref={carousel} className='carousel-linhadotempo flex overflow-x-auto scroll-smooth h-[480px] items-center gap-[30px] border-b border-b-gray-600'>
          <div className='flex flex-col relative h-full justify-center'>
          <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
          <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1989</span>
          <span className='bg-[#81D742] w-[5px] h-[35px] flex absolute right-[30px] lg:top-[100px] 2xl:top-[110px]'></span>
          <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Fundação</h3>
          <p className='text-sm font-light text-[#373737] w-[95%]'>A Sulpol, fundada em 1989 por Gilberto Alves da Silva, tinha como principal propósito a fabricação de injetoras para poliuretano.</p>
          </div>
          <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
          </div>

          <div className='flex flex-col relative h-full justify-center'>
          <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
          <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1994</span>
          <span className='bg-[#81D742] w-[5px] h-[35px] flex absolute right-[30px] lg:top-[100px] 2xl:top-[110px]'></span>
          <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Primeira exportação</h3>
          <p className='text-sm font-light text-[#373737] w-[95%]'>Em 1994, é realizada a primeira exportação de um equipamento (injetora para PU) com tecnologia Sulpol.</p>
          </div>
          <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
          </div>

          <div className='flex flex-col relative h-full justify-center'>
          <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
          <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
          <span className='bg-[#81D742] w-[5px] h-[35px] flex absolute right-[30px] lg:top-[100px] 2xl:top-[110px]'></span>
          <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansão</h3>
          <p className='text-sm font-light text-[#373737] w-[95%]'>Visando atender aos mais diversos segmentos da indústria, acontece a expansão de sua área física, aumento no número de colaboradores e de modelos de injetoras.</p>
          </div>
          <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
          </div>

          <div className='flex flex-col relative h-full justify-center'>
          <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
          <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
          <span className='bg-[#81D742] w-[5px] h-[35px] flex absolute right-[30px] lg:top-[100px] 2xl:top-[110px]'></span>
          <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansão</h3>
          <p className='text-sm font-light text-[#373737] w-[95%]'>Visando atender aos mais diversos segmentos da indústria, acontece a expansão de sua área física, aumento no número de colaboradores e de modelos de injetoras.</p>
          </div>
          <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
          </div>

          <div className='flex flex-col relative h-full justify-center'>
          <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
          <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
          <span className='bg-[#81D742] w-[5px] h-[35px] flex absolute right-[30px] lg:top-[100px] 2xl:top-[110px]'></span>
          <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansão</h3>
          <p className='text-sm font-light text-[#373737] w-[95%]'>Visando atender aos mais diversos segmentos da indústria, acontece a expansão de sua área física, aumento no número de colaboradores e de modelos de injetoras.</p>
          </div>
          <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
          </div>


          </div>
          </div>
        </div>
        </div>

        <div className='py-36'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-[50%] 2xl:w-[47%]'>
            <span className="text-base text-[#81D742] font-medium">
            O QUE FAZEMOS?
            </span>
            <h2 className="text-4xl mb-[4rem]">Somos líderes na fabricação de equipamentos para poliuretano</h2>
            <img src='https://uploaddeimagens.com.br/images/003/911/417/full/Grupo_883.png?1655898236' alt='' />
            </div>

            <div className='lg:w-[40%] 2xl:w-[45%] mt-10 lg:mt-0'>
            <Element className='mb-[30px]'/>
            <div>
            <h2 className='text-xl text-[#202124] font-medium'>Mercado de Calçados</h2>
            <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Temos dosadoras de PU, injetoras de PU de baixa pressão e alta pressão específicas para produção na área dos calçados.</p>
            <HashLink to='/LPCalcado#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipamentos <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
            </div>

            <div className='my-50'>
            <h2 className='text-xl text-[#202124] font-medium'>Mercado de Refrigeração</h2>
            <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Nossas dosadoras de Poliuretano e injetoras de alta pressão de PU são equipamentos projetados com características específicas  para empresas do ramo de refrigeração.</p>
            <HashLink to='/LPRefrigeracao#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipamentos <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
            </div>

            <div>
            <h2 className='text-xl text-[#202124] font-medium'>Mercado de filtros automotivos</h2>
            <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Nossas dosadoras e injetoras para elastômeros podem ser concebidas diretamente e com características únicas, feitas sob demanda para o mercado de filtros automotivos.</p>
            <HashLink to='/LPFiltros#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipamentos <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
            </div>
            </div>
          </div>
        </div>
        </div>

        <div className='py-36 bg-[#81D742] relative'>
        <img className='absolute -top-2 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/f6e273fe885bfa05478d7c46d6ed7b16/raw/399a3263ebd92ea9aaffbc565a66b16033a20d62/triangle.svg' alt='' />
        <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
        <h2 className='text-white text-4xl font-medium text-center mb-8'>Agende uma reunião com a nossa equipe</h2>
        <p className='text-white text-base font-light text-center lg:w-[46%] mb-8'>Converse com nossos especialistas e conheça as soluções e equipamentos  que mais se adequam a necessidade da sua empresa.</p>
        <img className='mb-5' src='https://gistcdn.githack.com/wesleyeagles/85249aa09efd11bef423544f58e459ce/raw/668a47b78297e7bb30d22458bb0ecabaead200c6/arrowdownx.svg' alt='' />
        <HashLink className='text-white border border-white py-4 px-10 text-base font-semibold' to='/Contato#header'>Entrar em contato</HashLink>
        </div>
        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default ASulpol