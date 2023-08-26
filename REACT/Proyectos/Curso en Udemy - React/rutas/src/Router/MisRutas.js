import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from "../Comonentes/Inicio";
import { Portafolio } from "../Comonentes/Portafolio";
import { Servicios } from "../Comonentes/Servicios";
import { Curriculum } from "../Comonentes/Curriculum";
import { Contacto } from "../Comonentes/Contacto";
import { HeaderNav } from '../Comonentes/Layout/HeaderNav';
import { Footer } from '../Comonentes/Layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      {/* Contenido central */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}
