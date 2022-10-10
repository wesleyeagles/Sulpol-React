import React, { useRef, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import ASulpol from "../pages/ASulpol";
import LPRefrigeracao from "../pages/LPRefrigeracao";
import  ContextProdutos from "../contexts/ContextProdutos";
import Star300S from "../maquinasPages/Star300S";
import DosadoraElastomero from "../maquinasPages/DosadoraElastomero";
import DosadoraPortatil from "../maquinasPages/DosadoraPortatil";
import DosadoraAltapressao from "../maquinasPages/DosadoraAltapressao";
import DosadoraBaixapressao from "../maquinasPages/DosadoraBaixapressao";
import DCPD from "../maquinasPages/DCPD";
import CABECOTE from "../maquinasPages/CABECOTE";
import LPCalcado from "../pages/LPCalcado";
import Bombas from "../maquinasPages/Bombas";
import PortaMoldes from "../maquinasPages/PortaMoldes";
import PaineiseTelhas from "../maquinasPages/PaineiseTelhas";
import ProjetosEspeciais from "../maquinasPages/ProjetosEspeciais";
import LPFiltros from "../pages/LPFiltros";

function RoutesDOM() {
    const [menuMobile, setMenuMobile] = useState(0);
    const [menuProdutos, setProdutos] = useState(0);
    const forms = useRef(null)

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
       <ContextProdutos.Provider value={{menuMobile, setMenuMobile, menuProdutos, setProdutos, forms, open, open2, open3, open4, open5, open6, setOpen, setOpen2, setOpen3, setOpen4, setOpen5, setOpen6, handleClose, handleClose2, handleClose3, handleClose4, handleClose5, handleClose6, handleOpen, handleOpen2, handleOpen3, handleOpen4, handleOpen5, handleOpen6, }}>
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Contato' element={<Contato/>} />
           <Route path='/A-Sulpol' element={<ASulpol/>} />
           <Route path='/Refrigeracao' element={<LPRefrigeracao/>} />
           <Route path='/Star300S' element={<Star300S/>} />
           <Route path='/DosadoraElastomero' element={<DosadoraElastomero/>} />
           <Route path='/DosadoraPortatil' element={<DosadoraPortatil/>} />
           <Route path='/DosadoraAltapressao' element={<DosadoraAltapressao/>} />
           <Route path='/DosadoraBaixapressao' element={<DosadoraBaixapressao/>} />,
           <Route path='/DCPD' element={<DCPD/>} />
           <Route path='/Cabecote' element={<CABECOTE/>} />
           <Route path='/Bombas' element={<Bombas/>} />
           <Route path='/Porta-Moldes' element={<PortaMoldes/>} />
           <Route path='/Paineis-e-Telhas' element={<PaineiseTelhas/>} />
           <Route path='/Projetos-Especiais' element={<ProjetosEspeciais/>} />
           <Route path='/refrigera%C3%A7%C3%A3o' element={<LPRefrigeracao/>} />
           <Route path='/cal%C3%A7ado' element={<LPCalcado/>} />
           <Route path='/Filtros' element={<LPFiltros/>} />
          </Routes> 
       </ContextProdutos.Provider>
       </BrowserRouter>
   )
}

export default RoutesDOM;