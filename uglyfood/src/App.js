import logo from './logo.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        우리가 버려졌다고? 그럴리가.
어느 바쁜 레스토랑의 구석, 어느 한 요리사는 멋진 요리를 만듭니다. 최고의 요리를 만들기 위해 신선하고 이쁜 식재료들만 골라서 조리하고, 나머지 못생기고 상처난 식재료들은 쓰레기통으로 버렸습니다.

요리사는 버렸다고 생각했지만, 못생기고 상처난 식재료들은 버려졌다고 생각하지 않았습니다. 오히려 자유를 누릴 수 있다고 생각했습니다. 못생기고 상처난 식재료들이 모여 요리사만 만들수 있다고 생각했던 요리를 그보다 더 멋지게 탄생시킵니다. 그리고 그들은 이렇게 말했습니다.

왜 나를 쓸모없다고 얘기해? 나의 가치는 내가 생각하는대로 내가 정하는거야.

선택은 내가해!
        </p>
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
