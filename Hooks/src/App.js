import logo from './logo.svg';
import './App.css';
import ComponenteFunc from './container/componente-func';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ComponenteFunc></ComponenteFunc>
        
      </header>
    </div>
  );
}

export default App;
