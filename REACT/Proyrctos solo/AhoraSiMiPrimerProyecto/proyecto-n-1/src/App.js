import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Recarga from './componentes/Recarga';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path = '/recarga' element= {<Recarga />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
