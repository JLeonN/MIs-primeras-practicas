import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola, soy Leonardo Núñez. Soy desarrollador web en Montevideo, Uruguay, y ofrezco mis servicios de programación y desarrollo en todo tipo de proyectos web.
      </h1>
      <h2>
        Estoy aquí para ayudarte a mejorar la visibilidad y relevancia de tu sitio web o aplicación en Internet. <Link to="/contacto">Contacta con migo.</Link>
      </h2>

      <section className='lasts-works'>
        <h2>A continuación, te presento algunos de mis proyectos.</h2>
        <p>A continuación, te presento algunos de mis proyectos de desarrollo web.</p>

        <div className='works'></div>
      </section>
    </div>
  )
}
