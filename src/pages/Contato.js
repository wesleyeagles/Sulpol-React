import React from "react";
import FAQ from '../components/FAQ'
import {motion} from "framer-motion"

const Contato = () => {

  setTimeout(() => {
    const mobile = window.matchMedia("(max-width: 428px)")

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
    <div>
      <div className="pt-64 py-36">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between border-b border-gray-300 pb-100">
            <div className="lg:w-[30%]">
              <span className="text-base text-[#81D742] font-medium">
                FALE CONOSCO
              </span>
              <h2 className="text-4xl mb-[2rem]">
                Precisa de ajuda? Então você está no lugar certo!
              </h2>
              <p className="text-base text-[#373737] font-light mb-[5rem]">
                Conte com nosso time de atendimento sempre que tiver qualquer
                dúvida sobre nossos serviços e equipamentos.
              </p>
              <a
                className="bg-[#81D742] py-4 px-5 text-white rounded-xl"
                href="#form"
              >
                Fale com nossa equipe
              </a>
            </div>

            <div className="lg:w-[65%] 2xl:w-[60%]">
              <div className="flex justify-between">
                <div className="hidden lg:block">
                  <img
                    src="https://uploaddeimagens.com.br/images/003/911/484/full/Grupo_884.png?1655901616"
                    alt=""
                  />
                </div>

                <div>
                  <div className="bg-white form-shadow w-[25rem] lg:h-[28rem] rounded-2xl p-50 mt-20 lg:mt-0">
                    <h2 className="text-base text-[#202124] font-medium mb-14">PRECISA CONVERSAR DE FORMA RÁPIDA E DIRETA?</h2>
                    <a href='https://wa.me/5551995283277' target='_blank'><span className="flex items-center justify-between w-full border-b border-gray-300 pb-5"><span className="bg-[#81D742] rounded-full w-[50px] h-[50px] flex justify-center items-center"><img src='https://gistcdn.githack.com/wesleyeagles/8262d76a5131781c620751b8cbef7b88/raw/d1e49b0d2a8eccb975e66a98dee8ab820ba5f942/whatsapp.svg' alt=''/></span><h2 className="w-[70%]">Chame no whatsapp</h2>  <img className="pt-1" src='https://gistcdn.githack.com/wesleyeagles/5be5bf697ec9fb1c641d49ff26362d00/raw/5d93320e6950259252c3ab186ee4d8c689a4f370/arrowrighta.svg' alt='' /></span></a>
                    <a href='tel:555130756565' target='_blank'><span className="flex items-center justify-between w-full border-b border-gray-300 pb-5 mt-5"><span className="bg-[#81D742] rounded-full w-[50px] h-[50px]  flex justify-center items-center"><img src='https://gistcdn.githack.com/wesleyeagles/5ad20306df0657eb3f28149f126beec9/raw/a780a58c0e0089bd550736705b3b98e9dc922b29/whatsapp.svg' alt=''/></span><h2 className="w-[70%]">Ligar agora</h2>  <img className="pt-1" src='https://gistcdn.githack.com/wesleyeagles/5be5bf697ec9fb1c641d49ff26362d00/raw/5d93320e6950259252c3ab186ee4d8c689a4f370/arrowrighta.svg' alt='' /></span></a>
                    <a href='mailto:comercial@sulpol.com.br' target='_blank'><span className="flex items-center justify-between w-full mt-5"><span className="bg-[#81D742] rounded-full  w-[50px] h-[50px]  flex justify-center items-center"><img src='https://gistcdn.githack.com/wesleyeagles/da642aedf218ae3e3599379f380e442f/raw/bf72fb0bfd84338aca4451a6dab510b2efb38630/whatsapp.svg' alt=''/></span><h2 className="w-[70%]">Enviar um e-mail</h2>  <img className="pt-1" src='https://gistcdn.githack.com/wesleyeagles/5be5bf697ec9fb1c641d49ff26362d00/raw/5d93320e6950259252c3ab186ee4d8c689a4f370/arrowrighta.svg' alt='' /></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="" id="form">
      <div className="container mx-auto  border-b border-gray-300 pb-100">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[55%]">
            <h2 className="text-3xl text-[#202124] font-medium mb-10">Vamos conversar?</h2>
            <p className="text-base text-[#202124] font-light lg:w-[75%] 2xl:w-[65%] mb-12">Complete o formulário abaixo para saber como a Sulpol contribuir para o desenvolvimento da sua empresa </p>
            <form action="">
              <div className="flex justify-between">
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Nome" name="name" id="name" />
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Sobrenome" name="sobname" id="sobname" />
              </div>

              <div className="flex justify-between mt-5 mb-12">
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="email" placeholder="E-mail" name="mail" id="mail" />
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="tel" placeholder="Telefone" name="phone" id="phone" />
              </div>

              <h3 className="text-xl text-[#202124] font-normal">De onde você é?</h3>

              <div className="flex justify-between mt-5 mb-12">
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Estado" name="state" id="state" />
                <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Cidade" name="city" id="city" />
              </div>

              <label className="flex gap-2 mb-50" htmlFor="privacity">
                <input className="block" type="checkbox" name="privacity" id="privacity" />
                <span>Estou de acordo com a Política de Privacidade</span>
              </label>

              <button className="w-full bg-[#81D742] text-white py-4 rounded-lg font-semibold text-base" type="submit">ENVIAR</button>

            </form>
          </div>

          <div className="lg:w-[35%] 2xl:w-[35%] lg:pt-28 2xl:pt-36 mt-20 lg:mt-0">
          <h2 className="text-3xl text-[#202124] font-medium mb-7">Em caso de dúvidas entre em contato:</h2>
          <p className="text-base text-[#202124] mb-8">Estamos prontos para te atender!</p>
          <p className="text-base text-[#AAAAAA] font-light">O nosso horário de atendimento é de segunda à sexta, das 07:30 às 16:30</p>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between mt-50">
          <div className="lg:w-[48%] bg-[#F5F5F5] rounded-lg p-5">
            <span className="text-tiny text-[#202124] flex mb-5 gap-3"><img src='https://gistcdn.githack.com/wesleyeagles/503ed044f6f4fab5fd716ce2ce4add68/raw/6aacce9f5b4388c07f5bad4e266ae85f57624424/phone.svg' alt='' />NÚMERO DE TELEFONE</span>
            <span className="flex mb-5 text-base text-[#202124] font-medium">+55 51 3075-6565 </span>
            <a className="flex gap-3 text-sm text-[#AAAAAA]" href="tel:555130756565">Ligar agora <img className="pt-1" src='https://gistcdn.githack.com/wesleyeagles/5be5bf697ec9fb1c641d49ff26362d00/raw/5d93320e6950259252c3ab186ee4d8c689a4f370/arrowrighta.svg' alt='' /></a>
          </div>
          <div className="lg:w-[48%] bg-[#F5F5F5] rounded-lg p-5">
            <span className="text-tiny text-[#202124] flex mb-5 gap-3"><img src='https://gistcdn.githack.com/wesleyeagles/30f3259f159c3c3153c4d382116a298d/raw/49516904591b555633275301a38cb3f29f9344b2/mailx.svg' alt='' />E-MAIL</span>
            <span className="flex mb-5 text-base text-[#202124] font-medium">sulpol@sulpol.com.br </span>
            <a className="flex gap-3 text-sm text-[#AAAAAA]" href="mailto:sulpol@sulpol.com.br">Ligar agora <img className="pt-1" src='https://gistcdn.githack.com/wesleyeagles/5be5bf697ec9fb1c641d49ff26362d00/raw/5d93320e6950259252c3ab186ee4d8c689a4f370/arrowrighta.svg' alt='' /></a>
          </div>
          </div>

          <div className="flex gap-10 mt-[60px]">
          <p>Estamos também nas redes sociais:</p>
          <div className="flex gap-5 items-center">
          <a href='https://www.facebook.com/sulpolPU' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/5be8266e693cf909992d9cde0f11b06d/raw/6a016070454c1d652b4cb39a55c96ff46c1cd481/facebook.svg' alt=''/></a>
          <a href='https://www.instagram.com/sulpol/' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/28bb34d8905e99973840a2ebbd24f12a/raw/50c7228d16e4298c58e1008457b98fff308b3886/instagram.svg' alt='' /></a>
          <a href='https://www.youtube.com/c/SulpolBr' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ebb7e6f227cbd4d620365d4ed7d4196e/raw/77473b997dca43063f1170cea9342871d00a01f0/youtube.svg' alt='' /></a>
          <a href='https://www.linkedin.com/company/36020533' rel='noreferrer'><img src='https://gistcdn.githack.com/wesleyeagles/ed4051d92685166151dce48986cfac8f/raw/74716949b1018eab8cbf35c3a66d2c2b8168ef20/linkedin.svg' alt='' /></a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="py-36">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[45%]">
            <img className="w-full h-full max-h-700 flex-none" src='https://uploaddeimagens.com.br/images/003/911/936/full/Grupo_887.png?1655917516' alt='' />
          </div>

          <div className="lg:w-[50%] mt-10 lg:mt-0">
            <FAQ text="Você ficou com alguma dúvida? consulte o nosso FAQ" fontSize="text-3xl"/>
          </div>
        </div>
      </div>
      </div>

      <div className="py-20 bg-[#81D742]">
        <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <div className="flex items-center gap-3"><img src='https://gistcdn.githack.com/wesleyeagles/cbe8b84af3cb7766175fb4a4074a7870/raw/8e774b82c8ceeacde137697a8b8b6a46d85bc56a/mailx.svg' alt='' /> <span className="text-white text-base">Assine nossa newsletter</span></div>
            <h2 className="text-white text-3xl font-medium">Deixe seu e-mail para receber novidades</h2>
          </div>

          <div className="lg:w-[40%] 2xl:w-[50%] mt-10 lg:mt-0">
            <form className="flex gap-10">
            <input className="block w-[80%] text-white bg-transparent border-b border-white placeholder:text-white" placeholder="email@exemplo.com.br" type="email" name="" id="" />
            <button className="py-4 px-6 rounded-lg bg-white text-[#81D742] font-semibold text-base" type="submit">CADASTRAR</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
    </motion.div>

  );
};

export default Contato;
