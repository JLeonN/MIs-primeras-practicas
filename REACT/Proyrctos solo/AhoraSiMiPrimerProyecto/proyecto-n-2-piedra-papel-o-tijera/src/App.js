import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';

function App() {
  return (
    <div className='vh-100'>
      <h1 className='col-12 text-center'>
        Piedra, papel o tijera
      </h1>
      <div className='row d-flex'>
        <h2 className='dorsocss text-center display-1'>{Dorso[0].title}</h2>
        <img src={Dorso[0].cartaEnDorso}
          className='img-fluid dorso' alt='Dorso de carta'/>
      </div>
      <div className='d-flex'>
        <h2 className='dorsocss text-center display-1'>{Manos[0].title}</h2>
        <img src={Manos[0].piedra}
          className='img-fluid dorso' alt='Piedra'/>

          
        <h2 className='dorsocss text-center display-1'>{Manos[1].title}</h2>
        <img src={Manos[1].papel}
          className='img-fluid dorso' alt='Papel'/>

          
        <h2 className='dorsocss text-center display-1'>{Manos[2].title}</h2>
        <img src={Manos[1].tijera}
          className='img-fluid dorso' alt='Tijera'/>
      </div>
    </div>
  );
}

export default App;
