import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

export const RoutesDOM = () => {
    const [menuMobile, setMenuMobile] = useState(0);
    const forms = useRef(null)

   return(
       
       <ContextProdutos.Provider value={{menuMobile, setMenuMobile, forms }}>
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
   )
}