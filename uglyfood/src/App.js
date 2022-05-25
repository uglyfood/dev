import logo from './logo.gif';
import './App.css';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Intro />
        <a
          className="App-link"
          href="https://uglyfood.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
