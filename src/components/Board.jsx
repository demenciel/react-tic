import React, { useState, useContext, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

import { Win } from './Win';
import { Row } from './Row';

import { bestMoveAi, checkForWin } from '../aiLogic.js'
import { userChoiceContext } from '../App';

import './board.css';

export const TurnContext = React.createContext();

export const Board = () => {
  const { userChoice } = useContext(userChoiceContext);

  const [playerTurn, setPlayerTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [game, setGame] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const incrementTurn = () => setPlayerTurn(prevPlayerTurn => prevPlayerTurn + 1);

  function updateGame(player, x, y) {
    let newGame = [...game];
    newGame[x][y] = player;
    setGame(newGame);
    incrementTurn();
  }

  function aiTurn() {
    let bestMove;
  
    if (userChoice) {
      setTimeout(() => {
        bestMove = bestMoveAi(game);
        if (playerTurn % 2 !== 0 && checkForWin(game) !== 0)
          updateGame('o', bestMove.i, bestMove.j);
      }, 1000);
    }
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
    <TurnContext.Provider value={{incrementTurn, playerTurn, game, updateGame, setGameOver, gameOver, newGame, userChoice}}>
      <Win />
      <div>
        <Link to="/react-tic">
          <div className='absolute left-[50px] top-[75px] sm:top-[150px] sm:left-[100px]'>
            <button>
              <FaArrowLeft className='text-[48px] text-white'/>
            </button>
          </div>
        </Link>
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
      </div>
    </TurnContext.Provider>
  )
}
