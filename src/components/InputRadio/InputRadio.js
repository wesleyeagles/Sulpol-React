import React from 'react'
import '../InputRadio/InputRadio.css'

const InputRadio = ({inputID, labelFor, labelText}) => {
  return (
    <div className='p-5 bg-white h-3 items-center flex rounded-md'>
        <label className='chk' htmlFor={labelFor}>
        <input name='filtro' type="radio" checked id={inputID} />
        
        <div className='flex items-center gap-3'>
        <span className='squareBox'></span>
        <span className='bg-white'>{labelText}</span>
        </div>
        </label>
    </div>
  )
}

export default InputRadio