import logo from './logo.svg';
import './App.css';
import Greeting from './Componentes/Pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente */}
        <Greeting />
      </header>
    </div>
  );
}

export default App;
