import './App.css';
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';

function App() {
  return (
    <section className='contenedorPrincipal'>
      <h1 className='titulo'>Juego de Piedra, Papel o Tijera</h1>
        <div className='juego'>
          <div className='cartasReveladas'>
            <Manos type="piedra" />
          </div>
          <div className='cartasReveladas'>
            <Manos type="papel" />
          </div>
          <div className='cartasReveladas'>
            <Manos type="tijera" />
          </div>
        </div>
    </section>
  );
}

export default App;
