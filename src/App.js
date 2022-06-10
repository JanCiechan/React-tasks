import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Game from './components/tictactoe';
import Todos from './components/todosapp';
function App() {
  return (
    <div className="App">
      <Todos/>
      <Game />
      <Counter/>
    </div>
  );
}

export default App;
