import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Navbar from "./components/Navbar/Navbar";
import ASulpol from "./pages/ASulpol";
import Footer from "./components/Footer/Footer";
import LPRefrigeracao from "./pages/LPRefrigeracao";
import  ContextProdutos from "./contexts/ContextProdutos";

import Star300S from "./maquinasPages/Star300S";
import Star300SMRP from "./maquinasPages/Star300SMRP";
import Star300SPV from "./maquinasPages/Star300SPV";
import Star300SR2436 from "./maquinasPages/Star300SR2436";
import Star300STG from "./maquinasPages/Star300STG";
import DosadoraElastomero from "./maquinasPages/DosadoraElastomero";
import DosadoraPortatil from "./maquinasPages/DosadoraPortatil";
import DosadoraAltapressao from "./maquinasPages/DosadoraAltapressao";
import DosadoraBaixapressao from "./maquinasPages/DosadoraBaixapressao";
import LPCalcado from "./pages/LPCalcado";

function RoutesDOM() {
    const [menuMobile, setMenuMobile] = useState(0);
    const [menuProdutos, setProdutos] = useState(0);

    const [ptLang, setPtLang] = useState(true)
    const [enLang, setEnLang] = useState(false)
    const [esLang, setESLang] = useState(false)

    const handlePtLangChange = () => {
        setPtLang(!ptLang)

        if (enLang == true) {
            setPtLang(!ptLang)
            setEnLang(!enLang)
        } else if (esLang == true) {
            setPtLang(!ptLang)
            setESLang(!esLang)
        }
    }

    const handleEnLangChange = () => {
        setEnLang(!enLang)

        if (ptLang == true) {
            setPtLang(!ptLang)
            setEnLang(!enLang)

        } else if (esLang == true) {
            setEnLang(!enLang)
            setESLang(!esLang)
        }
    }

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);

    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);

    const handleOpen6 = () => setOpen6(true);
    const handleClose6= () => setOpen6(false);

    

   return(
       <BrowserRouter>
       <ContextProdutos.Provider value={{menuMobile, setMenuMobile, menuProdutos, setProdutos, open, open2, open3, open4, open5, open6, setOpen, setOpen2, setOpen3, setOpen4, setOpen5, setOpen6, handleClose, handleClose2, handleClose3, handleClose4, handleClose5, handleClose6, handleOpen, handleOpen2, handleOpen3, handleOpen4, handleOpen5, handleOpen6, ptLang, enLang, esLang, handlePtLangChange, handleEnLangChange }}>
           <TopNavBar />
           <Navbar />
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Contato' element={<Contato/>} />
           <Route path='/A-Sulpol' element={<ASulpol/>} />

           <Route path='/Refrigeracao' element={<LPRefrigeracao/>} />

           <Route path='/Star300S' element={<Star300S/>} />
           <Route path='/Star300SMRP' element={<Star300SMRP/>} />
           <Route path='/Star300SPV' element={<Star300SPV/>} />
           <Route path='/Star300SR2436' element={<Star300SR2436/>} />
           <Route path='/Star300STG' element={<Star300STG/>} />
           <Route path='/DosadoraElastomero' element={<DosadoraElastomero/>} />
           <Route path='/DosadoraPortatil' element={<DosadoraPortatil/>} />
           <Route path='/DosadoraAltapressao' element={<DosadoraAltapressao/>} />
           <Route path='/DosadoraBaixapressao' element={<DosadoraBaixapressao/>} />





           <Route path='/LPRefrigeracao' element={<LPRefrigeracao/>} />
           <Route path='/LPCalcado' element={<LPCalcado/>} />
          </Routes>
          <Footer />
          
      </ContextProdutos.Provider>

       </BrowserRouter>
   )
}

export default RoutesDOM;