import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Leonardo Núñez.</strong> Soy desarrollador web en Montevideo, Uruguay, y ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
      </h1>
      <h2>
        Estoy aquí para ayudarte a mejorar la visibilidad y relevancia de tu sitio web o aplicación en Internet. <Link to="/contacto">Contacta con migo.</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>A continuación, te presento algunos de mis proyectos.</h2>
        <p>A continuación, te presento algunos de mis proyectos de desarrollo web.</p>

        <div className='works'></div>
      </section>
    </div>
  )
}
