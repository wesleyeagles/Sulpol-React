import React, { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import {ReactComponent as Element } from '../images/Element.svg'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import {motion} from "framer-motion"
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsappButton from '../components/WhatsappButton'

const ASulpol = () => {


  const carousel = useRef(null)
  const border = useRef(null)
  const mobile = window.matchMedia("(max-width: 428px)")

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
          <img className='absolute w-full h-full object-cover -z-10' alt='slide-1' src='https://uploaddeimagens.com.br/images/003/910/884/full/Grupo_141.png?1655839430' />
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
            <img src='https://uploaddeimagens.com.br/images/003/910/911/full/Grupo_886.png?1655839880' alt='' />
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
    <Footer />
    <WhatsappButton />
    </motion.div>
  )
}

export default ASulpol