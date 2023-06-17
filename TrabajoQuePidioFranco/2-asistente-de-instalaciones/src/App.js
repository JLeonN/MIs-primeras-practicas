import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Verde from './Componentes/Verde';
import Rojo from './Componentes/Rojo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Rojo />} />
        <Route path="/color-verde" element={<Verde />} />
      </Routes>
    </div >
  );
}

export default App;