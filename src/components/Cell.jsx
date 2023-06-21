import React, { useState, useContext, useEffect } from 'react';
import { TurnContext } from './Board';

import './board.css';


export const Cell = (props) => {
  const { playerTurn, updateGame, game } = useContext(TurnContext);

  const [cross, setCross] = useState(false);
  const [circle, setCircle] = useState(false);

  useEffect(() => {
      if (game[props.row][props.cell] === 'x') {
        setCross(true);
        setCircle(false);
      } else if (game[props.row][props.cell] === 'o') {
        setCircle(true);
        setCross(false);
      } else {
        setCircle(false);
        setCross(false);
      }
  }, [game]);
  

  function handleClick() {
    if (playerTurn % 2 === 0 && game[props.row][props.cell] === null) {
      updateGame("x", props.row, props.cell);
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center' onClick={handleClick}>
      <div>
        <div className={`${circle ? 'circle' : cross ? 'cross' : ''}`}></div>
      </div>
    </div>
  )
};
