import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';

function App() {
  return (
    <div>
      <h1 className='col-12 text-center'>
        Juego de piedra, papel o tijera
      </h1>
      <div className='row d-flex'>
        <h2 className='dorsocss text-center display-1'>{Dorso[0].title}</h2>
        <img src={Dorso[0].cartaEnDorso}
          className='img-fluid dorso' alt='Dorso de carta'/>
      </div>
    </div>
  );
}

export default App;
