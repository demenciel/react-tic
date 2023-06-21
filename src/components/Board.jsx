import React, { useState, useContext, useEffect } from 'react';
import { Win } from './Win';
import { Row } from './Row';

import { bestMoveAi, checkForWin } from '../aiLogic.js'
import './board.css';
export const TurnContext = React.createContext();

export const Board = () => {

  const [playerTurn, setPlayerTurn] = useState(0);
  const [win, setWin] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [game, setGame] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function incrementTurn() {
    setPlayerTurn(playerTurn + 1);
  }

  function updateGame(player, x, y) {
    let newGame = [...game];
    newGame[x][y] = player;
    setGame(newGame);
    incrementTurn();
  }

  function aiTurn() {
    let bestMove;
  
    setTimeout(() => {
      bestMove = bestMoveAi(game);
      if (playerTurn % 2 !== 0 && checkForWin(game) !== 0)
        updateGame('o', bestMove.i, bestMove.j);
    }, 1000);
  }

  function newGame() {
    setGame([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setPlayerTurn(0);
  }

  useEffect(()=> {
    if (checkForWin(game) !== null)
      setGameOver(true);
    aiTurn();
  }, [game]);
  
  return (
    <TurnContext.Provider value={{incrementTurn, playerTurn, game, updateGame, setGameOver, gameOver, newGame}}>
      <Win />
      <div className='board w-[300px] h-[300px] xsm:w-[550px] xsm:h-[550px] sm:w-[750px] sm:h-[750px] flex flex-col justify-evenly border border-black rounded'>
        <div className='w-full h-1/3 border-b border-black'>
          <Row 
            className='row'
            row={0}
            />
        </div>
        <div className='w-full h-1/3 border-b border-black'>
          <Row 
            className=' row'
            row={1}
            />
        </div>
        <div className='w-full h-1/3'>
          <Row 
            className=' row'
            row={2}
            />
        </div>
      </div>
    </TurnContext.Provider>
  )
}
