import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Estructura from './Componentes/Estructura';
import Verde from './Componentes/Verde';

function App() {
  return (
    <div className="App">
      <Estructura
        backgroundColor="red"
        titleColor="Rojo"
        title="Asistente de instalaciones"
        description="Un texto de ejemplo rápido para construir sobre el título de la tarjeta y componer la mayor parte del contenido de la tarjeta."
        ruta={<Route path="/verde" element={<Verde />} />}
        boton="Iniciar"
      />
    </div >
  );
}

export default App;