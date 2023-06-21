import './App.css';
import { Board } from "../src/components/Board";
import { Win } from "../src/components/Win";

function App() {
  return (
    <div className="box !w-full h-[100vh] ">
      <div className='board-container'>
        <Board />
      </div>
    </div>
  );
}

export default App;
