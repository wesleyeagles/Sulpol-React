import React from 'react'

function ButtonLP({text, onClick}) {
  return (
   <a onClick={onClick} className='lpbutton text-white py-5 px-10 font-semibold rounded-lg  lpshadow cursor-pointer'>{text}</a>
  )
}

export default ButtonLP