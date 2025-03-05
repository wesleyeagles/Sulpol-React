import React, { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import {ReactComponent as Element } from '../images/Element.svg'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import {motion} from "framer-motion"
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'
import { useContext } from 'react'
import Context from '../contexts/MainContext'

import banner from '../images/new-images/sulpol/banner.png'
import jornada from '../images/new-images/sulpol/jornada.png'
import lideres from '../images/new-images/sulpol/lideres.png'

const ASulpol = () => {


  const carousel = useRef(null)
  const mobile = window.matchMedia("(max-width: 428px)")

  const { isPortuguese, isEnglish, isSpanish } = useContext(Context)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= 490;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += 490;

      };

      setTimeout(() => {

        if (mobile.matches) {
          const topnavbar = document.getElementById("topbar");
          const navbar = document.getElementById("header");
          navbar.style.display = "block";
          console.log("Mobile")
        } else {
  
          const topnavbar = document.getElementById("topbar");
          const navbar = document.getElementById("header");
          topnavbar.style.display = "block";
          navbar.style.display = "block";
          console.log("Desktop")
        }
  
  
       
      }, 100);

    if (isPortuguese) {
      return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
        <div>
          <div className='relative w-full h-[100vh] flex items-center z-10'>
              <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={banner} />
              <div className='container mx-auto'>
                <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>Somos tecnologia em constante movimento</h1>
                <p className='text-base text-white mb-12 lg:w-[35%]'>Fundada em 1989, hoje a SULPOL é líder no mercado brasileiro e latino americano no desenvolvimento e fabricação de dosadoras de Poliuretano.</p>
                <ButtonPrimary link="/Contato#header" text="Entrar em contato" />
              </div>
            </div>
    
            <div className='pt-36'>
            <div className='container mx-auto  border-b border-gray-300 pb-100'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='lg:w-[42%]'>
                <img src={jornada} alt='' />
              </div>
    
              <div className='lg:w-[48%] mt-10 lg:mt-0'>
                <h2 className='text-3xl lg:text-4xl font-medium text-[#202124] mb-[30px]'>30 anos de uma jornada de conhecimento e evolução</h2>
                <p className='text-base text-[#373737] font-light pb-[40px] border-b border-gray-300'>Utilizando tecnologia de ponta e a sua experiência de mais de 30 anos de atuação no mercado do Poliuretano, fornecendo soluções para facilitar os processos e  evitar desperdícios no processo, bem como evitar a geração de resíduos.</p>
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
            <div className='mt-10'>
            <p className='text-base text-[#373737] font-light mt-[30px]'>A SULPOL é uma empresa fabricante de equipamentos para aplicação de Poliuretano, e também uma empresa de engenharia, que conta com corpo técnico especializado nesse mercado para desenvolver produtos especiais que optimizem o processo de fabricação de peças para  os diversos setores da indústria, agregando ainda mais qualidade ao seu produto final.</p>
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
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Fundação</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>A Sulpol, fundada em 1989 por Gilberto Alves da Silva, tinha como principal propósito a fabricação de injetoras para poliuretano. Aliando o suporte industrial de sua outra empresa (Fratec – Indústria de componentes para equipamentos importados) com o “know-how” técnico mecânico, foi possível criar tecnologia própria para produzir injetoras para PU. No mesmo ano, a Sulpol obtém sucesso e aponta para um futuro promissor.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1994</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Primeira exportação</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 1994, é realizada a primeira exportação de um equipamento (injetora para PU) com tecnologia Sulpol. A partir daí, as exportações acontecem sucessivamente, tornando a marca Sulpol uma referência de qualidade e produtividade no mercado latino americano.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansão</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 1999, 10 anos depois de sua fundação, toda a previsão foi confirmada. Visando atender aos mais diversos segmentos da indústria (calçadista, automobilística, moveleira, de refrigeração, naval, isolamento térmico, de brinquedos, entre outras), acontece a expansão de sua área física, aumento no número de colaboradores e de modelos de injetoras. Consequentemente a marca Sulpol é fortalecida e conquista maior abrangência tanto no mercado Nacional quanto no Internacional.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2001</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Linha para Termoplásticos</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Sempre atenta aos movimentos de mercado, com foco nas necessidades de seus clientes, em 2001 a Sulpol desenvolve a linha de injetoras para termoplásticos, mono e bi colores. Construídas com um alto padrão tecnológico objetivando uma maior produtividade e desempenho com um menor consumo de energia.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2004</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Linha de injetoras para grandes indústrias automotivas</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 2004, a grande visibilidade da marca Sulpol e o seu DNA genuinamente brasileiro, proporcionaram a grande oportunidade de fornecer uma linha completa de equipamentos para grandes indústrias do mercado automotivo. Com isso, projetos com necessidades especiais começaram a fazer parte de nosso dia a dia, abrindo a oportunidade para um forte investimento em nosso setor de criação e desenvolvimento ampliando, ainda mais, nossa capacidade de inovação. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2005</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Tecnologia 100% Nacional para Elastômero</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 2005, a Sulpol lança o primeiro equipamento para injeção de poliuretano elastômero com fabricação, projeto e tecnologia 100% nacional.
              O Poliuretano elastômero, uma matéria prima de alto custo e sem possibilidade de reciclagem, possuía um grande índice de perda em seu processamento manual, e os equipamentos, somente importados tinham um valor bastante alto e sem possibilidades de financiamento impossibilitando sua aquisição.
              A partir deste evento, os fabricantes nacionais com apoio de financiamentos do tipo BNDES, PROGER URBANO dentre outros, conseguiram viabilizar seus projetos, fomentando negócios com o aumento da produtividade e a diminuição dos desperdícios em seus processos. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2007</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Certificado de Qualidade</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 2007, mais um grande acontecimento amplia de forma considerável a capacidade da Sulpol em atender projetos especiais. Sua parceira, Fratec Industrial Mecânica Ltda, iniciou atividades no processo de usinagem pesada, aumentando as possibilidades de absorção de projetos de grande porte. Com isso a Sulpol inicia o processo de busca por oportunidades em diversos segmentos.
    
    Neste mesmo ano, a empresa conquistou pela primeira vez a certificação de qualidade, iniciando uma grande fase de aprimoramento de seus produtos e serviços apostando no treinamento de seus colaboradores e na melhoria contínua de seus processos.
    
    Ainda no ano de 2007, a Sulpol iniciou uma forte parceria com uma tradicional empresa asiática para a comercialização de equipamentos horizontais para termoplásticos em todo o território nacional. Com preços competitivos e alta tecnologia, iniciou as primeiras vendas e o retorno não poderia ter sido melhor. A satisfação dos clientes e usuários foi muito positiva, reforçando os seus esforços para se manter firme neste novo mercado. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2008</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Grandes Resultados</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Nada melhor que iniciar 2008 recebendo o prêmio Lançamentos FIMEC, uma das maiores e principais feiras do mundo para máquinas e componentes destinados ao Mercado de calçados, onde a Sulpol apresentou equipamentos que inovaram as aplicações de produtos para linha calçadista, destacando-se no evento.
              Neste mesmo ano, os investimentos feitos na Fratec começaram a dar resultados e a Sulpol faz o fornecimento de linhas de grande porte para a fabricação de acentos e encostos de veículos para o mercado automotivo. Empresas multinacionais que antes somente possuíam fornecedores internacionais agora também possuem a oportunidade de montar suas linhas com um parceiro nacional com todas as vantagens desta nova opção, inclusive a de financiamentos subsidiados pelo governo brasileiro. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2011</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Lançamento de dosadora para DCPD</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Em 2011, em perfeita harmonia com seu slogan “Tecnologia em constante movimento”, a Sulpol lançou em primeira mão o equipamento para injeção de DCPD (Diciclopentadiêno).Um produto inovador que revolucionou a indústria automotiva de linha pesada, assim como outros mercados.
              E também, como não poderia deixar de ser, a Sulpol novamente foi premiada na FIMEC pelo lançamento de seu novo equipamento rotativo para injeção de termoplásticos expandidos, Centauro.
              A Sulpol não para por ai, procura cada vez mais ampliar sua tecnologia, desenvolvendo novos equipamentos para materiais alternativos, proporcionando aos seus clientes a tradicional qualidade, confiabilidade e produtividade. Ano após ano a Sulpol vem progressivamente prosperando como empresa, abrindo novos mercados e consolidando sua marca tanto em nível nacional como internacional. </p>
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
                <img src={lideres} alt='' />
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
                <HashLink to='/refrigera%C3%A7%C3%A3o' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipamentos <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
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
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
    } else if (isEnglish) {
      return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
        <div>
          <div className='relative w-full h-[100vh] flex items-center z-10'>
              <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={banner} />
              <div className='container mx-auto'>
                <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>We are technology in constant motion</h1>
                <p className='text-base text-white mb-12 lg:w-[35%]'>Founded in 1989, today SULPOL is the leader in the Brazilian and Latin American market in the development and manufacture of Polyurethane dosing machines.</p>
                <ButtonPrimary link="/Contato#header" text="CONTACT US" />
              </div>
            </div>
    
            <div className='pt-36'>
            <div className='container mx-auto  border-b border-gray-300 pb-100'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='lg:w-[42%]'>
                <img src={jornada} alt='' />
              </div>
    
              <div className='lg:w-[48%] mt-10 lg:mt-0'>
                <h2 className='text-3xl lg:text-4xl font-medium text-[#202124] mb-[30px]'>30 years of a journey of knowledge and evolution</h2>
                <p className='text-base text-[#373737] font-light pb-[40px] border-b border-gray-300'>Using state-of-the-art technology and its experience of more than 30 years in the Polyurethane market, providing solutions to facilitate processes and avoid waste in the process, as well as to avoid the generation of waste.</p>
                <p className='text-base text-[#373737] font-light mt-[30px]'>Today we are leaders in the Brazilian and Latin American market in the manufacture of PU dosing machines, our technological and manufacturing capacity gives us the possibility to develop and manufacture special small, medium and large projects.</p>
                <div className='flex flex-wrap lg:flex-nowrap gap-16 mt-[50px]'>
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+30 years</h3>
                  <span className='text-base text-[#202124]'>of Experience</span>
                </div>
    
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+50</h3>
                  <span className='text-base text-[#202124]'>Collaborators</span>
                </div>
    
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+1000</h3>
                  <span className='text-base text-[#202124]'>Equipments</span>
                </div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
            <p className='text-base text-[#373737] font-light mt-[30px]'>SULPOL is a company that manufactures equipment for the application of Polyurethane, and also an engineering company, which has a technical team specialized in this market to develop special products that optimize the manufacturing process of parts for the various industry sectors, adding even more quality to your final product.</p>
            </div>
            </div>
            </div>
    
            <div className='py-36'>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-[40%]'>
                  <h2 className='text-4xl font-medium text-[#202124] mb-[30px]'>Technology to innovate</h2>
                  <p className='text-[#373737] font-light text-base'>We develop industrial equipment with high PU technology for the most diverse sectors of industry, always seeking to deliver high performance, quality and productivity machines to our customers.</p>
                  <p className='text-[#373737] font-light text-base mt-[30px] mb-[50px]'>Combining the industrial support of his other company (Fratec – Industry of components for imported equipment) with the mechanical technical know-how, it was possible to create its own technology to produce injection molding machines for PU. </p>
                  <ButtonPrimary link='/A-Sulpol#journey' text='Keep exploring'/>
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
                <h2 className='text-white font-medium text-4xl lg:w-[60%]'>Our journey</h2>
    
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
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Foundation</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Sulpol, founded in 1989 by Gilberto Alves da Silva, had as its main purpose the manufacture of injection molding machines for polyurethane. Combining the industrial support of his other company (Fratec – Industry of components for imported equipment) with the mechanical technical know-how, it was possible to create its own technology to produce injection molding machines for PU. In the same year, Sulpol succeeds and points to a promising future.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1994</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>First export</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 1994, the first export of equipment (injector for PU) with Sulpol technology is carried out. From then on, exports happened successively, making the Sulpol brand a reference for quality and productivity in the Latin American market.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansion</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 1999, 10 years after its founding, all predictions were confirmed. Aiming to serve the most diverse segments of the industry (footwear, automobile, furniture, refrigeration, shipbuilding, thermal insulation, toys, among others), the expansion of its physical area, an increase in the number of employees and models of injection molding machines is taking place. Consequently, the Sulpol brand is strengthened and conquers greater coverage both in the National and International markets.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2001</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Line for Thermoplastics</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Always attentive to market movements, focusing on the needs of its customers, in 2001 Sulpol developed a line of injection molding machines for thermoplastics, mono and bicolor. Built with a high technological standard aiming at greater productivity and performance with lower energy consumption.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2004</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Line of injectors for large automotive industries</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 2004, the great visibility of the Sulpol brand and its genuinely Brazilian DNA provided the great opportunity to supply a complete line of equipment for major industries in the automotive market. As a result, projects with special needs began to be part of our daily lives, opening up the opportunity for strong investment in our creation and development sector, expanding our innovation capacity even further.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2005</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>100% National Technology for Elastomers</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 2005, Sulpol launches the first equipment for injection of polyurethane elastomer with 100% national manufacturing, design and technology. Polyurethane elastomer, a raw material of high cost and without the possibility of recycling, had a high rate of loss in its manual processing, and the equipment, only imported, had a very high value and without possibilities of financing, making its acquisition impossible. event, national manufacturers with the support of financing such as BNDES, PROGER URBANO, among others, were able to make their projects viable, fostering business with increased productivity and reduced waste in their processes. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2007</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Quality Certificate</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 2007, another major event considerably expands Sulpol's capacity to handle special projects. Its partner, Fratec Industrial Mecânica Ltda, started activities in the heavy machining process, increasing the possibilities of absorbing large projects. With that, Sulpol starts the process of searching for opportunities in several segments.
    
              That same year, the company won its quality certification for the first time, initiating a major phase of improvement of its products and services, investing in the training of its employees and the continuous improvement of its processes.
    
              Also in 2007, Sulpol started a strong partnership with a traditional Asian company for the commercialization of horizontal equipment for thermoplastics throughout the national territory. With competitive prices and high technology, it started its first sales and the return could not have been better. Customer and user satisfaction was very positive, reinforcing its efforts to remain firm in this new market. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2008</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Great Results</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Nothing better than starting 2008 receiving the FIMEC Launches award, one of the largest and main fairs in the world for machinery and components for the footwear market, where Sulpol presented equipment that innovated the application of products for the footwear line, standing out at the event.
              In the same year, the investments made in Fratec began to bear fruit and Sulpol supplies large lines for the manufacture of seat and backrests for vehicles for the automotive market. Multinational companies that previously only had international suppliers now also have the opportunity to set up their lines with a national partner with all the advantages of this new option, including financing subsidized by the Brazilian government. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2011</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Launch of batcher for DCPD</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>In 2011, in perfect harmony with its slogan “Technology in constant motion”, Sulpol launched the first-hand DCPD (Dicyclopentadiene) injection equipment. An innovative product that revolutionized the heavy-duty automotive industry, as well as other markets.
              And also, as it should be, Sulpol was again awarded at FIMEC for the launch of its new rotary equipment for injection of expanded thermoplastics, Centauro.
              Sulpol does not stop there, it is increasingly seeking to expand its technology, developing new equipment for alternative materials, providing its customers with traditional quality, reliability and productivity. Year after year, Sulpol has progressively prospered as a company, opening new markets and consolidating its brand both nationally and internationally. </p>
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
                WHAT WE DO?
                </span>
                <h2 className="text-4xl mb-[4rem]">We are leaders in the manufacture of equipment for polyurethane</h2>
                <img src={lideres} alt='' />
                </div>
    
                <div className='lg:w-[40%] 2xl:w-[45%] mt-10 lg:mt-0'>
                <Element className='mb-[30px]'/>
                <div>
                <h2 className='text-xl text-[#202124] font-medium'>Footwear Market</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>We have PU dosers, low pressure and high pressure PU injectors specific for production in the footwear area.</p>
                <HashLink to='/LPCalcado#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>See equipment <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
    
                <div className='my-50'>
                <h2 className='text-xl text-[#202124] font-medium'>Refrigeration Market</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Our Polyurethane dosers and high pressure PU injectors are equipment designed with specific characteristics for companies in the refrigeration industry.</p>
                <HashLink to='/refrigera%C3%A7%C3%A3o' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>See equipment <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
    
                <div>
                <h2 className='text-xl text-[#202124] font-medium'>Automotive Filter Market</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Our dosers and injectors for elastomers can be designed directly and with unique features, made on demand for the automotive filter market.</p>
                <HashLink to='/LPFiltros#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>See equipment <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
                </div>
              </div>
            </div>
            </div>
    
            <div className='py-36 bg-[#81D742] relative'>
            <img className='absolute -top-2 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/f6e273fe885bfa05478d7c46d6ed7b16/raw/399a3263ebd92ea9aaffbc565a66b16033a20d62/triangle.svg' alt='' />
            <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
            <h2 className='text-white text-4xl font-medium text-center mb-8'>Schedule a meeting with our team</h2>
            <p className='text-white text-base font-light text-center lg:w-[46%] mb-8'>Talk to our specialists and learn about the solutions and equipment that best suit your company's needs.</p>
            <img className='mb-5' src='https://gistcdn.githack.com/wesleyeagles/85249aa09efd11bef423544f58e459ce/raw/668a47b78297e7bb30d22458bb0ecabaead200c6/arrowdownx.svg' alt='' />
            <HashLink className='text-white border border-white py-4 px-10 text-base font-semibold' to='/Contato#header'>Contact Us</HashLink>
            </div>
            </div>
            </div>
        </div>
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
    } else if (isSpanish) {
      return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.8}}}
        exit={{opacity: 0, transition: {duration: 0.1} }}
        >
        <TopNavBar />
        <Navbar />
        <div>
          <div className='relative w-full h-[100vh] flex items-center z-10'>
              <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src={banner} />
              <div className='container mx-auto'>
                <h1 className='text-white text-4xl leading-tight font-medium lg:w-[55%] 2xl:w-[40%] mb-7 pt-40'>Somos tecnología en constante movimiento</h1>
                <p className='text-base text-white mb-12 lg:w-[35%]'>Fundada en 1989, hoy SULPOL es líder en el mercado brasileño y latinoamericano en el desarrollo y fabricación de dosificadores de Poliuretano.</p>
                <ButtonPrimary link="/Contato#header" text="Entrar en contacto" />
              </div>
            </div>
    
            <div className='pt-36'>
            <div className='container mx-auto  border-b border-gray-300 pb-100'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='lg:w-[42%]'>
                <img src={jornada} alt='' />
              </div>
    
              <div className='lg:w-[48%] mt-10 lg:mt-0'>
                <h2 className='text-3xl lg:text-4xl font-medium text-[#202124] mb-[30px]'>30 años de un camino de conocimiento y evolución</h2>
                <p className='text-base text-[#373737] font-light pb-[40px] border-b border-gray-300'>Utilizando tecnología de punta y su experiencia de más de 30 años en el mercado del Poliuretano, brindando soluciones para facilitar los procesos y evitar desperdicios en el proceso, así como evitar la generación de residuos.</p>
                <p className='text-base text-[#373737] font-light mt-[30px]'>Hoy somos líderes en el mercado brasileño y latinoamericano en la fabricación de máquinas dosificadoras de PU, nuestra capacidad tecnológica y de fabricación nos da la posibilidad de desarrollar y fabricar proyectos especiales pequeños, medianos y grandes.</p>
                <div className='flex flex-wrap lg:flex-nowrap gap-16 mt-[50px]'>
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+30 años</h3>
                  <span className='text-base text-[#202124]'>de Experiencia</span>
                </div>
    
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+50</h3>
                  <span className='text-base text-[#202124]'>Colaboradores</span>
                </div>
    
                <div>
                  <h3 className='text-3xl text-[#81D742] font-medium'>+1000</h3>
                  <span className='text-base text-[#202124]'>Equipos</span>
                </div>
                </div>
              </div>
            </div>
            <div className='mt-10'>
            <p className='text-base text-[#373737] font-light mt-[30px]'>SULPOL es una empresa fabricante de equipos para la aplicación de Poliuretano, y también una empresa de ingeniería, que cuenta con un equipo técnico especializado en este mercado para desarrollar productos especiales que optimicen el proceso de fabricación de piezas para los distintos sectores de la industria, sumando aún más calidad a su producto final.</p>
            </div>
            </div>
            </div>
    
            <div className='py-36'>
            <div className='container mx-auto'>
              <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-[40%]'>
                  <h2 className='text-4xl font-medium text-[#202124] mb-[30px]'>Tecnología para innovar</h2>
                  <p className='text-[#373737] font-light text-base'>Desarrollamos equipos industriales con alta tecnología PU para los más diversos sectores de la industria, buscando siempre entregar máquinas de alto rendimiento, calidad y productividad a nuestros clientes.</p>
                  <p className='text-[#373737] font-light text-base mt-[30px] mb-[50px]'>Combinando el apoyo industrial de su otra empresa (Fratec - Industria de componentes para equipos importados) con el know-how técnico mecánico, fue posible crear su propia tecnología para producir máquinas de moldeo por inyección para PU. </p>
                  <ButtonPrimary link='/A-Sulpol#journey' text='Seguir explorando'/>
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
                <h2 className='text-white font-medium text-4xl lg:w-[60%]'>Nuestro viaje</h2>
    
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
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Base</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Sulpol, fundada en 1989 por Gilberto Alves da Silva, tenía como objetivo principal la fabricación de máquinas de moldeo por inyección de poliuretano. Combinando el apoyo industrial de su otra empresa (Fratec - Industria de componentes para equipos importados) con el know-how técnico mecánico, fue posible crear su propia tecnología para producir máquinas de moldeo por inyección para PU. En el mismo año, Sulpol triunfa y apunta a un futuro prometedor.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1994</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Primera exportación</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 1994, se realiza la primera exportación de equipos (inyectores para PU) con tecnología Sulpol. A partir de entonces, las exportaciones se sucedieron sucesivamente, haciendo de la marca Sulpol una referencia de calidad y productividad en el mercado latinoamericano.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>1999</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Expansión</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 1999, 10 años después de su fundación, se confirmaron todos los pronósticos. Con el objetivo de atender a los más diversos segmentos de la industria (calzado, automóvil, muebles, refrigeración, construcción naval, aislamiento térmico, juguetes, entre otros), la ampliación de su área física, aumento en el número de empleados y modelos de máquinas de moldeo por inyección se esta llevando a cabo. En consecuencia, la marca Sulpol se fortalece y conquista mayor cobertura tanto en el mercado Nacional como Internacional.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2001</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Línea para Termoplásticos</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Siempre atenta a los movimientos del mercado, con foco en las necesidades de sus clientes, Sulpol desarrolló en 2001 una línea de máquinas de moldeo por inyección para termoplásticos, mono y bicolor. Construido con un alto estándar tecnológico buscando mayor productividad y desempeño con menor consumo de energía.</p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2004</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Línea de inyectores para grandes industrias automotrices</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 2004, la gran visibilidad de la marca Sulpol y su ADN genuinamente brasileño brindaron la gran oportunidad de suministrar una línea completa de equipos para las principales industrias del mercado automotriz. Como resultado, proyectos con necesidades especiales comenzaron a formar parte de nuestro día a día, abriendo la oportunidad de una fuerte inversión en nuestro sector de creación y desarrollo, ampliando aún más nuestra capacidad de innovación. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2005</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Tecnología 100% Nacional para Elastómeros</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 2005, Sulpol lanza el primer equipo para inyección de elastómero de poliuretano con fabricación, diseño y tecnología 100% nacional.
              El elastómero de poliuretano, materia prima de alto costo y sin posibilidad de reciclaje, tenía un alto índice de pérdida en su procesamiento manual, y los equipos, que solo eran importados, tenían un valor muy alto y sin posibilidades de financiamiento, por lo que su adquisición imposible.
              A partir de este evento, los fabricantes nacionales con el apoyo de financiamientos como BNDES, PROGER URBANO, entre otros, lograron viabilizar sus proyectos, fomentando negocios con aumento de productividad y reducción de desperdicios en sus procesos. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2007</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Certificado de Calidad</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 2007, otro gran evento amplía considerablemente la capacidad de Sulpol para atender proyectos especiales. Su socia, Fratec Industrial Mecânica Ltda, inició actividades en el proceso de mecanizado pesado, ampliando las posibilidades de absorción de grandes proyectos. Con eso, Sulpol inicia el proceso de búsqueda de oportunidades en varios segmentos.
    
    Ese mismo año, la empresa obtuvo por primera vez su certificación de calidad, iniciando una importante etapa de mejora de sus productos y servicios, invirtiendo en la formación de sus empleados y la mejora continua de sus procesos.
    
    También en 2007, Sulpol inició una fuerte sociedad con una tradicional empresa asiática para la comercialización de equipos horizontales para termoplásticos en todo el territorio nacional. Con precios competitivos y alta tecnología, inició sus primeras ventas y la rentabilidad no pudo ser mejor. La satisfacción de clientes y usuarios fue muy positiva, reforzando su esfuerzo por mantenerse firme en este nuevo mercado. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2008</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Buenos Resultados</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>Nada mejor que iniciar el 2008 recibiendo el premio FIMEC Lanzamientos, una de las mayores y principales ferias del mundo de máquinas y componentes para el mercado del calzado, donde Sulpol presentó equipos que innovaron en la aplicación de productos para la línea de calzado, destacándose en el evento .
              En el mismo año, las inversiones realizadas en Fratec comenzaron a dar sus frutos y Sulpol suministra grandes líneas para la fabricación de asientos y respaldos de vehículos para el mercado automotriz. Las empresas multinacionales que antes solo tenían proveedores internacionales ahora también tienen la oportunidad de instalar sus líneas con un socio nacional con todas las ventajas de esta nueva opción, incluida la financiación subsidiada por el gobierno brasileño. </p>
              </div>
              <img className='flex-none w-[15px] absolute bottom-0 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/8058292159a7b4626e6c10134e18f375/raw/9934191030c80008944781072400b61c72fa1fd3/lifeline.svg' alt='' />
              </div>
    
              <div className='flex flex-col relative h-full justify-center'>
              <div className='flex-none bg-white w-[28.75rem] h-[260px] rounded-xl relative px-[30px] pt-50'>
              <span className='bg-[#81D742] p-2 text-white text-xl rounded-md absolute left-[30px] -top-[30px]'>2011</span>
              <h3 className='text-xl text-[#202124] font-normal mb-[15px]'>Lanzamiento de dosificador para DCPD</h3>
              <p className='text-sm font-light text-[#373737] w-[100%] max-h-28 overflow-y-scroll pr-8 scroll-text'>En 2011, en perfecta sintonía con su lema “Tecnología en constante movimiento”, Sulpol lanzó de primera mano el equipo de inyección DCPD (Diciclopentadieno), un producto innovador que revolucionó la industria automotriz pesada, así como otros mercados.
              Y también, como debe ser, Sulpol fue nuevamente premiada en FIMEC por el lanzamiento de su nuevo equipo rotativo para inyección de termoplásticos expandidos, Centauro.
              Sulpol no se queda ahí, busca cada vez más expandir su tecnología, desarrollando nuevos equipos para materiales alternativos, brindando a sus clientes calidad, confiabilidad y productividad tradicionales. Año tras año, Sulpol ha prosperado progresivamente como empresa, abriendo nuevos mercados y consolidando su marca tanto a nivel nacional como internacional. </p>
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
                QUE HACEMOS?
                </span>
                <h2 className="text-4xl mb-[4rem]">Somos líderes en la fabricación de equipos para poliuretano</h2>
                <img src={lideres} alt='' />
                </div>
    
                <div className='lg:w-[40%] 2xl:w-[45%] mt-10 lg:mt-0'>
                <Element className='mb-[30px]'/>
                <div>
                <h2 className='text-xl text-[#202124] font-medium'>Mercado del Calzado</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Contamos con dosificadores de PU, inyectores de PU de baja y alta presión específicos para la producción en el área de calzado.</p>
                <HashLink to='/LPCalcado#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipo <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
    
                <div className='my-50'>
                <h2 className='text-xl text-[#202124] font-medium'>Mercado de Refrigeración</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Nuestros dosificadores de Poliuretano e inyectores de PU de alta presión son equipos diseñados con características específicas para empresas de la industria frigorífica.</p>
                <HashLink to='/refrigera%C3%A7%C3%A3o' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipo <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
    
                <div>
                <h2 className='text-xl text-[#202124] font-medium'>Mercado de filtros automotrices</h2>
                <p className='text-base text-[#505050] font-light mt-[10px] mb-[40px]'>Nuestros dosificadores e inyectores para elastómeros pueden diseñarse directamente y con características únicas, fabricados bajo demanda para el mercado de filtros automotrices.</p>
                <HashLink to='/LPFiltros#lpheader' className='text-sm text-[#81D742] font-semibold flex items-center gap-2' rel='noreferrer'>Ver equipo <img className='mt-1' src='https://gistcdn.githack.com/wesleyeagles/7966ded13d7f4bd7d4874cdd9b17798b/raw/7f6cd6b287866fc22b004a6424ab007d66c21bd8/arrowrightx.svg' alt=''></img></HashLink>
                </div>
                </div>
              </div>
            </div>
            </div>
    
            <div className='py-36 bg-[#81D742] relative'>
            <img className='absolute -top-2 left-2/4 -translate-x-2/4' src='https://gistcdn.githack.com/wesleyeagles/f6e273fe885bfa05478d7c46d6ed7b16/raw/399a3263ebd92ea9aaffbc565a66b16033a20d62/triangle.svg' alt='' />
            <div className='container mx-auto'>
            <div className='flex flex-col items-center'>
            <h2 className='text-white text-4xl font-medium text-center mb-8'>Agenda una reunión con nuestro equipo</h2>
            <p className='text-white text-base font-light text-center lg:w-[46%] mb-8'>CHable con nuestros especialistas y conozca las soluciones y equipos que mejor se adaptan a las necesidades de su empresa.</p>
            <img className='mb-5' src='https://gistcdn.githack.com/wesleyeagles/85249aa09efd11bef423544f58e459ce/raw/668a47b78297e7bb30d22458bb0ecabaead200c6/arrowdownx.svg' alt='' />
            <HashLink className='text-white border border-white py-4 px-10 text-base font-semibold' to='/Contato#header'>Entrar en contacto</HashLink>
            </div>
            </div>
            </div>
        </div>
        <Footer />
        <WhatsappButton />
        </motion.div>
      )
    }

  
}

export default ASulpol