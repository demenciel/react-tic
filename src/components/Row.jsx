import React from 'react';
import { Cell } from './Cell';

export const Row = (props) => {
  return (
    <div className='w-full h-full flex justify-evenly'>
      <div className='w-1/3 flex items-center justify-center border-r-2 border-black'>
        <Cell
          row={props.row}
          cell={0}
          />
      </div>
      <div className='w-1/3 flex items-center justify-center border-r-2 border-black'>
        <Cell 
          row={props.row}
          cell={1}
        />
      </div>
      <div className='w-1/3 flex items-center justify-center'>
        <Cell 
          row={props.row}
          cell={2}
        />
      </div>
    </div>
  )
}