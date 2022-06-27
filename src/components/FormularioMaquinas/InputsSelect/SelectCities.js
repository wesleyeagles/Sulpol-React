import {React, useEffect, useState} from 'react'
import { fetchCitiesForState } from '../../../helpers/Ibge'

const SelectCities = ({states}) => {

  const [cities, setCities] = useState([])

  useEffect(() => {
      fetchCitiesForState({states}).then((cities) => {
          setCities(cities);
      })
  }, [states]);


  return (
    <select id='city' className='border border-[#AAAAAA] p-4 rounded-md w-[370px] h-[55px] bg-transparent'>
        <option value=""> Selecione uma cidade...</option>
        {cities.map((city) => {
        const {id, nome} = city;
        return (<option key={id} value={id}>{nome}</option>)
        })  
            
        }
    </select>
  )
}

export default SelectCities