import { Buscador } from "./Componentes/Buscador";
import { Crear } from "./Componentes/Crear";
import { Listado } from "./Componentes/Listado";

function App() {
  return (
    <div className="layout">

      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play">
          </div>
        </div>
        <h1>Mis Peliculas</h1>
      </header>

      {/* Barra de navegacion */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Aca van las peliculas */}
        <Listado />
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador />

        <Crear />
      </aside>

      {/* Pie de pagin */}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript - <a href="/#"></a>
      </footer>
    </div>
  );
}

export default App;
