import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from "../Comonentes/Inicio";
import { Portafolio } from "../Comonentes/Portafolio";
import { Servicios } from "../Comonentes/Servicios";
import { Curriculum } from "../Comonentes/Curriculum";
import { Contacto } from "../Comonentes/Contacto";
import { HeaderNav } from '../Comonentes/Layout/HeaderNav';
import { Footer } from '../Comonentes/Layout/Footer';
import { Proyecto } from '../Comonentes/Proyecto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      {/* Contenido central */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/proyecto/:id' element={<Proyecto />} />
          <Route path='/*' element={
            <div className='page'>
              <h1 className='heading'>Error 404</h1>
            </div>
          } />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  )
}
