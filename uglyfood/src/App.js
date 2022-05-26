import logo from './logo.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Topic from './components/Topic';
import Navibar from './components/Navibar';
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import mint from './components/Mintbutton';

function App() {
  return (
    <div className="App">
        <Navibar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="topic">
          <Topic />
        </div>
        <div className="intro">
          <Intro />
        </div>

        <div>
          <div className="mb-2">
            <Button
              variant="warning" 
              size="lg"
              onClick={mint}>
              MINT NFT
            </Button>{' '}
          </div>
        </div>

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
