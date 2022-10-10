import React, {useContext} from 'react'
import ContextProdutos from '../../contexts/ContextProdutos'
import '../FormularioMaquinas/FormularioMaquinas.css'

function FormularioMaquinas() {


  const { forms } = useContext(ContextProdutos)


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

              <label className="flex gap-2 mb-50" htmlFor="privacity">
                <input className="block" type="checkbox" name="privacity" id="privacity" />
                <span>Estou de acordo com a Política de Privacidade</span>
              </label>

              <button className="w-full bg-[#81D742] text-white py-4 rounded-lg font-semibold text-base" type="submit">ENVIAR</button>

            </form>
          </div>
  )
}

export default FormularioMaquinas