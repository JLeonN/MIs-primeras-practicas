import './App.css';
import freeCodeCampLogo from './Imagenes/FreeCodeCamp-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de Freecodecamp' />
      </div>
    </div>
  );
}

export default App;
