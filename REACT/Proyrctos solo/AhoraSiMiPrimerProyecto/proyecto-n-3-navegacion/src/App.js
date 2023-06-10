import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Botones from './Componentes/Botones';
import ColorAzul from './Componentes/ColorAzul';
import ColorVerde from './Componentes/ColorVerde';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Navegacion de colores</h1>
        <Routes>
          <Route exact path="/" element={<Botones />} />
          <Route path="/color-azul" element={<ColorAzul />} />
          <Route path="/color-verde" element={<ColorVerde />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
