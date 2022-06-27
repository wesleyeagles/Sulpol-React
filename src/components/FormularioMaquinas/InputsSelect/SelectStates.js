import { useEffect, useState, React } from 'react'

import { fetchStates } from '../../../helpers/Ibge'

const SelectStates = ({onChange = () => {}}) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
      fetchStates().then((states)=> {
          setStates(states);
      }) 

  }, []);

  return (
    <select onChange={onChange} name="states" id='states' className='border border-[#AAAAAA] p-4 rounded-md w-[370px] h-[55px] bg-transparent'>
        <option value=""> Selecione um estado...</option>
        {states.map((states) => {
            const {sigla, nome} = states;
            return (<option key={sigla} value={sigla}> {nome} </option>)
        })}
    </select>
  )
}

export default SelectStates