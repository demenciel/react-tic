import React, { useContext } from 'react';
import { TurnContext } from './Board';
import './board.css';

export const Win = (props) => {
    const { setGameOver, gameOver, newGame } = useContext(TurnContext);

  function newGameClick() {
    newGame();
    setGameOver(false);
  }

  return (
    <div className={`
        ${gameOver ? 'flex' : 'hidden'}
        absolute z-10 inset-0 items-center justify-center z-10`}
    >
        <div className='flex flex-col justify-evenly items-center w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] winMessage'>
            <h1 className='font-bold text-3xl sm:text-6xl text-sky-500'>Game's over !</h1>
            <button 
              onClick={newGameClick} 
              className='rounded border border-pink px-8 py-3 bg-sky-500 text-white font-medium'
            >
              New Game
            </button>
        </div>
    </div>
  )
}