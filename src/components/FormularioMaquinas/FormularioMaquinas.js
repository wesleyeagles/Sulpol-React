import React, {useContext} from 'react'
import ContextProdutos from '../../contexts/ContextProdutos'
import Context from '../../contexts/MainContext'
import '../FormularioMaquinas/FormularioMaquinas.css'

function FormularioMaquinas() {


  const { forms } = useContext(ContextProdutos)

  const { isPortuguese, isEnglish, isSpanish } = useContext(Context)

  if (isPortuguese) {
    return (
      <div className="lg:w-[55%]" id='forms'>
              <h2 className="text-3xl text-[#202124] font-medium mb-10">Vamos conversar?</h2>
              <p className="text-base text-[#202124] font-light lg:w-[75%] 2xl:w-[65%] mb-12">Complete o formulário abaixo para saber como a Sulpol contribuir para o desenvolvimento da sua empresa </p>
              <form action="">
                <div className="flex justify-between">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Nome" name="name" id="name" ref={forms}/>
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
  
                <button className="w-full bg-[#81D742] text-white py-4 rounded-lg font-semibold text-base" type="submit">ENVIAR</button>
  
              </form>
            </div>
    )
  } else if (isEnglish) {
    return (
      <div className="lg:w-[55%]" id='forms'>
              <h2 className="text-3xl text-[#202124] font-medium mb-10">Let's talk?</h2>
              <p className="text-base text-[#202124] font-light lg:w-[75%] 2xl:w-[65%] mb-12">Complete the form below to find out how Sulpol contributes to the development of your company </p>
              <form action="">
                <div className="flex justify-between">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Name" name="name" id="name" ref={forms}/>
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Last Name" name="sobname" id="sobname" />
                </div>
  
                <div className="flex justify-between mt-5 mb-12">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="email" placeholder="Mail" name="mail" id="mail" />
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="tel" placeholder="Phone" name="phone" id="phone" />
                </div>
  
                <h3 className="text-xl text-[#202124] font-normal">Where you are from?</h3>
  
                <div className="flex justify-between mt-5 mb-12">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="State" name="state" id="state" />
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="City" name="city" id="city" />
                </div>
  
                <button className="w-full bg-[#81D742] text-white py-4 rounded-lg font-semibold text-base" type="submit">SEND</button>
  
              </form>
            </div>
    )
  } else if (isSpanish) {
    return (
      <div className="lg:w-[55%]" id='forms'>
              
              <h2 className="text-3xl text-[#202124] font-medium mb-10">Hablamos?</h2>
              <p className="text-base text-[#202124] font-light lg:w-[75%] 2xl:w-[65%] mb-12">Complete el siguiente formulario para saber cómo Sulpol contribuye a la desarrollo de su empresa </p>
              <form action="">
                <div className="flex justify-between">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Nombre" name="name" id="name" ref={forms}/>
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Apellido" name="sobname" id="sobname" />
                </div>
  
                <div className="flex justify-between mt-5 mb-12">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="email" placeholder="E-mail" name="mail" id="mail" />
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="tel" placeholder="Teléfono" name="phone" id="phone" />
                </div>
  
                <h3 className="text-xl text-[#202124] font-normal">De dónde eres?</h3>
  
                <div className="flex justify-between mt-5 mb-12">
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Expresar" name="state" id="state" />
                  <input className="block border border-[#AAAAAA] rounded-lg p-4 w-[48%]" type="text" placeholder="Ciudad" name="city" id="city" />
                </div>
  
                <button className="w-full bg-[#81D742] text-white py-4 rounded-lg font-semibold text-base" type="submit">ENVIAR</button>
  
              </form>
            </div>
    )
  }

}

export default FormularioMaquinas