import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import { RoutesDOM } from '../src/components/RoutesDOM'
import Context from './contexts/MainContext';
import { useEffect } from 'react';

function App() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isPortuguese, setIsPortuguese] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)
  const [isSpanish, setIsSpanish] = useState(false)

    const langToPortuguese = () => {
      setIsEnglish(false)
      setIsPortuguese(true)
      setIsSpanish(false)

      console.log("Português")
    }

    const langToEnglish = () => {
      setIsPortuguese(false)
      setIsEnglish(true)
      setIsSpanish(false)

      console.log("Inglês")
    }

    const langToSpanish = () => {
      if (isPortuguese) {
        setIsPortuguese(false)
      } else if (isEnglish) {
        setIsEnglish(false)
      }
      setIsSpanish(true)
    }

    useEffect(() => {
      console.log(isPortuguese)
      console.log(isEnglish)
      console.log(isSpanish)
    }, [isPortuguese, isEnglish, isSpanish])


  return (
    <BrowserRouter>
    <Context.Provider value={{isPortuguese, isEnglish, isSpanish, langToPortuguese, langToSpanish, langToEnglish, open, handleOpen, handleClose}}>
    <RoutesDOM />
    </Context.Provider>
    </BrowserRouter>

  )
}

export default App;
