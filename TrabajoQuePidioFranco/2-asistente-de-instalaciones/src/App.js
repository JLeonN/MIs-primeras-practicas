import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Estructura from './Componentes/Estructura';

function App() {
  return (
    <div className="App">
        <Router>
      <Estructura 
      backgroundColor="red"
      titleColor="Rojo"
      title="Asistente de instalaciones"
      description="Un texto de ejemplo rápido para construir sobre el título de la tarjeta y componer la mayor parte del contenido de la tarjeta."
      link="/ruta-del-enlace"
      boton="Iniciar"
      />
        </Router>
    </div>
  );
}

export default App;
