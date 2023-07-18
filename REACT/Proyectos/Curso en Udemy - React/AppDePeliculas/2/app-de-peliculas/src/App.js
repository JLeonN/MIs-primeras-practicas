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

    <section className="content">
      <article className="peli-item">
        <h3 className="title">Desarrollo WEB</h3>
        <p className="descripcion">Mis peliculas</p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="peli-item">
        <h3 className="title">Desarrollo WEB</h3>
        <p className="descripcion">Mis peliculas</p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="peli-item">
        <h3 className="title">Desarrollo WEB</h3>
        <p className="descripcion">Mis peliculas</p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
      <article className="peli-item">
        <h3 className="title">Desarrollo WEB</h3>
        <p className="descripcion">Mis peliculas</p>

        <button className="edit">Editar</button>
        <button className="delete">Borrar</button>
      </article>
    </section>

    {/* Barra lateral */}

    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>

      <div className="add">
        <h3 className="title">Añadir peliculs</h3>
        <form>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Descripcion"></textarea>
          <input type="submit" value="Guardar" />
        </form>
      </div>
    </aside>

    {/* Pie de pagin */}

    <footer className="footer">
      &copy; Master en JavaScript ES12 y TypeScript - <a href="#"></a>
    </footer>

  </div>
  );
}

export default App;
