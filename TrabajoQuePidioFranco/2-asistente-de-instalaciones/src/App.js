import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Verde from './Componentes/Pagina/Verde';
import Rojo from './Componentes/Pagina/Rojo';
import Amarillo from './Componentes/Pagina/Amarillo';
import Turquesa from './Componentes/Pagina/Turquesa';
import Naranjado from './Componentes/Pagina/Naranjado';
import Gris from './Componentes/Pagina/Gris';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rojo />} />
        <Route path="/color-verde" element={<Verde />} />
        <Route path="/color-Amarillo" element={<Amarillo />} />
        <Route path="/color-Turquesa" element={<Turquesa />} />
        <Route path="/color-Negro" element={<Naranjado />} />
        <Route path="*" element={<Gris />} /> 
      </Routes>
    </div >
  );
}

export default App;